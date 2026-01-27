import { Link } from "react-router-dom";
import { ArrowRight, Users, Lock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div>
      <section className="hero">
        {/* Animated Background Elements */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>

        <div className="container">
          {/* Navigation Links (Replaces Navbar) */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
            }}
          >
            <Link
              to="/login"
              style={{
                color: "#4F46E5",
                fontWeight: "600",
                textDecoration: "none",
                marginRight: "1.5rem",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary"
              style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem" }}
            >
              Register
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span
              className="btn btn-outline"
              style={{
                borderRadius: "50px",
                padding: "5px 15px",
                fontSize: "14px",
              }}
            >
              Next Gen Library System
            </span>

            <h1 className="hero-title">
              Manage Your Knowledge <br />
              <span className="text-gradient">Effortlessly.</span>
            </h1>

            <p className="hero-text">
              A unified platform for students and administrators. Borrow books,
              track inventory, and manage accounts in one beautiful interface.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="btn btn-primary">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          </motion.div>

          {/* 3D Floating Card */}
          <div className="hero-card-container">
            <div className="hero-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "#e0e7ff",
                    padding: "10px",
                    borderRadius: "50%",
                    color: "#4F46E5",
                  }}
                >
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                    Trending Now
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.9rem" }}>
                    The Psychology of Money
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    background: "#e2e8f0",
                    borderRadius: "4px",
                    flex: 1,
                  }}
                ></div>
                <div
                  style={{
                    height: "8px",
                    background: "#e2e8f0",
                    borderRadius: "4px",
                    flex: 1,
                  }}
                ></div>
              </div>
              <div
                style={{
                  height: "8px",
                  background: "#e2e8f0",
                  borderRadius: "4px",
                  width: "70%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Why Choose LibraFlow?
            </h2>
            <p style={{ color: "#64748B" }}>Powerful features for everyone.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon-box">
                <Users />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                User Management
              </h3>
              <p style={{ color: "#64748B" }}>
                Admins can manage students and staff roles effortlessly.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <BookOpen />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                Digital Catalog
              </h3>
              <p style={{ color: "#64748B" }}>
                Search, filter, and view book details in real-time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-box">
                <Lock />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                Secure Access
              </h3>
              <p style={{ color: "#64748B" }}>
                Role-based login system ensuring data privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
