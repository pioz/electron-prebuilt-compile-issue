# Install and run

    $ git checkout https://github.com/pioz/electron-prebuilt-compile-issue.git
    $ cd electron-prebuilt-compile-issue
    $ npm install
    $ npm start

First time you run this app all works fine.  
Now close the app (`cmd+Q`) and edit the file `stylesheets/css1.less` changing
the color from blue to red. Now rerun the app (`npm start`) and the color of
_Hello World!_ is not changed.

If I import all `.less` files in `index.html` separately, all is fine.

What did I do wrong? May be a bug?
