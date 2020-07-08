import GRecaptcha from '../../components/form/g-recaptcha';

const awsmJobsRecaptchaField = {
    name: "awsmJobsRecaptchaField",
    priority: 20,
    test: (node) => node.component === 'div' && /awsm-job-g-recaptcha-group/.test( node.props.className ),
    processor: (node) => {
        node.component = GRecaptcha;
        return node;
    }
}

export default awsmJobsRecaptchaField;