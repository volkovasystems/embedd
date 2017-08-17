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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYmVkZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVxZSIsInJlcXVpcmUiLCJmYWx6eSIsImlkbnR0eSIsInN0cmluZ2UiLCJTWU1CT0xfUEFUVEVSTiIsImVtYmVkZCIsImVudGl0eSIsInZhbHVlIiwiUmVnRXhwIiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksaUJBQWlCLGlCQUF2Qjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxLQUF6QixFQUFnQztBQUM5Qzs7Ozs7Ozs7O0FBU0EsS0FBSU4sTUFBT0ssTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUlMLE1BQU9NLEtBQVAsQ0FBSixFQUFvQjtBQUNuQixTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFTLElBQUlDLE1BQUosQ0FBWU4sT0FBUUksTUFBUixFQUFpQkcsUUFBakIsR0FBNkJDLE9BQTdCLENBQXNDLEtBQXRDLEVBQTZDLE1BQTdDLENBQVosQ0FBRjtBQUNMQyxLQURLLENBQ0NSLFFBQVNJLEtBQVQsQ0FERCxLQUN1QixDQUFDUixJQUFLTyxNQUFMLEVBQWFDLEtBQWIsQ0FEL0I7QUFFQSxDQXBCRDs7QUFzQkFLLE9BQU9DLE9BQVAsR0FBaUJSLE1BQWpCIiwiZmlsZSI6ImVtYmVkZC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlbWJlZGRcIixcblx0XHRcdFwicGF0aFwiOiBcImVtYmVkZC9lbWJlZGQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVtYmVkZC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlbWJlZGRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2VtYmVkZC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVtYmVkZC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrIGlmIGlkZW50aXR5IGlzIGVtYmVkZGVkLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaWRudHR5ID0gcmVxdWlyZSggXCJpZG50dHlcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5cbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL1N5bWJvbFxcKCguKz8pXFwpLztcblxuY29uc3QgZW1iZWRkID0gZnVuY3Rpb24gZW1iZWRkKCBlbnRpdHksIHZhbHVlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGVudGl0eSApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYoIGZhbHp5KCB2YWx1ZSApICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICggbmV3IFJlZ0V4cCggaWRudHR5KCBlbnRpdHkgKS50b1N0cmluZyggKS5yZXBsYWNlKCAvXFxXL2csIFwiXFxcXCQmXCIgKSApIClcblx0XHQudGVzdCggc3RyaW5nZSggdmFsdWUgKSApICYmICFlcWUoIGVudGl0eSwgdmFsdWUgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1iZWRkO1xuIl19
//# sourceMappingURL=embedd.support.js.map
