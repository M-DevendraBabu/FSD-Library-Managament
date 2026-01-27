import { Link } from "react-router-dom";
import { ArrowRight, Users, Lock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import libraryBg from "../assets/library-bg.jpg";

const Home = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${libraryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          minHeight: "100vh",
          color: "#fff",
        }}
      >
        {/* 🎬 Cinematic dark gradient (NO blur, NO white) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
            zIndex: 0,
          }}
        />

        {/* Top-right buttons */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            display: "flex",
            gap: "1rem",
            zIndex: 2,
          }}
        >
          <Link to="/login" className="btn btn-primary btn-tilt">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary btn-tilt">
            Register
          </Link>
        </div>

        {/* HERO CONTENT (NO BOX) */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "900px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "999px",
              padding: "6px 18px",
              width: "fit-content",
              fontSize: "14px",
              marginBottom: "1.5rem",
            }}
          >
            Next Gen Library System
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "1.2rem",
            }}
          >
            Manage Your Knowledge <br />
            <span style={{ color: "#c7d2fe" }}>Effortlessly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "1.1rem",
              maxWidth: "650px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "2.5rem",
            }}
          >
            A unified digital library platform for students and administrators.
            Borrow books, track inventory, and manage accounts seamlessly in one
            powerful system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "1.2rem" }}
          >
            <Link to="/register" className="btn btn-primary btn-tilt">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/login" className="btn btn-secondary btn-tilt">
              Login
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              Why Choose LibraFlow?
            </h2>
            <p style={{ color: "#64748B" }}>Powerful features for everyone.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <Users />
              <h3>User Management</h3>
              <p>Manage students and staff with ease.</p>
            </div>

            <div className="feature-card">
              <BookOpen />
              <h3>Digital Catalog</h3>
              <p>Search and manage books in real time.</p>
            </div>

            <div className="feature-card">
              <Lock />
              <h3>Secure Access</h3>
              <p>Role-based authentication and protection.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
