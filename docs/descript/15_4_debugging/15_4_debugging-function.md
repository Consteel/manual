---
sidebar_position: 2
---

# Debugging function

<!-- /wp:heading -->

<!-- wp:paragraph -->

The debugging function can evaluate the written code step-by-step.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With this button ![](./img/wp-content-uploads-2021-11-Screenshot-2022.03.11.-18_06_31.png) a script run can be started in debug mode. In this mode the execution of the code can be stopped at breakpoints. Breakpoints can be placed on the left side of the row numbers, next to rows that contain commands or variable definitions. Possible breakpoint positions are shown with an empty circle, if the mouse pointer is placed over one.

<!-- /wp:paragraph -->

<!-- wp:image {"id":34448,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-11.png)](./img/wp-content-uploads-2022-03-image-11.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Clicking here will place a breakpoint. Breakpoints can also be removed similarly.

<!-- /wp:paragraph -->

<!-- wp:image {"id":34376,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2022/03/image-5.png)](./img/wp-content-uploads-2022-03-image-5.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

At this state, if a debug run is started, then the code execution will stop at the first breakpoint. While the code execution is stopped, the current state of the Consteel model and the data containers in the code can be viewed.

<!-- /wp:paragraph -->

<!-- wp:image {"id":34392,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2022-03-image-7-1024x374.png)](https://consteelsoftware.com/wp-content/uploads/2022/03/image-7.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

On top of the breakpoint, an arrow shows that the code execution is stopped at that row. In this state, if the watch window is opened on the right, the current value of all data containers (variables, arrays, maps) are shown.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Some additional buttons also appear in the top middle part of the code input area with the following functions:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-10-Screenshot-2022.03.23.-14_45_43.png) Go to next breakpoint

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-10-Screenshot-2022.03.23.-14_47_24.png) Go to next row

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

![](./img/wp-content-uploads-2021-10-Screenshot-2022.03.23.-14_48_33.png) Exit debug run

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With the help of these debug controls the code execution can be followed step-by-step or even row-by-row if necessary, and potential bugs can be found. Breakpoints can also be added or removed during the debug run, while the code execution is stopped.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

You can try out the debug functions on the code shown above. Just copy-paste it from here:

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
$Num_Var=1234
$Text_Var=abcd

STRISNUM 123 StrIsNum_Output_Variable
STRFIND asd123 12 StrFind_Output_Variable
CONCAT Part1_ Part2 Concat_Result_Variable
EXPLODE 123;456;789 ; Explode_Output_Array

ARRAY_CREATE Data
ARRAY_CLEAR Data
ARRAY_ADD Data 1234
ARRAY_SET Data 1 1234
ARRAY_GET Data 0 Retrieved_Value
ARRAY_COUNT Data Data_Count

MAP_CREATE Map1
MAP_CLEAR Map1
MAP_SET Map1 Key1 123
MAP_KEYEXISTS Map1 Key1 Key1_Exists
MAP_GET Map1 Key1 Key1_Value
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
