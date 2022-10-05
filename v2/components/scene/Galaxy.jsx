import { useTexture } from "@react-three/drei";
import * as THREE from "three"

const Galaxy = () => {

    const resolution = 48;

    // Loads the textures
    const materialProps = useTexture ({
        map: "/textures/galaxy/texture.jpg",
    });

    return (
        <mesh>
            <sphereGeometry args={[10_000, resolution, resolution]} />
            <meshStandardMaterial {...materialProps} side={ THREE.BackSide } />
        </mesh>
    )
}

export default Galaxy;