import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { server } from '../../src';
import Episode from '../../src/models/episode';

const expect = chai.expect;
chai.use(chaiHttp);

describe('episode routes', () => {
  let episodeFindSpy, episodeFindByIdSpy;
  beforeEach(() => {
    episodeFindSpy = sinon.spy(Episode, 'find');
    episodeFindByIdSpy = sinon.spy(Episode, 'findById');
  });

  afterEach(() => {
    episodeFindSpy.restore();
    episodeFindByIdSpy.restore();
  });

  after(() => {
    server.close();
  });

  it('should get /api/episode', done => {
    chai
      .request(server)
      .get('/api/episode')
      .end((err, res) => {
        expect(episodeFindSpy.callCount).to.equal(1);
        expect(episodeFindByIdSpy.callCount).to.equal(0);
        done();
      });
  });

  it('should get /api/episode/{id}', done => {
    chai
      .request(server)
      .get('/api/episode/1')
      .end((err, res) => {
        expect(episodeFindSpy.callCount).to.equal(0);
        expect(episodeFindByIdSpy.callCount).to.equal(1);
        done();
      });
  });
});
