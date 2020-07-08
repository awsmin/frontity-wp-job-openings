import React, { useContext } from 'react';
import { connect, useConnect } from 'frontity';
import { FormIdContext } from './form';

const Input = (props) => {
    const { state, actions } = useConnect();
    const jobId = useContext(FormIdContext);
    const fileInput = React.useRef();

    const inputName = props.name;
    const inputValue = typeof props.value !== 'undefined' ? props.value : '';
    
    if (typeof state.awsmjobs.forms[ jobId ].values[ inputName ] === 'undefined') {
        actions.awsmjobs.setFieldValue( jobId, inputName, props.type === 'checkbox' ? '' : inputValue );
    }

    const onChangeHandler = (e) => {
        const target = e.target;
        let currentValue = props.type === 'file' ? target.files[0] : target.value;
        if ( props.type === 'checkbox' || props.type === 'radio' ) {
            currentValue = target.checked ? currentValue : '';
        }
        actions.awsmjobs.setFieldValue( jobId, inputName, currentValue );
    };

    let value = state.awsmjobs.forms[ jobId ].values[ inputName ];

    if ( props.type === 'file' ) {
        props.ref = fileInput;
    } else if( props.type === 'checkbox' || props.type === 'radio' ) {
        props.checked = inputValue === value ? true : false;
    } else {
        props.value = value;
    }
    props.onChange = onChangeHandler;

    return <input {...props} />;
};

export default connect(Input, { injectProps: false });