import Review from "../models/review.js";

// ➕ Add Review (no login required)
export async function addReview(req, res) {
  try {
    const { productId, userName, comment, rating } = req.body;

    if (!productId || !userName || !comment || !rating) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newReview = new Review({
      productId,
      userName,
      rating,
      comment,
    });

    await newReview.save();
    res.json({ message: "Review added successfully", review: newReview });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add review" });
  }
}

// 🔍 Get Reviews by Product
export async function getReviews(req, res) {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get reviews" });
  }
}

// 🌎 Get All Reviews (optional)
export async function getAllReviews(req, res) {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get reviews" });
  }
}
