---
sidebar_position: 5
---
# Data processor

The data processor is a sequential client of the specific OpenFOAM applications required for simulating the wind flow around building and includes the following stages:

1. Surface edge extraction – To maintain the shape of the initial geometry it is necessary to extract all the edges.

2. Block meshing – According to the wind tunnel information the domain is discretized to finite volumes or cuboid / hexahedral blocks

3. Decomposing the calculation domain – In order to perform a finite volume mesh generation and performing the simulation in parallel cores.

4. Mesh generation – The building mesh is inserted into the wind tunnel domain by refining.

5. Performing the simulation

![alt text](<img/file system.png>)
_File system hierarchy expansion_