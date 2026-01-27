import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <--- ADDED useNavigate
import { motion } from "framer-motion";
import {
  GraduationCap,
  Shield,
  Lock,
  Mail,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate(); // <--- INITIALIZE HOOK
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API Call
    setTimeout(() => {
      setIsLoading(false);

      // CHECK ROLE AND REDIRECT
      if (role === "student") {
        alert("Login Successful! Redirecting to Dashboard...");
        navigate("/dashboard"); // <--- REDIRECT TO USER DASHBOARD
      } else {
        alert("Admin Login Successful (Dashboard not created yet)");
        // navigate('/admin-dashboard'); // You would use this for admin
      }
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="auth-page"
    >
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">
            {role === "admin" ? "Admin Portal" : "Welcome Back"}
          </h2>
          <p className="auth-subtitle">
            {role === "admin"
              ? "Access library controls"
              : "Access your digital library"}
          </p>
        </div>

        <div className="role-toggle">
          <div
            className={`role-option ${role === "student" ? "active" : ""}`}
            onClick={() => setRole("student")}
          >
            <GraduationCap size={18} /> Student
          </div>
          <div
            className={`role-option ${role === "admin" ? "active" : ""}`}
            onClick={() => setRole("admin")}
          >
            <Shield size={18} /> Admin
          </div>
        </div>

        {/* ADDED onSubmit to the form */}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                className="form-input"
                placeholder={
                  role === "admin" ? "admin@library.com" : "student@college.edu"
                }
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="••••••••"
                style={{ paddingRight: "3rem" }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748B",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary btn-full" disabled={isLoading}>
            {isLoading
              ? "Logging in..."
              : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}{" "}
            <ArrowRight size={18} />
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
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#4F46E5",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Create one
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
