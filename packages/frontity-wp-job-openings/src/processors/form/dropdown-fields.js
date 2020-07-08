import Select from './../../components/form/select';

const awsmJobsDropdownFields = {
    name: "awsmJobsDropdownFields",
    test: (node) => node.component === 'select' && /awsm-job-form-field/.test(node.props.className),
    processor: (node) => {
        let value = '';
        let options = [];
        if (typeof node.children !== 'undefined') {
            node.children.forEach( (option, index) => {
                if  ( index === 0 ) {
                    value = option.props.value;
                }

                options.push({
                    value: option.props.value,
                    text: option.children[0].content
                });
            } );
        }

        node.props.fieldProps = {
            name: node.props.name,
            className: node.props.className,
            id: typeof node.props.id !== 'undefined' ? node.props.id : '',
            options: options,
            value: value,
            ariaRequired: typeof node.props['aria-required'] !== 'undefined' ? node.props['aria-required'] : ''
        };

        node.component = Select;
        return node;
    }
}

export default awsmJobsDropdownFields;