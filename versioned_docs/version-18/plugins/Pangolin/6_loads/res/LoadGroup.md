

### Inputs

| Name                       | Id      | Description                                            |
| -------------------------- | ------- | ------------------------------------------------------ |
| Combinable Cases           | CC      | The load cases can be applied along with each other.   |
| Combination                | C       | Combination factor (psi.0)                             |
| Load Group Crane           | CSLGCra | Creates a Crane Load Group in ConSteel model.          |
| Load Group Meteorological  | CSLGMet | Creates a Meteorological Load Group in ConSteel model  |
| Load Group Snow            | CSLGSno | Creates a Snow Load Group in ConSteel model.           |
| Load Group Variable        | CSLGVar | Creates a Variable Load Group in ConSteel model.       |
| Load Group Wind            | CSLGWin | Creates a Wind Load Group in ConSteel model.           |
| Q1 factor                  | Q1      | Factor for representative value of Q1 variable action. |
| Fire Expansion             |         | Consider indirect actions caused by thermal expansion  |
| FE                         |         |                                                        |
| Frequent                   | F       | Frequent load level factor (psi.1)                     |
| Load Group Accidental      | CSLGAcc | Creates a Accidental Load Group in ConSteel model.     |
| Load Group Accidental Snow | CSLGAcS | Creates a AccidentalSnow Load Group in ConSteel model. |
| Load Group Fire            | CSLGFir | Creates a Fire Load Group in ConSteel model.           |
| Load Group Permanent       | CSLGPer | Creates a Permanent Load Group in ConSteel model.      |
| ConSteel Load Group        | LG      | Represents a Load Group in ConSteel model.             |
| Name                       | N       | Name of the created load group.                        |
| Quasi                      | Q       | Quasi permanent load level factor (psi.2)              |
| Safety factor (gamma.Q)    | SF      | Safety factor (gamma.Q)                                |

### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |