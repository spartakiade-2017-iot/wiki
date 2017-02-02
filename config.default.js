"use strict";

var config = {

    // Your site title (format: page_title - site_title)
    site_title: "IoT Workshop Wiki",

    // Your site sections for homepage. For each section below, the home page
    // will display a section box that lists the document count for documents
    // that have a matching tag. Clicking the section link will list the documents.
    site_sections: [
        {
            'title': 'Software',
            'description': 'Alles was mit Software zu tun hat',
            'tag': 'software'
        },
        {
            'title': 'Hardware',
            'description': 'Alles was mit Hardware zu tun hat',
            'tag': 'hardware'
        },
        {
            'title': 'Sonstiges',
            'description': '',
            'tag': 'sonstiges'
        }
    ],

    // Excerpt length (used in search)
    excerpt_length: 400,

    //Application base url
    base: '/',

    // Path in which to store content (markdown files, etc.)
    content_dir: "/var/hazel/content/",

    // Path in which to store uploads (images etc.)
    uploads_dir: "/var/hazel/uploads/",

    // Path in which to store data (analytics, etc.)
    data_dir: "/var/hazel/data/",

    // Secret key used to sync two servers
    sync_key: "",

    // Optional Lunr locale
    lunr_locale: "",

    // Set to true to enable HTTP Basic Authentication
    authentication: false,
    // Set the Authentication mode. Options:
    // - "all" : Requires authentication for all pages
    // - "admin" : Requires authentication for only admin pages (edit / save / etc.).
    //             This allows for a public facing site
    authentication_mode: "admin",
    // If using authentication, set the username and password here.
    credentials: {
        username: "",
        password: ""
    }
};

module.exports = config;
