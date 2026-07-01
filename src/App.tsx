// src/App.tsx
import "./App.css";
import DashboardHeader from "./components/header";
import Logo3D from "./components/logo3D";

function App() {
  return (
    <div className="app-container">
      <DashboardHeader
        logo="../public/LOGO.png"
        title="Hamor Doctor"
        subTitle="Your health our priority"
      />
      <Logo3D />
    </div>
  );
}

export default App;
