# Simple Static Sites

**This is a work in progress!**

**Contact:** ronyeh @ { squarepoet.com | gmail.com }

This simple static site generator works with three directories: 

* in/ 
* out/
* shared/ 

It reads HTML template files from `in/`, and whenever it sees {{ file_name }} it will look for that file in `shared/` and insert the contents of that file inline. This way, you can have shared components like a common navigation bar, footer, or javascript includes across all of your static pages.

All HTML files are rendered to `out/`. These files can be deployed on your web server via SFTP.

## Run

`./sss`

Assumes that three directories exist: `in/` `out/` and `shared/`.