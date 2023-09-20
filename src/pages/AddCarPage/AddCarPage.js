import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddCarPage = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    make: "",
    model: "",
    year: "",
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewCar,
    initialValues
  );

  async function postNewCar() {
    console.log("form Submitted");
  }

  return <>div</>;
};

export default AddCarPage;
