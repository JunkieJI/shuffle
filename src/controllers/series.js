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
        ctx.throw(409);
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

  async add(ctx) {
    try {
      const series = await new Series(ctx.request.body).save();
      ctx.body = series;
    } catch (err) {
      ctx.throw(422);
    }
  }
}

export default new SeriesController();
