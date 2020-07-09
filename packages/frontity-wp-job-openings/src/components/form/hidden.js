import React, { useContext } from "react";
import { connect, useConnect } from "frontity";
import { FormIdContext } from "./form";

const InputHidden = (props) => {
  const { actions } = useConnect();
  const jobId = useContext(FormIdContext);

  actions.awsmjobs.setFieldValue(
    jobId,
    props.name,
    typeof props.value !== "undefined" ? props.value : ""
  );

  return null;
};

export default connect(InputHidden, { injectProps: false });
