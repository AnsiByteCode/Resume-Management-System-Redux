let mongoose = require("mongoose");
let PermissionModule = require('./../server/Models/PermissionModule');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect();
chai.use(chaiHttp);

describe('Permission Modules', () => {
  describe('/GET PermissionModules', () => {
	  it('it should GET all the permissionmodules', (done) => {
			chai.request(server)
		    .get('/API/PermissionModuleGetAll')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
		      done();
		    });
	  });
  });
 });
