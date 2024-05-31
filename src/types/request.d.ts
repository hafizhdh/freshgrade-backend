import { JwtPayload } from "./jwtPayload.type";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
