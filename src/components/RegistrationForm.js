import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { InputFields } from "./InputFields";
import * as Yup from "yup";
import { Col, Form } from "react-bootstrap";
import "./NavBar.css";

export const RegistrationForm = () => {
  const [college, setCollege] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [cname, setCname] = useState("");
  const [hobbies, setHobbies] = useState("");
  const getApiCollege = async () => {
    const allCollege = await axios.get(
      "http://universities.hipolabs.com/search?name=middle"
    );
    console.log(allCollege.data);
    setCollege(allCollege.data);
  };

  const saveData = (e) => {
    const person = { name, date, address, gender, cname, hobbies };
    localStorage.setItem("person", JSON.stringify(person));
  };

  useEffect(() => {
    getApiCollege();
  }, []);

  const validate = Yup.object({
    Name: Yup.string().required("Required *"),
    DOB: Yup.string().required("Required *"),
    Address: Yup.string().required("Required *"),
    gender: Yup.string().required("Required *"),
    SelectCollege: Yup.string().required("Required *"),
    Hobbies: Yup.string().required("Required *"),
    text: Yup.string().required("Required *"),
  });
  return (
    <Formik
      initialValues={{
        Name: "",
        DOB: "",
        Address: "",
        gender: "",
        SelectCollege: "",
        Hobbies: "",
        text: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="main">
            <Form style={{ width: "20rem" }}>
              <InputFields
                label="Name"
                name="Name"
                type="text"
                placeholder="Full Name"
                // onChange={(e) => setName(e.target.value)}
              />
              <InputFields
                label="Date of birth"
                name="DOB"
                type="date"
                // onChange={(e) => setDate(e.target.value)}
              />
              <InputFields
                label="Address"
                name="Address"
                type="text"
                placeholder="Full Address"
                // onChange={(e) => setAddress(e.target.value)}
              />
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  // onChange={(e) => setGender(e.target.value)}
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>College</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  // onChange={(e) => setCollege(e.target.value)}
                >
                  <option>Select College...</option>
                  {college.map((item) => {
                    return (
                      <option style={{ display: "flex", flexWrap: "wrap" }}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form>
                <Form.Label>Hobbies</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Reading"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Gaming"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Traveling"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Drawing"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Other"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
              {/* <InputFields
                className="texthobbies"
                name="text-Hobbies"
                type="text"
                placeholder="Type Your Hobbies"
                onClick="checkMe()"
              /> */}
              <button
                className="btn btn-dark mt-3"
                type="submit"
                onClick={saveData}
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
