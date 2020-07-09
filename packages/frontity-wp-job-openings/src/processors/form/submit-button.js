import SubmitButton from "./../../components/form/submit-button";

const awsmJobsSubmitButton = {
  name: "awsmJobsSubmitButton",
  priority: 20,
  test: (node) =>
    node.component === "input" &&
    node.props.type === "submit" &&
    node.props.id === "awsm-application-submit-btn",
  processor: (node) => {
    node.component = SubmitButton;
    return node;
  },
};

export default awsmJobsSubmitButton;
