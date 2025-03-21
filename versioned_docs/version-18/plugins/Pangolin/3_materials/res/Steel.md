

### Inputs

| Name                   | Id  | Description                                               |
| ---------------------- | --- | --------------------------------------------------------- |
| Density [kg/m3]        | D   | Density, in kg/m3.                                        |
| ElasticModulus [N/mm2] | E   | Elastic modulus, in N/mm2.                                |
| Fu1 [N/mm2]            | Fu1 | Ultimate strength, under thickness limit, in N/mm2.       |
| Fu2 [N/mm2]            | Fu2 | Ultimate strength, over thickness limit, in N/mm2.        |
| Fy1 [N/mm2]            | Fy1 | Yield strength, under thickness limit, in N/mm2.          |
| Fy2 [N/mm2]            | Fy2 | Yield strength, over thickness limit, in N/mm2.           |
| Name                   | N   | Name of the steel material.                               |
| PoissonFactor          | V   | Poisson factor.                                           |
| ThermalExpFire [1/°C]  | TEF | Thermal expansion coefficient in fire situation, in 1/°C. |
| ThermalExp [1/°C]      | TE  | Thermal expansion coefficient, in 1/°C.                   |
| ThicknessU [mm]        | TU  | Thickness limit for ultimate strength, in mm.             |
| ThicknessY [mm]        | TY  | Thickness limit for yield strength, in mm.                |

### Outputs

| Name           | Id | Description                                    |
| -------------- | -- | ---------------------------------------------- |
| ConSteel Steel | S  | Represents a Steel material in ConSteel model. |