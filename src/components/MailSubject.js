import React from "react";
import outlookHeader from "../images/outlook-layout.png";
import outlookAction from "../images/outlook-action.png";

const MailSubject = ({ props, acronym, To, email, sub }) => {
  const date = new Date();
  return (
    <>
      <img className="container-fluid" src={outlookHeader} alt="" />
      <div className="flex-div m-2">
        <div className="circle text-white d-flex justify-content-center">
          <p className="mx-auto">{acronym}</p>
        </div>
        <div className="fluid">
          <small className="d-block "> From: {props} </small>
          <small className="d-block">To: {`${To} <${email}>`}</small>
          <small className="d-block">
            Date: {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
          </small>
          <small className="d-block "> Subject: {sub} </small>
        </div>
      </div>
      <img className="action-img mt-2" src={outlookAction} alt="" />
    </>
  );
};

export default MailSubject;
