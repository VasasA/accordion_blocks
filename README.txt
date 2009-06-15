// $Id

CONTENTS
---------
 * Introduction
 * Installation
 * Custom themes

Introduction
------------
This module will display blocks in a accordion widget. 
It will apply accordion widget for both left side and right side blocks.


Installation
------------
Requirements: jquery_update development module, jquery_ui module

1. Install jquery_update development module and enable it.

2. Install jquery_ui module by following the instructions specified at http://drupal.org/node/388384#comment-1530114

3. Install accordion_blocks module and enable.

Clear your cache, then block on left side and right side(if you have blocks both sides) will appear in accordion widget.

Custom themes
-------------

If you want to change the themes for the accordion widget, 
1. download theme from jquery ui theme roller(http://jqueryui.com/themeroller/)
2. extract the theme bundle. 
3. copy the development-bundle/themes/[custom-theme-name] folder to jquery_ui/jquery.ui/themes/
4. go to admin/settings/jquery_ui page and select the theme what you want.
