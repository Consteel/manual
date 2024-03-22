---
title: 'MSG_BOX'
description: ""
published: 2023-08-14
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/msg_box/
hero: ./img/wp-content-uploads-2023-08-Error.png
---
<!-- wp:paragraph -->

Pops up a message box. _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MSG_BOX**  
Icon

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command attributes

<!-- /wp:heading -->

<!-- wp:paragraph -->

Code lines directly after the MSG_BOX command.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available command attributes:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                       |               |                             |
| --------------------- | ------------- | --------------------------- |
| **Command attribute** | **Inclusion** | **Description**             |
| [Icon](#Icon)         | Optional      | Adds an icon to the message |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Icon:

<!-- /wp:heading -->

<!-- wp:paragraph -->

An icon can be added in front of the message title with this additional line after the MSG_BOX command. If the "Icon ..." line is added then the "Icon type" parameter have to be given.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                             |                |                                             |                   |
| ------------------------------------------- | -------------- | ------------------------------------------- | ----------------- |
| **Command parameter**                       | **Assignment** | **Value format**                            | **Input options** |
| [Message title](#Message-title)             | Required       | String                                      | Local, variable   |
| [Message description](#Message-description) | Required       | String                                      | Local, variable   |
| [Icon type](<#Icon type>)                   | Optional       | [Predefined strings](#Available-icon-types) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Message title:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Title of the message.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Message description:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Body of the message.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Icon type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Specifies the type of the optional icon in front of the message title.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available icon types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                   |                                                       |
| ----------------- | ----------------------------------------------------- |
| **Icon** **type** | **Icon**                                              |
| Error             | ![](./img/wp-content-uploads-2023-08-Error.png)       |
| Warning           | ![](./img/wp-content-uploads-2023-08-Warning.png)     |
| Information       | ![](./img/wp-content-uploads-2023-08-Information.png) |
| None              | (no icon will be displayed)                           |

<!-- /wp:table -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Pops up a small message box window on top of the Consteel main window with the given message. Script execution will not continue until a the message box is closed with the "OK" or close button \[X].

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The message can display values of variables in the code, and also accepst html tags for more editing options.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Simplest form (minimal parameters):

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MSG_BOX "Message title" "Message description"
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":67652,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image.png)](./img/wp-content-uploads-2023-08-image.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Form showing all capabilities:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Variable value and html tags (eg. &lt;br> -> "line break" ) in text.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
$variable=123456

MSG_BOX "Warning $variable" "Message description $variable <br> ● Bullet point 1 <br> ● Bullet point 2"
Icon Warning
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":67663,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-1.png)](./img/wp-content-uploads-2023-08-image-1.png)

<!-- /wp:image -->
