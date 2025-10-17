---
title: 'WAIT'
description: ""
published: 2021-09-03
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/wait/
hero: ../../../defaultHero.jpg
---

Waits a specified time before executing the next command.

### Syntax

**WAIT** [Wait time]

### Command parameters

| **Command parameter**   | **Assignment** | **Value format** | **Input options** |
| ----------------------- | -------------- | ---------------- | ----------------- |
| [Wait time](#wait-time) | Optional       | Integer          | Local, variable   |

#### Wait time:
The amount of time while the next command will not be executed. Unit of time: miliseconds \[ms].

The assignment of this parameter is optional. Default value: 1000 \[ms].

### Sample code

**Command only:**

```
WAIT 1000
```

**Wait time with variable:**

```
$Wait_Time=2000
WAIT $Wait_Time
```
