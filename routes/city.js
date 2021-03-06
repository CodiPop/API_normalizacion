import express from "express";
import {
  CUNDINAMARCA,
  BOLIVAR,
  ATLANTICO,
  MAGDALENA,
  ERROR,
} from "../constants.js";

import checkCity from "../utils/checkCity.js";
import normalizeString from "../utils/normalizeString.js";

const router = express.Router();

router.get("/:city", (req, res) => {
  const cityParam = normalizeString(req.params.city);

  if (checkCity("bogota", cityParam)) {
    res.json(CUNDINAMARCA(req.params.city));
  } else if (checkCity("cartagena", cityParam)) {
    res.json(BOLIVAR(req.params.city));
  } else if (checkCity("barranquilla", cityParam)) {
    res.json(ATLANTICO(req.params.city));
  } else if (checkCity("santa marta", cityParam)) {
    res.json(MAGDALENA(req.params.city));
 } else {
    res.json({
      deptNormalizado: req.params.city
    });
  }
});
export default router;
