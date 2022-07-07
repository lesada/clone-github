import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import  Header  from "./components/Header";
import  Profile  from "./pages/Profile";
import  Repo  from "./pages/Repo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" element={<Profile/>} />
      <Route path="/:username" element={<Profile/>} />
      <Route path="/:username/:reponame" element={<Repo/>} />
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;