import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EditExercisePage from "./pages/EditExercisePage";
import CreateExercisePage from "./pages/CreateExercisePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditExercisePage />} />
        <Route path="/create" element={<CreateExercisePage />} />
      </Routes>
    </Router>
  );
};

export default App;
