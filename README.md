# WP Job Openings - Frontity Package

Frontity package for WP Job Openings plugin. This package enables the support for [WP Job Openings](https://wordpress.org/plugins/wp-job-openings/) plugin in the Frontity framework including the support for application form. All the default fields and the fields supported by [WP Job Openings Pro](https://awsm.in/get/wpjo-pro/) are supported in the job application form.

## About WP Job Openings

**WP Job Openings plugin is the most simple yet powerful plugin for setting up a job listing page for a website.**

The plugin is designed after carefully analysing hundreds of job listing layouts and methods. We just picked the best features out of the all and built a plugin that’s super simple to use and extensible to a high performing recruitment tool.

The plugin comes with two layouts - Grid and List which are designed carefully according to the modern design and User Experience principles. Highlight of the plugin is its totally flexible filter options.

**[View Demo](https://demo.awsm.in/wp-job-openings/)**

**[Visit website - wpjobopenings.com](https://wpjobopenings.com/)**

## Installation Requirements

- [Frontity installation requirements](https://docs.frontity.org/getting-started#installation-requirements)
- [WP Job Openings Plugin](https://wordpress.org/plugins/wp-job-openings/)
- An add-on(plugin) for WP Job Openings plugin or custom functions added in theme's fuctions.php file to expose application form and other fields to WP REST API. You can use [WP Job Openings REST API (Example) Plugin](https://github.com/awsmin/wp-job-openings-rest-api-example) for reference.

## Setup Package

1. Install the package

   ```
   npm i @awsmin/frontity-wp-job-openings
   ```

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

3. Configure the slug (Optional)

   When you access `/jobs` (after you run `npx frontity dev` command) you will get all the job listings. If you have used different slug for the archive page then you have to configure the `slug` setting in `frontity.settings.js`. For example, if you have used a slug `careers` instead of `jobs`:

   ```
   const settings = {
       ...
       "packages": [
           ...
           {
               "name": "@awsmin/frontity-wp-job-openings",
               "state": {
                   "awsmjobs": {
                       "slug": "careers"
                   }
               }
           }
           ...
       ]
   };

   export default settings;
   ```

That's it! Now, when you run the `npx frontity dev` command you can access the job listings from the jobs archive page(e.g. `/jobs`). You can use [WP Job Openings REST API (Example) Plugin](https://github.com/awsmin/wp-job-openings-rest-api-example) for retrieving job specifications and using it in your frontity theme package. You can find an [example](https://github.com/awsmin/frontity-wp-job-openings/blob/master/packages/mars-theme/src/components/list/job-list-item.js) for this from this Frontity project.

## Screenshots

### Job Detail Page (Mars Theme)

![Job Detail Page](https://github.com/awsmin/frontity-wp-job-openings/raw/master/assets/job-page.png)

### Application Submission

#### Errors

![Errors](https://github.com/awsmin/frontity-wp-job-openings/raw/master/assets/submission-errors.png)

#### Success

![Success](https://github.com/awsmin/frontity-wp-job-openings/raw/master/assets/submission-success.png)

### Application View (WordPress)

![Application](https://github.com/awsmin/frontity-wp-job-openings/raw/master/assets/job-application.png)

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

- Frontity Team [ [1](https://community.frontity.org/t/how-to-create-a-frontity-package-for-contact-form-7/623), [2](https://community.frontity.org/t/wp-job-openings-frontity-package/2299/3) ]
- [frontity-contact-form-7](https://github.com/imranhsayed/frontity-contact-form-7) package by Imran Sayed

## Resources

- [Frontity Docs](https://docs.frontity.org/)
- [Frontity Community](https://community.frontity.org/)
- [WP Job Openings](https://wpjobopenings.com/)
