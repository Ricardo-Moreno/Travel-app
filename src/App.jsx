import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddDestinationForm from "./components/AddDestinationForm/AddDestinationForm";

import SearchContainer from "./components/SearchContainer/SearchContainer";
import ContainerPage from "./components/ContainerPage/ContainerPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <SearchContainer />
        <Routes>
          <Route path="/travelPrueba/" element={<ContainerPage />} />
          <Route path="/travelPrueba/form" element={<AddDestinationForm />} />
          {/* <Route path="/destination/:id" element={<DestinationDetailsPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
