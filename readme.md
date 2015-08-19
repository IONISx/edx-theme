# edx-theme

[![Build Status](https://travis-ci.org/IONISx/edx-theme.svg?branch=master)](https://travis-ci.org/IONISx/edx-theme)
[![Dependencies Status](https://david-dm.org/IONISx/edx-theme.svg)](https://david-dm.org/IONISx/edx-theme)
[![Dev Dependencies Status](https://david-dm.org/IONISx/edx-theme/dev-status.svg)](https://david-dm.org/IONISx/edx-theme#info=devDependencies)

> Open edX responsive theme using [Bootstrap](http://getbootstrap.com/).

![Screenshot](https://raw.githubusercontent.com/IONISx/edx-theme/docs/images/responsive.png)

## About this Open edX theme

This theme is developped originally for [IONISx](https://ionisx.com).

As it’s based on [Bootstrap](http://getbootstrap.com/), it used [Less](http://lesscss.org/) (instead of
Sass – which is used by Open edX).
It is very simply customizable, you just need to change a few Less variables (see `/src/less/variables.less`).

## Getting started

First of all, you need to know that the CSS output of the Less files is included in the repository.
It’s not a very good practice, but it simplifies the (already cumbersome) deployment workflow of Open edX.

This is so you will **never** need to install any of the development dependencies in your production environment.

If you want to use this theme, and customize it, I recommend that you fork it, update it, build the CSS output,
and push it all in.

### Development environment

First, install `grunt-cli` and `bower` globally (or not) in order to have the required build tools.

    npm install -g grunt-cli bower

Then fetch the local depedencies.

    npm install
    bower install

Finally, run `grunt` to build the theme’s source files.
`grunt` will watch for changes and re-build the output automatically.

Run `grunt build` for a one time build.  
Run `grunt test` to lint and check the code style your source files as well.

### Production environment

As said earlier, DO NOT run `npm install` nor `bower install` on your production environemnt (this will require you
to install `nodejs`, `npm` and `bower`, and why would you need that for a bunch of static files?

Just drop the files into `/edx/edxapp/themes/$WHATEVER` using your deployment tools.
If you’re using Open edX’s [configuration ansible playbooks](https://github.com/edx/configuration), you’ll just need to set

```yml
edxapp_theme_source_repo: https://github.com/your-user/your-repo.git
edxapp_theme_version: your-tag
edxapp_theme_name: $WHATEVER     # from earlier
edxapp_use_custom_theme: true
```

See Open edX’s documentation on [custom theming](https://github.com/edx/edx-platform/wiki/Custom-Theming) for more
information.

## License

[AGPL](http://en.wikipedia.org/wiki/Affero_General_Public_License)
