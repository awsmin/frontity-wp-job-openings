import Input from "./../../components/form/input";

const awsmJobsInputFields = {
  name: "awsmJobsInputFields",
  priority: 20,
  test: (node) =>
    node.component === "input" &&
    /awsm-job-form-field/.test(node.props.className),
  processor: (node) => {
    node.component = Input;
    return node;
  },
};

export default awsmJobsInputFields;
