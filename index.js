"use strict";
// const { MyMath } = require("./MyMath");
const fs = require("fs").promises;
let text = "";

fs.readFile("./text.txt", "utf8")
  .then((data) => {
    fs.writeFile("newText.txt", `${data}\nNew content`);
    text = data;
    console.log(text);
  })
  .catch((e) => {
    console.log(e);
  });
