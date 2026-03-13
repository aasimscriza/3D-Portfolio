const PRODUCTS = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    price: "$1,999",
    description: "Next-generation performance. M3 chip. All day battery life.",
    model: "/src/assets/models/macbook.glb",
    scale: 7,
    hotspots: [
      {
        id: 1,
        label: "M3 Chip",
        position: { top: "30%", left: "30%" },
        info: "The M3 chip delivers up to 60% faster performance than Intel-based MacBooks.",
      },
      {
        id: 2,
        label: "Retina Display",
        position: { top: "20%", left: "60%" },
        info: "Liquid Retina XDR display with 1000 nits sustained brightness.",
      },
    ],
  },
  {
    id: 2,
    name: "AirPods Max",
    price: "$549",
    description:
      "High-fidelity audio. Active noise cancellation. All day comfort.",
    model: "/src/assets/models/airpods_max.glb",
    scale: 1,
    hotspots: [
      {
        id: 1,
        label: "ANC",
        position: { top: "25%", left: "25%" },
        info: "Active Noise Cancellation blocks outside noise using advanced algorithms.",
      },
      {
        id: 2,
        label: "Audio Engine",
        position: { top: "60%", left: "65%" },
        info: "Apple-designed dynamic driver delivers high-fidelity audio.",
      },
    ],
  },
  {
    id: 3,
    name: "Mac Studio",
    price: "$2,999",
    description: "Incredible performance in a compact design. M2 Max chip.",
    model: "/src/assets/models/macstudio.glb",
    scale: 0.7,
    hotspots: [
      {
        id: 1,
        label: "M2 Max",
        position: { top: "35%", left: "28%" },
        info: "M2 Max chip with 12-core CPU and 38-core GPU for pro workflows.",
      },
      {
        id: 2,
        label: "Ports",
        position: { top: "55%", left: "65%" },
        info: "Front ports include 2x USB-C and SDXC card slot for fast transfers.",
      },
    ],
  },
  {
    id: 4,
    name: "Apple Watch",
    price: "$699",
    description: "Most rugged Apple Watch. Precision dual-frequency GPS.",
    model: "/src/assets/models/watch.glb",
    scale: 0.5,
    hotspots: [
      {
        id: 1,
        label: "Display",
        position: { top: "28%", left: "30%" },
        info: "Always-On Retina display with up to 2000 nits brightness outdoors.",
      },
      {
        id: 2,
        label: "GPS",
        position: { top: "60%", left: "62%" },
        info: "Precision dual-frequency GPS for accurate location tracking.",
      },
    ],
  },
  {
    id: 5,
    name: "Apple iPad",
    price: "$799",
    description: "M2 chip. Liquid Retina XDR display. All-day battery.",
    model: "/src/assets/models/ipad.glb",
    scale: 2,
    hotspots: [
      {
        id: 1,
        label: "M2 Chip",
        position: { top: "30%", left: "28%" },
        info: "M2 chip is up to 40% faster than the previous generation.",
      },
      {
        id: 2,
        label: "Display",
        position: { top: "55%", left: "65%" },
        info: "Liquid Retina XDR display with ProMotion technology up to 120Hz.",
      },
    ],
  },
  {
    id: 6,
    name: "Apple iPhone",
    price: "$1,299",
    description: "Titanium design. A17 Pro chip. Pro camera system.",
    model: "/src/assets/models/iphone.glb",
    scale: 10,
    hotspots: [
      {
        id: 1,
        label: "A17 Pro",
        position: { top: "30%", left: "28%" },
        info: "A17 Pro chip with 6-core CPU — the fastest chip ever in a smartphone.",
      },
      {
        id: 2,
        label: "Camera",
        position: { top: "25%", left: "65%" },
        info: "48MP main camera with 5x optical zoom and Action button.",
      },
    ],
  },
];

export default PRODUCTS;
