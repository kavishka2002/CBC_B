import express from "express";
import { addReview, getReviews, getAllReviews } from "../controllers/reviewController.js";

const router = express.Router();

// Public routes (no middleware)
router.post("/", addReview);
router.get("/all", getAllReviews);
router.get("/:productId", getReviews);

export default router;
