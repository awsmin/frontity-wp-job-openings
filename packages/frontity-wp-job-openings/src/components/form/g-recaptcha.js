import React, { useContext } from 'react';
import { connect } from 'frontity';
import { FormIdContext } from './form';
import ReCAPTCHA from "react-google-recaptcha";

const GRecaptcha = ( { actions, recaptchaProps } ) => {
    const jobId = useContext(FormIdContext);

    const onChangeHandler = (value) => {
        actions.awsmjobs.setFieldValue( jobId, 'g-recaptcha-response', value );
    };

    return (
        <div className="awsm-job-form-group awsm-job-g-recaptcha-group">
            <ReCAPTCHA
                sitekey={ recaptchaProps['data-sitekey'] }
                onChange={ onChangeHandler }
            />
        </div>
    );
};

export default connect( GRecaptcha );