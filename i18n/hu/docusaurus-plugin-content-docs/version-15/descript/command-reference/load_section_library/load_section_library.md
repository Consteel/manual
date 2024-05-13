---
title: 'LOAD_SECTION_LIBRARY'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/load_section_library/
hero: ./img/wp-content-uploads-2021-08-image.png
---

Loads a section into the section list from the standard section library.

### Description

Sections have to be loaded into the current model file to be able to be used in the model. Initially in a new model file the section list is empty. There are several ways to load in, or create a section: library section, macro section, user drawn section. In this case the library section option is used. The command is analogous with the highlighted "From library..." button at the section administration dialogue in Consteel.

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-2.png)](./img/wp-content-uploads-2021-08-image-2.png)

### Syntax

**LOAD_SECTION_LIBRARY** [Object ID] [Section name] [Material name] [New name] [Section bank]

### Command parameters

| **Command parameter**            | **Assignment** | **Value format**                               | **Input options** |
| -------------------------------- | -------------- | ---------------------------------------------- | ----------------- |
| [Object ID](#object-id)          | Required       | String                                         | Local, variable   |
| [Section name](#section-name)    | Required       | [Predefined strings](#section-names)           | Local, variable   |
| [Material name](#material-name)  | Optional       | [Predefined strings](#material-names)          | Local, variable   |
| [New name](#new-name)            | Optional       | String                                         | Local, variable   |
| [Section bank](#section-bank)    | Optional       | [Predefined strings](#available-section-banks) | Local, variable   |

#### Object ID:
A string of characters that is used to identify the object that is being created. The string can contain letters, numbers and special characters as well. Can be defined locally as a string of characters between apostrophes or as a variable that contains the string.

For example:

LOAD_SECTION_LIBRARY **“Section ID 1”** [Section library name] [Material name] [New name]

or

LOAD_SECTION_LIBRARY **\$Section_ID** [Section library name] [Material name] [New name]

Object ID-s have to be unique for every object across all object types (eg.: sections, members, plates, loads, etc.).

#### Section name:
Name of the standard library section. The input has to be an exact match with the library name of the section.

For example:

LOAD_SECTION_LIBRARY [Object ID] **"IPE 80"** [Material name] [New name]

<span id="section-names" style={{paddingTop: '80px'}}> The section names can be viewed in Consteel at the highlighted area of the section library dialogue after the selection of a section type. </span>

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image.png)](./img/wp-content-uploads-2021-08-image.png)

#### Material name:
Name of the material to be used for the section. String of characters between apostrophes. Exact match is necessary with the Consteel material names.

For example:

LOAD_SECTION_LIBRARY [Object ID] [Section library name] **"S 235 EN 10025-2"** [New name]

<span id="material-names" style={{paddingTop: '80px'}}> The material names can be viewed in Consteel at the highlighted area of the material dialogue name dropdown. </span>

[![](https://consteelsoftware.com/wp-content/uploads/2021/08/image-1.png)](./img/wp-content-uploads-2021-08-image-1.png)

The assignment of this parameter is optional. Default value: "S 235 EN 10025-2"

#### New name:
This optional parameter can be used to give a different name for the section, then its section library name, which is the default. This is typically most useful, if there is a need to load in a specific section with multiple different materials into the same model. In this case, normally a section would load in with the same exact name, but two sections can't have identical names once loaded in. To solve this, as of the time of writing (CS16 build 2119), if this is attempted in Consteel's graphical user interface, the consecutively loaded same sections with different materials get an "\*" at the end of their names:

[![](https://consteelsoftware.com/wp-content/uploads/2022/12/image-11.png)](./img/wp-content-uploads-2022-12-image-11.png)

Attempting the same in Descript without a different New name added, will result the consecutive section(s) to not load in:

[![](./img/wp-content-uploads-2022-12-image-12-1024x122.png)](https://consteelsoftware.com/wp-content/uploads/2022/12/image-12.png)

This issue is solved with the New name parameter in Descript:

[![](./img/wp-content-uploads-2022-12-image-13-1024x111.png)](https://consteelsoftware.com/wp-content/uploads/2022/12/image-13.png)

```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 200" "S 235 EN 10025-2" "IPE 200 S 235"

LOAD_SECTION_LIBRARY Sec_ID2 "IPE 200" "S 275 EN 10025-2" "IPE 200 S 275"
```

#### Section bank:
<span style={{color:"MediumSeaGreen"}}>(since CS 17 build 3303)</span>

Name of the section bank. With this optional parameter a section bank can be specified from where a section will be loaded. This is necessary in some cases where a section name exists in more then one section banks.

<span id="available-section-banks" style={{paddingTop: '80px'}}> Available section banks in Consteel 17 build 3303: </span>
- European
- American (imperial)
- American
- Ayrshire
- Brausa
- British
- Chinese
- Continental Steel
- Lindab
- Russian
- SBE
- Swedsteel

For example the section “Z 100/2.0” exists in the Lindab and also in the Swedsteel section banks. With this parameter the section can be loaded from the desired section bank:

```
LOAD_SECTION_LIBRARY Sec_ID1 "Z 100/2.0" "S350GD+Z EN10346" "Z 100/2.0"           // Loads first found: Lindab
LOAD_SECTION_LIBRARY Sec_ID1 "Z 100/2.0" "S350GD+Z EN10346" "Z 100/2.0" Lindab    // Loads Lindab
LOAD_SECTION_LIBRARY Sec_ID1 "Z 100/2.0" "S350GD+Z EN10346" "Z 100/2.0" Swedsteel // Loads Swedsteel
```

### Sample code

**Minimal parameters:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 300"
```

**All parameters:**

```
LOAD_SECTION_LIBRARY Sec_ID1 "IPE 300" "S 235 EN 10025-2" "IPE 300 S 235" European
```
