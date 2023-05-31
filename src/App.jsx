import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddDestinationForm from "./components/AddDestinationForm/AddDestinationForm";

import ContainerPage from "./components/ContainerPage/ContainerPage";
import UpdateObjectForm from "./components/UpdateObjectForm/UpdateObjectForm";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/travelPrueba/" element={<ContainerPage />} />
          <Route path="/travelPrueba/form" element={<AddDestinationForm />} />
          <Route
            path="/travelPrueba/formUpdate"
            element={<UpdateObjectForm />}
          />
          {/* <Route path="/destination/:id" element={<DestinationDetailsPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
