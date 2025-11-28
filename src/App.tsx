import { Routes, Route } from "react-router-dom";

import SignInPage from "./pages/authpages/SignInPage";
import SignUpPage from "./pages/authpages/SignUpPage";
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
