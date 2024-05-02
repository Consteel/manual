---
title: 'CONVERT_AND_LOAD_SECTIONS'
description: ""
published: 2024-02-26
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/convert_and_load_sections/
hero: ./img/wp-content-uploads-2024-01-image-7.png
---

Converts and loads sections from section bank. <span style={{color:"MediumSeaGreen"}}>(since CS 17 build 3303)</span>

### Description

This command is a part of the model import process. It expects a list of section names, and a conversion file name, which points to conversion files that tell which section type and material in the import model is to be converted to which section type and material that exists in Consteel. The command loads the converted sections into Consteel, then stores the converted section names in a Descript map named: "converted_section_names".

The command opens a dialogue window, where the section conversions can be reviewed. If a section name coincides with one in the Consteel section library, or there is a predefined conversion for the particular section type in the conversion file, than that section will be selected, if there is not, then the user has to select a section from the drop-down list. If there is no adequate section present in the list, then the user can load one from the section bank with the "..." button, and then select it from the drop-down list.

![](./img/wp-content-uploads-2024-01-image-4-1024x485.png)

### Syntax

**CONVERT_AND_LOAD_SECTIONS** [Section array] [Conversion file]

### Command parameters

| **Command parameter**               | **Assignment** | **Value format**                        | **Input options** |
| ----------------------------------- | -------------- | --------------------------------------- | ----------------- |
| [Section array](#section-array)     | Required       | String                                  | Local, variable   |
| [Conversion file](#conversion-file) | Required       | [Predefined strings](#convFiles)        | Local, variable   |

#### Section array:
Name of the array of sections to be converted. In the array the name of the sections have to be listed.

#### Conversion file:
There are section and material conversion files in the '... / [Consteel installation directory] / Data / Export' folder for all the supported softwares. These files contain section type and material conversions between a particular software and Consteel, thus telling Consteel that which section type in a particular software should be converted to which section type in Consteel.

![](./img/wp-content-uploads-2024-01-image-7.png)

<span id="convFiles" style={{paddingTop: '80px'}}>Available inputs:</span>
- Bocad
- Dlubal
- SAP2000
- Strucad
- Tekla

### Sample code

**SAP2000 model import with only 1 section:**
```
CONVERT_AND_LOAD_SECTIONS section_names SAP2000
```

![](./img/wp-content-uploads-2024-02-image-1024x206.png)

![](./img/wp-content-uploads-2024-02-image-1-1024x225.png)

**RFEM (Dlubal) model import with several sections:**
```
CONVERT_AND_LOAD_SECTIONS section_names DLUBAL
```

![](./img/wp-content-uploads-2024-02-image-2-1024x311.png)

![](./img/wp-content-uploads-2024-02-image-3-1024x485.png)

![](./img/wp-content-uploads-2024-02-image-4-1024x335.png)
