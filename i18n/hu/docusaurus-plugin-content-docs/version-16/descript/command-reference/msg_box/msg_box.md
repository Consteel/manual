---
title: 'MSG_BOX'
description: ""
published: 2023-08-14
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/msg_box/
hero: ./img/wp-content-uploads-2023-08-Error.png
---

Pops up a message box. <span style={{color:"MediumSeaGreen"}}>(since CS 17)</span>

### Description

Pops up a small message box window on top of the Consteel main window with the given message. Script execution will not continue until a the message box is closed with the "OK" or close button \[X].

The message can display values of variables in the code, and also accepst html tags for more editing options.

### Syntax

**MSG_BOX** [Message title] [Message description]  
Icon [Icon type]

### Additional command lines

Code lines directly after the MSG_BOX command.

Available additional command lines:

| **Line starting keyword** | **Inclusion** | **Description**             |
| ------------------------- | ------------- | --------------------------- |
| [Icon](#icon)             | Optional      | Adds an icon to the message |

#### Icon:
An icon can be added in front of the message title with this additional line immediately after the MSG_BOX command. If the "Icon ..." line is added then the _Icon type_ parameter have to be given.

### Command parameters

| **Command parameter**                       | **Assignment** | **Value format**                            | **Input options** |
| ------------------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| [Message title](#message-title)             | Required       | String                                      | Local, variable   |
| [Message description](#message-description) | Required       | String                                      | Local, variable   |
| [Icon type](<#icon type>)                   | Optional       | [Predefined strings](#Available-icon-types) | Local, variable   |

#### Message title:
Title of the message.

#### Message description:
Body of the message.

#### Icon type:
Specifies the type of the optional icon in front of the message title.

<span id="Available-icon-types" style={{paddingTop: '80px'}}> Available icon types: </span>
<div style={{paddingBottom: '20px'}}> </div>

| **Icon** **type** | **Icon**                                              |
| ----------------- | ----------------------------------------------------- |
| Error             | ![](./img/wp-content-uploads-2023-08-Error.png)       |
| Warning           | ![](./img/wp-content-uploads-2023-08-Warning.png)     |
| Information       | ![](./img/wp-content-uploads-2023-08-Information.png) |
| None              | (no icon will be displayed)                           |

### Sample code

**Simplest form:** (minimal parameters)
```
MSG_BOX "Message title" "Message description"
```

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image.png)](./img/wp-content-uploads-2023-08-image.png)

**Form showing all capabilities:**

Variable value and html tags (eg. &lt;br> -> "line break" ) in text.

```
$variable=123456

MSG_BOX "Warning $variable" "Message description $variable <br> ● Bullet point 1 <br> ● Bullet point 2"
Icon Warning
```

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-1.png)](./img/wp-content-uploads-2023-08-image-1.png)
