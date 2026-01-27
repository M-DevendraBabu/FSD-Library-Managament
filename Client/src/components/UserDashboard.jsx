import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // <--- 1. Import useNavigate
import {
  LayoutDashboard,
  Search,
  BookOpen,
  BarChart2,
  Bell,
  LogOut,
  Clock,
  RefreshCw,
  MapPin,
  Heart,
  BookMarked,
  Star,
  Menu,
  Sparkles,
} from "lucide-react";

// --- Dummy Data (Simulating API Response) ---
const mockBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "Available",
    shelf: "A-102",
    health: "Good",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    status: "Issued",
    shelf: "B-205",
    health: "Fair",
  },
  {
    id: 3,
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    status: "Available",
    shelf: "A-110",
    health: "New",
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    status: "Available",
    shelf: "C-301",
    health: "Good",
  },
];

const myIssuedBooks = [
  {
    id: 2,
    title: "Clean Code",
    dueDate: "2023-11-15",
    status: "Active",
    fine: 0,
  },
  {
    id: 5,
    title: "Deep Learning",
    dueDate: "2023-11-01",
    status: "Overdue",
    fine: 50,
  },
];

const notifications = [
  {
    id: 1,
    message: "Return 'Clean Code' within 3 days to avoid fine.",
    type: "warning",
  },
  {
    id: 2,
    message: "Your reserved book 'Atomic Habits' is now available.",
    type: "success",
  },
  {
    id: 3,
    message: "Library will be closed on Sunday for maintenance.",
    type: "info",
  },
];

const insights = [
  {
    title: "Predictive Analytics for Business",
    reason: "Based on your interest in AI",
    score: "98%",
  },
  {
    title: "Data Structures in Java",
    reason: "Complement to Clean Code",
    score: "92%",
  },
];

const UserDashboard = () => {
  // <--- 2. Initialize useNavigate
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // <--- 3. Handle Logout Function
  const handleLogout = () => {
    // In a real MERN app, you would clear local storage tokens here:
    // localStorage.removeItem('token');
    navigate("/login");
  };

  // --- Render Functions for Different Tabs ---

  const renderHome = () => (
    <div>
      <div className="dashboard-header">
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Overview</h2>
        <span style={{ color: "var(--text-muted)" }}>
          Welcome back, Student!
        </span>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <BookOpen />
          </div>
          <div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {myIssuedBooks.length}
            </div>
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
            {myIssuedBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.dueDate}</td>
                <td>
                  <span
                    className={`badge ${book.status === "Overdue" ? "badge-issued" : "badge-available"}`}
                  >
                    {book.status}
                  </span>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCatalog = () => {
    if (selectedBook) {
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button
            onClick={() => setSelectedBook(null)}
            style={{
              marginBottom: "1rem",
              background: "none",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            &larr; Back to Catalog
          </button>
          <div
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "var(--radius-xl)",
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                height: "350px",
                background: "#e2e8f0",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "4rem",
              }}
            >
              <BookOpen />
            </div>
            <div style={{ flex: "2", minWidth: "300px" }}>
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  marginBottom: "0.5rem",
                }}
              >
                {selectedBook.title}
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                by {selectedBook.author}
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
                  <div
                    style={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {selectedBook.status === "Available" ? (
                      <span style={{ color: "#166534" }}>● In Stock</span>
                    ) : (
                      <span style={{ color: "#991b1b" }}>● Issued</span>
                    )}
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
                  <div
                    style={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <MapPin size={16} /> {selectedBook.shelf}
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
                    Condition
                  </div>
                  <div style={{ fontWeight: "600" }}>{selectedBook.health}</div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Est. Read Time
                  </div>
                  <div
                    style={{
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Clock size={16} /> 6 Hours
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  className="btn btn-primary"
                  disabled={selectedBook.status !== "Available"}
                  style={{
                    opacity: selectedBook.status !== "Available" ? 0.5 : 1,
                  }}
                >
                  {selectedBook.status === "Available"
                    ? "Issue Book"
                    : "Not Available"}
                </button>
                <button className="btn btn-outline">Reserve for Later</button>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <div>
        <div className="dashboard-header">
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
            Book Catalog
          </h2>
          <div style={{ position: "relative" }}>
            <Search
              style={{
                position: "absolute",
                left: "10px",
                top: "10px",
                color: "var(--text-muted)",
              }}
              size={18}
            />
            <input
              type="text"
              placeholder="Search title, author, ISBN..."
              style={{
                padding: "0.6rem 1rem 0.6rem 2.5rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid #e2e8f0",
                width: "300px",
                outline: "none",
              }}
            />
          </div>
        </div>
        <div className="book-grid">
          {mockBooks.map((book) => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => setSelectedBook(book)}
              style={{ cursor: "pointer" }}
            >
              <div className="book-cover">
                <BookOpen size={60} opacity={0.8} />
              </div>
              <div className="book-details">
                <h4
                  style={{
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {book.title}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                  }}
                >
                  {book.author}
                </p>
                <span
                  className={`badge ${book.status === "Available" ? "badge-available" : "badge-issued"}`}
                >
                  {book.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderIssued = () => (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        My Issued Books
      </h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Due Date</th>
              <th>Fine</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myIssuedBooks.map((book) => (
              <tr key={book.id}>
                <td>
                  <div style={{ fontWeight: "600" }}>{book.title}</div>
                  <div
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    ID: #BK{book.id}992
                  </div>
                </td>
                <td>2023-10-15</td>
                <td>{book.dueDate}</td>
                <td style={{ color: book.fine > 0 ? "#ef4444" : "inherit" }}>
                  ${book.fine}
                </td>
                <td>
                  <button
                    className="btn btn-outline"
                    style={{
                      padding: "6px 12px",
                      fontSize: "0.85rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <RefreshCw size={14} /> Renew
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderInsights = () => (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Reading Insights
      </h2>

      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "var(--radius-xl)",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ marginBottom: "1rem", fontWeight: "600" }}>
          AI-Based Recommendations
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {insights.map((rec, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                border: "1px solid #f1f5f9",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div>
                <div style={{ fontWeight: "600" }}>{rec.title}</div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Sparkles size={14} /> {rec.reason}
                </div>
              </div>
              <div
                style={{
                  background: "#e0e7ff",
                  color: "var(--primary)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                {rec.score} Match
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "var(--radius-xl)",
        }}
      >
        <h3 style={{ marginBottom: "1rem", fontWeight: "600" }}>
          Weekly Reading Goal
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              flex: 1,
              height: "10px",
              background: "#f1f5f9",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "65%",
                height: "100%",
                background: "var(--primary)",
              }}
            ></div>
          </div>
          <span style={{ fontWeight: "600" }}>65%</span>
        </div>
        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "0.9rem",
          }}
        >
          You've read 6.5 hours this week. Goal: 10 hours.
        </p>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Notifications
      </h2>
      <div style={{ maxWidth: "800px" }}>
        {notifications.map((notif) => (
          <div key={notif.id} className="notification-item">
            <div className="noti-icon">
              <Bell size={20} />
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>{notif.message}</div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  marginTop: "0.25rem",
                }}
              >
                2 hours ago
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <BookOpen /> LibraFlow
        </div>

        <nav className="nav-menu">
          <div
            className={`nav-item ${activeTab === "home" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("home");
              setMobileMenuOpen(false);
            }}
          >
            <LayoutDashboard size={20} /> Dashboard
          </div>
          <div
            className={`nav-item ${activeTab === "catalog" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("catalog");
              setSelectedBook(null);
              setMobileMenuOpen(false);
            }}
          >
            <Search size={20} /> Catalog
          </div>
          <div
            className={`nav-item ${activeTab === "issued" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("issued");
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
          {/* <--- 4. Added onClick to logout button */}
          <div
            className="nav-item"
            style={{ color: "#ef4444" }}
            onClick={handleLogout}
          >
            <LogOut size={20} /> Logout
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: "800",
              textTransform: "capitalize",
            }}
          >
            {activeTab.replace("-", " ")}
          </h1>
          <button
            className="btn btn-outline"
            style={{ display: "none", md: "flex" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "home" && renderHome()}
            {activeTab === "catalog" && renderCatalog()}
            {activeTab === "issued" && renderIssued()}
            {activeTab === "insights" && renderInsights()}
            {activeTab === "notifications" && renderNotifications()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default UserDashboard;
