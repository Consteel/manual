---
sidebar_position: 2
---
# What's new in Consteel 19?

This year, we focused on enhancing multiple key aspects of the structural design process in Consteel 19, from **wind load generation** and **geometry repair processes**, to **fire and connection design**, and even **special tapered structure modeling**. Some of these features build on last year’s innovations, while others are making their first appearance in Consteel 19. 

## [FALCON](../plugins/FALCON/1_introduction/index.md)

**FALCON** is a universal **wind load-generation plugin** powered by computational fluid dynamics simulation. It enables structural engineers to determine realistic wind loads for any building configuration while maintaining  compliance with design standards.

From the beginning, our primary goal has been to deliver a transparent and intuitive tool designed for practical, everyday engineering use.

Therefore, the focus is not on the simulation process itself— which functions as an internal engine supporting wind load generation — but rather on the **post-processing** of simulation results.
This approach enables engineers to **automatically generate** familiar **wind zones** and load objects, transforming complex CFD data into clear, ready-to-use design information.
 
**What makes FALCON unique:**

- Seamless integration with Consteel for direct load application
- Compatible with national annexes and wind design standards
- Realistic wind-load generation using CFD (computational fluid dynamics)
- Automatic mapping and zoning of surface pressures for precise, comparable loads with the standards

:::info
FALCON is implemented and can be purchased as a plugin for Consteel.
:::

[Read more](https://consteelsoftware.com/products/falcon/) and [watch the intro video](https://www.youtube.com/watch?v=eh-Fu_XEEvs) to get a quick overview of FALCON.

![alt text](img/image-9.png)

## NEW CONNECTION DESIGN OPTIONS

The existing connection design options in Consteel — Consteel Joint and the direct link to IDEA StatiCa Connection — have now been expanded with two additional capabilities:

- [IDEA StatiCa Checkbot export](../manual/14_0_joint-module/14_6_joint-export.md#1idea-statica-checkbot) for designing eccentric connections
- [Fictive Joint](../manual/14_0_joint-module/14_6_joint-export.md#1fictive-joint) – a tabular export of joint loads for use in any external connection design workflow

Together, these enhancements offer a more flexible and transparent end-to-end workflow, minimize manual intervention, and help ensure consistent and reliable connection design across the entire project.

Learn more to understand the differences between the [IDEA StatiCa Connection link and Checkbot export in Consteel](https://consteelsoftware.com/knowledgebase/idea-statica-connection-vs-idea-statica-checkbot/), as well as [Consteel Joint and Fictive Joint](https://consteelsoftware.com/knowledgebase/consteel-joint-vs-fictive-joint/).

## NEW [DESCRIPT](../descript/15_1_introduction/index.md) COMMANDS

As part of our ongoing commitment to continuously improve and expand our tools, we’ve once again introduced powerful updates to our built-in scripting environment, **Descript**, which is becoming an increasingly important part of everyday engineering workflows.

Among this year’s new functions, you’ll find:

- back-to-back cold-formed sections ([LOAD_SECTION_MACRO](https://docs.consteelsoftware.com/docs/descript/command-reference/load_section_macro/#double-mirrored-c))
- shearfield ([CREATE](../descript/command-reference/create/create.md#shear-field), [GET](../descript/command-reference/get/get.md#shear-field), [SET](../descript/command-reference/set/set.md#shear-field))
- frame corner ([GET](../descript/command-reference/get/get.md#frame-corner-wizard), [SET](../descript/command-reference/set/set.md#frame-corner-wizard))
- sway imperfection ([CREATE](../descript/command-reference/create/create.md#sway-denominator-sway-denominator-is), [GET](../descript/command-reference/get/get.md#initial-sway), [SET](../descript/command-reference/set/set.md#initial-sway))
- reinforced concrete column sections ([LOAD_SECTION_MACRO](../descript/command-reference/load_section_macro/load_section_macro.md))
- smart link ([CREATE](../descript/command-reference/create/create.md#smart-link), [GET](../descript/command-reference/get/get.md#smart-link), [SET](../descript/command-reference/set/set.md#smart-link))

All designed to **accelerate** your everyday work and empower your structural projects with greater efficiency and flexibility.

## IMPROVEMENTS OF FIRE DESIGN

Zinc coating can enhance the fire resistance of steel members by slowing the temperature rise during exposure. With such coatings, achieving up to 30 minutes of fire resistance is possible even without intumescent paint or additional protection. This **effect of hot-dip galvanizing** can now be considered in Consteel through modification of surface emissivity factor.

When **intumescent paints** are applied, **real paint product data** can now be assigned directly to members. Consteel can determine not just the critical temperature, but also the **required paint thickness** to meet the desired fire rating — a valuable tool that helps designers verify in advance whether the chosen fire protection strategy will be effective and practical.

![Improvements in fire design](img/fire%20protection.png)
  *Improvements in fire design*

## EXTENSION OF LOAD TRANSFER SURFACE ASSIGNMENT

Previously, bar members could only be assigned to Load Transfer Surfaces if they were positioned exactly in the same plane.
Now, this limitation has been removed — bar members can also be included in load distribution when they are slightly offset from the surface, within a user-defined tolerance.

This new flexibility makes load modeling much more intuitive and adaptable, especially for complex structures.

![Extension of Load Transfer Surface Assignment](img/Extension%20of%20Load%20Transfer%20Surface%20Assignment.png)
 *Extension of Load Transfer Surface Assignment*

## ECCENTRIC MEMBERS

**Beam element**s can now be positioned with defined **eccentricities** — similar to how loads, supports, and other components have long been handled. The range of available eccentricity options has been extended to include locations typical for welded built-up members, such as **the top of web**, **bottom of web**, and **mid-web**. This enhancement makes it much easier to model structures accurately with **flexible reference systems**.

![Eccentric member](img/Eccentric%20member.png)

## TAPERED BUILT-UP MEMBERS MADE OF SEVERAL PLATES

In welded built-up members commonly used in metal buildings, the plate thickness often varies along the length to optimize material use according to internal forces. Previously, each thickness change required defining a new cross-section.

The new **tapered welded built-up member** component eliminates this need — it allows defining **lists of plates** for flanges and webs with **different thicknesses** along the member. These lists can be freely edited, and Consteel automatically generates the corresponding finite element model, significantly simplifying and speeding up the modeling process.

![Tapered Built-up Members Made of Several Plates](img/Tapered%20Built-up%20Members%20Made%20of%20Several%20Plates.png)

## MODEL REPAIR POSSIBILITIES

Small geometric errors in structural models are often encountered due to modelling mistakes or incorrect importing from other design software. These errors then can cause problems in finite element model generation or lead to unexpected structural behavior.

With Consteel’s new **Geometric repair tools** such issues can be easily and quickly solved. These tools have the capability to reconnect element ends to a neighboring element within a user defined tolerance, make almost vertical columns perfectly vertical and many more.

## INTRODUCTORY VIDEO

Watch our introductory video of the new version on [YouTube](https://www.youtube.com/watch?v=NRTB3qVxZLA&t=4s). 