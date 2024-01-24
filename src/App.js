import * as THREE from "three";

import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { TiSocialAtCircular } from "react-icons/ti";
import {
  PerformanceMonitor,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  Float,
} from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import { Porsche } from "./model/Porsche";

export function App() {
  const [degraded, degrade] = useState(false);
  const [px, setpx] = useState(8);
  const [py, setpy] = useState(-1);
  const [pz, setpz] = useState(-23);

  const [rx, setrx] = useState(0.1);
  const [ry, setry] = useState(2);
  const [rz, setrz] = useState(0);

  const [scale, setscale] = useState(0.8);

  const [targetPosition, setTargetPosition] = useState([-2, 0, 9]);
  //const [targetPosition, setTargetPosition] = useState([4, 2, 3]);

  const test = () => {
    // Set a new target position when the button is clicked
    setTargetPosition([/* new x */ 4, /* new y */ 2, /* new z */ 3]);
  };

  return (
    <>
      <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />
        <Porsche
          scale={scale}
          position={[px, py, pz]}
          rotation={[rx, ry, rz]}
        />
        <AccumulativeShadows
          position={[0, -1.16, 0]}
          frames={100}
          alphaTest={0.9}
          scale={10}
        >
          <RandomizedLight
            amount={8}
            radius={10}
            ambient={0.5}
            position={[1, 5, -1]}
          />
        </AccumulativeShadows>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Environment
          frames={degraded ? 1 : Infinity}
          resolution={256}
          background
          blur={1}
        >
          <Lightformers />
        </Environment>
        <CameraRig targetPosition={targetPosition} />
      </Canvas>

      <div className="absolute top-0 left-0 w-[100%] h-[100%]">
        <a
          href="https://pmnd.rs/"
          className="absolute bottom-10 left-4 text-[10px]"
        >
          <span className="text-[20px] font-bold">Song name</span>
          <br />
          <span className="text-[13px] ">Artist name</span>
        </a>
        <div className="absolute top-10 right-10 text-sm">Gihan Sudeepa —</div>

        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-blue-600 hover:rounded-r-[100px] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/gihan-sudeepa-177a9820a/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-[#333333] hover:rounded-r-[100px]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/GIHAA"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-blue-600 hover:rounded-r-[100px]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://twitter.com/sudeepa_gihan"
              >
                twitter <FaTwitterSquare size={30} />
              </a>
            </li>
            <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-red-600 hover:rounded-r-[100px]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.youtube.com/channel/UCZ4YyKzfsJmZGkD6bXfHD5Q"
              >
                Youtube <FaYoutube size={30} />
              </a>
            </li>
            <li className="w-[160px]  rounded-r-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 hover:bg-[#556e4b] hover:rounded-r-[100px]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                // href={}
                download
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: "13px",
          }}
        >
          BMW m8 coupe
        </div>
      </div>
    </>
  );
}

function CameraRig({ targetPosition }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    const currentPosition = state.camera.position.clone();
    const lerpedPosition = currentPosition.lerp(
      new THREE.Vector3().fromArray(targetPosition),
      0.05
    );
    state.camera.position.copy(lerpedPosition);
    state.camera.lookAt(0, 0, 0);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );
  return (
    <>
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="blue"
            colorB="black"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}
