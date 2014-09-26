# Contributing

## Coding Standards

### 2-space Indenting

Bad
```css
.bad {
    font-size: 2em;
}
```

Good
```css
.good {
  font-size: 2em;
}
```

### Space After Declaration Colons

Bad
```css
.bad {
  margin:1.5em;
}
```

Good
```css
.good {
  margin: 1.5em;
}
```

### Space Before Opening Bracket

Bad
```css
.bad{
  padding: 1em;
}
```

Good
```css
.good {
  padding: 1em;
}
```

### Spaces Between Combinators

Bad
```css
.this>.is>.bad {
  padding: 1em;
}
```

Good
```css
.this > .is > .good {
  padding: 1em;
}
```

### Line Breaks Between Declarations

Bad
```css
.bad {
  padding: 1em; margin: 1em; top: 1em; left: 1em;
}
```

Good
```css
.good {
  padding: 1em;
  margin: 1em;
  top: 1em;
  left: 1em;
}
```

### Line Breaks Between Selectors

Bad
```css
.this, .is, .bad {
  padding: 1em;
}
```

Good
```css
.this,
.is,
.good {
  padding: 1em;
}
```

### Lower Case Elements

Bad
```css
UL > LI {
  padding: 0;
}
```

Good
```css
ul > li {
  padding: 0;
}
```

### Upper Case Colors

Bad
```css
.bad {
  color: #ab3c4a;
  background: #fff;
}
```

Good
```css
.good {
  color: #AB3C4A;
  background: #FFF;
}
```

### Decimal Units with Leading Zero

Bad
```css
.bad {
  margin-bottom: .5em;
}
```

Good
```css
.good {
  margin-bottom: 0.5em;
}
```

### Remove Zero Units

Bad
```css
.bad {
  padding: 0px;
}
```

Good
```css
.good {
  padding: 0;
}
```

### Double Quotes

Bad
```css
.bad:before {
  content: 'shmuckle';
}
```

Good
```css
.good:before {
  content: "shmuckle";
}
```
