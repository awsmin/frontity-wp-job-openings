import React, { useContext } from 'react';
import { connect, useConnect } from 'frontity';
import { FormIdContext } from './form';

const Select = (props) => {
    const { state, actions } = useConnect();
    const jobId = useContext(FormIdContext);

    const fieldName = props.name;
    
    if (typeof state.awsmjobs.forms[ jobId ].values[ fieldName ] === 'undefined') {
        const initialValue = typeof props.children !== 'undefined' && props.children.length > 0 ? props.children[0].props.value : '';
        actions.awsmjobs.setFieldValue( jobId, fieldName, initialValue );
    }

    const onChangeHandler = (e) => {
        actions.awsmjobs.setFieldValue( jobId, fieldName, e.target.value );
    };

    props.value = state.awsmjobs.forms[ jobId ].values[ fieldName ];
    props.onChange = onChangeHandler;

    return <select {...props} />;
};

export default connect(Select, { injectProps: false });