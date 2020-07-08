import Input from './../../components/form/input';

const awsmJobsInputFields = {
    name: "awsmJobsInputFields",
    priority: 20,
    test: (node) => node.component === 'input' && /awsm-job-form-field/.test(node.props.className),
    processor: (node) => {
        node.props.inputProps = {
            name: node.props.name,
            className: node.props.className,
            type: node.props.type,
            id: typeof node.props.id !== 'undefined' ? node.props.id : '',
            value: typeof node.props.value !== 'undefined' ? node.props.value : '',
            accept: typeof node.props.accept !== 'undefined' ? node.props.accept : '',
            ariaRequired: typeof node.props['aria-required'] !== 'undefined' ? node.props['aria-required'] : ''
        };

        node.component = Input;
        return node;
    }
}

export default awsmJobsInputFields;