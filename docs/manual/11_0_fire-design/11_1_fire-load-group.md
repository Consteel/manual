---
sidebar_position: 1
---
# Fire load group

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/12-1-fire-load-group-1.png)](./img/wp-content-uploads-2021-04-12-1-fire-load-group-1.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

For fire design situation, a dedicated _Fire load_ group was created that handle the specialties of fire effect. Before specifying the fire effect, a fire load group and at least one fire load case must be defined.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Fire load group has more options:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Analysis with room temperature material properties - this calculation method must be chosen to check the structure with reactive protection (intumescent paint).

- Analysis with elevated temperature material properties - for the check of structures with passive protection (e.g. gypsum insulation) or without any protection. The stresses and displacements are determined based on the required fire resistance time.

  - Consider indirect actions caused by thermal expansion: By default Consteel neglect the effect of thermal expansion during the analysis, but by clicking on the checkbox there is the possibility to take it into account.

- Value of variable factor for main variable load: By default, Consteel applies the Ψ2,1 but switching the radio button Ψ1,1 also can be used for load combination generation.

<!-- /wp:list -->

<!-- wp:image {"align":"right","id":16725,"width":375,"height":412,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/12-1-fire-load-settings.png)](./img/wp-content-uploads-2021-04-12-1-fire-load-settings.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

At least one load case must be added to the fire load group to place the fire effect on the model.

<!-- /wp:paragraph -->
