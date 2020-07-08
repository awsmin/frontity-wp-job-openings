const settings = {
  "name": "frontity-wp-job-openings",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "WP Job Openings",
      "description": "Frontity package for WP Job Openings Plugin"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://demo.awsm.in/wp-job-openings/wp-json",
          "homepage": "/jobs"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@awsmin/frontity-wp-job-openings"
  ]
};

export default settings;
