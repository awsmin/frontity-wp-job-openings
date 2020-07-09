import React, { useContext } from "react";
import { connect, useConnect } from "frontity";
import { FormIdContext } from "./form";

const Textarea = (props) => {
  const { state, actions } = useConnect();
  const jobId = useContext(FormIdContext);
  const inputName = props.name;

  if (typeof state.awsmjobs.forms[jobId].values[inputName] === "undefined") {
    actions.awsmjobs.setFieldValue(jobId, inputName, "");
  }

  const onChangeHandler = (e) => {
    actions.awsmjobs.setFieldValue(jobId, inputName, e.target.value);
  };

  props.value = state.awsmjobs.forms[jobId].values[inputName];
  props.onChange = onChangeHandler;

  return <textarea {...props} />;
};

export default connect(Textarea, { injectProps: false });
