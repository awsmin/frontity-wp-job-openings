import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';

const Select = ( { state, actions, fieldProps } ) => {
    const jobId = useContext(FormIdContext);

    const fieldName = fieldProps.name;
    
    if (typeof state.awsmjobs.forms[ jobId ].values[ fieldName ] === 'undefined') {
        actions.awsmjobs.setFieldValue( jobId, fieldName, fieldProps.value );
    }

    const onChangeHandler = (e) => {
        actions.awsmjobs.setFieldValue( jobId, fieldName, e.target.value );
    };

    let value = state.awsmjobs.forms[ jobId ].values[ fieldName ];

    return (
        <select name={ fieldName } value={ value } className={ fieldProps.className } id={ fieldProps.id } aria-required={ fieldProps.ariaRequired } onChange={ onChangeHandler }>
            {
                fieldProps.options.map( ( option, index ) => (
                    <option key={ index } value={ option.value }>{ option.text }</option>
                ) )
            }
        </select>
    );
};

export default connect(Select);