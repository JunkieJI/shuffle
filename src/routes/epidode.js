import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import EpisodeControllers from '../controllers/episode';

const api = 'episode';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

// GET /api/episode
router.get('/:id', EpisodeControllers.findById);
router.get('/', EpisodeControllers.find);

export default router;