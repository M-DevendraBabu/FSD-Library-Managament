import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <--- ADDED useNavigate
import { motion } from "framer-motion";
import { User, Mail, Lock, GraduationCap, Shield } from "lucide-react";

const Register = () => {
  const navigate = useNavigate(); // <--- INITIALIZE HOOK
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API Call
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration Successful! Redirecting to Login...");
      navigate("/login"); // <--- REDIRECT TO LOGIN
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="auth-page"
    >
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join the library community</p>
        </div>

        <div className="role-grid">
          <div
            className={`role-card ${role === "student" ? "selected" : ""}`}
            onClick={() => setRole("student")}
          >
            <GraduationCap className="role-card-icon" size={32} />
            <div style={{ fontWeight: "600" }}>Student</div>
          </div>
          <div
            className={`role-card ${role === "admin" ? "selected" : ""}`}
            onClick={() => setRole("admin")}
          >
            <Shield className="role-card-icon" size={32} />
            <div style={{ fontWeight: "600" }}>Admin</div>
          </div>
        </div>

        {/* ADDED onSubmit to the form */}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-full"
            style={{ marginTop: "1rem" }}
            disabled={isLoading}
          >
            {isLoading
              ? "Creating Account..."
              : `Register as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </button>
        </form>

        <div
          style={{
            marginTop: "1.5rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#64748B",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#4F46E5",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Login here
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
