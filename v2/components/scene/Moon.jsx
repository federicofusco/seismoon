import { useTexture } from "@react-three/drei";

const Moon = ({ radius }) => {

    const resolution = 48;

    // Loads the textures
    const materialProps = useTexture ({
        map: "/textures/moon/texture.jpg",
        bumpMap: "/textures/moon/bump.jpg",
    });
    materialProps.bumpScale = 0.025;

    return (
        <mesh>
            <sphereGeometry args={[radius, resolution, resolution]} />
            <meshStandardMaterial {...materialProps} />
        </mesh>
    )
}

export default Moon;