---
title: "FRAME_CORNER"
description: ""
published: 2024-06-02
redirect_from:
  - https://www.consteelsoftware.com/manual/descript-cspi/frame_corner/
hero: ../../../defaultHero.jpg
---

Switches the frame corner on or off. <span style={{color:"MediumSeaGreen"}}>(since CS 18 build 4124)</span>

### Description

This command controls the on-off switch for the frame corner functionality. The command is analogous with the on-off switch found in the frame corner wizard dialogue within the Consteel UI.

![](img\Frame_Corner_Img_01.png)

### Syntax

**FRAME_CORNER** [On switch]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format**                         | **Input options** |
| ----------------------- | -------------- | ---------------------------------------- | ----------------- |
| [On switch](#on-switch) | Required       | [Predefined strings](#on-switch) | Local, variable   |

#### On switch:

<span id="on-switch-options" style={{paddingTop: '80px'}}>Available input options: </span>

- On
- Off

### Sample code

```
FRAME_CORNER On
```
