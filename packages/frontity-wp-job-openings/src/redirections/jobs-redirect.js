const jobsRedirect = (name) => ({
  name: "awsm_job_openings",
  pattern: `/${name}/:slug`,
  func: ({ slug }) => `/awsm_job_openings/${slug}/`,
});

export default jobsRedirect;
