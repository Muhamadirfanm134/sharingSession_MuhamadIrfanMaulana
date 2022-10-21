import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddResource from "../pages/addResource/AddResource";
import EditResource from "../pages/editResource/EditResource";
import ResourceList from "../pages/resourceList/ResourceList";
import "../App.scss";
import Gap from "../components/gap/Gap";
import Footer from "../components/footer/footer";
import "boxicons";

const RoutesManagement = () => {
  return (
    <BrowserRouter>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<ResourceList />} />
          <Route path="add" element={<AddResource />} />
          <Route path="edit" element={<EditResource />} />
        </Routes>
        <Gap height={30} />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesManagement;
