---
sidebar_position: 3
---
# Seismic effect

Seismic effects can be created with the **Seismic effect** (![](./img/wp-content-uploads-2021-04-13-3-Seismic-effect.png)) function which can be found on the **Mass** tab. On the Seismic effect dialogue, all parameters can be set, which are required for the seismic analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

For the seismic effect creation, the existence of at least one pre-created mass combination and a response spectrum is required. To see how to define these, please go to Chapter [Masses](../7_0_masses/7_4_seismic-effect.md)!

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

A new seismic effect can be created by pressing the **New** button. More seismic effects can be created and saved. Change between different saved seismic effects is possible with the _**Name**_ dropdown menu.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Options of the **Seismic effect** dialogue have been separated into two tabs:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Seismic settings
- Additional effects

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Seismic settings

<!-- /wp:heading -->

<!-- wp:paragraph -->

In the _Settings_ (#1) panel, the main parameters of the seismic analysis can be set

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Mass combination:_ Choice of the used mass combination for the dynamic shape evaluation during the modal response spectrum analysis has to be done. The dropdown menu is automatically filled up with the pre-defined mass combinations. **The seismic analysis will only be performed for the mass combination which is selected here!**
- _Calculation method:_ Choice of the calculation method to be used for the seismic analysis. To see the differences between each calculation method, please see the _**[introductory part](./12_0_earthquake-analysis.md)**_ of this chapter!
- Main direction of the structure from X: The main direction of the structure can be seen using the black arrow (![](./img/wp-content-uploads-2021-04-ico-pointer.png)) tool, by clicking the start and end point of a vector in the modeling area. The other option is to set the angle between the main direction and the X-axis manually in the edit box with direct input. The direction, which is given will be the „1” direction, perpendicularly to this will be the „2” direction of the effect. The q1 and q2 factors correspond with these directions too.

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":9431,"width":464,"height":594,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-3-seismic.png)](./img/wp-content-uploads-2021-04-13-3-seismic.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

On the response spectrums panel (#2), the response spectrum can be selected which will be used for the seismic analysis.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9438,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-3-seismic2.png)](./img/wp-content-uploads-2021-04-13-3-seismic2.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

Handling of the response spectrums in ultimate and serviceability limit states can be the following:

<!-- /wp:paragraph -->

<!-- wp:list -->

- ULS response spectrum and use of qd factors: In this case choice of response spectrum (standard or user-defined) is possible only for the ULS checks. Deformations, which are necessary for the SLS checks are evaluated from the ULS results, using the qd displacement behavior factors

<!-- /wp:list -->

<!-- wp:list -->

- Response spectrum for ULS and SLS limit state: Choosing the _Elastic response spectrum for SLS_ option, different response spectrums can be set for ULS and SLS limit states. For ULS limit state, only standard or user-defined design spectrum, while for SLS limit state only standard or user-defined elastic response spectrum can be chosen from the dropdown menu

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

Clicking on the (![](./img/wp-content-uploads-2021-04-13-3-1-3buttons.png)) button will bring up the spectrum definition dialogue, where parameters of a spectrum can be checked, or even new ones can be created (see Chapter [Creating response spectrums](../7_0_masses/7_5_creating-response-spectrums.md))

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the Behaviour factors (#3) panel, behavior and displacement behavior factors can be set for the main directions (1,2,z).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The number of adjustable behavior factors are depending on the type of the applied response spectrum(s):

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                               | Behavior factor (q)                                                                                                                    | Displacement behavior factor (qd) |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| **ULS design spectrum and qd factors for SLS**                | Adjustable in case of standard response spectrum. In the case of user-defined spectrum, the spectrum containing it, cannot be adjusted | Adjustable                        |
| **Different response spectrums for ULS and SLS limit states** | Adjustable in case of standard response spectrum. In the case of user-defined spectrum, the spectrum containing it, cannot be adjusted | Cannot be adjusted                |

<!-- /wp:table -->

<!-- wp:paragraph -->

Behavior factors besides the type of the spectrum, are dependent on the following options:

<!-- /wp:paragraph -->

<!-- wp:list -->

- _Consider vertical seismic effect:_ If the option is turned on, vertical behavior factors can be set, and vertical seismic effects will be taken into consideration for the seismic analysis

<!-- /wp:list -->

<!-- wp:list -->

- _Same behavior in Horizontal XY directions:_ If the option is turned on, it is enough to define only one behavior parameter, it will be applied for both X and Y directions

<!-- /wp:list -->

<!-- wp:paragraph -->

At the bottom of the dialogue, in the Shown response spectrum panel (#4) the selected response spectrum _–design or elastic-_ of the dropdown menu can be seen. By hovering the mouse over the points of the graph, its value will be displayed graphically.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Additional effects

<!-- /wp:heading -->

<!-- wp:paragraph -->

On the **Additional Effects** tab of the **_Seismic Effect_** dialogue, the following settings can be adjusted:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Accidental torsional effects: In the case of spatial 3D models, effects of the uncertainties of load placements causing torsional effects also have to be taken into account. ConSteel calculates the effect automatically. For the calculation, storeys have to be defined, where the torsion effect is acting, and the eccentricity value, with which the mass points will be shifted.

<!-- /wp:list -->

<!-- wp:list -->

- _Second-order effect:_ Second-order effects have to be taken into account if the coefficient of the shift difference (θ) between the storeys is greater than 0,1. Consteel automatically calculates it and takes it into account. Storeys have to be pre-defined.

<!-- /wp:list -->

<!-- wp:paragraph {"align":"justify"} -->

Considered storeys have to be chosen in the _Considered storeys_ for accidental torsional and second-order effects (#1) panel. If there are storeys defined in the model (see Chapter [Portion Manager](/manual/model-view/portions-manager/)), they will be automatically loaded into the table. If the checkbox is turned on next to a storey, it will be taken into consideration during the seismic analysis.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

ConSteel 13 User Manual

<!-- /wp:paragraph -->

<!-- wp:image {"align":"left","id":21417,"width":76,"height":81,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2021-04-warning_croc.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

When specifying the levels, it is important to know that consteel takes the weights of the structure below the lowest level all of them to the lowest level by the torsional and second-order effects. This can be avoided by establishing a level 0 in the plane of the supports, so the weight distribution between the support and the first level will also be performed.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9451,"width":381,"height":487,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/13-3-additional-effects.png)](./img/wp-content-uploads-2021-04-13-3-additional-effects.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

At the _Accidental torsional effects_ (#2), consideration of the effect can be turned on or off. The following combinations can be chosen for the shift of the mass points:

<!-- /wp:paragraph -->

<!-- wp:list -->

- \+eaX+eaY, - eaX-eaY: Mass points will be shifted both for positive and negative directions in the global X and Y directions with the given value, but not mixed. It is a simplification, and it is reducing the number of seismic combinations
- \+eaX+eaY, +eaX-eaY, -eaX+eaY, - eaX-eaY: Mass points will be shifted both for positive and negative directions in the global X and Y directions, including mixed signs too, with the given value. It is the recommended way by Eurocode, but it increases the number of seismic combinations.

<!-- /wp:list -->

<!-- wp:paragraph -->

The value of the shift of the mass points can be given in the edit box with a percentage.

<!-- /wp:paragraph -->
