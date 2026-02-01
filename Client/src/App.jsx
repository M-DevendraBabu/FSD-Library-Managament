import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import BookCatalog from "./components/BookCatalog";
import MyIssuedBooks from "./components/MyIssuedBooksPage";
import ReserveBook from "./components/ReserveBookPage";
import BookDetails from "./components/BookDetailspage";
import RecommendationPage from "./components/RecommendationPage";
import NotificationPage from "./components/NotificationPage";
import Profile from "./components/Profile";
import Support from "./components/Support";

// Import new admin management pages
import UserManagementPage from "./components/UserManagementPage";
import IssueReturnManagementPage from "./components/IssueReturnManagementPage";
import Report from "./components/Report";
import BookManagementPage from "./components/BookManagementPage";

function App() {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  // Get user type
  const userType = localStorage.getItem("userType") || "user";

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* ==================== PUBLIC ROUTES ==================== */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="page-content"
              >
                <Home />
              </motion.div>
            }
          />

          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate
                  to={userType === "admin" ? "/admin-dashboard" : "/dashboard"}
                />
              ) : (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="page-content"
                >
                  <Login />
                </motion.div>
              )
            }
          />

          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate
                  to={userType === "admin" ? "/admin-dashboard" : "/dashboard"}
                />
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="page-content"
                >
                  <Register />
                </motion.div>
              )
            }
          />

          {/* ==================== USER ROUTES ==================== */}
          {/* These routes are only accessible to regular users (userType === "user") */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <UserDashboard />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                // If admin tries to access user dashboard, redirect to admin dashboard
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/catalog"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <BookCatalog />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/my-books"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <MyIssuedBooks />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/reserve"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <ReserveBook />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/book-details"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <BookDetails />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/recommendations"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <RecommendationPage />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/notifications"
            element={
              isAuthenticated && userType === "user" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <NotificationPage />
                </motion.div>
              ) : isAuthenticated && userType === "admin" ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Profile Route - Accessible to both users and admins */}
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <Profile />
                </motion.div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Support Route - Accessible to both users and admins */}
          <Route
            path="/support"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <Support />
                </motion.div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* ==================== ADMIN ROUTES ==================== */}
          {/* Admin Dashboard - Only accessible to admins */}
          <Route
            path="/admin-dashboard"
            element={
              isAuthenticated && userType === "admin" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <AdminDashboard />
                </motion.div>
              ) : isAuthenticated && userType === "user" ? (
                // If user tries to access admin dashboard, redirect to user dashboard
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* User Management - Only accessible to admins */}
          <Route
            path="/admin/user-management"
            element={
              isAuthenticated && userType === "admin" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <UserManagementPage />
                </motion.div>
              ) : isAuthenticated && userType === "user" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Issue/Return Management - Only accessible to admins */}
          <Route
            path="/admin/issue-return"
            element={
              isAuthenticated && userType === "admin" ? (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <IssueReturnManagementPage />
                </motion.div>
              ) : isAuthenticated && userType === "user" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Reports - Only accessible to admins */}
          <Route
            path="/admin/reports"
            element={
              isAuthenticated && userType === "admin" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <Report />
                </motion.div>
              ) : isAuthenticated && userType === "user" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Book Management - Only accessible to admins */}
          <Route
            path="/admin/book-management"
            element={
              isAuthenticated && userType === "admin" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <BookManagementPage />
                </motion.div>
              ) : isAuthenticated && userType === "user" ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* ==================== 404 REDIRECT ==================== */}
          {/* FIXED: Always redirect to landing page for unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
