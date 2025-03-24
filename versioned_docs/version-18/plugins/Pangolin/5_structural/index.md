# Structural

**Beams, plates, supports, rigid bodies, diaphragms, link elements, haunches, tapered members.** 


## Beam On IEdge

See the component in use in the script library: [Simple Cantilever Beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name               | Id | Description                                                                                                                                                          |
| ------------------ | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layer              |    | The layer of the beam.                                                                                                                                               |
| L                  |    |                                                                                                                                                                      |
| BowImperfectionY   | BY | Bow imperfection L/Y. (in the section's coordinate system).                                                                                                          |
| BowImperfectionZ   | BZ | Bow imperfection L/Z. (in the section's coordinate system).                                                                                                          |
| Direction Degree   | DD | Direction degree pf beam.                                                                                                                                            |
| DirectionRAD       |    | Direction of the section's Z axis as measured from the reference edge's Z axis, in radians.                                                                          |
| DR                 |    |                                                                                                                                                                      |
| EccentricityY      |    | Eccentricity of the beam in the Y direction. Note: this attribute of beams is deprecated, and should not be used.                                                    |
| EY                 |    |                                                                                                                                                                      |
| EccentricityZ      |    | Eccentricity of the beam in the Z direction. Note: this attribute of beams is deprecated, and should not be used.                                                    |
| EZ                 |    |                                                                                                                                                                      |
| IEdge              | E  | ConSteel IEdge.                                                                                                                                                      |
| FiniteElementCount | FC | Number of finite elements. 0 means auto determined, maximum is 32.                                                                                                   |
| FiniteElementType  | FT | Finite element type of the beam. Right click for possible values.                                                                                                    |
| Name               | N  | Name of the created structural member. If left empty, once loaded into ConSteel, it will create autoincremented name for it based on the actual open ConSteel model. |
| ReleaseEnd         | RE | ConSteel release at the beam end point. If left empty, initialized to continuous.                                                                                    |
| ReleaseStart       | RS | ConSteel release at the beam start point. If left empty, initialized to continuous.                                                                                  |
| Section            | S  | ConSteel Section.                                                                                                                                                    |
| StructuralGroup    | SG | ConSteel StructuralGroup. By default does not belong to any.                                                                                                         |

### Outputs

| Name | Id | Description                                        |
| ---- | -- | -------------------------------------------------- |
| Beam | B  | The beam whose attributes you wish to deconstruct. |

![alt text](<img/Beam On IEdge.png>)

## ConSteel Plate


### Inputs

| Name            | Id | Description                                                                                                                                                          |
| --------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Average FE Size | F  | The avereage finite element edge size.                                                                                                                               |
| Material        | M  | ConSteel release at the beam start point. If left empty, initialized to continuous.                                                                                  |
| Name            | N  | Name of the created structural member. If left empty, once loaded into ConSteel, it will create autoincremented name for it based on the actual open ConSteel model. |
|                 | P  | ConSteel Polygon.                                                                                                                                                    |
|                 |    | Creates a ConSteel Plate from a ConSteel polygon.                                                                                                                    |
| StructuralGroup | SG | ConSteel StructuralGroup. By default does not belong to any.                                                                                                         |
| Thickness       | T  | Thickness of the plate. The reference polygon is always at the middle line of the plate solid.                                                                       |

### Outputs

| Name           | Id | Description                                             |
| -------------- | -- | ------------------------------------------------------- |
| ConSteel Plate | P  | Represents a plate structural member in ConSteel model. |

![alt text](<img/Consteel Plate.png>)

## Create Release

See the component in use in the script library: [Simple multispan frame structure](https://consteelsoftware.com/script/simple-multispan-frame-structure/).

### Inputs

| Name             | Id | Description                                                                                                                                                                |
| ---------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name             | N  | Name of the release type                                                                                                                                                   |
| W [kNm2/(rad/m)] | W  | Stiffnes W (warping), measured in kNm2/(rad/m). A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.   |
| XX [kNm/rad]     | XX | Stiffnes XX (around X axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| X [kN/mm]        | X  | Stiffnes X, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |
| YY [kNm/rad]     | YY | Stiffnes YY (around Y axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| Y [kN/mm]        | Y  | Stiffnes Y, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |
| ZZ [kNm/rad]     | ZZ | Stiffnes ZZ (around Z axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| Z [kN/mm]        | Z  | Stiffnes Z, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |

### Outputs

| Name             | Id | Description                                  |
| ---------------- | -- | -------------------------------------------- |
| ConSteel Release | R  | Represents a Release type in ConSteel model. |

![alt text](<img/Create Release.png>)

## Support Point

See the component in use in the script library: [Simple Cantilever Beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name              | Id | Description                                                                                                                                                                                                                      |
| ----------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Position          | P  | Reference point on the structural member                                                                                                                                                                                         |
| Eccentricity type | E  | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point, top-left edge, etc.                                                                                                         |
| Eccentricity Y    | EY | Eccentricity in Y direction.                                                                                                                                                                                                     |
| Eccentricity Z    | EZ | Eccentricity in Z direction.                                                                                                                                                                                                     |
| Coordinate System | C  | The coordinate system of the support. If left empty, default world XY is used. If you wish to use the structural member's local coordinate system, Specify true for "Use Local Coordinate System" in that case, this is ignored. |
| Name              | N  | Name of the support point. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                                                                                                    |
| Structural object | SO | The supported structural object.                                                                                                                                                                                                 |
| Support model     | S  | The support model used for this support.                                                                                                                                                                                         |

### Outputs

| Name                   | Id | Description                                   |
| ---------------------- | -- | --------------------------------------------- |
| ConSteel Support Point | SP | Represents a Point Support in ConSteel model. |

![alt text](<img/structural 6.png>) 

## Support IEdge

See the component in use in the script library: [Simple Cantilever Beam](https://consteelsoftware.com/script/simple-cantilever-beam/?search=).

### Inputs

| Name              | Id | Description                                                                                                                                                                                                                      |
| ----------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eccentricity type | E  | Type of the eccentricity, eg as measured from the beam's reference line, cross section middle point, top-left edge, etc.                                                                                                         |
| Eccentricity Y    | EY | Eccentricity in Y direction.                                                                                                                                                                                                     |
| Eccentricity Z    | EZ | Eccentricity in Z direction.                                                                                                                                                                                                     |
| Coordinate System | C  | The coordinate system of the support. If left empty, default world XY is used. If you wish to use the structural member's local coordinate system, Specify true for "Use Local Coordinate System" in that case, this is ignored. |
| Name              | N  | Name of the support point. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                                                                                                    |
| Structural object | SO | The supported structural object.                                                                                                                                                                                                 |
| Support model     | S  | The support model used for this support.                                                                                                                                                                                         |
| Supported IEdge   | SE | The edge to be supported. Only relevant in case of plate members. In case of structural beams, always the whole beam reference edge is used.                                                                                     |

### Outputs

| Name                   | Id | Description                                   |
| ---------------------- | -- | --------------------------------------------- |
| ConSteel SupportI Edge | SE | Represents a IEdge Support in ConSteel model. |

![alt text](<img/structural 7.png>) 

## Support Plate



### Inputs

| Name              | Id | Description                                                                                                                                                                                                                                            |
| ----------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Coordinate System | C  | The coordinate system of the support. If left empty, default world XY is used. If you wish to use the reference plate's local coordinate system, Specify true for "Use Local Coordinate System" instead. (in which case this parameter is irrelevant). |
| Name              | N  | Name of the support plate. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                                                                                                                          |
| Plate             | P  | The supported structural plate.                                                                                                                                                                                                                        |
| Support model     | S  | The support model used for this support.                                                                                                                                                                                                               |
| Use LCS           | L  | Use Local Coordinate System. If set to true, the reference edge's local coordinate system will be used for the support, at the given point, overriding the provided coordinate system.                                                                 |

### Outputs

| Name                   | Id | Description                                   |
| ---------------------- | -- | --------------------------------------------- |
| ConSteel Support Plate | SP | Represents a Plate Support in ConSteel model. |

![alt text](<img/structural 8.png>)

## Rigid Body



### Inputs

| Name  | Id | Description                                                                                                                                                  |
| ----- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Edges | E  | The edges making up this rigid body. Note: if the edges are disjoint, the created rigid body is still valid, but will act as multiple disjoint rigid bodies. |
| Name  | N  | Name of the rigid body object. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                            |

### Outputs

| Name                | Id | Description                                       |
| ------------------- | -- | ------------------------------------------------- |
| ConSteel Rigid Body | RB | Represents a Rigid Body Object in ConSteel model. |

![alt text](<img/structural 2.png>) 

## Diaphragm


### Inputs

| Name          | Id | Description                                                                                                                      |
| ------------- | -- | -------------------------------------------------------------------------------------------------------------------------------- |
| LoadTransSurf | L  | The Load Transfer Surface which should be treated as a structural diaphragm by ConSteel analysis.                                |
| Name          | N  | Name of the Diaphragm object. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import. |

### Outputs

| Name               | Id | Description                                      |
| ------------------ | -- | ------------------------------------------------ |
| ConSteel Diaphragm | D  | Represents a Diaphragm Object in ConSteel model. |


![alt text](<img/structural 1.png>)

## New Link 2 Points

See the component in use in the script library: [Simple multispan frame structure](https://consteelsoftware.com/script/simple-multispan-frame-structure/).

### Inputs

| Name              | Id | Description                                                                                                                                                                                                                 |
| ----------------- | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ARefEdge          | AE | The edge containing the LinkA point. (Hint: can also directly attach a CSBeam param here)                                                                                                                                   |
| BRefEdge          | BE | The edge containing the LinkB point. (Hint: can also directly attach a CSBeam param here)                                                                                                                                   |
| InterfacePosition | IP | The position of the interface between the two endpoints, specified as a ratio between 0 and 1, with 0 meaning right at LinkA point, 0.5 right in the midle, 1 right at LinkB, etc.                                          |
| LinkA             | A  | Start point of the link. (can be any point on the reference edge, not only the endpoints. Hint: can also be specified by a point support, or load on the edge (or a native gh point..))                                     |
| LinkB             | B  | End point of the link. (can be any point on the reference edge, not only the endpoints. Hint: can also be specified by a point support, or load on the edge (or a native gh point..))                                       |
| Link Z direction  | LD | The Z axis of the link. If left at unset, the link's local coordinate system is calculated as a line's would be (eg if the link is in XY plane, it's X axis will point along it's line, and Z axis along the world Z axis). |
| Name              | N  | Name of the support point. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                                                                                               |
| Release           | R  | The Release model at the interface point.                                                                                                                                                                                   |
| Rotation          | RO | Eccentricity in Y direction.                                                                                                                                                                                                |

### Outputs

| Name               | Id | Description                                               |
| ------------------ | -- | --------------------------------------------------------- |
| ConSteel LinkPoint | LP | Represents a Link type in ConSteel model between 2 points |

![alt text](<img/structural 3.png>) 

## Link 2 Lines



### Inputs

| Name              | Id | Description                                                                                                                                                                        |
| ----------------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InterfacePosition | IP | The position of the interface between the two endpoints, specified as a ratio between 0 and 1, with 0 meaning right at LinkA point, 0.5 right in the midle, 1 right at LinkB, etc. |
| LinkA             | A  | First line to be linked. (Hint: can also be specified by pulling a CSBeam directly here.)                                                                                          |
| LinkB             | B  | Second line to be linked. (Hint: can also be specified by pulling a CSBeam directly here.)                                                                                         |
| Name              | N  | Name of the support point. If left empty, ConSteel will autogenerate an enumerated name based on the actual modell at import.                                                      |
| Release           | R  | The Release model at the interface point.                                                                                                                                          |

### Outputs

| Name              | Id | Description                                                                    |
| ----------------- | -- | ------------------------------------------------------------------------------ |
| ConSteel LinkLine | LL | Represents a Link type in ConSteel model between 2 paralell same-length lines. |

![alt text](<img/structural 4.png>) 

## Support model



### Inputs

| Name             | Id | Description                                                                                                                                                                |
| ---------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name             | N  | Name of the support type                                                                                                                                                   |
| SupportType      | ST | Geometric Type of the support, eg.: point (0), edge (1) or surface (2).                                                                                                    |
| W [kNm2/(rad/m)] | W  | Stiffnes W (warping), measured in kNm2/(rad/m). A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.   |
| XX [kNm/rad]     | XX | Stiffnes XX (around X axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| X [kN/mm]        | X  | Stiffnes X, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |
| YY [kNm/rad]     | YY | Stiffnes ZZ (around Z axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| Y [kN/mm]        | Y  | Stiffnes Y, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |
| ZZ [kNm/rad]     | ZZ | Stiffnes YY (around Y axis), measured in kNm/rad. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid. |
| Z [kN/mm]        | Z  | Stiffnes Z, measured in kN/mm. A negative value means this direction is Fix, a value of 0 means it is Free, and any positive value makes it semi-rigid.                    |

### Outputs

| Name             | Id | Description                                 |
| ---------------- | -- | ------------------------------------------- |
| ConSteel Support | S  | Represents a Support type in ConSteel model |

![alt text](<img/structural 5.png>) 

## Create Haunch

See the component in use in the script library: [Haunched frame](https://consteelsoftware.com/script/haunched-frame/).

### Inputs

| Name                  | Id | Description                                                                    |
| --------------------- | -- | ------------------------------------------------------------------------------ |
| Flange Thickness [mm] | Tf | Thickness of the haunch flange, if welded.                                     |
| End Height [mm]       | EH | Height of the Haunch at the end.                                               |
| Start Height [mm]     | SH | Height of the Haunch at the start.                                             |
| Length [mm]           | L  | Length of the haunch.                                                          |
| Name                  | N  | Name of the Haunch.                                                            |
| Placement             | P  | Placement of the haunch on the beam, eg.: bottom, top, both.                   |
| Reverse               | R  | If true, the haunch if going from the beam's endpoint towards it's startpoint. |
| Section               | S  | Section to use for the haunch, if hot rolled.                                  |
| Start [mm]            | St | Start positon of the haunch from the beam's start point.                       |
| Web Thickness [mm]    | Tw | Thickness of the haunch web, if welded.                                        |
| Width [mm]            | W  | Width of the haunch flange, if welded.                                         |

### Outputs

| Name            | Id | Description                                      |
| --------------- | -- | ------------------------------------------------ |
| ConSteel Haunch | H  | Represents a Haunch on a beam in ConSteel model. |

![alt text](<img/Create Haunch.png>)

## Create Tapering

See the component in use in the script library: [Tapered frame with results](https://consteelsoftware.com/script/tapered-frame-with-results/).

### Inputs

| Name                    | Id   | Description                                          |
| ----------------------- | ---- | ---------------------------------------------------- |
| Eccentricity Adjustment | EccA | Height of the Tapered beam at the end.               |
| End Height [mm]         | EH   | Height of the Tapered beam at the end.               |
| Format                  | F    | Format of the Tapering, eg.: bottom, top, symmetric. |
| Name                    | N    | Name of the Tapering.                                |
| Start Height [mm]       | SH   | Height of the Tapered beam at the start.             |

### Outputs

| Name              | Id         | Description                                        |
| ----------------- | ---------- | -------------------------------------------------- |
| ConSteel Tapering | CSTapering | Represents a tapering on a beam in ConSteel model. |

![alt text](<img/Create Tapering.png>)

