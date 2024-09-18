import {
  readFileSync,
  writeFileSync,
  statSync,
  readdirSync,
  existsSync,
} from "fs";
import path from "node:path";

const imgRegex = /\(https:\/\/consteelsoftware.com\/wp-content\/.*\)/;
const imgUrlReg = /!\[.*\]\(([^)]+)\)/;

function runImgUrlGenerator(folderPath: string, extensions: string[]): void {
  const filePaths: string[] = [];

  loopThroughDirectory(folderPath, extensions, filePaths);

  filePaths.forEach((filePath: string) => {
    const fileData: string = readFileSync(filePath, "utf-8");
    const imgFolderPath: string = path.join(
      filePath.substring(0, filePath.lastIndexOf("\\")),
      "img"
    );
    const originalImagePaths: string[] = [];

    // get image paths if exist
    if (existsSync(imgFolderPath)) {
      const imgs = readdirSync(
        path.join(filePath.substring(0, filePath.lastIndexOf("\\")), "img")
      );

      originalImagePaths.push(...imgs);
    }

    const splittedFileData = fileData.split("\n").map((line: string) => {
      const convertedLine = line.toLowerCase();
      const isMatched = new RegExp(imgRegex, "g").test(convertedLine);

      if (isMatched) {
        const matchGroup = line.match(new RegExp(imgUrlReg));

        if (!matchGroup) {
          console.warn(`Match not found! File: ${filePath}, line: ${line}`);
          return line;
        }

        const rawImgPath = matchGroup[1].replace(
          "https://consteelsoftware.com/",
          ""
        );

        if (rawImgPath.includes("./img"))
          return `![](${path.join("", rawImgPath)})`;
        else {
          const replace = rawImgPath.replace(/\//g, "-");
          const filteredImgUrl = removeResolutionFromImgUrl(replace);

          const foundImgUrl = originalImagePaths.find(
            (originalImgPath) =>
              removeResolutionFromImgUrl(originalImgPath) === filteredImgUrl
          );

          if (foundImgUrl) return `![](${path.join("./img", foundImgUrl)})`;
          else return `![]()`;
        }
      }

      return line;
    });

    writeFileSync(filePath, splittedFileData.join("\n"), {
      flag: "w",
    });
  });
}

function loopThroughDirectory(
  directoryPath: string,
  extensions: string[],
  filePaths: string[]
): void {
  const directoryItems = readdirSync(directoryPath);

  directoryItems.forEach((directoryItem: string) => {
    const childItemAbsolutePath = path.join(directoryPath, directoryItem);
    const isItemDirectory = statSync(childItemAbsolutePath).isDirectory();

    if (isItemDirectory)
      return loopThroughDirectory(childItemAbsolutePath, extensions, filePaths);
    else {
      if (extensions.length === 0) return filePaths.push(childItemAbsolutePath);
      else {
        const fileExtension = childItemAbsolutePath.split(".").pop();

        if (extensions.includes(fileExtension))
          filePaths.push(childItemAbsolutePath);

        return;
      }
    }
  });
}

function removeResolutionFromImgUrl(imgUrl: string) {
  return imgUrl.replace(/-\d+x\d+(?=\.(?:png|jpg)$)/, "");
}

runImgUrlGenerator("../../docs/descript/15_3_user-interface", ["md"]);
