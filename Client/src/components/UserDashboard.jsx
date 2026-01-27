import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  BookMarked,
  BarChart2,
  Bell,
  LogOut,
  Clock,
  Star,
  Menu,
  Bookmark,
  BookOpen,
} from "lucide-react";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // localStorage.removeItem('token');
    navigate("/login");
  };

  const renderDashboardHome = () => (
    <div>
      <div className="dashboard-header">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
          Dashboard Overview
        </h2>
        <span style={{ color: "var(--text-muted)" }}>
          Welcome back, Student!
        </span>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <BookMarked />
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>3</div>
            <div style={{ color: "var(--text-muted)" }}>Issued Books</div>
          </div>
        </div>
        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#fee2e2", color: "#ef4444" }}
          >
            <Clock />
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>1</div>
            <div style={{ color: "var(--text-muted)" }}>Overdue</div>
          </div>
        </div>
        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#dcfce7", color: "#166534" }}
          >
            <Star />
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>450</div>
            <div style={{ color: "var(--text-muted)" }}>Reading Points</div>
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: "1rem", fontWeight: "600" }}>Due Soon</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Clean Code</td>
              <td>2023-11-15</td>
              <td>
                <span className="badge badge-available">Active</span>
              </td>
              <td>
                <button
                  className="btn btn-outline"
                  style={{ padding: "4px 12px", fontSize: "0.8rem" }}
                >
                  Renew
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCatalog = () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
    >
      <Search size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
      <h2 style={{ marginBottom: "0.5rem" }}>Book Catalog</h2>
      <p>Search and browse the library collection here.</p>
    </div>
  );

  const renderReservedBooks = () => (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        My Reserved Books
      </h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Reserved Date</th>
              <th>Availability Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "center",
                  color: "var(--text-muted)",
                  padding: "2rem",
                }}
              >
                No reserved books found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBookDetails = () => (
    <div style={{ maxWidth: "800px" }}>
      {/* FIX: Removed extra '>' here */}
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Book Details
      </h2>

      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "var(--radius-xl)",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "300px",
            background: "#f1f5f9",
            borderRadius: "var(--radius-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#94a3b8",
          }}
        >
          <BookOpen size={50} />
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              marginBottom: "0.5rem",
              color: "#e2e8f0",
            }}
          >
            Book Title
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#94a3b8",
              marginBottom: "1.5rem",
            }}
          >
            Author Name
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Availability
              </div>
              <div style={{ fontWeight: "600", color: "#94a3b8" }}>
                Checking...
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Shelf Location
              </div>
              <div style={{ fontWeight: "600", color: "#94a3b8" }}>---</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              className="btn btn-primary"
              style={{ opacity: 0.5, cursor: "not-allowed" }}
            >
              Issue Book
            </button>
            <button
              className="btn btn-outline"
              style={{ opacity: 0.5, cursor: "not-allowed" }}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyBooks = () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
    >
      <BookMarked size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
      <h2 style={{ marginBottom: "0.5rem" }}>My Issued Books</h2>
      <p>View your active loans and history here.</p>
    </div>
  );

  const renderInsights = () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
    >
      <BarChart2 size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
      <h2 style={{ marginBottom: "0.5rem" }}>Reading Insights</h2>
      <p>AI recommendations and reading statistics will appear here.</p>
    </div>
  );

  const renderNotifications = () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "var(--text-muted)",
      }}
    >
      <Bell size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
      <h2 style={{ marginBottom: "0.5rem" }}>Notifications</h2>
      <p>System alerts and due date reminders will appear here.</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <BookMarked /> LibraFlow
        </div>

        <nav className="nav-menu">
          <div
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("dashboard");
              setMobileMenuOpen(false);
            }}
          >
            <LayoutDashboard size={20} /> Dashboard
          </div>

          <div
            className={`nav-item ${activeTab === "catalog" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("catalog");
              setMobileMenuOpen(false);
            }}
          >
            <Search size={20} /> Catalog
          </div>

          <div
            className={`nav-item ${activeTab === "book-details" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("book-details");
              setMobileMenuOpen(false);
            }}
          >
            <BookOpen size={20} /> Book Details
          </div>

          <div
            className={`nav-item ${activeTab === "reserved" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("reserved");
              setMobileMenuOpen(false);
            }}
          >
            <Bookmark size={20} /> Reserved Books
          </div>

          <div
            className={`nav-item ${activeTab === "my-books" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("my-books");
              setMobileMenuOpen(false);
            }}
          >
            <BookMarked size={20} /> My Books
          </div>

          <div
            className={`nav-item ${activeTab === "insights" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("insights");
              setMobileMenuOpen(false);
            }}
          >
            <BarChart2 size={20} /> Insights
          </div>

          <div
            className={`nav-item ${activeTab === "notifications" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("notifications");
              setMobileMenuOpen(false);
            }}
          >
            <Bell size={20} /> Notifications
          </div>
        </nav>

        <div style={{ marginTop: "auto" }}>
          <div
            className="nav-item"
            style={{ color: "#ef4444" }}
            onClick={handleLogout}
          >
            <LogOut size={20} /> Logout
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          {/* FIX: Added missing closing quote */}
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              textTransform: "capitalize",
            }}
          >
            {activeTab.replace("-", " ")}
          </h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "dashboard" && renderDashboardHome()}
            {activeTab === "catalog" && renderCatalog()}
            {activeTab === "book-details" && renderBookDetails()}
            {activeTab === "reserved" && renderReservedBooks()}
            {activeTab === "my-books" && renderMyBooks()}
            {activeTab === "insights" && renderInsights()}
            {activeTab === "notifications" && renderNotifications()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default UserDashboard;
