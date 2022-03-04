import app from "./src/config/app.config";
import routes from "./src/routes";
import * as dotenv from "dotenv";
import "dotenv/config";

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log("API is running at http://localhost:" + port);
});
