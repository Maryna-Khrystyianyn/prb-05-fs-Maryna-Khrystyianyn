import fs from "fs";

function isRobot(name) {
  const endcodig = "utf8";
  let contents = "";
  try {
    contents = fs.readFileSync(name, endcodig);
    if (contents.includes("robot")) {
      console.log(name);
    }
  } catch (error) {
    console.error(error.message, `There is no ${name}!!!`);
  }
}

for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    for (let k = 1; k < 4; k++) {
      for (let m = 1; m < 16; m++) {
        const filename = `data/level1_${i}/level2_${j}/level3_${k}/random_text_file_${m}.txt`;
        isRobot(filename);
      }
    }
  }
}
