# CHANGELOG

## Alpha 3 : [WIP]

  - Use unitless line-height
  - Split out shorthand font settings in base/main
  - Fix heading elements not inheriting line-height set by Gemini settings
  - Rename font-weight values to match common weight name mapping
    - https://developer.mozilla.org/en/docs/Web/CSS/font-weight#Common_weight_name_mapping
  - New font-weight helpers added
    - thin (100), ultralight (200), medium (500), extrabold (800), black (900)

## Alpha 2

  - Ignore CI and test folders when downloading via bower

## Alpha 1

  - Drop Ruby dependency
    - Still need to require compass-mixins
  - Add Gitlab CI test compiling
    - Ignore CI specific files in NPM publishing
  - Rename brightness Sass function due to naming collision with filter brightness()
  - Fix typos in `<pre>` and `<code>` styling
  - Merge branch '2.0' into v2-dev
    - Use base spacing for blockquotes
    - Removed lighter and darker helper functions
    - Updated tables - Removed table--data - Improved responsive extension
    - Updated grid as optional - Added table settings
    - Added settings to customize code styling
  - Fix missing imports for helpers
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
