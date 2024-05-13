---
sidebar_position: 8
---
# Materials

New material grades can be defined as one of the three different types of material: steel, concrete and concrete reinforcement.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8865,"width":469,"height":117,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/6-8-Material-grades.png)](./img/wp-content-uploads-2021-04-6-8-Material-grades.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The latter is only used for the rebar reinforcement of concrete or composite cross-sections. The material parameters are taken from the appropriate Structural Eurocode chapters (EN 1993-1-1 for steel and EN 1992-1-1 for concrete and reinforcement), and the default – indelible – material types are set with the standard values. New materials can also be created with arbitrary parameters.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":8871,"width":300,"height":319,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/6-8-Steel-material.png)](./img/wp-content-uploads-2021-04-6-8-Steel-material.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

In Consteel only elastic material is considered in the analysis, so the calculation results are only affected by the elastic modulus, Poisson factor, density (if the self-weight of the structure is considered), and temperature expansion factor (if temperature load or fire is applied). In the case of concrete material, the Effective elastic modulus is used in the analysis as defined in the EC 2.

<!-- /wp:paragraph -->

<!-- wp:columns -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8877,"width":361,"height":432,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/6-8-Concrete-material.png)](./img/wp-content-uploads-2021-04-6-8-Concrete-material.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- wp:column -->

<!-- wp:image {"align":"center","id":8883,"width":296,"height":230,"sizeSlug":"full","linkDestination":"media"} -->

[![](https://Consteelsoftware.com/wp-content/uploads/2021/04/6-8-Reinforcement-material.png)](./img/wp-content-uploads-2021-04-6-8-Reinforcement-material.png)

<!-- /wp:image -->

<!-- /wp:column -->

<!-- /wp:columns -->

<!-- wp:paragraph {"align":"justify"} -->
:::info
**Important to note** that in the case of bar members (beams, columns) the material is the parameter of the cross-section of the member, so the current modification should be applied for the appropriate cross-section. This feature allows the definition of cross-sections with multiple materials (e.g. composite section). Accordingly, if identical cross-sections with different material are liked to be used in one model then multiple cross-section definition is needed!
:::
<!-- /wp:paragraph -->
