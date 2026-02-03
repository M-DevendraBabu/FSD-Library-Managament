import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";

/* ==================== LAZY IMPORTS ==================== */
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const UserDashboard = lazy(() => import("./components/UserDashboard"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const BookCatalog = lazy(() => import("./components/BookCatalog"));
const MyIssuedBooks = lazy(() => import("./components/MyIssuedBooksPage"));
const ReserveBook = lazy(() => import("./components/ReserveBookPage"));
const BookDetails = lazy(() => import("./components/BookDetailspage"));
const RecommendationPage = lazy(() => import("./components/RecommendationPage"));
const NotificationPage = lazy(() => import("./components/NotificationPage"));
const Profile = lazy(() => import("./components/Profile"));
const Support = lazy(() => import("./components/Support"));

const UserManagementPage = lazy(() =>
  import("./components/UserManagementPage")
);
const IssueReturnManagementPage = lazy(() =>
  import("./components/IssueReturnManagementPage")
);
const Report = lazy(() => import("./components/Report"));
const BookManagementPage = lazy(() =>
  import("./components/BookManagementPage")
);

function App() {
  const location = useLocation();

  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  const userType = localStorage.getItem("userType") || "user";

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        <Suspense fallback={<div className="page-content">Loading...</div>}>
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
                    to={
                      userType === "admin"
                        ? "/admin-dashboard"
                        : "/dashboard"
                    }
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
                    to={
                      userType === "admin"
                        ? "/admin-dashboard"
                        : "/dashboard"
                    }
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
                  <motion.div className="page-content">
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
                  <motion.div className="page-content">
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
                  <motion.div className="page-content">
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
                  <motion.div className="page-content">
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
                  <motion.div className="page-content">
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
                  <motion.div className="page-content">
                    <NotificationPage />
                  </motion.div>
                ) : isAuthenticated && userType === "admin" ? (
                  <Navigate to="/admin-dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <motion.div className="page-content">
                    <Profile />
                  </motion.div>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/support"
              element={
                isAuthenticated ? (
                  <motion.div className="page-content">
                    <Support />
                  </motion.div>
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* ==================== ADMIN ROUTES ==================== */}
            <Route
              path="/admin-dashboard"
              element={
                isAuthenticated && userType === "admin" ? (
                  <motion.div className="page-content">
                    <AdminDashboard />
                  </motion.div>
                ) : isAuthenticated && userType === "user" ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/admin/user-management"
              element={
                isAuthenticated && userType === "admin" ? (
                  <motion.div className="page-content">
                    <UserManagementPage />
                  </motion.div>
                ) : isAuthenticated && userType === "user" ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/admin/issue-return"
              element={
                isAuthenticated && userType === "admin" ? (
                  <motion.div className="page-content">
                    <IssueReturnManagementPage />
                  </motion.div>
                ) : isAuthenticated && userType === "user" ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/admin/reports"
              element={
                isAuthenticated && userType === "admin" ? (
                  <motion.div className="page-content">
                    <Report />
                  </motion.div>
                ) : isAuthenticated && userType === "user" ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            <Route
              path="/admin/book-management"
              element={
                isAuthenticated && userType === "admin" ? (
                  <motion.div className="page-content">
                    <BookManagementPage />
                  </motion.div>
                ) : isAuthenticated && userType === "user" ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />

            {/* ==================== 404 ==================== */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;
