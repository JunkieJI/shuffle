import Router from 'koa-router';
import { baseApi } from '../config';
import EpisodeRouter from './epidode';
import SeriesRouter from './series';

const router = new Router();

router.prefix(`/${baseApi}`);

EpisodeRouter({ router });
SeriesRouter({ router });

export { router };
