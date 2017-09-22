"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "embedd",
              			"path": "embedd/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/embedd.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"embedd": "embedd"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var embedd = require("./embedd.support.js");
//: @end-client







//: @client:

describe("embedd", function () {

	describe("`embedd with Symbol type entity and string type value`", function () {
		it("should be equal to true", function () {
			var data = {};
			var identity = idntty(data).toString();

			assert.equal(embedd(data, identity + ":test"), true);

		});
	});

	describe("`embedd with function type entity and symbol type value`", function () {
		it("should be equal to true", function () {
			var ID = (0, _symbol2.default)("id");
			var identity = (0, _symbol2.default)("sample-identity");
			var source = function Hello() {};
			source[ID] = identity;

			var result = embedd(source, identity);

			assert.equal(result, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZW1iZWRkIiwiZGVzY3JpYmUiLCJpdCIsImRhdGEiLCJpZGVudGl0eSIsImlkbnR0eSIsInRvU3RyaW5nIiwiZXF1YWwiLCJJRCIsInNvdXJjZSIsIkhlbGxvIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSx3REFBVixFQUFvRSxZQUFPO0FBQzFFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckMsT0FBSUMsT0FBTyxFQUFYO0FBQ0EsT0FBSUMsV0FBV0MsT0FBUUYsSUFBUixFQUFlRyxRQUFmLEVBQWY7O0FBRUFSLFVBQU9TLEtBQVAsQ0FBY1AsT0FBUUcsSUFBUixFQUFrQkMsUUFBbEIsV0FBZCxFQUFvRCxJQUFwRDs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7QUFVQUgsVUFBVSwwREFBVixFQUFzRSxZQUFPO0FBQzVFQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckMsT0FBTU0sS0FBSyxzQkFBUSxJQUFSLENBQVg7QUFDQSxPQUFNSixXQUFXLHNCQUFRLGlCQUFSLENBQWpCO0FBQ0EsT0FBSUssU0FBUyxTQUFTQyxLQUFULEdBQWlCLENBQUcsQ0FBakM7QUFDQUQsVUFBUUQsRUFBUixJQUFlSixRQUFmOztBQUVBLE9BQUlPLFNBQVNYLE9BQVFTLE1BQVIsRUFBZ0JMLFFBQWhCLENBQWI7O0FBRUFOLFVBQU9TLEtBQVAsQ0FBY0ksTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQVZEO0FBV0EsRUFaRDs7QUFjQSxDQTFCRDs7QUE0QkEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlbWJlZGRcIixcblx0XHRcdFwicGF0aFwiOiBcImVtYmVkZC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZW1iZWRkLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJlbWJlZGRcIjogXCJlbWJlZGRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGVtYmVkZCA9IHJlcXVpcmUoIFwiLi9lbWJlZGQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImVtYmVkZFwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBlbWJlZGQgd2l0aCBTeW1ib2wgdHlwZSBlbnRpdHkgYW5kIHN0cmluZyB0eXBlIHZhbHVlYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggZGF0YSApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVtYmVkZCggZGF0YSwgYCR7IGlkZW50aXR5IH06dGVzdGAgKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVtYmVkZCB3aXRoIGZ1bmN0aW9uIHR5cGUgZW50aXR5IGFuZCBzeW1ib2wgdHlwZSB2YWx1ZWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Y29uc3QgSUQgPSBTeW1ib2woIFwiaWRcIiApO1xuXHRcdFx0Y29uc3QgaWRlbnRpdHkgPSBTeW1ib2woIFwic2FtcGxlLWlkZW50aXR5XCIgKTtcblx0XHRcdGxldCBzb3VyY2UgPSBmdW5jdGlvbiBIZWxsbyggKXsgfTtcblx0XHRcdHNvdXJjZVsgSUQgXSA9IGlkZW50aXR5O1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gZW1iZWRkKCBzb3VyY2UsIGlkZW50aXR5ICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
