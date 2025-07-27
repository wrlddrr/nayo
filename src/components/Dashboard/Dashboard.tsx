import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Overview } from "./Overview";
import { News } from "./News";
import { Partnerships } from "./Partnerships";
import { Services } from "./Services";

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
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-card-foreground">Profile</h2>
            <p className="text-muted-foreground">Profile management coming soon...</p>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-card-foreground">Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon...</p>
          </div>
        );
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