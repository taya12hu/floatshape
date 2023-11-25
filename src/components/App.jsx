'use client';

import { Canvas} from "@react-three/fiber";
import Three from "./index.jsx"; 
  import Ring  from "./Ring.jsx";
  import Cone from "./Cone.jsx";
  import Sphere from "./Sphere.jsx";
  import Cylinder from "./Cylinder.jsx";
  import Cube from "./Cube.jsx";


 export default function App() {
    return (
      <Canvas>
        <directionalLight
          position={[0, 0, 2]}
          intensity={0.5} />
        <ambientLight intensity={0.1} />
        <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"grey"} />
        <Sphere position={[-4, 1, -2]} args={[1, 30, 30]} color={"grey"} />
        <Cylinder position={[-6, 0, 1]} size={[2, 2, 10, 8]} color={"grey"} />
        <Cone position={[1, 1, -1]} size={[1, 4.1, 26, 22]} color={"grey"} />
        <Ring position={[1, 1, 2]} size={[1, 3, 31]} color={"grey"} />
        <Three />

      </Canvas>
    );
  }


