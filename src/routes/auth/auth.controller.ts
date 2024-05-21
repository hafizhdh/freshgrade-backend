import { Request, Response, Router } from "express";
import * as AuthService from "./auth.service";

const router = Router();

/**
 * Register an user
 */
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const user = await AuthService.createUser({ ...req.body});
    res.json(user)
  } catch (error: any) {
    res.status(error.errorCode).json({
      code: error.errorCode,
      message: error.message
    })
  }
})

/**
 * Login
 */
router.post('/signin', async (req: Request, res: Response) => {
  try {
    const tokens = await AuthService.login({ ...req.body});
    res.json(tokens)
  } catch (error: any) {
    res.status(error.errorCode).json({
      code: error.errorCode,
      message: error.message
    })
  }
})

export default router;