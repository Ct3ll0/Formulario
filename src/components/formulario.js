import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "../styles/formulario.css";
import Button from "./boton";

const Formulario = ({setContacts=()=>{}}) => {
  const valoresIniciales = {
    name: "",
    email: "",
    phone: "",
    contact: "Personal"
  };
  const [initialValues, _] = useState(valoresIniciales);

  return (
    <div>
      <h1 className="Titulo">Add Contact</h1>

      <Formik
        onSubmit={(datos, { resetForm }) => {
          setContacts(contact=>[...contact, datos])
          resetForm();
        }}
        initialValues={initialValues}
        // onSubmit={async (values) => {
        //   await new Promise((r) => setTimeout(r, 1000));
        //   alert(JSON.stringify(values, null, 2));
        // }}
      >
        <div className="contenedorForm">
          <Form className="form">
            <div>
              <label htmlFor="Name"></label>
              <Field type="text" id="name" name="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="Email"></label>
              <Field type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="Phone"></label>
              <Field id="phone" name="phone" placeholder="Phone" />
            </div>
            <div>
              <Button textoBoton="Add Contact"></Button>
              <h3>Contact Type</h3>
              <label>
                <Field type="radio" name="contact" value="Personal" />
              </label>
              Personal
              <label>
                <Field type="radio" name="contact" value="Professional" />
              </label>
              Professional
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};
export default Formulario;
