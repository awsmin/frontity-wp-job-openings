import React from 'react';
import { connect, styled } from 'frontity';

import Notice from './notice';

export const FormIdContext = React.createContext(null);

const Form = ( { state, actions, children, id } ) => {
    const data = state.source.get(state.router.link);
    const jobId = data.id;

    actions.awsmjobs.initForm(jobId);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        actions.awsmjobs.submitForm( jobId );
    };

    return (
        <FormIdContext.Provider value={jobId}>
            <JobForm id={ id } method="POST" onSubmit={ onSubmitHandler }>
                {children}
            </JobForm>

            <Notice />
        </FormIdContext.Provider>
    );
};

const JobForm = styled.form`
    margin: 14px 0px;

    & .awsm-job-form-group {
        margin-bottom: 20px;
    }
    & .awsm-job-form-control {
        display: block;
    }
    & small {
        display: block;
        margin: 5px 0px;
    }
`;

export default connect(Form);