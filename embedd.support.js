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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYmVkZC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVxZSIsInJlcXVpcmUiLCJmYWx6eSIsImlkbnR0eSIsInN0cmluZ2UiLCJTWU1CT0xfUEFUVEVSTiIsImVtYmVkZCIsImVudGl0eSIsInZhbHVlIiwiUmVnRXhwIiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxNQUFNQyxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksaUJBQWlCLGlCQUF2Qjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxLQUF6QixFQUFnQztBQUM5Qzs7Ozs7Ozs7O0FBU0EsS0FBSU4sTUFBT0ssTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUlMLE1BQU9NLEtBQVAsQ0FBSixFQUFvQjtBQUNuQixTQUFPLEtBQVA7QUFDQTs7QUFFRCxRQUFTLElBQUlDLE1BQUosQ0FBWU4sT0FBUUksTUFBUixFQUFpQkcsUUFBakIsR0FBNkJDLE9BQTdCLENBQXNDLEtBQXRDLEVBQTZDLE1BQTdDLENBQVosQ0FBRjtBQUNMQyxLQURLLENBQ0NSLFFBQVNJLEtBQVQsQ0FERCxLQUN1QixDQUFDUixJQUFLTyxNQUFMLEVBQWFDLEtBQWIsQ0FEL0I7QUFFQSxDQXBCRDs7QUFzQkFLLE9BQU9DLE9BQVAsR0FBaUJSLE1BQWpCIiwiZmlsZSI6ImVtYmVkZC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImVtYmVkZFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJlbWJlZGQvZW1iZWRkLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImVtYmVkZC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVtYmVkZFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lbWJlZGQuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImVtYmVkZC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENoZWNrIGlmIGlkZW50aXR5IGlzIGVtYmVkZGVkLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxyXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuY29uc3QgaWRudHR5ID0gcmVxdWlyZSggXCJpZG50dHlcIiApO1xyXG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcclxuXHJcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL1N5bWJvbFxcKCguKz8pXFwpLztcclxuXHJcbmNvbnN0IGVtYmVkZCA9IGZ1bmN0aW9uIGVtYmVkZCggZW50aXR5LCB2YWx1ZSApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGVudGl0eSApICl7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIHZhbHVlICkgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoIG5ldyBSZWdFeHAoIGlkbnR0eSggZW50aXR5ICkudG9TdHJpbmcoICkucmVwbGFjZSggL1xcVy9nLCBcIlxcXFwkJlwiICkgKSApXHJcblx0XHQudGVzdCggc3RyaW5nZSggdmFsdWUgKSApICYmICFlcWUoIGVudGl0eSwgdmFsdWUgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZW1iZWRkO1xyXG4iXX0=
//# sourceMappingURL=embedd.support.js.map
