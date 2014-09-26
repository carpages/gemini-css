# Gemini CSS

Gemini uses SASS and Compass to compile CSS builds for different uses.

## Style Layers

Styles are broken into 3 layers. These layers or organized into their relative directory and extend off of one another.

### Foundation

We start in ``sass/foundation/``, with our most base, low-level styling, things like a clearfix, normalize.css, our reset and any shared styling like margins (for vertical rythmn).

### Generic

On top of our base styles we lay our generic styles, found in ``sass/generic/``; these are things like unclassed headings, what our basic forms look like, how simple tables appear.

### Objects

Finally, in ``sass/objects/``, we have our objects and abstractions; these are all scaffolding type constructs that do heavy lifting. In here we have things like the media object, the nav abstraction and other objects.

## Credits

  Gemini CSS started as a fork from [Inuit.css](https://github.com/csswizardry/inuit.css)
