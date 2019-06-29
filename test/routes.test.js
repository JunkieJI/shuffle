const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../src/index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Basic routes', () => {
  after(() => {
    server.close();
  });

  describe('episode routes', () => {
    it('should get /api/episode', done => {
      chai
        .request(server)
        .get('/api/episode')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.empty;
          done();
        });
    });

    it('should get /api/episode/{id}', done => {
      chai
        .request(server)
        .get('/api/episode/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.empty;
          done();
        });
    });

    it('should return 404 on episode id not found', done => {
      chai
        .request(server)
        .get('/api/episode/2')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('should fail on bad episode id provided', done => {
      chai
        .request(server)
        .get('/api/episode/2')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('series routes', () => {
    it('should get /api/series', done => {
      chai
        .request(server)
        .get('/api/series')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.empty;
          done();
        });
    });

    it('should get /api/series/{id}', done => {
      chai
        .request(server)
        .get('/api/series/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.empty;
          done();
        });
    });

    it('should fail on bad series id provided', done => {
      chai
        .request(server)
        .get('/api/series/2')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
