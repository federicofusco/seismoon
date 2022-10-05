const Lighting = () => {
    return (
        <>
            <ambientLight color="0x282828" />
            <pointLight position={[50, 10, 50]} />
        </>
    )
}

export default Lighting;