import dotenv from "dotenv";
import app from "./app.js";


dotenv.config();

app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});