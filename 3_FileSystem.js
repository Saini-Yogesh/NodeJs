const fs = require("node:fs");

// fs.readFile("test.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("test.txt");
// console.log(a.toString());

// fs.writeFile("test.txt", "fs.write_Funcation", () => {
//   console.log("data writtend");
// });

const a2 = fs.writeFileSync("test.txt", "nothing");
console.log(a2);
console.log("finished");
