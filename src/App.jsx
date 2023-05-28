import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddDestinationForm from "./components/AddDestinationForm/AddDestinationForm";
import DestinationPage from "./components/DestinationsPage/DestinationPage";
import DestinationDetailsPage from "./components/DestinationDetailsPage/DestinationDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<DestinationPage />} />
            <Route path="/form" element={<AddDestinationForm />} />
            <Route
              path="/destination/:id"
              element={<DestinationDetailsPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
