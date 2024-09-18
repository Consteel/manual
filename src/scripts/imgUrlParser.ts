import {
  readFileSync,
  writeFileSync,
  statSync,
  readdirSync,
  existsSync,
} from "fs";
import path from "node:path";

const foundImgInMdRegex = /\(https:\/\/consteelsoftware.com\/wp-content\/.*\)/;
const imgUrlRegex = /!\[.*\]\(([^)]+)\)/;
const imgUrlReplaceRegex = /https:\/\/consteelsoftware\.com\//i;

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

    // parse and replace all img urls
    const replacedFileData = parseAndReplaceFileData(
      filePath,
      fileData,
      originalImagePaths
    );

    // write file
    writeFileSync(filePath, replacedFileData, {
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

function parseAndReplaceFileData(
  filePath: string,
  fileData: string,
  originalImagePaths: string[]
) {
  const splittedFileData = fileData.split("\n").map((fileLine: string) => {
    const lowercaseFileData = fileLine.toLowerCase();
    const isImgExistInMd = new RegExp(foundImgInMdRegex, "g").test(
      lowercaseFileData
    );

    if (isImgExistInMd) {
      const imgUrlMatchGroup = fileLine.match(new RegExp(imgUrlRegex));

      if (!imgUrlMatchGroup) {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `Line format not valid!\n - file: ${filePath} \n - line: ${fileLine}\n`
        );
        return fileLine;
      }

      const rawImgPath = imgUrlMatchGroup[1].replace(imgUrlReplaceRegex, "");

      if (rawImgPath.includes("./img"))
        return `![](${path.join("", rawImgPath)})`;
      else {
        const foundImgUrl = originalImagePaths.find(
          (originalImgPath) =>
            removeResolutionFromImgUrl(originalImgPath) ===
            removeResolutionFromImgUrl(rawImgPath)
        );

        if (foundImgUrl) return `![](${path.join("./img", foundImgUrl)})`;
        else {
          console.log(
            "\x1b[33m%s\x1b[0m",
            `Image not found!\n - file: ${filePath} \n - line: ${fileLine}\n`
          );
          return `![]()`;
        }
      }
    }

    return fileLine;
  });

  return splittedFileData.join("\n");
}

function removeResolutionFromImgUrl(imgUrl: string) {
  const replacedImgPath = imgUrl.replace(/\//g, "-");
  return replacedImgPath.replace(/-\d+x\d+(?=\.(?:png|jpg)$)/, "");
}

runImgUrlGenerator("../../docs", ["md"]);
