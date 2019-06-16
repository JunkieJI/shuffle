import Episode from '../models/episode';

class EpisodeControllers {
  /**
   * Find an episode
   * @param {ctx} Koa Context
   */
  async findById(ctx) {
    try {
      const episode = await Episode.findById(ctx.params.id);
      if (!episode) {
        ctx.throw(409);
      }
      ctx.body = episode;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  async find(ctx) {
    ctx.body = await Episode.find();
  }

  async add(ctx) {
    try {
      const episode = await new Episode(ctx.request.body).save();
      ctx.body = episode;
    } catch (err) {
      ctx.throw(422);
    }
  }
}

export default new EpisodeControllers();
