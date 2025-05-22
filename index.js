import express from "express";
import router from "./src/route/route";

const app = express();

app.use("/", router);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
