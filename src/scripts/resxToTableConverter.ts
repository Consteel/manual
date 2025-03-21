import { readFileSync, writeFileSync, statSync, readdirSync } from "fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";
import { markdownTable } from "markdown-table";

const descNameAttrRegex = /^(.*?)(Desc.*)$/;
const nameNameAttrRegex = /^(.*?)(Name.*)$/;
const idNameAttrRegex = /^(.*?)(Nick.*)$/;

type InterfaceType = "input" | "output" | "component";

interface TableData {
  id: string;
  name: string;
  description: string;
}

type MessageType = "error" | "success" | "warning";

const options = {
  ignoreAttributes: false,
};

const xmlParser = new XMLParser(options);

function runResxToTableConverter(
  folderPath: string,
  extensions: string[]
): void {
  console.log(
    getFormattedMessage(
      `Parsing files with extension(s): ${extensions} ...`,
      "success"
    )
  );

  const filePaths: string[] = [];

  loopThroughDirectory(folderPath, extensions, filePaths);

  console.log(getFormattedMessage(`Generating markdown tables ...`, "success"));

  filePaths.forEach((filePath: string) => {
    const groupedDataMap = new Map<InterfaceType, Map<string, TableData>>();

    const fileData: string = readFileSync(filePath, "utf-8");
    const jsonObj = xmlParser.parse(fileData);

    const xmlData = jsonObj.root?.data ?? [];

    if (xmlData.length === 0) {
      console.error(
        getFormattedMessage(
          `No valid data entries found! File path: ${filePath} \n`,
          "error"
        )
      );
      return;
    }

    parseXmlData(xmlData, groupedDataMap, filePath);

    if (groupedDataMap.size === 0) return;

    const xmlTableStr = generateMarkdownText(groupedDataMap);

    // write file
    writeFileSync(filePath.replace(".resx", ".md"), xmlTableStr, {
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

        if (fileExtension && extensions.includes(fileExtension))
          filePaths.push(childItemAbsolutePath);

        return;
      }
    }
  });
}

function parseXmlData(
  xmlData: any,
  outputMap: Map<InterfaceType, Map<string, TableData>>,
  filePath: string
): void {
  xmlData.forEach((item: any) => {
    const rowName = item["@_name"];
    const rowInterfaceType = item.comment;
    const rowItemValue = item.value;

    if (!rowName) {
      console.error(
        `${getFormattedMessage(
          `There is no @name attribute on item!`,
          "warning"
        )} \n  File path: ${filePath} \n`
      );
      return;
    }

    if (!rowInterfaceType) {
      console.error(
        `${getFormattedMessage(
          `There is no <comment> child on item!`,
          "warning"
        )} \n  File path: ${filePath} \n  Name: ${rowName} \n`
      );
      return;
    }

    if (!rowItemValue) {
      console.error(
        `${getFormattedMessage(
          `There is no <value> child on item!`,
          "warning"
        )} \n  File path: ${filePath} \n  Name: ${rowName} \n`
      );
      return;
    }

    let nameParts = [] as string[];

    const desc = rowName.match(descNameAttrRegex);
    const name = rowName.match(nameNameAttrRegex);
    const id = rowName.match(idNameAttrRegex);
    const splitted = rowName.split("_");

    if (splitted.length === 2 && splitted[0] !== "" && splitted[1] !== "")
      nameParts = splitted;
    else if (desc && desc[1] !== "" && desc[2] !== "")
      nameParts = [desc[1], desc[2]];
    else if (name && name[1] !== "" && name[2] !== "")
      nameParts = [name[1], name[2]];
    else if (id && id[1] !== "" && id[2] !== "") nameParts = [id[1], id[2]];

    if (nameParts.length !== 2) {
      console.error(
        `${getFormattedMessage(
          "Invalid name found on item!",
          "warning"
        )} \n  File path: ${filePath} \n  Name: ${rowName} \n`
      );
      return;
    }

    const interfaceType = rowInterfaceType.toLowerCase(); // input, output or component
    const interfaceName = nameParts[0]; // first part of the name
    const tableDataName = nameParts[1].toLowerCase(); // name of the columns

    if (!outputMap.has(interfaceType)) outputMap.set(interfaceType, new Map());

    const innerMap = outputMap.get(interfaceType);

    if (!innerMap?.has(interfaceName))
      innerMap?.set(interfaceName, {
        name: "",
        id: "",
        description: "",
      } as TableData);

    const groupObject = innerMap?.get(interfaceName);

    if (groupObject) {
      if (tableDataName.includes("desc"))
        groupObject.description = rowItemValue;
      else if (tableDataName === "name") groupObject.name = rowItemValue;
      else if (tableDataName.includes("nick")) groupObject.id = rowItemValue;
    }
  });
}

function generateMarkdownText(
  dataMap: Map<InterfaceType, Map<string, TableData>>
): string {
  let markdownStr = "";

  dataMap.forEach((interfaceNamesMap, interfaceType) => {
    if (interfaceType === "component") return;
    else if (interfaceType === "input") markdownStr += "\n\n### Inputs\n\n";
    else if (interfaceType === "output") markdownStr += "\n\n### Outputs\n\n";

    const markdownTableData = [] as any[];
    interfaceNamesMap.forEach((tableData, interfaceName) => {
      if (markdownTableData.length === 0)
        markdownTableData.push(
          Object.keys(tableData).map(
            (header) => header.charAt(0).toUpperCase() + header.substring(1)
          )
        ); // add table's heades

      markdownTableData.push(Object.values(tableData)); // add table's data
    });

    markdownStr += markdownTable(markdownTableData);
  });

  return markdownStr;
}

function getFormattedMessage(msg: string, type: MessageType): string {
  let ansiColorNum = 0;

  switch (type) {
    case "error":
      ansiColorNum = 31;
      break;
    case "success":
      ansiColorNum = 32;
      break;
    case "warning":
      ansiColorNum = 33;
      break;
  }

  return `\x1b[${ansiColorNum}m${msg}\x1b[0m`;
}

runResxToTableConverter("./", ["resx"]);
