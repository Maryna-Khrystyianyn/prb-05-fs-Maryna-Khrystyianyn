import fs from "fs";
function printFile(filename) {
  let contents = "";
  const endcodig = "utf8";

  try {
    contents = fs.readFileSync(filename, endcodig);
    console.log(contents);
  } catch (error) {
    console.error(error.message, `There is no ${filename}!!!`);
  }
}
printFile("data1.txt");
printFile("data3.txt");
