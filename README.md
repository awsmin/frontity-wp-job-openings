# WP Job Openings - Frontity Package
Frontity package for WP Job Openings plugin. This package enables the support for application form provided by the WP Job Openings plugin. All the default fields and the fields supported by [WP Job Openings Pro](https://awsm.in/get/wpjo-pro/) are supported.

## About WP Job Openings
**WP Job Openings plugin is the most simple yet powerful plugin for setting up a job listing page for a website.**

The plugin is designed after carefully analysing hundreds of job listing layouts and methods. We just picked the best features out of the all and built a plugin that’s super simple to use and extensible to a high performing recruitment tool.

The plugin comes with two layouts - Grid and List which are designed carefully according to the modern design and User Experience principles. Highlight of the plugin is its totally flexible filter options.

**[View Demo](https://demo.awsm.in/wp-job-openings/)**

**[Visit website - wpjobopenings.com](https://wpjobopenings.com/)**

## Installation Requirements

* [Frontity installation requirements](https://docs.frontity.org/getting-started#installation-requirements)
* [WP Job Openings Plugin](https://wordpress.org/plugins/wp-job-openings/)
* An add-on(plugin) for WP Job Openings plugin or custom functions added in theme's fuctions.php file to expose application form and other fields to WP REST API. You can use [WP Job Openings REST API (Example) Plugin](https://github.com/awsmin/wp-job-openings-rest-api-example) for reference.

## Setup

1. Install the package
2. Add it to Frontity Settings

    Add the package to `frontity.settings.js` inside the `packages` array.

    ```
    const settings = {
        ...
        "packages": [
            ...
            // If no settings need to be added.
            "@awsmin/frontity-wp-job-openings",

            // If you want to add settings.
            {
                "name": "@awsmin/frontity-wp-job-openings",
                // Add your settings here.
            },
            ...
        ]
    };

    export default settings;
    ```

3. Enable Custom Post Types support.

    In the `@frontity/wp-source` package settings you have to add the `postTypes` option for enabling support for custom post type.

    ```
    const settings = {
        ...
        "packages": [
            ...
            {
                "name": "@frontity/wp-source",
                "state": {
                    "source": {
                        "api": "https://example.com/wp-json",
                        "postTypes": [
                            {
                                "type": "awsm_job_openings",
                                "endpoint": "awsm_job_openings",
                                "archive": "/jobs"
                            }
                        ]
                    }
                }
            },
            ...
        ]
    };

    export default settings;
    ```

    Now, when you access the `/jobs` you will get all the job listings (after you run `npx frontity dev` command). If you have used different slug for the archive page then you may have to use that instead of `/jobs`.

    Due to some current limitations of the `@frontity/wp-source`, you may also have to add a custom redirection to the `index.js` file in your theme package. If your slug is different you have to replace `jobs` with your custom slug.

    ```
    const jobsRedirect = {
        name: "awsm_job_openings",
        pattern: "/jobs/:slug",
        func: ({ slug }) => `/awsm_job_openings/${slug}/`
    };
    ```

    Then, add it to the `redirections` array inside `libraries.source`. For example, if you are using the Frontity Mars Theme:

    ```
        const marsTheme = {
            name: "@frontity/mars-theme",
            ...
            libraries: {
                ...
                source: {
                    redirections: [jobsRedirect]
                }
            }
        };

        export default marsTheme;
    ```

That's it! Now, when you run the `npx frontity dev` you can access the job listings from the jobs archive page(e.g. `/jobs`). You can use [WP Job Openings REST API (Example) Plugin](https://github.com/awsmin/wp-job-openings-rest-api-example) for retrieving job specifications and using it in your frontity theme package.

## Screenshots

### Job Detail Page (Mars Theme)

![Job Detail Page](https://user-images.githubusercontent.com/22009263/86373442-06ea5b00-bca1-11ea-88a3-77093b717529.png)

### Application Submission

#### Errors

![Errors](https://user-images.githubusercontent.com/22009263/86373446-081b8800-bca1-11ea-9aca-16f4cc161e73.png)

#### Success

![Success](https://user-images.githubusercontent.com/22009263/86373450-08b41e80-bca1-11ea-85e7-93b618d3a1b5.png)

### Application View (WordPress)

![Application](https://user-images.githubusercontent.com/22009263/86373424-03ef6a80-bca1-11ea-957b-3c479a4448f1.png)

## Limitations

Currently, the form submission doesn't use the WP REST API. It uses the `admin-ajax.php` URL.

### CORS Issue

Since, we use the `admin-ajax.php` URL, you may encounter the CORS Issue. An error: `TypeError: NetworkError when attempting to fetch resource.` will be thrown in the console and the Cross-Origin request will be blocked.

**Solution:**

You can use the `allowed_http_origins` filter hook to add allowed HTTP origins. For example:

```
function awsm_allowed_http_origins( $origins ) {
    $origins[] = 'https://example.com';
    return $origins;
}
add_filter( 'allowed_http_origins', 'awsm_allowed_http_origins' );
```

## Credits

* [Frontity Team](https://community.frontity.org/t/how-to-create-a-frontity-package-for-contact-form-7/623)
* [frontity-contact-form-7](https://github.com/imranhsayed/frontity-contact-form-7) package by Imran Sayed

## Resources

* [Frontity Docs](https://docs.frontity.org/)
* [Frontity Community](https://community.frontity.org/)
* [WP Job Openings](https://wpjobopenings.com/)