'use client';
import React from 'react';
import { useRef } from "react";
import {  useFrame } from "@react-three/fiber";

export default function Ring({ position, size, color }) {

    const ref = useRef();
    const radius = 4;
    useFrame((state, delta) => {

        ref.current.position.y = -Math.sin(state.clock.elapsedTime) * 2;
        ref.current.position.x = radius * Math.sin(state.clock.elapsedTime);
    });

    return (
        <mesh position={position} ref={ref}>
            <ringGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}
