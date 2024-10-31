---
sidebar_position: 3
---
# Wind load generator service development

In the early stages of the implementation of simulation methodologies a clear need has been formulated to develop a service which is capable to provide a solution specifically for structural engineers to effectively and conveniently use the OpenFOAM CFD toolbox.

Prior to development a strict line was drawn regarding some features to consider specific limitations or simplifications on different approaches:

1. The underlying logic of input handling, wind profile definition, and result interpretation is correlated with the Eurocode approaches mainly because of convenience, but also because it can be considered the most conservative approach as presented in chapter 3.2.

2. Because the main direction is to offer solutions for surface elements the focus is on such buildings that can be considered closed or “air-tight”. Therefore, no inner pressure is evaluated.

3. The buildings are considered as incompressible and rigid bodies.

4. The effect of turbulence is considered via RANS type stationary turbulence models, according to professional literature 5 of them offered by OpenFOAM was selected for implementation: k-epsilon, k-omega, k-omega SST, realizableKE and RNGkEpsilon. These are all handling the partial differential equations of the TKE; therefore, the turbulence is calculated by the turbulent viscosity.

5. To solve the fluid flow governing equations the simpleFOAM (SIMPLE = Semi - Implicit Method for Pressure Linked Equations) solver is used. This is a steady-state solver, without partial time derivatives, therefore no physical time is taken into consideration. This leads to quasi-static pressure values.

To assure the possibility of these simplifications several validations are required. Most importantly, according to the Eurocode recommendations checks are performed to ensure that the building in question can be considered as a rigid body. Therefore, if the service is called by a structural analysis software, which is capable to calculate dynamic properties, by performing free vibration analysis, a preliminary check for the limit frequency value (1 Hz) is performed and the cd structural factor is evaluated to make sure that there is no need for dynamic assumptions. Otherwise, the service is not offering postprocessed load values, only the result fields can be investigated.

The development has begun with the preparation of a functionality plan, to determine the main tasks for the service and the broad operational logic, therefore three consecutive phases has been clearly distinguished.

### Preprocessing phase:

- Collecting, interpreting, and structuring the relevant input data (building geometry / load bearing objects, simulation settings)

- Validating the input according to the limitations mentioned before and regarding the geometrical correctness.

- Converting the geometry to a specific mesh instance, which is capable to handle any type of mesh regardless of mesh face shapes (Ngon mesh), it can also be interpreted by OpenFOAM, but most importantly it can store the simulation results.

- Ensuring the serialization and creation of a simulation case, which consists of a specific file hierarchy that OpenFOAM requires.

### Dataprocessing phase:

- Calling synchronously the specific applications, continuously offering feedback about the actual state:

  -  Discretizing the calculation domain to obtain the base finite volume mesh.

  - Inserting and refining the building geometry inside the domain.
  
  - Running the simulation


- Reading the created finite volume mesh with the results belonging to it

- Querying results according to the need (specific points or result fields)

### Postprocessing phase:

- Displaying the results in a meaningful way

- Converting the results to specific load objects according to the needs


From a technical point of view the service is a standalone project based on the .NET development framework by Microsoft, written in the C# object-oriented programming language. The choice to use this framework had several reasons. Firstly, because it provides a convenient platform for building and running various types of applications, including desktop applications, cloud services, and many more. Besides, in the AEC industry it is a common phenomenon that the software providers are using C# for the development of their application programming interface (API). Therefore, the sticking to the principle of interoperability is ensured. In addition, because the development consists of the implementation of the service as a Grasshopper plugin also, as a separate project, presented in later chapters, it was a straightforward decision.