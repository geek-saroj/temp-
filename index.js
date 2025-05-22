import express from "express";
import router from "./src/route/route.js";

const app = express();

app.use("/", router);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
