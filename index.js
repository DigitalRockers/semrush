var util = require('util');
var eyes = require('eyes');
var request = require('request');
var _ = require('lodash');

var baseApiUrl = 'http://api.semrush.com/';
var advApiUrl = 'http://api.asns.backend.semrush.com/';
var backlinksApiUrl = 'http://api.semrush.com/analytics/v1/';


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
	domain_ranks: {
		apiUrl: baseApiUrl,
	},
	domain_rank: {
		apiUrl: baseApiUrl,
	},
	domain_rank_history: {
		apiUrl: baseApiUrl,
	} ,
	rank_difference: {
		apiUrl: baseApiUrl,
	},
	rank: {
		apiUrl: baseApiUrl,
	},

	//Domain Reports
	domain_organic: {
		apiUrl: baseApiUrl,
	},
	domain_adwords: {
		apiUrl: baseApiUrl,
	},
	domain_adwords_unique: {
		apiUrl: baseApiUrl,
	},
	domain_organic_organic: {
		apiUrl: baseApiUrl,
	},
	domain_adwords_adwords: {
		apiUrl: baseApiUrl,
	},
	domain_adwords_historical: {
		apiUrl: baseApiUrl,
	},
	domain_domains: {
		apiUrl: baseApiUrl,
	},
	domain_shopping: {
		apiUrl: baseApiUrl,
	},
	domain_shopping_unique: {
		apiUrl: baseApiUrl,
	},
	domain_shopping_shopping: {
		apiUrl: baseApiUrl,
	},

	//Keywords Reports
	phrase_all: {
		apiUrl: baseApiUrl,
	},
	phrase_this: {
		apiUrl: baseApiUrl,
	},
	phrase_organic: {
		apiUrl: baseApiUrl,
	},
	pharse_adwords: {
		apiUrl: baseApiUrl,
	},
	phrase_related: {
		apiUrl: baseApiUrl,
	},
	pharse_adwords_historical: {
		apiUrl: baseApiUrl,
	},
	phrase_fullsearch: {
		apiUrl: baseApiUrl,
	},
	phrase_kdi: {
		apiUrl: baseApiUrl,
	},

	//URL reports
	url_organic: {
		apiUrl: baseApiUrl,
	},
	url_adwords: {
		apiUrl: baseApiUrl,
	},

	//Display Advertising Reports
	publisher_text_ads: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'}
	},
	publisher_advertiser: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	publihser_publihsers: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	advertiser_publisher: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	advertiser_text_ads: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	advertiser_landings: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	advertiser_publisher_text_ads: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	advertiser_rank: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},
	publihser_rank: {
		apiUrl: advApiUrl,
		params: {action: 'report', export: 'api'},
	},

	//Backlinks
	backlinks_overview: {
		apiUrl: backlinksApiUrl,
	},
	backlinks: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_refdomains: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_refips: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_tld: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_geo: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_anchors: {
		apiUrl: backlinksApiUrl,
	},
	backlinks_pages: {
		apiUrl: backlinksApiUrl,
	}
};

var methodName = function(name){
	var newName = name.split('_');
	for(var i = 1; i < newName.length; i++)
		newName[i] = newName[i][0].toUpperCase() + newName[i].substr(1);
	return newName.join('');
};

for(var i in methods){
	(function(url, name, i, defaults) {
		Semrush.prototype[name] = function(options, callback){
			this.__baseCall(url, i, options, defaults, callback);
		};
	})(methods[i].apiUrl, methodName(i), i, methods[i].params || {});
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
