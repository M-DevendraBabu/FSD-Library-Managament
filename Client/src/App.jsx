import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import BookCatalog from "./components/BookCatalog";
import MyIssuedBooks from "./components/MyIssuedBooksPage";
import ReserveBook from "./components/ReserveBookPage";
import BookDetails from "./components/BookDetailspage";
import RecommendationPage from "./components/RecommendationPage";
import NotificationPage from "./components/NotificationPage"; // Import the new NotificationPage

function App() {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="app-wrapper">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="page-content"
              >
                <Login />
              </motion.div>
            }
          />

          <Route
            path="/register"
            element={
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="page-content"
              >
                <Register />
              </motion.div>
            }
          />

          {/* Protected Routes - Only accessible when logged in */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <UserDashboard />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/catalog"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <BookCatalog />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/my-books"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <MyIssuedBooks />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/reserve"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <ReserveBook />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/book-details"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="page-content"
                >
                  <BookDetails />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* RecommendationPage route */}
          <Route
            path="/recommendations"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <RecommendationPage />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* NotificationPage route */}
          <Route
            path="/notifications"
            element={
              isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="page-content"
                >
                  <NotificationPage />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Profile route (optional - if you create a separate ProfilePage component) */}
          {/* Uncomment and add if you create a separate ProfilePage component */}
          {/* <Route
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
                  <ProfilePage />
                </motion.div>
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}

          {/* Optional: 404 redirect */}
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
