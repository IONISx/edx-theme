# edx-theme

[![Build Status](https://travis-ci.org/IONISx/edx-theme.svg?branch=master)](https://travis-ci.org/IONISx/edx-theme)

> Open edX responsive theme using [Bootstrap](http://getbootstrap.com/).

![Screenshot](https://raw.githubusercontent.com/IONISx/edx-theme/docs/images/responsive.png)

## Getting started

First, install `grunt-cli` and `bower` globally (or not) in order to have the required build tools.

    npm install -g grunt-cli bower

Then fetch the local depedencies.

    npm install
    bower install

Finally, run `grunt` to build the theme’s source files.
`grunt` will watch for changes and re-build the output automatically.

Run `grunt build` for a one time build.  
Run `grunt test` to lint your source files as well.


## Installation

Add the following lines to /edx/app/edx_ansible/server-vars.yml
```yml
edxapp_use_custom_theme: true
edxapp_theme_name: 'ionisx'
edxapp_theme_source_repo: 'https://github.com/IONISx/edx-theme.git'
edxapp_theme_version: 'HEAD'
```
Make sure to keep file permissions for server-vars.yml assigned to edx-ansible:edx-ansible

	sudo chmod edx-ansible:edx-ansible /edx/app/edx_ansible/server-vars.yml

Re-run the provisioning scripts:

    sudo /edx/bin/update edx-platform release    

## License

[AGPL](http://en.wikipedia.org/wiki/Affero_General_Public_License)
