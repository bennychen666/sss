# SSS is a Simple Static Site generator

**sss** operates on three directories: `in/`, `out/`, and `shared/`. It looks at the HTML template files in `in/` and searches for tags delimited by double braces, e.g.: `{{tag_name}}`. This markup is inspired by the [Mustache template system](http://mustache.github.io/).

Here's an example site layout:

    site/
        in/
            page1/
                index.html
                other.html
            page2/
                index.html
                other.html
            index.html
        shared/
            css.html
            js.html
            nav.html
            footer.html
        out/
            ( files from in/ will be processed and rendered out to this directory )

Here's an example HTML template file (e.g., `site/in/index.html`):

    <!DOCTYPE html>
    <html>
        <head>
            {{css}}
            {{js}}
        </head>
        <body>
            {{nav}}
            <div id="content">
                This is content!
            </div>
            {{footer}}
        </body>
    </html>


The Node.js package is located at: [https://npmjs.org/package/sss](https://npmjs.org/package/sss). To install it globally, run:

    npm install -g sss

Then, `cd` into your `site/` directory, and type `sss`.

You can specify custom directories as arguments. For example: `sss input_dir/ output_dir/ shared_dir/`.

We will read through all files in the input directory. For each file, **sss** looks for tags of the form `{{tag}}`. This tag is assumed to be the name of a file located in the `shared/` directory. For example: `{{nav}}` will be replaced with the contents of `shared/nav.html`.

By default, **sss** looks for files with an `.html` extension. But you can specify your own extension, e.g., `{{file.js}}` or `{{file.css}}` and we'll look for that file in the `shared/` directory.

All files are rendered to the `out/` directory. You can upload these files to your favorite hosting platform. Our site, [http://www.squarepoet.com/](http://www.squarepoet.com/) was created with **sss** and is hosted on Google App Engine.

That's all, folks!

## FAQ

**Q:** I found a bug!  
**A:** Awesome. Please send me an email or a pull request!

**Q:** Does **sss** have feature X?  
**A:** No.

**Q:** I have an amazing idea. Can we add it to **sss**?  
**A:** Sorry. Feel free to fork the project and create your own awesome static site generator! Or, check out more full featured site generators, like [wintersmith](http://jnordberg.github.io/wintersmith/) ( javascript ), [jekyll](https://github.com/mojombo/jekyll) ( ruby ), or [hyde](https://github.com/lakshmivyas/hyde) ( python ).

## License
SSS is MIT Licensed! Enjoy.

Copyright © 2013 squarepoet, inc.
