import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "sonner";
import ProtectedRoute from "./Components/ProtectedRoute";

import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import BookingPage from "./Components/Parking/BookingPage";
import ChooseBookingPage from "./Components/Parking/ChooseParking";
import HomePage from "./Components/Home";
import AboutPage from "./Components/About";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/choose-booking"
            element={
              <ProtectedRoute>
                <ChooseBookingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <BookingPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
