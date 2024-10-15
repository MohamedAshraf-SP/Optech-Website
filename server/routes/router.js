import express from "express";
import reviewsRoute from "./reviews.js";
import usersRoute from "./users.js";
import loginRoute from "./login.js";
// import {
//   roleMiddleware,
//   authMiddleware,
// } from "./../middlewares/Middlewares.js";

const router = express.Router();

router.use("/v1/login", loginRoute);
router.use("/v1", reviewsRoute);
router.use("/v1", usersRoute);
// /v1/Students/Count

export default router;

// module.exports=router
