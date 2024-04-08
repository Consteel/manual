---
sidebar_position: 15
---
# Cutout

The modeling of various web cut-outs is currently available for welded I or H type cross-sections. Other types of sections will be available later. The effect of the cut-out is taken into account during analysis and design if the finite element of the member is shell, where the cutouts will be automatically included in the mesh during the finite element division. Analyzing with normal 7DOF beam finite element these objects are neglected.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11447,"width":493,"height":265,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/scr_dualbeam_cutouts_2.png)](./img/wp-content-uploads-2021-05-scr_dualbeam_cutouts_2.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"50%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11392,"width":523,"height":265,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/scr_dualbeam_cutouts.png)](./img/wp-content-uploads-2021-05-scr_dualbeam_cutouts.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->

### Creating cutouts ![](./img/wp-content-uploads-2021-05-cmd_cutout.png)

<!-- /wp:heading -->

<!-- wp:paragraph -->

Cut-out can be placed on the webs of welded I or H sections, regardless of whether the member is set as a normal 7 DOF member or a shell element. The command can be found on the **Structural members** tab. Executing the command, the dialog window shown below will appear where three types of cut-outs can be defined and placed as described below.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"33.34%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11410,"width":237,"height":260,"sizeSlug":"full","linkDestination":"media","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_rect.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_rect.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"33.34%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11404,"width":237,"height":260,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_circ.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_circ.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"33.33%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11398,"width":237,"height":260,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_hex.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_hex.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

The usual placement options are available at the top of the dialog window:

<!-- /wp:paragraph -->

<!-- wp:list -->

- ![](./img/wp-content-uploads-2021-04-5-3-draw-ico-11.png) the cut-outs can be placed **individually** by clicking on the reference line of the member,
- ![](./img/wp-content-uploads-2021-04-cmd_multi_place.png) or by **multiple placement** with relative distances interpreted in the member local coordinate system.
- ![](./img/wp-content-uploads-2021-04-cmd_draw_get.png) The properties of other cut-outs can get and used for new definitions as well.

<!-- /wp:list -->

<!-- wp:paragraph -->

In the _Parameters_ section, the reference line of the cut-out can be defined on the left side of the window (Fit to). The figure shows the selected reference line below the drop-down box. The location of the object can be specified relative to the:

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column {"width":"24%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:list {"editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

- reference line of the member,
- middle line of the web,
- top flange,
- bottom flange.

<!-- /wp:list -->

<!-- /wp:column -->

<!-- wp:column {"width":"19%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11569,"width":131,"height":131,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_fit_refline.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_fit_refline.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"19%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11587,"width":131,"height":131,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_fit_webmid.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_fit_webmid.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"19%","editorskit":{"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

<!-- wp:image {"align":"center","id":11581,"width":131,"height":131,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_fit_top.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_fit_top.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column {"width":"19%"} -->

<!-- wp:image {"align":"center","id":11575,"width":131,"height":131,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/dial_dual_cutout_fit_bottom.png)](./img/wp-content-uploads-2021-05-dial_dual_cutout_fit_bottom.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph -->

The selected option not only defines the cutout's reference object but also determines the axis. It is always placed perpendicular to the selected reference object.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":11597,"width":311,"height":313,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/05/scr_dualbeam_cutout_ref.png)](./img/wp-content-uploads-2021-05-scr_dualbeam_cutout_ref.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

On the right side of the dialog window, the parameters can be entered according to the chosen geometry. Eccentricity can also be set for all types. For the circular cut-outs also a stiffener tube can be defined at the same time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

After specifying all the parameters the cutout can be placed on the members:

<!-- /wp:paragraph -->

<!-- wp:list -->

- one-by-one clicking on the member's reference line, or
- specifying a set of cutouts at the bottom of the dialog window, all the objects can be placed with one mouse click on the reference line of the member.

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Analysis and design

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Analysis**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

The effect of the cutouts is only taken into account during analysis if the finite element type of the member is set to shell, where the cutouts will be automatically included in the mesh during the finite element division. Analyzing with a normal 7DOF beam finite element, these objects are neglected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Design**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Cutouts are not considered in the design verifications at the moment.

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":11} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":3} -->

### Feature preview

<!-- /wp:heading -->

<!-- wp:html -->

https://www.youtube.com/watch?v=7osFX9RpGnk

<!-- /wp:html -->
