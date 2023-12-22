const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../8-api/api');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API', () => {
  describe('GET /users', () => {
    it('should return a list of users', (done) => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
