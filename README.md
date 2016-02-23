#Semrush
[![NPM version](http://img.shields.io/npm/v/semrush-api.svg)](https://www.npmjs.org/package/semrush-api)

[SEMrush](semrush.com) api module for [nodejs](nodejs.org)

This module expose every API endpoint with a method named with camel cased api `type`.

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
	apiKey: 'YOUR_API_KEY' || process.env.SemrushApiKey,
	debug: false //optional
});

sem.domainOrganic({
	domain: 'www.yahoo.com',
	database: 'us'
	}, function(error, results){
		if(error) return console.error(error);
		...
	});
```

## Available endpoints

All Semrush endpoints are exposed with camel case named methods:

Eg. `domain_organic` is `domainOrganic(params, callback)`.

The mandatory parameter like `type` are hardcoded.

#### Overview Reports
* domain_ranks
* domain_rank
* domain_rank_history
* rank_difference
* rank

#### Domain Reports
* domain_organic
* domain_adwords
* domain_adwords_unique
* domain_organic_organic
* domain_adwords_adwords
* domain_adwords_historical
* domain_domains
* domain_shopping
* domain_shopping_unique
* domain_shopping_shopping

#### Keywords Reports
* phrase_all
* phrase_this
* phrase_organic
* pharse_adwords
* phrase_related
* pharse_adwords_historical
* phrase_fullsearch
* phrase_kdi

#### URL reports
* url_organic
* url_adwords

### Display Advertising Reports
* publisher_text_ads
* publisher_advertiser
* publihser_publihsers
* advertiser_publisher
* advertiser_text_ads
* advertiser_landings
* advertiser_publisher_text_ads
* advertiser_rank
* publihser_rank

#### Backlinks
* backlinks_overview
* backlinks
* backlinks_refdomains
* backlinks_refips
* backlinks_tld
* backlinks_geo
* backlinks_anchors
* backlinks_pages



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
