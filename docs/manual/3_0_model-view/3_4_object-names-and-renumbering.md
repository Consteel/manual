---
sidebar_position: 4
---
# Object names and Renumbering


Names and labels are used for a better organization of the different objects in the model and for better transparency of the documentation. The names and numbers of the objects are generated automatically while modeling. The user has the opportunity to change these generated names.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The following name and renumbering options are available:

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow"} -->

- **numbering of finite element points**– generated fully automatically, the user can’t influence the process. These numbers are only visible on the Finite element and the Analysis tabs.
- **names of structural members**– these are generated automatically while the user creates or copies structural objects (beam, column, plate, wall). Names consist of a prefix and a number (for instance: “B1” for a bar member). These names appear in the **Object properties** window on the right side of the screen. The names can be modified manually or with the help of the **Renumber selected objects** tool (see below).
- **names of structural supports, releases, and links** – these names show the type of the placed support, release or link objects (for instance: “Fixed” or “yy,zz,w”)
- **names of joints** – these names show the user-defined names of a placed joint (for instance: “Beam-to-column 01”)

<!-- /wp:list -->

<!-- wp:paragraph -->

**Renumbering the objects**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To renumbering the objects first select the relevant objects, then click on the **Renumber selected objects** icon on the Structural members tab.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":7830,"width":737,"height":608,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/4-5-renumberung.png)](./img/wp-content-uploads-2021-04-4-5-renumberung.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The _Renumber selected object_ window will appear, showing the selected objects grouped by object type. For renumbering, the following functions can be used :

<!-- /wp:paragraph -->

<!-- wp:list {"className":"is-style-arrow","editorskit":{"indent":60,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

- The prefix of the name can be defined
- Start number can be defined
- Priority of the renumbering can be set in the 3 main directions (X, Y Z)

<!-- /wp:list -->

<!-- wp:paragraph -->

After clicking on the **Apply** button, only checked object types will be renumbered. The new names of the objects will be built up from the given prefix and the new serial number.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Label’s visibility**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The visibility of the labels can be set on the bottom status bar as it was described in [Chapter 1.2.6 - Status bar](../1_0_general-description/1_2_the-main-window.md#status-bar).

<!-- /wp:paragraph -->
