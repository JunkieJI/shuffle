const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../src/index');
const expect = chai.expect;

import Episode from '../src/models/episode';
import Series from '../src/models/series';

chai.use(chaiHttp);

describe('Basic models', () => {
  after(() => {
    server.close();
  });
  const testSeries = {
    _id: 2,
    title: 'series model test',
    description: 'series model description',
    thumbnail: 'series model thumbnail'
  };
  const testEpisode = {
    _id: 2,
    title: 'episode model title',
    description: 'episode model description',
    season: 1,
    episode_number: 1,
    series_id: testSeries._id,
    url: 'episode model url',
    thumbnail: 'episode model thumbnail'
  };

  describe('model tests', () => {
    it('should create a episode model with the provided schema', () => {
      const episode = new Episode(testEpisode);
      expect(episode._id).to.equal(testEpisode._id);
      expect(episode.title).to.equal(testEpisode.title);
      expect(episode.description).to.equal(testEpisode.description);
      expect(episode.season).to.equal(testEpisode.season);
      expect(episode.episode_number).to.equal(testEpisode.episode_number);
      expect(episode.series_id).to.equal(testEpisode.series_id);
      expect(episode.url).to.equal(testEpisode.url);
      expect(episode.thumbnail).to.equal(testEpisode.thumbnail);
    });
    it('should create a series model with the provided schema', () => {
      const series = new Series(testSeries);
      expect(series._id).to.equal(testSeries._id);
      expect(series.title).to.equal(testSeries.title);
      expect(series.description).to.equal(testSeries.description);
      expect(series.thumbnail).to.equal(testSeries.thumbnail);
    });
  });
});
