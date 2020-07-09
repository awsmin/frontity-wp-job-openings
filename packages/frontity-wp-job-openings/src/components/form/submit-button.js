import React, { useContext } from "react";
import { connect, useConnect } from "frontity";
import { FormIdContext } from "./form";

const SubmitButton = (props) => {
  const { state } = useConnect();
  const jobId = useContext(FormIdContext);

  if (
    typeof state.awsmjobs.forms[jobId].submitting !== "undefined" &&
    state.awsmjobs.forms[jobId].submitting
  ) {
    props.value = "Submitting..";
  }

  return <input {...props} />;
};

export default connect(SubmitButton, { injectProps: false });
