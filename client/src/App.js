import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Container/HomePage";
import Signin from "./components/login/Signin";
import Layout from "./Container/Layout";
import HospitalPage from "./Container/HospitalPage";
import CampaignPage from "./Container/CampaignPage";
import Register from "./components/login/Register";
import Profile from "./components/login/Profile";
import HospitalForm from "./components/Data/HospitalForm";
import CampaignForm from "./components/Data/CampaignForm";
import CampaignDetails from "./components/campaign/CampaignDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/hospitals" element={<HospitalPage />} />
            <Route path="campaigns" element={<CampaignPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="campaign-details" element={<CampaignDetails />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
