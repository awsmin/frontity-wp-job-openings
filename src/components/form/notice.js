import React, { useContext } from 'react';
import { connect, styled } from 'frontity';
import { FormIdContext } from './form';

const Notice = ( { state } ) => {
    const jobId = useContext(FormIdContext);
    const formInfo = state.awsmjobs.forms[ jobId ];

    let notice = null;
    let messages = null;
    if (typeof formInfo.status !== 'undefined' && ( formInfo.status === 'success' || formInfo.status === 'error' ) ) {
        messages = formInfo.messages.map( ( msg, index ) => {
            return <p key={ index }>{ msg }</p>;
        } );

        if ( formInfo.status === 'success' ) {
            notice = <SuccessNotice>{ messages }</SuccessNotice>;
        } else if( formInfo.status === 'error' ) {
            notice = <ErrorNotice>{ messages }</ErrorNotice>;
        }
    }

    return notice;
};

const SuccessNotice = styled.div`
    border: 1px solid #1ea508;
    padding: 12px 25px;

    & p {
        margin: 0;
        padding: 0;
    }
`;

const ErrorNotice = styled.div`
    border: 1px solid #db4c4c;
    padding: 12px 25px;

    & p {
        margin: 0;
        padding: 0;
    }
`;

export default connect(Notice);