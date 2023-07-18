import { Router } from "express";
import routerProducts from "./products";
import routerCates from "./cate";
import routerAuth from "./auth";

const router = Router();

router.use("/products", routerProducts);
router.use("/cate", routerCates);
router.use("/auth", routerAuth);

export default router;
