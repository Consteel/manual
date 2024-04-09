---
sidebar_position: 2
---
# Model Check (Diagnostics)

In _ConSteel_ there is a possibility to perform a model check previous to executing any calculations. This function automatically runs before starting the finite element mesh generation or analysis but can be initiated any time (switching on the “Diagnostics” in the **View** menu and run) examining the recent state of the model. The checks performed when intiating diagnostics automatically and by the user are not exactly the same.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"justify"} -->

There are two kinds of diagnostics messages:

<!-- /wp:paragraph -->

<!-- wp:list -->

- **Error**: the errors make the calculations impossible or meaningless to execute so the detected errors stop further calculations
- **Warning**: the warnings allow the calculations but notice the possible errors

<!-- /wp:list -->

<!-- wp:paragraph -->

One part of the model checks are performed on the structural model (basic check), where basic requirements for the normal performance of a model are controlled; the other part is performed on the generated finite element model (pre-calculation check).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The following basic checks are performed:

<!-- /wp:paragraph -->

<!-- wp:list -->

- existence of load on the structure
- existence of support on the structure
- length of bars, line loads and line supports
- value for the thickness and finite element size for surface members
- overlap, length and compatibility of haunches
- multiple supports on the same place
- compatibility of tension bars

<!-- /wp:list -->

<!-- wp:paragraph -->

The following pre-calculation checks are performed:

<!-- /wp:paragraph -->

<!-- wp:list -->

- overhang of line loads and line supports
- point loads and point supports are not on the model
- overlap of surface members
- overlap of bar members
- very small distance (&lt; 5 mm) between points or lines of surfaces, bars, loads or supports (the limit distance can be set in the **Options** menu)

<!-- /wp:list -->

<!-- wp:paragraph -->

The object in which the errors or warnings are detected can be selected and deleted from the diagnostics results table (in the middle of the right tables).

<!-- /wp:paragraph -->
