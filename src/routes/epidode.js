import EpisodeControllers from '../controllers/episode';

module.exports = ({ router }) => {
  const api = 'episode';

  // GET /api/episode
  router.get(`/${api}/:id`, EpisodeControllers.findById);
  router.get(`/${api}/`, EpisodeControllers.find);
};
