import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import libraryBg from "../assets/login-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Clear form data before login
    setFormData({
      email: "",
      password: "",
    });

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("isLoggedIn", "true");
      if (role === "student") {
        navigate("/dashboard");
      } else {
        alert("Admin Login Successful (Dashboard not created yet)");
      }
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        filter: "contrast(1.08) saturate(1.05)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="auth-page"
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "12%",
        }}
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
              onClick={() => {
                setRole("student");
                setFormData({ email: "", password: "" }); // Clear form when switching roles
              }}
            >
              <GraduationCap size={18} /> Student
            </div>
            <div
              className={`role-option ${role === "admin" ? "active" : ""}`}
              onClick={() => {
                setRole("admin");
                setFormData({ email: "", password: "" }); // Clear form when switching roles
              }}
            >
              <Shield size={18} /> Admin
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder={
                    role === "admin"
                      ? "admin@library.com"
                      : "student@college.edu"
                  }
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-input"
                  placeholder="•••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ paddingRight: "3rem" }}
                  required
                  autoComplete="new-password"
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
                : `Login as ${
                    role.charAt(0).toUpperCase() + role.slice(1)
                  }`}{" "}
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
            Don&apos;t have an account?{" "}
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
    </div>
  );
};

export default Login;
