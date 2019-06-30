import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { server } from '../../src';
import Series from '../../src/models/series';

const expect = chai.expect;
chai.use(chaiHttp);

describe('series routes', () => {
  let seriesFindSpy, seriesFindByIdSpy;
  beforeEach(() => {
    seriesFindSpy = sinon.spy(Series, 'find');
    seriesFindByIdSpy = sinon.spy(Series, 'findById');
  });

  afterEach(() => {
    seriesFindSpy.restore();
    seriesFindByIdSpy.restore();
  });

  after(() => {
    server.close();
  });

  it('should get /api/series', done => {
    chai
      .request(server)
      .get('/api/series')
      .end((err, res) => {
        expect(seriesFindSpy.callCount).to.equal(1);
        expect(seriesFindByIdSpy.callCount).to.equal(0);
        done();
      });
  });

  it('should get /api/series/{id}', done => {
    chai
      .request(server)
      .get('/api/series/1')
      .end((err, res) => {
        expect(seriesFindSpy.callCount).to.equal(0);
        expect(seriesFindByIdSpy.callCount).to.equal(1);
        done();
      });
  });
});
