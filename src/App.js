import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Private from "./pages/Private/Private.js";
import AccountHome from "./pages/Private/AccountHome/AccountHome.js";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/account" element={<AccountHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
