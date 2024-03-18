---
title: 'MAP_SET'
description: ""
published: 2021-11-17
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/map_set/
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Sets a key-value pair in a map.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**MAP_SET **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                          |                |                  |                   |
| ------------------------ | -------------- | ---------------- | ----------------- |
| **Command parameter**    | **Assignment** | **Value format** | **Input options** |
| [Map name](#Map-name)    | Required       | String           | Local, variable   |
| [Key](#Key)              | Required       | String           | Local, variable   |
| [Item value](#Key-value) | Required       | String           | Local, variable   |

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

#### Key value:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The value paired to the key.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

Sets a key-value pair in a map. If the map was not defined previously, then this command will create the map, then store the key-value pair within it.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
MAP_SET Map1 Key1 123
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
