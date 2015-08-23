#Semrush
[![Build Status via Travis CI](https://travis-ci.org/DigitalRockers/semrush.svg?branch=master)](https://travis-ci.org/DigitalRockers/semrush)
[![NPM version](http://img.shields.io/npm/v/semrush.svg)](https://www.npmjs.org/package/semrush)

[SEMrush](semrush.com) api module for [nodejs](nodejs.org)

SEMrush API documentation: [http://semrush.com/api-documentation](http://semrush.com/api-documentation)

This software is released under the MIT license. See `LICENSE` for more details

## Download and Installation

From the command line

	$ npm install semrush

package.json

	dependencies: {
      ...
      "semrush": "*$version*",
      ...
    }
    ...

## Example use

```javascript
var Semrush = require('semrush');

var sem = new Semrush({
	apiKey: 'YOUR_CONSUMER_KEY'
});

sem.getDomainOrganic({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);
		...
	});
```

## Documentation
Initialize SEMrush object:

```javascript
var Semrush = require('semrush');
var sem = new Ritetag({
	apiKey: 'YOUR_API_KEY' || process.env.SemrushApiKey,
	debug: false //optional
});
```

### getDomainOrganic(options, callback)
This report lists keywords that bring users to a domain via Google's top 20 organic search results.
See [Domain Organic Search Keywords documentation](http://it.semrush.com/it/api-analytics/#domain_organic) for options field specification (type and key already specified).


```javascript
sem.getDomainOrganic({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);

		...
	});
```

### getDomainAdwords(options, callback)
This report lists keywords that bring users to a domain via Google's paid search results.
See [Domain Paid Search Keywords documentation](http://it.semrush.com/it/api-analytics/#domain_adwords) for options field specification (type and key already specified).

```javascript
sem.getDomainAdwords({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);

		...
	});
```
### getAdvertiserRank(options, callback)
This report lists advertisers ranked by the total number of display ads noticed by SEMrush.
See [Advertiser Rank documentation](http://it.semrush.com/it/api-analytics/#advertiser_rank) for options field specification (type and key already specified).

 ```javascript
sem.getAdvertiserRank({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);

		...
	});
```

### getBacklinksOverview(options, callback)
This report provides a summary of backlinks, including their type, referring domains and IP addresses for a domain, root domain, or URL.
See [Advertiser Rank documentation](http://it.semrush.com/it/api-analytics/#backlinks_overview) for options field specification (type and key already specified).

```javascript
sem.getBacklinksOverview({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);

		...
	});
```





LICENSE
---
The MIT License (MIT)

Copyright (c) 2015 Digital Rockers s.r.l.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
