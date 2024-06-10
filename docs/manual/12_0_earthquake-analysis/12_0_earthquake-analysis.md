---
sidebar_position: 1
---
# Earthquake analysis


Consteels can perform earthquake analysis is based on _**Modal response spectrum analysis**_ (MRSA), and it supports three different analysis types:

<!-- /wp:paragraph -->

<!-- wp:list -->

- All modal shapes, CQC summation: Consteel calculates the modal loads for all dynamic shapes, for all directions, and calculates the analysis results (displacements, internal forces) for each dynamic shape using first-order analysis. After this, it summarizes them with Eurocode’s CQC method. CQC summation method can give the highest expectable deformations and internal forces, based on a statistical method. Envelope diagrams of deformation and internal forces without signs are the result of the CQC summation

<!-- /wp:list -->

<!-- wp:list -->

- Single dominant mode: From the calculated dynamic shapes, Consteel chooses the dominant one for each direction, and performs the calculation for one dominant shape for each direction. Modal loads for each direction are the results of the method.

<!-- /wp:list -->

<!-- wp:list -->

- Selected modes, linear summation: With the modal shapes, chosen by the user, and with the combination factors for each shape Consteel creates a linear combination of vibration shapes and gives the results for all directions using the combined shapes. Modal loads for each direction are the results of the method.

<!-- /wp:list -->

<!-- wp:paragraph -->

Comparison of the three methods:

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                    | All modal shapes, CQC summation                                   | Single dominant mode                                                                                      | Selected modes, linear summation         |
| ---------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Dynamic calculation                | Required                                                          | Required                                                                                                  | Required                                 |
| Second order analysis              | Not possible                                                      | Yes                                                                                                       | Yes                                      |
| Stability calculations             | Not possible                                                      | Yes                                                                                                       | Yes                                      |
| Global check - cross section check | Yes                                                               | Yes                                                                                                       | Yes                                      |
| Global check - Stability check     | Not possible                                                      | Yes                                                                                                       | Yes                                      |
| Member check                       | Not possible                                                      | Yes                                                                                                       | Yes                                      |
| Masses taken into consideration    | Masses corresponding for each vibration shapes for all directions | 100% of all the masses in all directions |  Masses for the chosen vibration shapes with the consideration of the combination factors in all direction|
| Automation                         | Yes                                                               | Yes                                                                                    | Manual input required                                     |
| Second order sensitivity           | Yes                                                               | Yes                                                                                                       | Yes                                      |

<!-- /wp:table -->

<!-- wp:paragraph -->

Consteel combines the results of the Modal Response Spectrum Analysis with the 100% “+” 30% rule as shown below.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

a) $E_{E.dx}\quad +\quad 0,30 E_{E.dy}\quad + \quad 0,30 E_{E.dz}$

b) $0,30E_{E.dx}\quad +\quad E_{E.dy}\quad + \quad 0,30 E_{E.dz}$

c) $0,30E_{E.dx}\quad +\quad 0,30 E_{E.dy}\quad + \quad E_{E.dz}$

<!-- /wp:paragraph -->
