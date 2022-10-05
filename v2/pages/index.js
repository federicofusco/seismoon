import { Canvas } from "@react-three/fiber";
import Moon from "../components/scene/Moon";
import Galaxy from "../components/scene/Galaxy";
import Lighting from "../components/scene/Lighting";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const Home = () => {

    const moonRadius = 2;

    return (
        <>
            <div id="canvas-container" className="w-screen h-screen">
                <Canvas>
                    <PerspectiveCamera makeDefault far={ 20_000 } />

                    <Moon radius={ moonRadius } />
                    <Galaxy />

                    <Lighting />
                    
                    <OrbitControls minDistance={ moonRadius + 0.3 } maxDistance={ 250 } />
                </Canvas>
            </div>
        </>
    );
}

export default Home;