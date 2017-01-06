# CHANGELOG

## v2.0.0-alpha3

  - Fix typos in `<pre>` and `<code>` styling
  - Merge branch '2.0' into v2-dev
    - Use base spacing for blockquotes
    - Removed lighter and darker helper functions
    - Updated tables - Removed table--data - Improved responsive extension
    - Updated grid as optional - Added table settings
    - Added settings to customize code styling

## v2.0.0-alpha2

  - Fix missing imports for helpers

## v2.0.0-alpha1

  - Add wrapping paren so libsass interprets ‘/‘ as division
    - (https://github.com/sass/libsass/issues/2149)[Issue Link]
  - Compile test css with postcss
  - Add initial test html file to test different components
  - Switch to system fonts default font stack
  - Add option to change separator within generated class name for spacing classes
  - Add option to add custom screen breakpoint names for spacing helper
  - Enhance sass compile test build.
    - Add watch task.
    - Handle errors while testing compile.

## v1.2.0

  - Add border mixin
  - Update components that add borders to use border mixin
  - Fix bug in pagination that overlapped touch targets

## v1.1.1

  - Fix multi-list import statement in test file
  - Add contributors

## v1.1.0

  - Inverted the gray helper, so 0 is white and 100 is black
  - Remove scroll assumption on html element
  - Add ability to not set position with arrow mixin
