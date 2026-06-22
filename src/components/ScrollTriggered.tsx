import { motion } from "motion/react";

const features = [
  { title: "Automated Lead Routing", icon: "📥", color: "340" },
  { title: "Smart Scheduling", icon: "📅", color: "20" },
  { title: "Custom Analytics", icon: "📊", color: "60" },
  { title: "AI-Powered Follow-ups", icon: "⚡", color: "80" },
];

const container = {
  margin: "100px auto",
  maxWidth: 1000,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
  fontSize: "4rem",
  width: 300,
  height: 430,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  boxShadow: "var(--card-shadow)",
  transformOrigin: "10% 60%",
  padding: "2rem",
};

const cardVariants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {features.map((f, i) => (
        <Card key={i} i={i} feature={f} />
      ))}
    </div>
  );
}

function Card({ feature, i }) {
  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background: `linear-gradient(306deg, hsl(${feature.color}, 70%, 50%), hsl(${feature.color}, 90%, 30%))` }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{feature.icon}</div>
        <h3 style={{ color: "var(--white)", textAlign: "center" }}>{feature.title}</h3>
      </motion.div>
    </motion.div>
  );
}
