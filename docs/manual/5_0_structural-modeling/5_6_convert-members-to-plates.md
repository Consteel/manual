---
sidebar_position: 6
---
# Convert members to plates

Members can be converted to plates with **_Convert members to plates_** function (![](./img/wp-content-uploads-2021-04-cmd_explode_to_shell.png)). This is a non-reversible conversion (however, the undo function is still available) unlike the automatic conversion used during finite element generation of a beam changed to shell element type (**_[Superbeam function](../5_0_structural-modeling/5_14_superbeam.md)_**).

<!-- /wp:paragraph -->

<!-- wp:image {"id":8817,"width":600,"height":330,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/6-6-Convert-members-to-plates.png)](./img/wp-content-uploads-2021-04-6-6-Convert-members-to-plates.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

The following members with section can be converted to plates:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Hot-rolled I, H and tube section
- Cold formed C, Z and tube section
- Welded I, H and box section

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

In the case of hot-rolled sections, not only the flanges and web are converted to plates but also the neck area with a suitable additional plate element. Therefore the section properties of the original member and the converted are the same.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

By clicking on the **Apply** button the selected members will be converted to plates. During the conversion, the given eccentricities are considered, therefore, the eccentric loads and supports will be in the same position after the conversion. Attaching nodes of the connecting members, haunches, and tapered members are automatically converted. At the ends of the member, if it is not a free end, a rigid body with constraint elements will be automatically created that connects the endpoints of the converted plate elements to other model parts.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":22011,"height":500,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/scr_endsupp_member.png)](./img/wp-content-uploads-2021-04-scr_endsupp_member.png)

Support at the end of a member

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":21999,"height":500,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/scr_endsupp_dualmember.png)](./img/wp-content-uploads-2021-04-scr_endsupp_dualmember.png)

Converted from 7DOF beam element type member

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":22005,"height":500,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/scr_endsupp_dualshell.png)](./img/wp-content-uploads-2021-04-scr_endsupp_dualshell.png)

Converted from Shell element type member

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

A rigid body is placed on the edge of each plates whith hinged connections between them. This allows transferring also the warping defromations. The endpoints of these rigid bodies are connected with constraint elements that transfer the deformations between the two model part (bar member and shell). The constaraint can be two types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- translational
- translational and rotational

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
