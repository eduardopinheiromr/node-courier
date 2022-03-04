import hbs from "nodemailer-express-handlebars";

const handlebarOptions = {
  viewEngine: {
    extName: ".hbs",
    partialsDir: "templates",
    layoutsDir: "templates",
    defaultLayout: "",
  },
  viewPath: "templates",
  extName: ".hbs",
};

export default hbs(handlebarOptions);
