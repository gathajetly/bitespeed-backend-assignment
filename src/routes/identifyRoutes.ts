import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Identify API working" });
});

export default router;