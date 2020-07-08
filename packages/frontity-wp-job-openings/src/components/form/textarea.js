import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const Textarea = ( { state, actions, textareaProps } ) => {
    const jobId = useContext(FormIdContext);
    const inputName = textareaProps.name;

    if (typeof state.awsmjobs.forms[ jobId ].values[ inputName ] === 'undefined') {
        actions.awsmjobs.setFieldValue( jobId, inputName, '' );
    }

    const onChangeHandler = (e) => {
        actions.awsmjobs.setFieldValue( jobId, inputName, e.target.value );
    };

    return (
        <textarea
            name={ textareaProps.name }
            className={ textareaProps.className }
            id={ textareaProps.id }
            value={ state.awsmjobs.forms[ jobId ].values[ inputName ] }
            cols={ textareaProps.cols }
            rows={ textareaProps.rows }
            aria-required={ textareaProps.ariaRequired }
            onChange={ onChangeHandler }
        />
    )
};

export default connect( Textarea );