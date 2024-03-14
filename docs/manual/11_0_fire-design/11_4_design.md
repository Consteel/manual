---
sidebar_position: 4
---
# Design

### Fire design on elevated temperature

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

_**ConSteel**_ performs cross section resistance and buckling checks for all steel members which are subjected to fire effect by using the adequate formulas from the EuroCode 3 standard.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Classification of cross-section (EN 1993-1-2 4.2.2)**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

Cross-sections are classified as for normal tempereature (EN 1993-1-1) but using the reduced value for ε.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$\\varepsilon = 0,85 \\left \[\\dfrac {235} {f_y} \\right ] ^{0,5}$

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Tension (EN 1993-1-2 4.2.3.1)**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Permanent temperature ((1))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$N\_{t,fi,\\Theta,Rd} = k\_{y,\\Theta}\\cdot \\left \[\\dfrac {\\gamma\_{M,0}} {\\gamma\_{M,fi}} \\right ]\\cdot N\_{pl,Rd}\\qquad \\qquad$ (Class 1-4)

Where  
$k\_{y,\\Theta}\\qquad \\qquad$ acc. to EN 1993-1-2 Table 3.1  
$N\_{pl,Rd}\\qquad \\qquad$ the design resistance for normal temperature

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Varying temperature ((2))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$N\_{t,fi,t,Rd} = A\_{non,t}\\cdot \\dfrac {f_y} {\\gamma\_{M,fi}}\\qquad \\qquad$ (Class 1-4)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Compression\*\*** (Class 1-3: EN 1993-1-2 4.2.3.2, Class 4: + Annex E.2)\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Permanent temperature ((1))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$N\_{c,fi,t,Rd} = A\\cdot \\dfrac {k\_{y,\\Theta}\\cdot f_y} {\\gamma\_{M,fi}}\\qquad \\qquad$ (Class 1-3)

$N\_{c,fi,t,Rd} = A\_{eff}\\cdot \\dfrac {k\_{p0,2,\\Theta}\\cdot f_y} {\\gamma\_{M,fi}}\\qquad \\qquad$ (Class 4)

Where  
$k\_{p0,2,\\Theta}\\qquad \\qquad$ acc. to EN 1993-1-2 Table 3.1

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Varying temperature ((6))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Conservative way, case (1) where $\\Theta_a = \\Theta\_{a,max}$

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Bending (EN 1993-1-2 Class 1-2: 4.2.3.3; Class 3: 4.2.3.4; Class 4: + Annex E.2)**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Permanent temperature ((1))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$M\_{fi,\\Theta ,Rd} = k\_{y,\\Theta}\\cdot \\dfrac {\\gamma\_{M,0}} {\\gamma\_{M,fi}}\\cdot M\_{Rd}\\qquad $

Where  
$M\_{Rd}=M\_{pl.Rd}\\qquad $ or in the case of shear: $M\_{Rd}=M\_{V.Rd}\\qquad \\qquad $ (Class 1-2)  
$M\_{Rd}=M\_{el.Rd}\\qquad $ or in the case of shear: $M\_{Rd}=M\_{V.Rd}\\qquad \\qquad $ (Class 3)  
$M\_{Rd}=M\_{eff.Rd}\\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\qquad \\qquad $ (Class 4)  
$k\_{y,\\Theta}\\qquad \\qquad$ acc. to EN 1993-1-2 Table 3.1

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Varying temperature ((2))

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$M\_{fi,t,Rd} = W\_{pl,non,t}\\cdot \\dfrac {f_y} {\\gamma\_{M,fi}}\\qquad \\qquad $ (Class 1-2)  
$M\_{fi,t,Rd} = k\_{y,\\Theta ,max}\\cdot \\dfrac {\\gamma\_{M,0}} {\\gamma\_{M,fi}}\\cdot \\dfrac {1} {\\kappa_1\\cdot \\kappa_2}\\qquad \\qquad $ (Class 3)  
$M\_{fi,t,Rd} = k\_{p0,2,\\Theta ,max}\\cdot \\dfrac {\\gamma\_{M,0}} {\\gamma\_{M,fi}}\\cdot \\dfrac {1} {\\kappa_1\\cdot \\kappa_2}\\cdot M\_{eff,Rd}\\qquad \\qquad $ (Class 4)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Shear (EN 1993-1-2 Class 1-2: 4.2.3.3(6); Class 3: 4.2.3.4(4); Class 4: + Annex E.2)**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Permanent temperature

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$V\_{fi,t,Rd} = k\_{y,\\Theta ,web}\\cdot \\dfrac {\\gamma\_{M,0}} {\\gamma\_{M,fi}}\\cdot V\_{Rd}\\qquad \\qquad $ (Class 1-4)

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":20,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

Varying temperature

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$k\_{y,\\Theta ,web}\\qquad \\qquad $ the hottest point in the web

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**In case of complex internal forces _ConSteel_ use the conservative interaction formula neglecting the effect of shear:**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$\\dfrac {N\_{fi,Ed}} {N\_{fi,\\Theta ,Ed}}+\\dfrac {M\_{y,fi,Ed}} {M\_{y,fi,\\Theta ,Ed}}+\\dfrac {M\_{z,fi,Ed}} {M\_{z,fi,\\Theta ,Ed}}\\leq 1\\qquad \\qquad $

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Global stability resistance**

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

To calculate the global stability resistance for fire design situation, _ConSteel_ uses EuroCode General method (EN 1993-1-1 6.3.4) as for normal temperature but using the proper buckling curves:

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

For compression

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$\\chi \_{fi}=\\dfrac {1}{\\varphi\_{\\Theta}+\\sqrt{\\varphi\_{\\Theta}^2-\\bar{\\lambda}\_{\\Theta}^2}}$

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

For bending

<!-- /wp:paragraph -->

<!-- wp:paragraph {"editorskit":{"indent":40,"devices":false,"desktop":true,"tablet":true,"mobile":true,"loggedin":true,"loggedout":true,"acf_visibility":"","acf_field":"","acf_condition":"","acf_value":"","migrated":false,"unit_test":false}} -->

$\\chi \_{LT,fi}=\\dfrac {1}{\\phi\_{LT,\\Theta ,com}+\\sqrt{\\phi\_{LT,\\Theta ,com}^2-\\bar{\\lambda}\_{LT,\\Theta ,com}^2}}$

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Critical temperature calculation

<!-- /wp:heading -->

<!-- wp:paragraph {"align":"justify"} -->

The critical temperature calculation can be activated in the design settings window. This option is only active if the following conditions are met

<!-- /wp:paragraph -->

<!-- wp:list {"type":"a"} -->

- at least one member with reactive fire protection
- at least one fire load case set to room temperature analysis
- at least one load combination with fire load case is selected for global design

<!-- /wp:list -->

<!-- wp:image {"align":"center","id":9402,"width":530,"height":370,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/12-4-critical-temperature.png)](./img/wp-content-uploads-2021-04-12-4-critical-temperature.png)

<!-- /wp:image -->

<!-- wp:paragraph {"align":"justify"} -->

The results of the calculation can be queried in the Design Parameters drop-down menu. The results are displayed in a colored graphic. You can also open the Section Module from here by right-clicking on a given section, where the details of the critical temperature calculation can be found. The first line of the summary reads whether the profile should be protected or not, and the critical temperature field contains the relevant part of EC, the applied fire curve, the unprotected fire resistance time and temperature reached of the profile and the required fire resistance time.

<!-- /wp:paragraph -->

<!-- wp:image {"align":"center","id":9408,"width":822,"height":365,"sizeSlug":"large","linkDestination":"media"} -->

[![](./img/wp-content-uploads-2021-04-12-4-critical-temperature2-1024x455.png)](https://consteelsoftware.com/wp-content/uploads/2021/04/12-4-critical-temperature2.png)

<!-- /wp:image -->

<!-- wp:image {"align":"center","id":9415,"width":530,"height":378,"sizeSlug":"large","linkDestination":"media"} -->

[![](https://consteelsoftware.com/wp-content/uploads/2021/04/12-4-critical-temperature3.png)](./img/wp-content-uploads-2021-04-12-4-critical-temperature3.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
