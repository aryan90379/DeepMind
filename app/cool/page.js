"use client"
import Cubes from '@/components/Cubes'
import React from 'react'

const page = () => {
    return (
        <div className="w-full h-screen flex items-center py-10 justify-center bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#2a0845] relative overflow-hidden">
            <Cubes
                gridSize={8}
                maxAngle={60}
                radius={4}
                borderStyle="2px dashed #5227FF"
                faceColor="#1a1a2e"
                rippleColor="#ff6b6b"
                rippleSpeed={1.5}
                autoAnimate={true}
                rippleOnClick={true}
            />

        </div>
    )
}

export default page
