import Textarea from './../../components/form/textarea';

const awsmJobsTextareaFields = {
    name: "awsmJobsTextareaFields",
    priority: 20,
    test: (node) => node.component === 'textarea' && /awsm-job-form-field/.test(node.props.className),
    processor: (node) => {
        node.props.textareaProps = {
            name: node.props.name,
            className: node.props.className,
            id: typeof node.props.id !== 'undefined' ? node.props.id : '',
            rows: typeof node.props.rows !== 'undefined' ? node.props.rows : '',
            cols: typeof node.props.cols !== 'undefined' ? node.props.cols : '',
            ariaRequired: typeof node.props['aria-required'] !== 'undefined' ? node.props['aria-required'] : ''
        };

        node.component = Textarea;
        return node;
    }
}

export default awsmJobsTextareaFields;