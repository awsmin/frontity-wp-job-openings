import { fetch } from "frontity";

const formActions = {
  initForm: ({ state }) => {
    return (id) => {
      if (!state.awsmjobs.forms[id]) {
        state.awsmjobs.forms[id] = { values: {}, submitting: false };
      }
    };
  },
  setFieldValue: ({ state }) => {
    return (id, fieldName, value) => {
      state.awsmjobs.forms[id].values[fieldName] = value;
    };
  },
  submitForm: ({ state }) => {
    return async (id) => {
      const data = state.awsmjobs.forms[id].values;

      let formData = new FormData();

      // Append the field values to FormData object.
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      let apiURL = state.awsmjobs.ajaxurl;
      if (apiURL === "") {
        const baseURL = state.source.api.replace(/\/wp-json|\/?$/, "");
        apiURL = baseURL + "/wp-admin/admin-ajax.php";
      }

      const response = await fetch(apiURL, {
        method: "POST",
        body: formData,
      });
      const body = await response.json();

      state.awsmjobs.forms[id].submitting = false;

      let messages = [];
      if (body.success.length > 0) {
        state.awsmjobs.forms[id].status = "success";
        messages = body.success;
        // Reset form fields.
        state.awsmjobs.forms[id].values = {};
      } else {
        state.awsmjobs.forms[id].status = "error";
        messages = body.error;
      }
      state.awsmjobs.forms[id].messages = messages;
    };
  },
};

export default formActions;
