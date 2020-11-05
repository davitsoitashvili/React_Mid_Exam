import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css"

function Form({ className, children, onSubmit }) {
  return ( 
    <>
    <h1 className={styles["text-color"]}>Form</h1>
      <form className={className} onSubmit={onSubmit}>{children}</form>
    </>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit : PropTypes.func
};

export default Form;