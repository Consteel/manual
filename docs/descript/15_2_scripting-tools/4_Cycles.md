---
sidebar_position: 4
---
# Cycles

Cycle is the basic tool to perform repeating (same or similar) operations. Descript handles the for cycle, for which the parameters are the following:

- Definition of the running parameter
- Start value of the running parameter
- End value of the running parameter

The following commands can also be used within for loops:

- **BREAK**: exits the for loop
- **CONTINUE**: jumps to the next cycle within the for loop

**Example**

```
//Variable definition
$x1=0
$x2=0
$z2=1000

//Loading a section into the model
LOAD_SECTION_LIBRARY Sec_ID "HEA 200"

//Loop
$Mem_prefix=Mem_ID_

for $n 1...9

    CONCAT $Mem_prefix $n Act_Mem_ID

    CREATE $Act_Mem_ID Structural_Member "HEA 200"
    $x1 0 0
    $x2 0 $z2

    $x1=$x1+1000
    $x2=$x1
    $z2=$z2+100

end
```

Explanation of the example code:

- Started with a definition of variables which are desired to be modified multiple times in the for cycle **$x1 $x2 \$z2**
- Loaded a section which will be used in the next Create command
- Started the for loop
- Defined the running parameter **\$n**
- Defined the start value of the running parameter **1**...9. Running parameter will automatically increased by 1 when the code reaches the **end** statement
- Defined the end value of the running parameter 1...**9**. This is the last value what the running parameter can pick up after reaching the **end** of each cycle.
- Performed a **Create** command of **Structural member**, and defined the coordinates with **$x1 $x2 \$z2** parameters
- After executing the Create command, changed the value of **$x1 $x2 \$z2** variables
- Code reaches the end statement, raises **\$n** running parameter with 1, and repeats the loop (repeats until \$n is smaller than the end value)
- The result is the following:

[![Cycle.PNG](https://wiki.consteelsoftware.com/images/1/1c/Cycle.PNG)](./img/images-1-1c-Cycle.png)

