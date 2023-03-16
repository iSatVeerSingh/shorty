import { Router } from 'express';
import UserRouter from './UserRouter.js';

const RootRouter = Router();

RootRouter.use(UserRouter)

export default RootRouter;
