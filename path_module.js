
const path = require("path")

console.log(__dirname);
console.log(__filename);

//? The path.join() method joins the specified path segments into one path.
const filePath = path.join("folder","student","data.txt")
console.log(filePath); //folder\student\data.txt

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({
  parseData,
  resolvedPath,
  extname,
  basename,
  dirname,
  separator: path.sep,
});
