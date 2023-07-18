import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/cate";

const routerCate = Router();

routerCate.get("/", getAll);
routerCate.get("/:id", getDetail);
routerCate.post("/", create);
routerCate.put("/:id", update);
routerCate.delete("/:id", remove);

export default routerCate;
