import express from "express";
import identifyRoutes from "./routes/identifyRoutes.js";

const app = express();
app.use(express.json());

app.use("/identify", identifyRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});