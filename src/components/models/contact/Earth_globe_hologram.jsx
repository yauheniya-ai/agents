import React, { useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

export function EarthGlobeHologram(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/models/earth_globe_hologram_2mb_looping_animation.glb')
  const { actions } = useAnimations(animations, group)

  // Create modified materials with the new color
  const modifiedMaterials = useMemo(() => {
    const newColor = new THREE.Color('#8b76e9')
    
    // Clone the hologram material to avoid modifying the original
    const holoMaterial = materials['transparent.004'].clone()
    // Set the new color for all relevant properties
    holoMaterial.color.set(newColor)
    holoMaterial.emissive.set(newColor)
    holoMaterial.emissiveIntensity = 1.5 // Increase the glow effect
    
    // Also modify the Earth surface if needed
    const earthMaterial = materials['Earth_Surface.002'].clone()
    // Tint the earth material slightly to match the hologram
    earthMaterial.emissive.set(newColor)
    earthMaterial.emissiveIntensity = 0.3
    
    return { 
      hologram: holoMaterial,
      earth: earthMaterial
    }
  }, [materials])

  useEffect(() => {
    // Play all animations automatically when component mounts
    if (actions) {
      // If you know the animation name, you can play it specifically
      // Otherwise, play all available animations
      Object.values(actions).forEach(action => {
        action.play()
      })
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="14451120394e4dd890e906789247ac40fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth_2" rotation={[-Math.PI / 2, 0, 0.025]} scale={100}>
                  <mesh 
                    name="Earth_2_Earth_Surface002_0" 
                    geometry={nodes.Earth_2_Earth_Surface002_0.geometry} 
                    material={modifiedMaterials.earth} 
                  />
                </group>
                <group name="Earth_rays_2" rotation={[-Math.PI / 2, 0, 0.025]} scale={100}>
                  <mesh 
                    name="Earth_rays_2_transparent004_0" 
                    geometry={nodes.Earth_rays_2_transparent004_0.geometry} 
                    material={modifiedMaterials.hologram} 
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/earth_globe_hologram_2mb_looping_animation.glb')