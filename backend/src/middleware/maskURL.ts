import { Request, Response, NextFunction } from 'express';

const maskURL = (req: Request, res: Response, next: NextFunction) => {
  req.originalUrl = '/hidden' + req.originalUrl;
  next();
};

export default maskURL;
