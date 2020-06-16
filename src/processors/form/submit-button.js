import SubmitButton from './../../components/form/submit-button';

const awsmJobsSubmitButton = {
    name: "awsmJobsSubmitButton",
    test: (node) => node.component === 'input' && node.props.type === 'submit' && node.props.id === 'awsm-application-submit-btn',
    processor: (node) => {
        node.props.buttonProps = {
            name: node.props.name,
            className: typeof node.props.className !== 'undefined' ? node.props.className : '',
            type: node.props.type,
            id: typeof node.props.id !== 'undefined' ? node.props.id : '',
            value: typeof node.props.value !== 'undefined' ? node.props.value : ''
        };

        node.component = SubmitButton;
        return node;
    }
}

export default awsmJobsSubmitButton;