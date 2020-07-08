import InputHidden from './../../components/form/hidden';

const awsmJobsHiddenFields = {
    name: "awsmJobsHiddenFields",
    priority: 20,
    test: (node) => node.component === 'input' && node.props.type === 'hidden' && ( /awsm_job/.test( node.props.name ) || node.props.value === 'awsm_applicant_form_submission' ),
    processor: (node) => {
        node.component = InputHidden;
        return node;
    }
}

export default awsmJobsHiddenFields;