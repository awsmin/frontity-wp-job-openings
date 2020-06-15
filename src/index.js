import awsmJobsForm from './processors/form/form';
import awsmJobsInputFields from './processors/form/input-fields';
import awsmJobsHiddenFields from './processors/form/hidden-fields';

import formActions from './actions/form';

export default {
  name: "frontity-wp-job-openings",
  state: {
    awsmjobs: {
      ajaxurl: '',
      forms: {}
    },
  },
  actions: {
    awsmjobs: { ...formActions }
  },
  libraries: {
    html2react: {
      processors: [awsmJobsForm, awsmJobsInputFields, awsmJobsHiddenFields]
    }
  }
};
