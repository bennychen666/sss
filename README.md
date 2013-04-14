sss: Simple Static Sites
===

**A WORK IN PROGRESS!!!**

A simple static site generator.

site/
    in/
        _/
            page1/
                nav.html
            page2/
                nav.html
            header.html
            footer.html
            copyright.html
            css.html
            js.html
        js/
        css/
        page1/
            index.html
            other.html
        page2/
            index.html
            other.html
        index.html
    out/
        js/
        css/
        page1/
            index.html
            other.html
        page2/
            index.html
            other.html
        index.html
        

Example HTML File:

<html>
    <head>
        {{css}}
        {{js}}
    </head>
    <body>
        {{page1_nav}}
        {{header}}
        {{footer}}
        {{copyright}}
    </body>
</html>


It's like the mustache template system, except we take it a step further!

Anything between the {{ }} is assumed to be a file located in the _ directory, which is not copied to our output folder.

{{page1_nav}} means that we look in _/page1/nav.html for the content to include!

We parse an html file, look for all {{ }}, and then go read in the associated files. If they are there, we patch their content in and render the output to out/.

By default, we'll look for the .html extension. But you can specify your own extension, e.g., {{ something.js }} or {{ something.css }} and we'll look for that file!

We'll only template *.html, *.js, and *.css files. All other files are copied straight over to the output!

That's it!

