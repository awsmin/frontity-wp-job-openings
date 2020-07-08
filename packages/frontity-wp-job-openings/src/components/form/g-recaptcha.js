import React, { useContext } from 'react';
import { connect, useConnect } from 'frontity';
import { FormIdContext } from './form';
import ReCAPTCHA from "react-google-recaptcha";

const GRecaptcha = (props) => {
    const { actions } = useConnect();
    const jobId = useContext(FormIdContext);
    const siteKey = props.children[0].props['data-sitekey'];

    const onChangeHandler = (value) => {
        actions.awsmjobs.setFieldValue( jobId, 'g-recaptcha-response', value );
    };

    return (
        <div className="awsm-job-form-group awsm-job-g-recaptcha-group">
            <ReCAPTCHA
                sitekey={ siteKey }
                onChange={ onChangeHandler }
            />
        </div>
    );
};

export default connect(GRecaptcha, { injectProps: false });