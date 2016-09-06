'use strict'; /*jslint mocha:true, expr:true */

var node = require('./../node.js');

describe('GET /loader/status/ping', function () {

	it('should be ok', function (done) {
		node.get('/loader/status/ping', function (err, res) {
			node.expect(res.body).to.have.property('success').to.be.ok;
			done();
		});
	});
});
