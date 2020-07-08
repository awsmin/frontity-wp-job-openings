import Select from './../../components/form/select';

const awsmJobsDropdownFields = {
    name: "awsmJobsDropdownFields",
    priority: 20,
    test: (node) => node.component === 'select' && /awsm-job-form-field/.test(node.props.className),
    processor: (node) => {
        node.component = Select;
        return node;
    }
}

export default awsmJobsDropdownFields;