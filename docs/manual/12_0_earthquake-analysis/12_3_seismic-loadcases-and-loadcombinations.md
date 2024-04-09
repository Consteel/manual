---
sidebar_position: 4
---
# Seismic loadcases and loadcombinations

### Seismic loadgroup and loadcase

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

Going back to the **Loadcases and loadgroups** dialogue, a new type of Seismic loadgroup has to be defined. After creating a seismic loadgroup, the pre-defined seismic loadcase will automatically be assigned to the group as a seismic loadcase.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9459,"width":449,"height":493,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-4-loadgroups.png)](./img/wp-content-uploads-2021-04-13-4-loadgroups.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

If the calculation method for the seismic effect is set to **Selected modes, linear summation,** an additional button will appear on the **Loadcases and loadgroups** dialogue when the seismic loadcase is selected in the tree control. The **Linear combination of modal effects (#1)** button stands for the option to set the combination factors for the calculated vibration shapes. After clicking on the button, a new dialogue will pop up, which contains all of the calculated vibration shapes, with the corresponding mass participation for each one, in all (1,2,z) main directions. By setting the combination factors, mass participation can be adjusted for each vibration mode, which will be considered during the next seismic analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

If all of the combination factor cells of the table are empty, ConSteel will perform seismic analysis with the **Single dominant mode** calculation method.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":9465,"width":440,"height":483,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-4-Loadgroup-linear.png)](./img/wp-content-uploads-2021-04-13-4-Loadgroup-linear.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":9471,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-4-Loadgroup-linear2.png)](./img/wp-content-uploads-2021-04-13-4-Loadgroup-linear2.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:heading {"level":3} -->

### Load combinations in seismic design situations

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

On the automatic generation of load combinations dialogue, all combinations can be automatically generated for seismic situations too, including ultimate and serviceability limit states.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":9479,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-4-load_automatic.png)](./img/wp-content-uploads-2021-04-13-4-load_automatic.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":9485,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-4-load_automatic2.png)](./img/wp-content-uploads-2021-04-13-4-load_automatic2.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->
