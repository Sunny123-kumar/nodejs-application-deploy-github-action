import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Node.js application is running",
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});