import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const InputHidden = ( { state, actions, inputProps } ) => {
    const jobId = useContext(FormIdContext);
    const inputName = inputProps.name;

    actions.awsmjobs.setFieldValue( jobId, inputName, inputProps.value )

    return null;
};

export default connect(InputHidden);