"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "embedd",
              			"path": "embedd/embedd.js",
              			"file": "embedd.js",
              			"module": "embedd",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/embedd.git",
              			"test": "embedd-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Check if identity is embedded.
              	@end-module-documentation
              
              	@include:
              		{
              			"eqe": "eqe",
              			"falzy": "falzy",
              			"idntty": "idntty",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var eqe = require("eqe");
var falzy = require("falzy");
var idntty = require("idntty");
var stringe = require("stringe");

var SYMBOL_PATTERN = /Symbol\((.+?)\)/;

var embedd = function embedd(entity, value) {
	/*;
                                             	@meta-configuration:
                                             		{
                                             			"entity:required": "*",
                                             			"value:required": "*"
                                             		}
                                             	@end-meta-configuration
                                             */

	if (falzy(entity)) {
		return false;
	}

	if (falzy(value)) {
		return false;
	}

	return new RegExp(idntty(entity).toString().replace(/\W/g, "\\$&")).
	test(stringe(value)) && !eqe(entity, value);
};

module.exports = embedd;

//# sourceMappingURL=embedd.support.js.map