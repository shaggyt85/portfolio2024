/* eslint-disable react/no-unknown-property */
export const LightSetup = () => (
  <>
    <directionalLight position={[7, 2, 1]} intensity={2} />
    <ambientLight intensity={0.6} />
    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
  </>
);
