# Calculation

Analysis and design result return. 

## Analysis Result Settings


### Inputs

| Name          | Id | Description                 |
| ------------- | -- | --------------------------- |
| BeamForces    | BF | Enable Beam force results   |
| PlateForces   | PF | Enable Plate force results  |
| PlateStresses | PS | Enable Plate stress results |
| Reaction      | R  | Enable Reaction results     |

### Outputs

| Name                     | Id  | Description                                                |
| ------------------------ | --- | ---------------------------------------------------------- |
| Analysis Result Settings | ARS | Analysis Result Settings describing which results to save. |


![alt text](<img/calculation 1.png>) 


## Design Settings


### Inputs

| Name                   | Id     | Description                                         |
| ---------------------- | ------ | --------------------------------------------------- |
| BucklingCheck          | BC     | Include buckling checks.                            |
| BucklingPortion        | BP     | Model portion considered for buckling calculations. |
| CalcOrder              | O      | Calculation order.                                  |
| ColdFormedChecks       | CF     | Include coldformed checks according to EN1993-1-3.  |
|              Khi          | K      | Khi reduction factor for buckling calculation.      |
| LoadCombinations       | LCombs | Load Combinations to be calculated.                 |
| ModelPortion           | MP     | Model portion to be calculated.                     |
| SteelCrossSectionCheck | SC     | Steel cross section check toggle.                   |
| UseGm1                 | GM1    | Use gamma.m1 instead of gamma.m0.                   |
| AlphaUlt               | A      | Alpha.ult stress reduction factor.                  |
| BucklingFactor         | BF     | Which buckling factor should be used.               |

### Outputs

| Name            | Id | Description      |
| --------------- | -- | ---------------- |
| Design Settings | DS | Design Settings. |

![alt text](<img/calculation 2.png>) 

## Buckling Results



### Inputs

| Name              | Id   | Description                     |
| ----------------- | ---- | ------------------------------- |
| CSBeam            | CSB  | Beam returned from ConSteel.    |
| CSLoadCombination | CSLC | Load combination from Consteel. |

### Outputs

| Name           | Id  | Description                                                                                  |
| -------------- | --- | -------------------------------------------------------------------------------------------- |
| Alpha.crit     | A   | Alpha crit eigen factors of the buckling shapes.                                             |
| Sensitivity    | MRF | Model Relevance Factors, Buckling sensitivity of the specified beam for the buckling shapes. |
| Buckling shape | BS  | Buckling shape displacements.                                                                |

![alt text](<img/calculation 3.png>) 

## Design Check Results



### Inputs

| Name   | Id | Description                  |
| ------ | -- | ---------------------------- |
| CSBeam | B  | Beam returned from ConSteel. |

### Outputs

| Name               | Id     | Description                                                                           |
| ------------------ | ------ | ------------------------------------------------------------------------------------- |
| Combinations       | C      | Significant combinations.                                                             |
| Sign. Result       | RS     | Significant results.                                                                  |
| Sign. check        | SC     | Describes which design check's result is the significant result.                      |
| Stab. Result       | RStab  | Global Stability check results.                                                       |
| Plast. Result      | RPlast | Plastic interaction check results.                                                    |
| Sign. plast. check | SPC    | Describes which plastic interaction check's result is the significant plastic result. |
| Parameters         | P      | Parameters of the result point on the beam's edge.                                    |
| Cons. Result       | RCons  | Conservative interaction check results.                                               |
| El. Result         | REl    | Elastic check results.                                                                |
| Pure Result        | RPure  | Pure (internal force) check results.                                                  |
| Pure N Result      | RN     | Pure normal force check results.                                                      |
| Pure My Result     | RMy    | Pure My bending check results.                                                        |
| Pure Mz Result     | RMz    | Pure Mz bending check results.                                                        |
| Pure Vy Result     | RVy    | Pure Vy shear check results.                                                          |
| Pure Vz Result     | RVz    | Pure Vz shear check results.                                                          |
| Pure T Result      | RT     | Pure torsion check results.                                                           |

![alt text](<img/calculation 4.png>) 

## Displacement Results



### Inputs

| Name              | Id    | Description                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------- |
| CSBeam            | B     | Beam returned from ConSteel.                                            |
| CSLoadCombination | LComb | Load Combination of the results.                                        |
| CalcOrder         | O     | First or second order calculation results.                              |
| Parameters        | P     | Displacement along global Y axis, in mm.                                |
| Displacement      | D     | Displacement object, use this to generate a deformed mesh for the beam. |

### Outputs

| Name      | Id  | Description                                |
| --------- | --- | ------------------------------------------ |
| X [mm]    | X   | Displacement along global X axis, in mm.   |
| Y [mm]    | Y   | Displacement along global Y axis, in mm.   |
| Z [mm]    | Z   | Displacement along global Z axis, in mm.   |
| Rx [deg]  | Rx  | Rotation around global X axis, in degrees. |
| Ry [deg]  | Ry  | Rotation around global Y axis, in degrees. |
| Rz [deg]  | Rz  | Rotation around global Z axis, in degrees. |
| W [rad/m] | W   | Warping, in rad/m.                         |
| Rxx [deg] | Rxx | Rotation around local x axis, in degrees.  |

![alt text](<img/calculation 5.png>) 

## Displaced Mesh



### Inputs

| Name                | Id | Description                                                                                                         |
| ------------------- | -- | ------------------------------------------------------------------------------------------------------------------- |
| DisplacementResults | DR | Displacement Results                                                                                                |
| Scale               | S  | Scaling of the displacement, use to exagerate displacement shapes for visual inspection of the displacement trends. |

### Outputs

| Name | Id | Description     |
| ---- | -- | --------------- |
| Mesh | M  | Displaced mesh. |

![alt text](<img/calculation 6.png>) 

## Internal Force Results

### Inputs

| Name              | Id    | Description                                        |
| ----------------- | ----- | -------------------------------------------------- |
| CSBeam            | B     | Beam returned from ConSteel.                       |
| CSLoadCombination | LComb | Load Combination of the results.                   |
| CalcOrder         | O     | First or second order calculation results.         |

### Outputs


| Name              | Id    | Description                                        |
| ----------------- | ----- | -------------------------------------------------- |
| Parameters        | P     | Parameters of the result point on the beam's edge. |
| N [kN]            | N     | Normal force, in kN.                               |
| Vy [kN]           | Vy    | Shear force in local y direction, in kN.           |
| Vz [kN]           | Vz    | Shear force in local z direction, in kN.           |
| My [kNm]          | My    | Bending moment around local y, in kNm.             |
| Mz [kNm]          | Mz    | Bending moment around local z, in kNm.             |
| T [kNm]           | T     | Torsion around local x, in kNm.                    |
| B [kNm2]          | B     | Bimoment, in kNm2.                                 |


![alt text](<img/calculation 7.png>)