# Introduction

### What is Pangolin?

**Pangolin** is a Grasshopper plugin developed for creating, managing and directly analysing Consteel models, enabling structural design for a wide range of structures, from simple to complex, including freeform designs.

![alt text](<img/Pangolin logo.png>)

It allows users to define special [steel](../4_materials/index.md#create-steel) elements such as [tapered members](../6_structural/index.md#create-tapering), [beams with haunches](../6_structural/index.md#create-haunch), [library sections](../5_section/index.md#section-from-bank) or configurable [macro sections](../5_section/index.md#macro-section), such as cold-formed sections with [stiffeners](../5_section/index.md#intermediate-stiffener). It is possible to assign special [releases](../6_structural/index.md#create-release) and [supports](../6_structural/index.md#support-point), including [linking](../6_structural/index.md#new-link-2-points) the elements by using 7DOF definitions.
 
It also facilitates the use of loads, including [uniform](../7_loads/index.md#surface-load) or [linear](../7_loads/index.md#linear-surface-load-3-pts) surface loads that are distributed onto beams through [load transfer surfaces](../7_loads/index.md#load-transfer-surface). Pangolin supports defining [load combinations](../7_loads/index.md#load-combination) from individual [load cases](../7_loads/index.md#load-case) organized in load groups.

| ![alt text](<img/params, geometry,pangolin.png>) | 
|:--:| 
| *Typical Grasshopper script using Pangolin that creates a ConSteel model* |
 
For model management purposes facilitates the definition of [structural groups](../8_model/index.md#structural-group) and [model portions](../8_model/index.md#model-portion).
 
Ultimately, allows the creation of fully parametric [Consteel models](../8_model/index.md#consteel-model). However, models can be imported into Grasshopper via [live input](../10_I_O/index.md#consteel-input) from an active Consteel instance or using the [.smadsteel loader](../10_I_O/index.md#smadsteel-loader) component. These models can also be compared, aiding in version control.
 
Once created, a model can be saved as a .smadsteel file for future use or [sent directly](../10_I_O/index.md#consteel-connection) to Consteel for [analysis](../9_calculation/index.md#analysis-result-settings) using its specialized calculation tools.
Pangolin enables structural analysis and design within Consteel, including [first- and second-order analysis](../9_calculation/index.md#internal-force-results), [buckling analysis](../9_calculation/index.md#buckling-results), and [strength and buckling checks](../9_calculation/index.md#design-check-results). Results are directly accessible in the parametric environment, thus supporting iterative calculations. Also mainly for this purpose, Consteel’s unique scripting language, [Descript](../../../descript/15_1_introduction/index.md), can be [integrated with Pangolin](../10_I_O/index.md#descript) to enhance automatization.


|![alt text](<img/design workflow.png>) | 
|:--:| 
| *Typical design workflow for managing ConSteel models* |