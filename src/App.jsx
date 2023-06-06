import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddDestinationForm from "./components/AddDestinationForm/AddDestinationForm";
import UpdateObjectForm from "./components/UpdateObjectForm/UpdateObjectForm";
import Categories from "./components/Categories/Categories";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import DestinationPage from "./components/DestinationPage/DestinationPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <SearchContainer />
        <Routes>
          <Route path="/travelPrueba/" element={<DestinationPage />} />
          <Route path="/travelPrueba/form" element={<AddDestinationForm />} />
          <Route
            path="/travelPrueba/formUpdate"
            element={<UpdateObjectForm />}
          />
          <Route
            path="/travelPrueba/category/:category"
            element={<Categories />}
          />
          <Route path="/*" element={<Navigate to="/travelPrueba/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
