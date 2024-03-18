---
title: 'GET_REFERENCING_OBJECTS'
description: ""
published: 2023-08-22
redirect_from: 
            - https://www.consteelsoftware.com/manual/descript-cspi/get_referencing_objects/
hero: ./img/wp-content-uploads-2023-08-image-2-1024x640.png
---
<!-- wp:paragraph -->

Gets the IDs of objects referencing the input object. _(since CS 17)_

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Syntax

<!-- /wp:heading -->

<!-- wp:paragraph -->

**GET_REFERENCING_OBJECTS **

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Command parameters

<!-- /wp:heading -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                           |                |                                               |                   |
| ----------------------------------------- | -------------- | --------------------------------------------- | ----------------- |
| **Command parameter**                     | **Assignment** | **Value format**                              | **Input options** |
| [Input object ID](#Input-object-ID)       | Required       | String                                        | Local, variable   |
| [Output array name](#Output-array-name)   | Required       | String                                        | Local, variable   |
| [Output object type](#Output-object-type) | Optional       | [Predefined strings](#Available-object-types) | Local, variable   |

<!-- /wp:table -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Input object ID:

<!-- /wp:heading -->

<!-- wp:paragraph -->

ID of the inspected object.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Avaible input object types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- <!-- wp:list-item -->
- Structural member
- <!-- /wp:list-item -->
-
- <!-- wp:list-item -->
- Structural Plate
- <!-- /wp:list-item -->

<!-- /wp:list -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Output array name:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Name of the array that will contain the IDs of the objects referencing the input object.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

#### Output object type:

<!-- /wp:heading -->

<!-- wp:paragraph -->

The type of the output objects can be restricted with this optional parameter. If defined, only those referencing objects will be listed in the output array that has the type given by this parameter.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Available object types:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                             |                 |
| ------------------------------------------- | --------------- |
| **Object type name**                        | **Object type** |
| Haunch                                      | Haunched_Member |
| Tapered member                              | Tapered_Member  |
| Point support                               | Support_Point   |
| Line support                                | Support_Edge    |
| Surface support                             | Support_Plate   |
| Point load                                  | NodeForce       |
| Line load                                   | MemberForce     |
| Surface load                                | PlateForce      |
| Point mass                                  | NodeMass        |
| All types (default if parameter left empty) | All_Types       |

<!-- /wp:table -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Description

<!-- /wp:heading -->

<!-- wp:paragraph -->

In Consteel, if one object is "attached to" another object (eg. a support to a beam), the attached object is referencing the other object. In other words, in the definition of the attached object a reference to the database ID of the other object is present. With this command, we can query the list of objects that are referencing an object that we specified with the "Input object ID" parameter.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This command is a tool that reveals object releations, and lets us perform instructions like: "only delete those support points that are attached to this beam", or "only modify those loads that are on this structural plate" in a scripted form.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

### Sample code:

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Command only:

<!-- /wp:heading -->

<!-- wp:loos-hcb/code-block -->

```
GET_REFERENCING_OBJECTS Member_ID1 Object_ID_Result_array
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:heading {"level":4} -->

#### Example 1 (structural member):

<!-- /wp:heading -->

<!-- wp:paragraph -->

In this example a structural member was previously modeled with various types of objects put on it. The commad will give back the IDs of all of these objects.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER Mem_ID_array
ObjectTypes Structural_Member

ARRAY_GET Mem_ID_array 0 Mem_ID1

GET_REFERENCING_OBJECTS $Mem_ID1 Object_ID_Result_array All_Types

RETURN
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":67743,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2023-08-image-2-1024x640.png)](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-2.png)

<!-- /wp:image -->

<!-- wp:heading {"level":4} -->

#### Example 2 (structural member, support point only):

<!-- /wp:heading -->

<!-- wp:paragraph -->

In this example a structural member and its 2 point supports were created by code. The commad will give back the IDs of all the point supports on the member.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
LOAD_SECTION_MACRO SecID WLD-IH "I 200 Welded" "S 235 EN 10025-2" 100 10 200 6 100 10

CREATE Member_ID1 Structural_member "I 200 Welded"
0 0 0
6000 0 0

CREATE SupID1 Support_Point Member_ID1 x,y,z,xx
0 0 0

CREATE SupID2 Support_Point Member_ID1 y,z,xx
6000 0 0

SELECT All
DESELECT All

GET_REFERENCING_OBJECTS Member_ID1 Object_ID_Result_array Support_Point

RETURN
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":67769,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2023-08-image-3-1024x549.png)](https://www.consteelsoftware.com/wp-content/uploads/2023/08/image-3.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Example 3 (structural plate):

<!-- /wp:heading -->

<!-- wp:paragraph -->

In this example a structural plate was previously modeled with various types of objects put on it. The commad will give back the IDs of all of these objects.

<!-- /wp:paragraph -->

<!-- wp:loos-hcb/code-block -->

```
FILTER Plate_ID_array
ObjectTypes Structural_Plate

ARRAY_GET Plate_ID_array 0 Plate_ID1

GET_REFERENCING_OBJECTS $Plate_ID1 Object_ID_Result_array

RETURN
```

<!-- /wp:loos-hcb/code-block -->

<!-- wp:image {"id":67787,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2023-08-image-4-1024x648.png)

<!-- /wp:image -->
