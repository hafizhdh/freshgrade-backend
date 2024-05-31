import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'types/jwtPayload.type';

const authVerification = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.sendStatus(401); // Unauthorized
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  const at = process.env.AT_SECRET
  if (!at) {
    return res.sendStatus(500);
  }
  jwt.verify(token, at , (err, decodedToken) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }
    
    const { id } = decodedToken as JwtPayload

    req.userId = id

    next();
  });
};

export default authVerification;
