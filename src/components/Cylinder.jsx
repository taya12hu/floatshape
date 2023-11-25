'use client';
import React from 'react';
import { useRef } from "react";
import {  useFrame } from "@react-three/fiber";

export default function Cylinder({ position, size, color }) {

    const ref = useRef();
    const amplitude = 9;
    const frequency = 1;
    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.position.z = amplitude * Math.sin(frequency * state.clock.elapsedTime);

    });

    return (
        <mesh position={position} ref={ref}>
            <cylinderGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
