import React from "react";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Mail from "./Pages/Main/Mail";
import EmailList from "./Pages/Main/EmailList";
import Sidebar from "./Pages/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />
        <EmailList />
        <Mail />
      </div>

      <Footer />
    </div>
  );
}

export default App;
