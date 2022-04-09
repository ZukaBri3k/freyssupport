import Home from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.js";
import SignIn from "./pages/SignIn.js";
import Private from "./pages/Private/Private.js";
import AccountHome from "./pages/Private/AccountHome/AccountHome.js";
import ModifyMyAccount from "./pages/ModifyMyAccount.js";
import Redirect from "./pages/Redirect.js";
import Research from "./pages/Private/research/Research.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/account" element={<AccountHome />} />
          <Route path="/private/account/modify" element={<ModifyMyAccount />} />
          <Route path="/private/research" element={<Research />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
