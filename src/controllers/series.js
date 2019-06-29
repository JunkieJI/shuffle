import Series from '../models/series';

class SeriesController {
  /**
   * Find an episode
   * @param {ctx} Koa Context
   */
  async findById(ctx) {
    try {
      const series = await Series.findById(ctx.params.id);
      if (!series) {
        ctx.throw(404);
      }
      ctx.body = series;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  async find(ctx) {
    ctx.body = await Series.find();
  }
}

export default new SeriesController();
