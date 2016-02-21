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
