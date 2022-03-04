import { Express } from "express";

const routes = (app: Express) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
};

export default routes;
