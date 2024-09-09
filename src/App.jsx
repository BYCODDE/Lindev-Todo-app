// import { useEffect } from "react";
// import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";

function App() {
  // const { isSignedIn } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isSignedIn) {
  //     navigate("/sign-in");
  //   }
  // }, [isSignedIn, navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
