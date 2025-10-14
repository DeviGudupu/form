import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

import PublicPanel from "./components/Panels/PublicPanel";
import FarmerPanel from "./components/Panels/FarmerPanel";
import ExpertPanel from "./components/Panels/ExpertPanel";
import AdminPanel from "./components/Panels/AdminPanel";
import Resources from "./components/Panels/Resources";
import Market from "./components/Panels/Market";
import Initiatives from "./components/Panels/Initiatives";

function App() {
  const [activePanel, setActivePanel] = useState("public");

  return (
    <div className="App">
      <Header onRoleChange={setActivePanel} />
      <div className="container">
        <Hero />
        <CardGrid onOpen={setActivePanel} />

        {activePanel === "public" && <PublicPanel />}
        {activePanel === "farmer" && <FarmerPanel />}
        {activePanel === "expert" && <ExpertPanel />}
        {activePanel === "admin" && <AdminPanel />}
        {activePanel === "resources" && <Resources />}
        {activePanel === "market" && <Market />}
        {activePanel === "initiatives" && <Initiatives />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
