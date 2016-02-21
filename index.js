var util = require('util');
var eyes = require('eyes');
var request = require('request');
var _ = require('lodash');

var baseApiUrl = 'http://api.semrush.com/';


var Semrush = function(options){
	if(!options)
		options = {};

	this.apiKey = options.apiKey || process.env.SemrushApiKey;
	this.database = options.database;

	if(options.debug){
		this.debug = true;
		this.__inspect = eyes.inspector({maxLength: false, stream: null});
	}

	return this;
};


Semrush.prototype.__baseCall = function(apiUrl, type, options, defaults, callback){
	if(!callback){
		callback = defaults;
		defaults = {};
	}

	var self = this,	
		query = {
			type: type,
			key: self.apiKey,		
		};
	query = _.merge(_.merge(defaults, options), query);

	var t = Date.now();
	request({url: apiUrl, qs: query}, function(error, response, json){
			self.__debug('GET - ' + apiUrl + ' - ' + (Date.now() - t) + ' ms');

			if(error) return callback(error);	

			self.__debugInspect(json);

			callback(null, json);
	});
};



var methods = {
	//Overview Reports
	domain_ranks: null,
	domain_rank: null,
	domain_rank_history: null ,
	rank_difference: null,
	rank: null,

	//Domain Reports
	domain_organic: null,
	domain_adwords: null,
	domain_adwords_unique: null,
	domain_organic_organic: null,
	domain_adwords_adwords: null,
	domain_adwords_historical: null,
	domain_domains: null,
	domain_shopping: null,
	domain_shopping_unique: null,
	domain_shopping_shopping: null,

	//Keywords Reports
	phrase_all: null,
	phrase_this: null,
	phrase_organic: null,
	pharse_adwords: null,
	phrase_related: null,
	pharse_adwords_historical: null,
	phrase_fullsearch: null,
	phrase_kdi: null,

	//URL reports
	url_organic: null,
	url_adwords: null,

	//Display Advertising Reports
	publisher_text_ads: {action: 'report', export: 'api'},
	publisher_advertiser: {action: 'report', export: 'api'},
	publihser_publihsers: {action: 'report', export: 'api'},
	advertiser_publisher: {action: 'report', export: 'api'},
	advertiser_text_ads: {action: 'report', export: 'api'},
	advertiser_landings: {action: 'report', export: 'api'},
	advertiser_publisher_text_ads: {action: 'report', export: 'api'},
	advertiser_rank: {action: 'report', export: 'api'},
	publihser_rank: {action: 'report', export: 'api'},

	//Backlinks
	backlinks_overview: null,
	backlinks: null,
	backlinks_refdomains: null,
	backlinks_refips: null,
	backlinks_tld: null,
	backlinks_geo: null,
	backlinks_anchors: null,
	backlinks_pages: null
};

var methodName = function(name){
	var newName = name.split('_');
	for(var i = 1; i < newName.length; i++)
		newName[i] = newName[i][0].toUpperCase() + newName[i].substr(1);
	return newName.join('');
};

for(var i in methods){
	if(methods[i]){
		Semrush.prototype[methodName(i)] = function(options, callback){			
			this.__baseCall(baseApiUrl, i, options, methods[i], callback);
		};
	} else {
		Semrush.prototype[methodName(i)] = function(options, callback){			
			this.__baseCall(baseApiUrl, i, options, callback);
		};
	}
}


/**  Debug  **/
Semrush.prototype.__debug = function (str) {
	if(this.debug)
		console.log('Semrush - ' + new Date().toISOString() + ' - ' + str);
};

Semrush.prototype.__debugInspect = function (str, obj) {
	if(this.debug){
		if(obj)
			console.log('Semrush - ' + new Date().toISOString() + ' - ' + str + ' - ' + this.__inspect(obj));
		else
			console.log('Semrush - ' + new Date().toISOString() + ' - ' + this.__inspect(str));
	}
};



module.exports = Semrush;