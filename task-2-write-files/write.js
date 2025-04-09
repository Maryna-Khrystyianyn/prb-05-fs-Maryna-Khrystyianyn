import fs from "fs";

function updateFile(filename) {
  let contents = "";
  const endcodig = "utf8";

  try {
    contents = fs.readFileSync(filename, endcodig);
    contents += "*";
    fs.writeFileSync(filename, contents, endcodig);
    //  console.log("File updated")
  } catch (error) {
    console.error(error.message, `There is no ${filename}!!!`);
    process.exit(1);
  }
}
let i = 0;
while (i < 4) {
  updateFile("review.txt");
  i++;
}
updateFile("star.txt");
