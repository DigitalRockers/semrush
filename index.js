var util = require('util');
var eyes = require('eyes');
var request = require('request');
var _ = require('lodash');



var Semrush = function(options){
	if(!options)
		options = {};

	this.apiKey = options.apiKey || process.env.SemrushApiKey;

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

/**
 * Call Domain Organic API Action 
 *
 * @param options 	Object 			api options
 * @param callback 	function 		callback function called with two parameters err, result
 */
Semrush.prototype.getDomainOrganic = function(options, callback){
	this.__baseCall('http://api.semrush.com/', 'domain_organic', options, callback);
};


/**
 * Call Domain Adwords API Action 
 *
 * @param options 	Object 			api options
 * @param callback 	function 		callback function called with two parameters err, result
 */
Semrush.prototype.getDomainAdwords = function(options, callback){
	this.__baseCall('http://api.semrush.com/', 'domain_adwords', options, callback);
};

/**
 * Call Advertiser Rank API Action 
 *
 * @param options 	Object 			api options
 * @param callback 	function 		callback function called with two parameters err, result
 */
Semrush.prototype.getAdvertiserRank = function(options, callback){
	this.__baseCall('http://api.asns.backend.semrush.com/', 'advertiser_rank', options, {action: 'report', export: 'api'}, callback);
};

/**
 * Call Backlinks Overview API Action 
 *
 * @param options 	Object 			api options
 * @param callback 	function 		callback function called with two parameters err, result
 */
Semrush.prototype.getBacklinksOverview = function(options, callback){
	this.__baseCall('http://api.semrush.com/analytics/v1/', 'backlinks_overview', options, callback);
};



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