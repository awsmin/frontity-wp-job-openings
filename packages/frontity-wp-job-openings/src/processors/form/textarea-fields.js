import Textarea from './../../components/form/textarea';

const awsmJobsTextareaFields = {
    name: "awsmJobsTextareaFields",
    priority: 20,
    test: (node) => node.component === 'textarea' && /awsm-job-form-field/.test(node.props.className),
    processor: (node) => {
        node.component = Textarea;
        return node;
    }
}

export default awsmJobsTextareaFields;