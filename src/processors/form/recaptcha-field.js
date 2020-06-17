import GRecaptcha from '../../components/form/g-recaptcha';

const awsmJobsRecaptchaField = {
    name: "awsmJobsRecaptchaField",
    test: (node) => node.component === 'div' && /awsm-job-g-recaptcha-group/.test( node.props.className ),
    processor: (node) => {
        node.props.recaptchaProps = node.children[0].props;
        node.component = GRecaptcha;
        return node;
    }
}

export default awsmJobsRecaptchaField;