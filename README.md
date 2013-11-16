Overview
========
This directory stores Stanford's theming files for its edX instance.
We're storing the stuff here and then pulling it in to our instance
when we deploy.

We've organized the tree to mimic the directory structure of the edX
codebase so that it's easy to tell where the files will end up upon
deploy. We'll use a special settings file to set the template and
staticfiles paths properly to point to these files.

Theme Authoring
===============
The proposed theming solution for edX (see [this pull](https://github.com/edx/edx-platform/pull/1907)
for more details) provides a number of hooks for themes to adjust
both HTML and CSS to their liking.

