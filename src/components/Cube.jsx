'use client';
import React from 'react';
import { useRef } from "react";
import {  useFrame } from "@react-three/fiber";
export default function Cube({ position, side, color }) {

    const ref = useRef();
    const radius = 2;
    const amplitude = 5; // Adjust the amplitude of oscillation
    const frequency = 1;
    useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.position.x = -amplitude * Math.sin(frequency * state.clock.elapsedTime);
        ref.current.position.y = amplitude * Math.sin(frequency * state.clock.elapsedTime);
        ref.current.position.z = amplitude * Math.sin(frequency * state.clock.elapsedTime);
    });

    return (
        <mesh position={position} ref={ref}>
            <boxGeometry args={[side]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
