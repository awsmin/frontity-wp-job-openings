import React from "react";
import { connect, styled } from "frontity";

import Notice from "./notice";

export const FormIdContext = React.createContext(null);

const Form = ({ state, actions, children, id }) => {
  const data = state.source.get(state.router.link);
  const jobId = data.id;

  actions.awsmjobs.initForm(jobId);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    state.awsmjobs.forms[jobId].submitting = true;
    actions.awsmjobs.submitForm(jobId);
  };

  return (
    <FormIdContext.Provider value={jobId}>
      <JobForm id={id} method="POST" onSubmit={onSubmitHandler} noValidate>
        {children}
      </JobForm>

      {!state.awsmjobs.forms[jobId].submitting && <Notice />}
    </FormIdContext.Provider>
  );
};

const JobForm = styled.form`
  margin: 14px 0px;

  & .awsm-job-form-group {
    margin-bottom: 20px;

    & label {
      display: block;
      margin-bottom: 10px;
    }
  }
  & .awsm-job-inline-group label,
  & .awsm-job-form-options-container label {
    display: inline;
    font-weight: 400;
    margin-left: 5px;
  }
  & .awsm-job-form-options-container {
    & span {
      display: inline-block;
      margin-bottom: 10px;
      margin-left: 10px;
    }
  }
  & .awsm-job-form-control {
    display: block;
    width: 100%;
  }
  & .awsm-job-form-error {
    color: #db4c4c;
    font-weight: 500;
  }
  & small {
    display: block;
    margin: 5px 0px;
  }
`;

export default connect(Form);
