---
title: 'MAP_GET'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/map_get/
hero: ./img/wp-content-uploads-2021-08-image-78-1024x126.png
---
<!-- wp:paragraph -->

Gets the value paired to a key from a map.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MAP_GET **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                     |                |                  |                   |
| ----------------------------------- | -------------- | ---------------- | ----------------- |
| **Command parameter**               | **Assignment** | **Value format** | **Input options** |
| [Map name](#Map-name)               | Required       | String           | Local, variable   |
| [Key](#Key)                         | Required       | String           | Local, variable   |
| [Output variable](#Output-variable) | Required       | String           | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4} -->

#### Map name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the map.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Key:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The string acting as the key.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Output variable:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the variable that will contain the output. The output is the value paired to the key.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Gets the value paired to a key within a map and stores it in a variable.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MAP_GET Map1 Key1 Key1_Value
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Command + key creation:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MAP_SET Map1 Key1 123

MAP_GET Map1 Key1 Key1_Value
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":23867,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-08-image-78-1024x126.png)

<!-- /wp:image -->
