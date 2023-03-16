import { Router } from 'express';

const UserRouter = Router();

UserRouter.get('/helo', (req, res) => {
  res.send('Thsi si su user router ');
});

export default UserRouter;
