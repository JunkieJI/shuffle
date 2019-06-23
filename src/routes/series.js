import SeriesController from '../controllers/series';

module.exports = ({ router }) => {
  const api = 'series';

  // GET /api/series
  router.get(`/${api}/:id`, SeriesController.findById);
  router.get(`/${api}/`, SeriesController.find);
};
