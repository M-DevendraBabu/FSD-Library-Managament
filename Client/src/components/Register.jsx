import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, GraduationCap, Shield } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2400&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.65), rgba(15,23,42,0.45))",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          borderRadius: "1.5rem",
          padding: "2rem",
          boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 700 }}>
            Create Account
          </h2>
          <p style={{ color: "#64748B", marginTop: "0.4rem" }}>
            Join the library community
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            onClick={() => setRole("student")}
            style={{
              cursor: "pointer",
              padding: "1rem",
              borderRadius: "0.75rem",
              border:
                role === "student" ? "2px solid #6366F1" : "1px solid #E5E7EB",
              background: role === "student" ? "#EEF2FF" : "#ffffff",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            <GraduationCap size={26} />
            <div style={{ marginTop: "0.4rem" }}>Student</div>
          </div>

          <div
            onClick={() => setRole("admin")}
            style={{
              cursor: "pointer",
              padding: "1rem",
              borderRadius: "0.75rem",
              border:
                role === "admin" ? "2px solid #6366F1" : "1px solid #E5E7EB",
              background: role === "admin" ? "#EEF2FF" : "#ffffff",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            <Shield size={26} />
            <div style={{ marginTop: "0.4rem" }}>Admin</div>
          </div>
        </div>

        <form onSubmit={handleRegister}>
          {[
            {
              label: "Full Name",
              type: "text",
              placeholder: "John Doe",
              icon: <User size={18} />,
            },
            {
              label: "Email Address",
              type: "email",
              placeholder: "you@example.com",
              icon: <Mail size={18} />,
            },
            {
              label: "Password",
              type: "password",
              placeholder: "••••••••",
              icon: <Lock size={18} />,
            },
          ].map((field, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <label style={{ fontWeight: 500 }}>{field.label}</label>
              <div style={{ position: "relative", marginTop: "0.4rem" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94A3B8",
                  }}
                >
                  {field.icon}
                </span>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.75rem 0.65rem 2.4rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #CBD5E1",
                  }}
                />
              </div>
            </div>
          ))}

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={!isLoading ? { scale: 1.03 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "999px",
              border: "none",
              background: isLoading ? "#A5B4FC" : "#6366F1",
              color: "#ffffff",
              fontWeight: 600,
              marginTop: "0.5rem",
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading
              ? "Creating Account..."
              : `Register as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </motion.button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "1.2rem",
            fontSize: "0.9rem",
          }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#6366F1", fontWeight: 600 }}>
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
