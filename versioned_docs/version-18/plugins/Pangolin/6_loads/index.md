# Loads

**Nodal, line, uniform and linearly changing surface loads, load combinations, load groups, load cases, load transfer surfaces, thermal, elongation and pretension loads, prescribed displacement.**

## Nodal Load



### Inputs

| Name               | Id  | Description                                                                                                                                                                                      |
| ------------------ | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Eccentricity type  | E   | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point, top-left edge, etc.                                                                         |
| EccentricityY [mm] | EY  | Eccentricity in Y direction.                                                                                                                                                                     |
| EccentricityZ [mm] | EZ  | Eccentricity in Z direction.                                                                                                                                                                     |
| LoadCase           | LC  | The Case which this load should belong to.                                                                                                                                                       |
| CoordinateSystem   | CS  | The coordinate system in which the load is interpreted. Note: if use local coordinate system is true, this will have no effect. If left empty and use LCS is false, defaults to World XY.        |
| Multiplier         | Mul | Multiplication factor for the forces. Eg.: setting this to 2 is the same as doubling all the forces.                                                                                             |
| Mx [kNm]           | Mx  | Bending moment in kNm -s acting around the x axis.                                                                                                                                               |
| My [kNm]           | My  | Bending moment in kNm -s acting around the y axis.                                                                                                                                               |
| Mz [kNm]           | Mz  | Bending moment in kNm -s acting around the z axis.                                                                                                                                               |
| Name               | N   | Name of the created point load in ConSteel model.                                                                                                                                                |
|                    |     | Represents a Node Load in ConSteel model.                                                                                                                                                        |
|                    |     | Creates a Node Load in ConSteel model using the given resultant vectors.                                                                                                                         |
| ActionPoint        | P   | The action point of this load. Note: the action point must be on the structural object's reference geometry. (Hint: you can connect a CSPointSupport or other point like objects directly here.) |
| StructuralObject   | SO  | The structural object on which this load should act.                                                                                                                                             |
| X [kN]             | X   | Force in kN/m -s acting along the x axis, at the line load's start point.                                                                                                                        |
| Y [kN]             | Y   | Force in kN/m -s acting along the y axis, at the line load's start point.                                                                                                                        |
| Z [kN]             | Z   | Force in kN/m -s acting along the z axis, at the line load's start point.                                                                                                                        |

### Outputs

| Name                  | Id         | Description |
| --------------------- | ---------- | ----------- |
| Node Load From Vector |            |             |
| ConSteel Node Load    | CSNodeLoad |             |

![alt text](<img/load 8.png>) 

## Line Load



### Inputs

| Name               | Id  | Description                                                                                                                                                                                                                                                |
| ------------------ | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DirectionType      | DT  | Load direction type: Global=global coord sys, Local=structural object's coord sys, User=provided coord sys in next param, Projection=the force is projected onto the global coordinate system (eg EN snow load).                                           |
| Eccentricity type  | E   | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point, top-left edge, etc.                                                                                                                                   |
| EccentricityY [mm] | EY  | Eccentricity in Y direction.                                                                                                                                                                                                                               |
| EccentricityZ [mm] | EZ  | Eccentricity in Z direction.                                                                                                                                                                                                                               |
| ActionEdge         | AE  | The edge on which this load should act. Note: only taken into account in case of structural plates. In case of structural beams, the load always acts on the beam's reference edge.                                                                        |
| End1               |     | From which end is the line load startpoint offset by the Pos1 distance below.                                                                                                                                                                              |
| End2               |     | From which end is the line load endpoint offset by the Pos2 distance below. Note: the endpoint can be relative to the startpoint.                                                                                                                          |
| Line Snow Load     |     | Creates a Line Load in ConSteel model.                                                                                                                                                                                                                     |
| LoadCase           | LC  | The Case which this load should belong to.                                                                                                                                                                                                                 |
| CoordinateSystem   | CS  | The coordinate system in which the load is interpreted. Note: Only taken into account if DirectionType is set to UserCoordinateSystem. The provided coordinate system will be projected so that it's X axis is tangential to the referenced edge's X axis. |
| Multiplier         | Mul | Multiplication factor for the forces. Eg.: setting this to 2 is the same as doubling all the forces.                                                                                                                                                       |
| Name               | N   | Name of the created Line load.                                                                                                                                                                                                                             |
| Pos1 [mm]          | P1  | Offset position of the line load's startpoint, as measured from the end specified by End1, in mm-s.                                                                                                                                                        |
| Pos2 [mm]          | P2  | Offset position of the line load's endpoint, as measured from the end specified by End2, in mm-s.                                                                                                                                                          |
| StructuralObject   | SO  | The structural object on which this load should act.                                                                                                                                                                                                       |
| X1 [kN/m]          | X1  | Force in kN/m -s acting along the x axis, at the line load's start point.                                                                                                                                                                                  |
| X2 [kN/m]          | X2  | Force in kN/m -s acting along the x axis, at the line load's end point. If left empty, the load will be constant along the edge. If specified, the load will linearly change from the start to the endpoint.                                               |
| Y1 [kN/m]          | Y1  | Force in kN/m -s acting along the y axis, at the line load's start point.                                                                                                                                                                                  |
| Y2 [kN/m]          | Y2  | Force in kN/m -s acting along the y axis, at the line load's end point. If left empty, the load will be constant along the edge. If specified, the load will linearly change from the start to the endpoint.                                               |
| Z1 [kN/m]          | Z1  | Force in kN/m -s acting along the z axis, at the line load's start point.                                                                                                                                                                                  |
| Z2 [kN/mm]         | Z2  | Force in kN/m -s acting along the z axis, at the line load's end point. If left empty, the load will be constant along the edge. If specified, the load will linearly change from the start to the endpoint.                                               |

### Outputs

| Name               | Id | Description                              |
| ------------------ | -- | ---------------------------------------- |
| ConSteel Line Load | LL | Represents a Line Load in ConSteel model |

![alt text](<img/load 2.png>) 

## Linear Surface Load 3 Pts



### Inputs

| Name              | Id  | Description                                                                                                                                                                                                                                                       |
| ----------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name              | N   | Name of the created Surface load.                                                                                                                                                                                                                                 |
| LoadCase          | LC  | The Case which this load should belong to.                                                                                                                                                                                                                        |
| LoadBearingObject | LO  | The object on which this load should act. Eg.: a structural plate, or load transfer surface.                                                                                                                                                                      |
| Polygon           | P   | The polygon on which this load should act. Note: If left empty the load will act on the bearing object's whole reference polygon. Only specify this if you wish to act on a smaller part of the bearing object's surface.                                         |
| DirectionType     | DT  | Load direction type: Global=global coord sys, Local=structural object's coord sys, User=provided coord sys in next param, Projection=the force is projected onto the global coordinate system (eg EN snow load).                                                  |
| CoordinateSystem  | CS  | The coordinate system in which the load is interpreted. Note: Only taken into account if DirectionType is set to UserCoordinateSystem. The provided coordinate system will be projected so that is's Z axis is paralell with the reference polygon's normal axis. |
| LoadAxis          | LA  | The axis on which the load acts.                                                                                                                                                                                                                                  |
| Point1            | P1  | First point where the load is specified. Note: the point will be projected onto the plane.                                                                                                                                                                        |
| Q1 [kN/m2]        | Q1  | Force in kN/m2 -s acting on P1 point.                                                                                                                                                                                                                             |
| Point2            | P2  | Second point where the load is specified. Note: the point will be projected onto the plane.                                                                                                                                                                       |
| Q2 [kN/m2]        | Q2  | Force in kN/m2 -s acting on P2 point.                                                                                                                                                                                                                             |
| Point3            | P3  | Third point where the load is specified. Note: the point will be projected onto the plane.                                                                                                                                                                        |
| Q3 [kN/m2]        | Q3  | Force in kN/m2 -s acting on P3 point.                                                                                                                                                                                                                             |
| Multiplier        | Mul | Multiplication factor for the forces. Eg.: setting this to 2 is the same as doubling all the forces.                                                                                                                                                              |

### Outputs

| Name          | Id | Description                        |
| ------------- | -- | ---------------------------------- |
| CSSurfaceLoad | SL | The created ConSteel Surface Load. |

![alt text](<img/load 3.png>) 

## Node Load From Vector



### Inputs

| Name                | Id  | Description                                                                                                                                                                                      |
| ------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name                | N   | Name of the created node load.                                                                                                                                                                   |
| LoadCase            | LC  | The Case which this load should belong to.                                                                                                                                                       |
| StructuralObject    | SO  | The structural object on which this load should act.                                                                                                                                             |
| ActionPoint         | P   | The action point of this load. Note: the action point must be on the structural object's reference geometry. (Hint: you can connect a CSPointSupport or other point like objects directly here.) |
| Use LCS             | LCS | If set to true, the load will be interpreted in the given structural object's own local coordinate system, and the passed in coordinate system parameter will be ignored.                        |
| CoordinateSystem    | CS  | The coordinate system in which the load is interpreted. Note: if use local coordinate system is true, this will have no effect. If left empty and use LCS is false, defaults to World XY.        |
| ForceVector         | F   | The sum vector of forces acting at this point. Note: this will be disassembeld into it's component vectors according to the used coordinate system.                                              |
| BendingMomentVector | M   | The sum vector of the bending moments acting at this point. Note: this will be disassembeld into it's component vectors according to the used coordinate system.                                 |
| Multiplier          | Mul | Multiplication factor for the forces. Eg.: setting this to 2 is the same as doubling all the forces.                                                                                             |
| Eccentricity type   | E   | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point, top-left edge, etc.                                                                         |
| Eccentricity Y      | EY  | Eccentricity in Y direction.                                                                                                                                                                     |
| Eccentricity Z      |     | EZ                                                                                                                                                                                               |

### Outputs

| Name       | Id | Description |
| ---------- | -- | ----------- |
| CSNodeLoad |    | NL          |

![alt text](<img/load 4.png>) 

## Prescribed Displacement



### Inputs

| Name             | Id | Description                                                                                  |
| ---------------- | -- | -------------------------------------------------------------------------------------------- |
| CoordinateSystem | CS | The coordinate system in which the load is interpreted. If left empty, defaults to World XY. |
| LoadCase         | LC | The Case which this load should belong to.                                                   |
| Name             | N  | Name of the created Prescribed Displacement.                                                 |
| StructuralObject | SO | The structural object on which this load should act.                                         |
| XX [deg]         | XX | Prescribed displacement in degrees, around X direction of the local coordinate system.       |
| X [mm]           | X  | Prescribed displacement in mm, in X direction of the local coordinate system.                |
| YY [deg]         | YY | Prescribed displacement in degrees, around Y direction of the local coordinate system.       |
| Y [mm]           | Y  | Prescribed displacement in mm, in Y direction of the local coordinate system.                |
| ZZ [deg]         | ZZ | Prescribed displacement in degrees, around Z direction of the local coordinate system.       |
| Z [mm]           | Z  | Prescribed displacement in mm, in Z direction of the local coordinate system.                |

### Outputs

| Name                                  | Id | Description                                             |
| ------------------------------------- | -- | ------------------------------------------------------- |
| ConSteel Prescribed Displacement Load | PD | Represents a prescribed displacement in ConSteel model. |

![alt text](<img/load 5.png>) 

## Surface Load



### Inputs

| Name                | Id  | Description                                                                                                                                                                                                                                                       |
| ------------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DirectionType       | DT  | Load direction type: Global=global coord sys, Local=structural object's coord sys, User=provided coord sys in next param, Projection=the force is projected onto the global coordinate system (eg EN snow load).                                                  |
| Load Bearing Object | LO  | The object on which this load should act. Eg.: a structural plate, or load transfer surface.                                                                                                                                                                      |
| LoadCase            | LC  | The Case which this load should belong to.                                                                                                                                                                                                                        |
| CoordinateSystem    | CS  | The coordinate system in which the load is interpreted. Note: Only taken into account if DirectionType is set to UserCoordinateSystem. The provided coordinate system will be projected so that is's Z axis is paralell with the reference polygon's normal axis. |
| Multiplier          | Mul | Multiplication factor for the forces. Eg.: setting this to 2 is the same as doubling all the forces.                                                                                                                                                              |
| Name                | N   | Name of the created Surface load.                                                                                                                                                                                                                                 |
| Polygon             | P   | The polygon on which this load should act. Note: If left empty the load will act on the bearing object's whole reference polygon. Only specify this if you wish to act on a smaller part of the bearing object's surfac                                           |
| X [kN/m2]           | X   | Force in kN/m2 -s acting along the x axis.                                                                                                                                                                                                                        |
| Y [kN/m2]           | Y   | Force in kN/m2 -s acting along the y axis.                                                                                                                                                                                                                        |
| Z [kN/m2]           | Z   | Force in kN/m2 -s acting along the z axis.                                                                                                                                                                                                                        |

### Outputs

| Name                  | Id | Description                                 |
| --------------------- | -- | ------------------------------------------- |
| ConSteel Surface Load | SL | Represents a Surface Load in ConSteel model |

![alt text](<img/load 6.png>) 

## Beam thermal Load



### Inputs

| Name      | Id   | Description                                                                                                                                                         |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Beam      | B    | The beam on which this load should act.                                                                                                                             |
| Direction | D    | Thermal direction. Top is aligned to the positive Z axis of the beam crosssection's plane, Left is aligned to the negative Y axis of the beam crosssection's plane. |
| LoadCase  | LC   | The Case which this load should belong to.                                                                                                                          |
| Name      | N    | Name of the created node load.                                                                                                                                      |
| T1 [C]    | T1   | Top or left side temperature (depending on DirectionType setting), in Celsius.                                                                                      |
| T2 [C]    | T2   | Bottom or right side temperature (depending on DirectionType setting), in Celsius."                                                                                 |
| Tref [C]  | Tref | Environment reference temperature.                                                                                                                                  |

### Outputs

| Name                       | Id  | Description                                            |
| -------------------------- | --- | ------------------------------------------------------ |
| ConSteel Beam Thermal Load | BTL | Represents a thermal load on a beam in ConSteel model. |

![alt text](<img/load 1.png>) 

## Elongation Load



### Inputs

| Name     | Id | Description                                |
| -------- | -- | ------------------------------------------ |
| Beam     | B  | The beam on which this load should act.    |
| dL [mm]  | dL | Length change, in mm.                      |
| LoadCase | LC | The Case which this load should belong to. |
| Name     | N  | Name of the created elongation load.       |

### Outputs

| Name                     | Id | Description                                     |
| ------------------------ | -- | ----------------------------------------------- |
| ConSteel Elongation Load | E  | Represents a Elongation load in ConSteel model. |

![alt text](<img/load 6a.png>) 

## Line Snow Load



### Outputs

| Name           | Id  | Description                          |
| -------------- | --- | ------------------------------------ |
| CSLineSnowLoad | LSL | The created ConSteel Line Snow Load. |

### Inputs

| Name                           | Id  | Description                                                                                         |
| ------------------------------ | --- | --------------------------------------------------------------------------------------------------- |
| Name                           | N   | Name of the created Line load.                                                                      |
| LoadCase                       | LC  | The Case which this load should belong to.                                                          |
| StructuralObject               | SO  | The structural object on which this load should act.                                                |
| ActionEdge                     | AE  | The edge on which this load should act. Note: only taken into account in case of structural plates. |
| DirectionOfPlacement           | DOP | Load direction type: Global=global coord sys, Local=structural object's coord sys                   |
| CharacteristicSnowLoad [kN/m2] | Sk  | Characteristic snow load according to Eurocode                                                      |
| WindFactor [-]                 | Ce  | Wind factor according to Eurocode                                                                   |
| TemperatureFactor [-]          | Ct  | Temperature factor according to Eurocode                                                            |
| ShapeFactor 1 [-]              | u1  | Shape factor according to Eurocode at End A                                                         |
| ShapeFactor 2 [-]              | u2  | Shape factor according to Eurocode at End B                                                         |
| EccentricityType               | E   | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point |
| EccentricityY [mm]             | EY  | Eccentricity in Y direction.                                                                        |
| EccentricityZ [mm]             | EZ  | Eccentricity in Z direction.                                                                        |
| End1                           |     | From which end is the line load startpoint offset by the Pos1 distance below.                       |
| Pos1 [mm]                      | P1  | Offset position of the line load's startpoint                                                       |
| End2                           |     | From which end is the line load endpoint offset by the Pos2 distance below.                         |
| Pos2 [mm]                      | P2  | Offset position of the line load's endpoint                                                         |

![alt text](<img/load 7.png>) 

## Plate thermal Load



### Inputs

| Name     | Id   | Description                                                                        |
| -------- | ---- | ---------------------------------------------------------------------------------- |
| LoadCase | LC   | The Case which this load should belong to.                                         |
| Name     | N    | Name of the created node load.                                                     |
| Plate    | P    | The Plate on which this load should act.                                           |
| T1 [C]   | T1   | Top or left side temperature (depending on DirectionType setting), in Celsius.     |
| T2 [C]   | T2   | Bottom or right side temperature (depending on DirectionType setting), in Celsius. |
| Tref [C] | Tref | Environment reference temperature.                                                 |

### Outputs

| Name                        | Id  | Description                                            |
| --------------------------- | --- | ------------------------------------------------------ |
| ConSteel Plate Thermal Load | PTL | Represents a thermal load on a plate in ConSteel model |

![alt text](<img/load 9.png>) 

## Pretension Load



### Inputs

| Name     | Id | Description                                              |
| -------- | -- | -------------------------------------------------------- |
| Beam     | B  | The beam on which this load should act.                  |
| F [kN]   | F  | Tension force, in kN. Positive values represent tension. |
| LoadCase | LC | The Case which this load should belong to.               |
| Name     | N  | Name of the created pretension load.                     |

### Outputs

| Name                     | Id | Description                                     |
| ------------------------ | -- | ----------------------------------------------- |
| ConSteel Pretension Load | P  | Represents a Pretension load in ConSteel model. |

![alt text](<img/load 10.png>) 

## Load Case



### Inputs

| Name                | Id | Description                                                                                                                                                                                                               |
| ------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CalculateAsCase     | CC | Whether this load case should be calculated in itself in first order, additionally to the load combination analysis. Note: this does not influence whether the loadcase will be calculated as part of a load combination! |
| CanBeFavourable     | CF | Whether this load case can be favourable in a load combination.                                                                                                                                                           |
| Load Group          | LG | The Load Group which this case should belong to.                                                                                                                                                                          |
| Name                | N  | Name of the created load case.                                                                                                                                                                                            |
| NotMainInAccidental | NA | Whether this load case can be the main one in an accidental combination.                                                                                                                                                  |
| NotMainInTransient  | NT | Whether this load case can be the main one in a transient combination.                                                                                                                                                    |
| ResultSettings      | RS | Specifies which results to include in analysis calculation. Default contains all results.                                                                                                                                 |
| Coloring            | C  | Coloring of the load case                                                                                                                                                                                                 |

### Outputs

| Name               | Id | Description                                                                      |
| ------------------ | -- | -------------------------------------------------------------------------------- |
| ConSteel Load Case | LC | Looks up a localized string similar to Represents a Load Case in ConSteel model. |

![alt text](<img/load 11.png>) 

## Load Transfer Surface



### Inputs

| Name                | Id | Description                                                                                                                                                            |
| ------------------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | N  | Name of the created object in ConSteel model.                                                                                                                          |
| Polygon             | P  | The ConSteel Polygon which describes the load transfer surface.                                                                                                        |
| SelectedBeams       | SB | If set to true, only the beams provided in the next parameter will be considered for load distribution. If set to false, the next parameter is not taken into account. |
| Beams               | B  | If SelectedBeams is true, the load will only be distributed to the beams specified here.                                                                               |
| EccZ [mm]           | EZ | Load eccentricity in Z direction in mm-s.                                                                                                                              |
| UniformDistribution | UD | If set to true, the loads will be uniformly distributed                                                                                                                |

### Outputs

| Name                  | Id    | Description                     |
| --------------------- | ----- | ------------------------------- |
| CSLoadTransferSurface | CSLTS | Consteel Load Transfer Surface. |

![alt text](<img/load 12.png>) 

## Load Combination



### Inputs

| Name                      | Id | Description                                                                                                                          |
| ------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Buckling Sensitivity      | BS | If set to true, the loadcombination will be eligible for buckling sensitivity analysis.                                              |
| Calculate                 | C  | The load combination can be turned off with passing false here, without individually disabling the specific calculation modes of it. |
| Number of Buckling Shapes | BN | The maximum number of buckling shapes analised for this load combination.                                                            |
| Factors                   | F  | A list of the combination factors correspoinding to the list of load cases.                                                          |
| First Order               | FO | If set to true, the loadcombination will be eligible for first order analysis.                                                       |
| Load Cases                | LC | A list of the Load Cases in this combination.                                                                                        |
| Name                      | N  | Name of the created load combination.                                                                                                |
| ResultSettings            | RS | Specifies which results to include in analysis calculation. Default contains all results.                                            |
| Second Order              | SO | If set to true, the loadcombination will be eligible for second order analysis.                                                      |
| Type                      | T  | Load combination type.                                                                                                               |

### Outputs

| Name                | Id   | Description                                      |
| ------------------- | ---- | ------------------------------------------------ |
| CS Load Combination | CSLC | Represents a Load Combination in ConSteel model. |

![alt text](<img/load 13.png>) 

## LG Accidental



### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

### Inputs

| Name | Id | Description                     |
| ---- | -- | ------------------------------- |
| Name | N  | Name of the created load group. |

![alt text](<img/load 14.png>) 

## LG Crane



### Inputs

| Name        | Id | Description                               |
| ----------- | -- | ----------------------------------------- |
| Combination | C  | Combination factor (psi.0)                |
| Frequent    | F  | Frequent load level factor (psi.1)        |
| Name        | N  | Name of the created load group.           |
| Quasi       | Q  | Quasi permanent load level factor (psi.2) |
| SF          |    | Safty Factor                              |

### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

![alt text](<img/load 15.png>) 

## LG Meteorological



### Inputs

| Name             | Id | Description                                            |
| ---------------- | -- | ------------------------------------------------------ |
| Combinable Cases | CC | The load cases can be applied along with each other.   |
| Combination      | C  | Combination factor (psi.0)                             |
|                  |    | Factor for representative value of Q1 variable action. |
| Frequent         | F  | Frequent load level factor (psi.1)                     |
| Name             | N  | Name of the created load group.                        |
| Quasi            | Q  | Quasi permanent load level factor (psi.2)              |

### Outputs

| Name                      | Id      | Description                                           |
| ------------------------- | ------- | ----------------------------------------------------- |
| Load Group Meteorological | CSLGMet | Creates a Meteorological Load Group in ConSteel model |

![alt text](<img/load 16.png>) 

## LG Snow



### Inputs

| Name        | Id | Description                               |
| ----------- | -- | ----------------------------------------- |
| Combination | C  | Combination factor (psi.0)                |
| Frequent    | F  | Frequent load level factor (psi.1)        |
| Name        | N  | Name of the created load group.           |
| Quasi       | Q  | Quasi permanent load level factor (psi.2) |

### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

![alt text](<img/load 17.png>) 

## LG Accindental Snow



### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

### Inputs

| Name | Id | Description                     |
| ---- | -- | ------------------------------- |
| Name | N  | Name of the created load group. |

![alt text](<img/load 18.png>) 

## LG Fire



### Inputs

| Name           | Id | Description                                            |
| -------------- | -- | ------------------------------------------------------ |
| Q1 factor      | Q1 | Factor for representative value of Q1 variable action. |
| Fire Expansion |    | Consider indirect actions caused by thermal expansion  |
| FE             |    |                                                        |
| Name           | N  | Name of the created load group.                        |

### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

![alt text](<img/load 19.png>) 

## LG Permanent



### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

### Inputs

| Name | Id | Description                     |
| ---- | -- | ------------------------------- |
| Name | N  | Name of the created load group. |

![alt text](<img/load 20.png>) 

## LG Variable



### Inputs

| Name             | Id | Description                                          |
| ---------------- | -- | ---------------------------------------------------- |
| Combinable Cases | CC | The load cases can be applied along with each other. |
| Combination      | C  | Combination factor (psi.0)                           |
| Frequent         | F  | Frequent load level factor (psi.1)                   |
| Name             | N  | Name of the created load group.                      |
| Quasi            | Q  | Quasi permanent load level factor (psi.2)            |

### Outputs

| Name                | Id | Description                                |
| ------------------- | -- | ------------------------------------------ |
| ConSteel Load Group | LG | Represents a Load Group in ConSteel model. |

![alt text](<img/load 21.png>)