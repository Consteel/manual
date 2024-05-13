---
sidebar_position: 3
---
# Comments

A **comment** in a Descript code is a piece of text that is ignored by the code interpreter. In Descript a comment is written after two dash characters ("/"), like this:

```
// This is a comment
```

Anything written after the double dash in a line of code is considered a comment, while anything before the double dash is still interpreted as normal code.

```
$x=1000         // Anything I write here is ineffectual, but variable $x will still be created
```

A comment is usually used to inform the human user of the code, or make a certain line of code ineffectual. So, if I want a line of code not executed, but I might want it back later I can just temporarily "comment it out". For example, if I decide I don't need the variable _\$y_ for now, but I might want it back later, I can just do this:

```
// Variable definition:
$x=1
//$y=2
$z=3
```

Which will result in _\$y_ not being created.