let express = require("express");
let app = express();

app.use(logger);
app.use(checkPermission);

app.get("/books", logger, (req, res) => {
  console.log("checking books");
  return res.send({ route: "/books" });
});

app.get("/libraries", logger, checkPermission, (req, res) => {
  console.log("checking libraries");
  return res.send({ route: "/libraries", permission: true });
});

app.get("/authors", logger, checkPermission, (req, res) => {
  console.log("checking authors");
  return res.send({ route: "/authors", permission: true });
});

function logger(req, res, next) {
  console.log("running logger function");
  next();
}
function checkPermission(req, res, next) {
  console.log("running checkPerimission");
  next();
}
app.listen(5000, () => {
  console.log("listning the port on 5000");
});
