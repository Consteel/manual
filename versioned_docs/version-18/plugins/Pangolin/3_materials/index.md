# Materials

**Steel, concrete**

## Create Steel

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

![alt text](<img/material 1.png>)

## Create Concrete

### Inputs

| Name                     | Id     | Description                                |
| ------------------------ | ------ | ------------------------------------------ |
| Density [kg/m3]          | D      | Density, in kg/m3.                         |
| ElasticModulus [N/mm2]   | Ecm    | Secant Elastic modulus, in N/mm2.          |
| YieldStrain1 [1/1000]    | Ec1    | Yield strain #1, in 1/1000.                |
| YieldStrain2 [1/1000]    | Ec2    | Yield strain #2, in 1/1000.                |
| YieldStrain3 [1/1000]    | Ec3    | Yield strain #3, in 1/1000                 |
| UltimateStrain1 [1/1000] | Ecu1   | Ultimate strain #1, in 1/1000.             |
| UltimateStrain2 [1/1000] | Ecu2   | Ultimate strain #2, in 1/1000.             |
| UltimateStrain3 [1/1000] | Ecu3   | Ultimate strain #3, in 1/1000              |
| Exponent                 | Ex     | Exponent                                   |
| Fck [N/mm2]              | Fck    | Compression strength, in N/mm2.            |
| Fctk [N/mm2]             | Fctk   | Tension strength, in N/mm2.                |
| FinalCreep               | FCreep | Final creep                                |
| ElasticSafetyFactor      | GcE    | Elastic safety factor, gamma.cE, in N/mm2. |
| MaterialModel            | MM     | Material model type.                       |
| Name                     | N      | Name of the concrete material              |
| PoissonFactor            | V      | Poisson factor                             |
| ThermalExp [1/°C]        | TE     | Thermal expansion coefficient, in 1/°C.    |

### Outputs

| Name              | Id | Description                                       |
| ----------------- | -- | ------------------------------------------------- |
| ConSteel Concrete | C  | Represents a Concrete material in ConSteel model. |


![alt text](<img/material 2.png>)