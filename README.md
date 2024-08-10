# A Simple Physics Simulation Engine

## Overview
Developing this physics simulation engine to deepen my understanding of JavaScript and explore my interest in physics. This project allowed me to combine my curiosity for physical interactions with practical coding experience, resulting in creating this different classes and stuff that we can reuse anytime we need.

This repository features a collection of simple yet intriguing physics-based code bases. Each example demonstrates fundamental concepts in physics through straightforward, easy-to-understand code. These examples are designed to be both educational and engaging, showcasing the core principles of physics in a clear and accessible manner. Explore these examples to gain insights into physics simulations and integrate these concepts into your own projects.

### Key Features

- **Body Dynamics**: Support for circles, boxes and others (in progress..)
- **Collision Detection**: Accurate and efficient collision detection and resolution(in progress..).
- **Forces and Impulses**: Apply forces and impulses to bodies for realistic movement.
- **Randomized ball generation**: Generatete bodies anywhere in plane using Linear Congruential Generator (LCG) algorithm.

## world class

The `world` class represents a 2D environment where physical simulations take place. It manages the canvas context and allows enabling or disabling boundary collision detection.

### Properties

- **`ctx`** (`CanvasRenderingContext2D`):  
  - The drawing context for the canvas, used to render graphics.

- **`isBounderiesActive`** (`boolean`):  
  - Indicates whether boundary collisions are enabled.  
  - **Default value**: `false`.

- **`isCollisionActive`** (`boolean`):  
  - Indicates whether collision detection is enabled (Note: This property is defined but not used in the current implementation).  
  - **Default value**: `false`.

### Constructor

#### `constructor(canvas)`

- **Parameters:**
  - `canvas` (`HTMLCanvasElement`): The canvas element where the simulation is rendered.

- **Description:**  
  Initializes a new instance of the `world` class, setting up the canvas context and preparing the simulation environment.

- **Example:**

  ```javascript
  const canvas = document.getElementById('simulationCanvas');
  const worldInstance = new world(canvas);

## Engine Class

The `Engine` class manages the simulation of physical bodies within a `world`. It updates the state of each body, handles boundary collisions, and manages interactions between bodies in a continuous animation loop.

### Properties

- **`bodies`** (`Array`):  
  - An array of bodies currently managed by the engine.

- **`ctx`** (`CanvasRenderingContext2D`):  
  - The drawing context of the canvas, used for rendering and updates.

- **`world`** (`world`):  
  - The instance of the `world` class, which provides the environment for the simulation.

- **`animationFrameId`** (`number`):  
  - The ID of the current animation frame, used for controlling the animation loop.

### Constructor

#### `constructor(world)`

- **Parameters:**
  - `world` (`world`): The `world` object where the engine will operate, providing access to the canvas context.

- **Description:**  
  Initializes a new instance of the `Engine` class, setting up the canvas context and preparing the engine to manage the simulation.

- **Example:**

  ```javascript
  const canvas = document.getElementById('simulationCanvas');
  const worldInstance = new world(canvas);
  const engineInstance = new Engine(worldInstance);


## Body Class

The `Body` class represents a physical object within the physics simulation, with properties for position, velocity, and acceleration. It provides functionality to update its position based on its current state.

### Properties

- **`dt`** (`number`):  
  - Time delta used for updating the body's position.  
  - **Default value**: `0.1`.

- **`x`** (`number`):  
  - Current x-coordinate of the body.  
  - **Default value**: `0`.

- **`y`** (`number`):  
  - Current y-coordinate of the body.  
  - **Default value**: `0`.

- **`vx`** (`number`):  
  - Velocity of the body along the x-axis.  
  - **Initialized in the constructor.**

- **`vy`** (`number`):  
  - Velocity of the body along the y-axis.  
  - **Initialized in the constructor.**

- **`ax`** (`number`):  
  - Acceleration of the body along the x-axis.  
  - **Initialized in the constructor.**

- **`ay`** (`number`):  
  - Acceleration of the body along the y-axis.  
  - **Initialized in the constructor.**

### Constructor

#### `constructor(vx, vy, ax, ay)`

- **Parameters:**
  - `vx` (`number`): Initial velocity along the x-axis.
  - `vy` (`number`): Initial velocity along the y-axis.
  - `ax` (`number`): Initial acceleration along the x-axis.
  - `ay` (`number`): Initial acceleration along the y-axis.

- **Description:**  
  Initializes a new instance of the `Body` class with specified velocity and acceleration values.

- **Example:**

  ```javascript
  const body = new Body(10, 5, 0, -9.8);

## Ball Class

The `Ball` class extends the `Body` class, representing a circular physical object within the physics simulation. It includes additional properties and methods specific to circular bodies, such as radius, area, and circumference.

### Inheritance

- **Inherits from:** `Body`

### Properties

- **`radius`** (`number`):  
  - The radius of the ball, which determines its size in the simulation.
  - **Default value:** `10`

### Constructor

#### `constructor(radius = 10, vx = 0, vy = 0, ax = 1, ay = 1)`

- **Parameters:**
  - `radius` (`number`, optional): The radius of the ball. Defaults to `10`.
  - `vx` (`number`, optional): Initial velocity along the x-axis. Defaults to `0`.
  - `vy` (`number`, optional): Initial velocity along the y-axis. Defaults to `0`.
  - `ax` (`number`, optional): Initial acceleration along the x-axis. Defaults to `1`.
  - `ay` (`number`, optional): Initial acceleration along the y-axis. Defaults to `1`.

- **Description:**  
  Initializes a new instance of the `Ball` class, extending the `Body` class with properties specific to circular objects.

- **Example:**

  ```javascript
  const ball = new Ball(15, 2, 3, 0.5, 0.5);
