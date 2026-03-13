// import { Canvas } from "@react-three/fiber";
// import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// function ProductModel({ path, scale }) {
//   const { scene } = useGLTF(path);
//   return <primitive object={scene} scale={scale} position={[0, 0, 0]} />;
// }

// export default function ProductDetail({ product, onBack }) {
//   const pageRef = useRef();
//   const infoRef = useRef();

//   useEffect(() => {
//     gsap.fromTo(
//       pageRef.current,
//       { y: "100%", opacity: 0 },
//       { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" },
//     );
//     gsap.fromTo(
//       infoRef.current,
//       { x: -60, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 },
//     );
//   }, []);

//   const handleBack = () => {
//     gsap.to(pageRef.current, {
//       y: "100%",
//       opacity: 0,
//       duration: 0.5,
//       ease: "power3.in",
//       onComplete: onBack,
//     });
//   };

//   return (
//     <div ref={pageRef} className="productDetail">
//       <button className="productDetailBack" onClick={handleBack}>
//         ← Back
//       </button>
//       <div className="productDetailCanvas">
//         <Canvas
//           camera={{ position: [0, 0, 4], fov: 45 }}
//           gl={{ antialias: true, alpha: true }}
//           onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
//         >
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[5, 5, 5]} intensity={1.2} />
//           <Environment preset="city" />
//           <ProductModel path={product.model} scale={product.scale} />
//           <OrbitControls
//             enablePan={false}
//             minDistance={2}
//             maxDistance={8}
//             autoRotate
//             autoRotateSpeed={1.5}
//           />
//         </Canvas>
//       </div>
//       <div ref={infoRef} className="productDetailInfo">
//         <span className="productNumber">0{product.id}</span>
//         <h1 className="productDetailName">{product.name}</h1>
//         <p className="productDetailDesc">{product.description}</p>
//         <span className="productDetailPrice">{product.price}</span>
//         <button className="productBtn">Buy Now</button>
//       </div>
//     </div>
//   );
// }

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function ProductModel({ path, scale }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} position={[0, 0, 0]} />;
}

function HotspotButton({ hotspot, activeHotspot, onToggle }) {
  const isActive = activeHotspot?.id === hotspot.id;
  const popupRef = useRef();

  useEffect(() => {
    if (!popupRef.current) return;
    if (isActive) {
      gsap.fromTo(popupRef.current,
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [isActive]);

  return (
    <div
      className="hotspot3d"
      style={{ top: hotspot.position.top, left: hotspot.position.left }}
    >
      {/* pulsing dot button */}
      <button
        className="hotspotDot"
        onClick={() => onToggle(isActive ? null : hotspot)}
      >
        <span className="hotspotDotInner" />
        <span className="hotspotDotLabel">{hotspot.label}</span>
      </button>

      {/* info popup */}
      {isActive && (
        <div ref={popupRef} className="hotspotPopup">
          <h4>{hotspot.label}</h4>
          <p>{hotspot.info}</p>
          <button
            className="hotspotClose"
            onClick={() => onToggle(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail({ product, onBack }) {
  const pageRef = useRef();
  const infoRef = useRef();
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    gsap.fromTo(pageRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(infoRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const handleBack = () => {
    gsap.to(pageRef.current, {
      y: "100%", opacity: 0, duration: 0.5, ease: "power3.in",
      onComplete: onBack,
    });
  };

  return (
    <div ref={pageRef} className="productDetail">
      <button className="productDetailBack" onClick={handleBack}>
        ← Back
      </button>

      {/* Canvas + hotspots overlay */}
      <div className="productDetailCanvas">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <Environment preset="city" />
          <ProductModel path={product.model} scale={product.scale} />
          <OrbitControls
            enablePan={false}
            minDistance={2}
            maxDistance={8}
            autoRotate={!activeHotspot}   // ← stop rotation when hotspot open
            autoRotateSpeed={1.5}
          />
        </Canvas>

        {/* HTML hotspots overlaid on canvas */}
        {product.hotspots?.map((hotspot) => (
          <HotspotButton
            key={hotspot.id}
            hotspot={hotspot}
            activeHotspot={activeHotspot}
            onToggle={setActiveHotspot}
          />
        ))}
      </div>

      <div ref={infoRef} className="productDetailInfo">
        <span className="productNumber">0{product.id}</span>
        <h1 className="productDetailName">{product.name}</h1>
        <p className="productDetailDesc">{product.description}</p>
        <span className="productDetailPrice">{product.price}</span>
        <button className="productBtn">Buy Now</button>
      </div>
    </div>
  );
}