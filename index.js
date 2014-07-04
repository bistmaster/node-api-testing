var request = require('request');
var should = require('should');

var API_URL = 'http://192.168.3.109:3000/api/data';

describe('Api Testing', function () {
	/**
	 * Testing the GET methods
	 */
	describe('GET', function () {
		it('Should GET the data from the API', function (done){
			request(API_URL, function (error, response, body){
				body = JSON.parse(body);
				should.not.exist(error);
				response.statusCode.should.equal(200);
				body.should.be.instanceOf(Array);
				body.length.should.be.above(2);
				done();
			});
		});
	});

	/**
	 * Saving data to the server
	 * @return {[type]} [description]
	 */
	describe('POST', function () {
		it('Should SAVE the data to the Server', function (done){
			var data = {
				id: '11111',
				age: 20,
				price: 30,
				brandname: 'Cherry Mobile 2',
				rating: 3,
				found_id: 'cherry2',
				name: 'RioCherry2',
				category: 'Phones',
				subcategory: 'Phones, Tablet',
				imageUrl: 'NA',
				description: 'Nice Phone',
				snippet: 'sample snippet 2'
			};

			var options = {
				url: API_URL,
				method: 'POST',
				form: data
			}

			request(options, function (error, response, body){
				body = JSON.parse(body);
				should.not.exist(error);
				response.statusCode.should.equal(200);
				body.message.should.containEql('Record created');
				done();
			});
		});
	});	
});

