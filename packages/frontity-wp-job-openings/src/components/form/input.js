import React, { useContext } from "react";
import { connect, useConnect } from "frontity";
import { FormIdContext } from "./form";

const Input = (props) => {
  const { state, actions } = useConnect();
  const jobId = useContext(FormIdContext);
  const fileInput = React.useRef();

  const inputName = props.name;
  const inputValue = typeof props.value !== "undefined" ? props.value : "";
  const isMultiCheckBox =
    props.type === "checkbox" && inputName.indexOf("[]") !== -1;

  if (typeof state.awsmjobs.forms[jobId].values[inputName] === "undefined") {
    let initialVal = inputValue;
    if (props.type === "checkbox") {
      initialVal = isMultiCheckBox ? [] : "";
    }
    actions.awsmjobs.setFieldValue(jobId, inputName, initialVal);
  }

  let value = state.awsmjobs.forms[jobId].values[inputName];

  const onChangeHandler = (e) => {
    const target = e.target;
    let currentValue = "";
    if (props.type === "checkbox" || props.type === "radio") {
      if (isMultiCheckBox) {
        let currentSet = new Set(value);
        if (target.checked) {
          currentSet.add(target.value);
        } else {
          currentSet.delete(target.value);
        }
        currentValue = [...currentSet];
      } else {
        currentValue = target.checked ? target.value : "";
      }
    } else if (props.type === "file") {
      currentValue = target.files[0];
    } else {
      currentValue = target.value;
    }
    actions.awsmjobs.setFieldValue(jobId, inputName, currentValue);
  };

  if (props.type === "file") {
    props.ref = fileInput;
  } else if (props.type === "checkbox" || props.type === "radio") {
    if (isMultiCheckBox) {
      props.checked = value.includes(inputValue) ? true : false;
    } else {
      props.checked = inputValue === value ? true : false;
    }
  } else {
    props.value = value;
  }
  props.onChange = onChangeHandler;

  return <input {...props} />;
};

export default connect(Input, { injectProps: false });
