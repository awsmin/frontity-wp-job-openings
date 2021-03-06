import Form from "./../../components/form/form";

const awsmJobsForm = {
  name: "awsmJobsForm",
  priority: 20,
  test: (node) =>
    node.component === "form" && node.props.id === "awsm-application-form",
  processor: (node) => {
    node.component = Form;
    return node;
  },
};

export default awsmJobsForm;
