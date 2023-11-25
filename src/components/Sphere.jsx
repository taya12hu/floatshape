'use client';
import React from 'react';
import { useRef } from "react";
import {  useFrame } from "@react-three/fiber";

export default function Sphere({ position, size, color }) {

    const radius = 4;
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
        ref.current.position.y = radius * Math.sin(state.clock.elapsedTime);
    });

    return (
        <mesh position={position} ref={ref}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
  
