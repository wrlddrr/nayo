import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Overview } from "./Overview";
import { News } from "./News";
import { Partnerships } from "./Partnerships";
import { Services } from "./Services";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "news":
        return <News />;
      case "partnerships":
        return <Partnerships />;
      case "services":
        return <Services />;
      case "profile":
        return <Profile />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-dashboard-bg">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;