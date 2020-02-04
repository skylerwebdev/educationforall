import React, {useState} from 'react';
import { Formik } from 'formik';
import '../styles/Forms.css'
import axios from 'axios'

const Dev = (props) => {

  // const [user, setUser] = useState();
  return(
    <div>
    <h1>Welcome Please Login!</h1>
    <Formik 
      initialValues={{ fname: "", lname:"", email:"", phone:"", exptime:"", expframeworks:"", why:"", understand:""}}
      onSubmit={(values, actions) => {
      //  alert(values.fname)
        }}
    >
      {props => (
          <form onSubmit={props.handleSubmit}>
            <div className="form">
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.fname}
            name="fname"
            placeholder="First Name"
            />
            {props.errors.fname && <div id="feedback">{props.errors.fname}</div>}
         <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.lname}
            name="lname"
            placeholder="Last Name"
          />
            {props.errors.lname && <div id="feedback">{props.errors.lname}</div>}
            <input
            type="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
            name="email"
            placeholder="E-Mail"
          />
            {props.errors.email && <div id="feedback">{props.errors.email}</div>}
            <input
            type="phone"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.phone}
            name="phone"
            placeholder="Phone"
          />
            {props.errors.phone && <div id="feedback">{props.errors.phone}</div>}
            <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.exptime}
            name="exptime"
            placeholder="Experince Time"
          />
            {props.errors.exptime && <div id="feedback">{props.errors.exptime}</div>}
            <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.expframeworks}
            name="expframeworks"
            placeholder="Experience Frameworks"
          />
            {props.errors.expframeworks && <div id="feedback">{props.errors.expframeworks}</div>}
            <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.why}
            name="why"
            placeholder="Why do you want to be a developer?"
          />
            {props.errors.why && <div id="feedback">{props.errors.why}</div>}
            <input
            type="checkbox"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.understand}
            name="understand"
          >I accept the Terms of Service</input>
            {props.errors.understand && <div id="feedback">{props.errors.understand}</div>}
          <div className="formBtn">
          <button type="submit">Submit</button>
          <button type='reset'>Reset</button>
          </div> 
          </div>
        </form>
      )}
    </Formik>
  </div>
)};

export default Dev