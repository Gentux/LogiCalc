# Contributing

Fork the repo at https://github.com/Gentux/logicalc

 > "Write clearly, don't be too clever" - The Elements of Programming Style

Avoid unnamed functions and follow the other modules structure. By only using named functions it will be easier to extract the code from the AMD module if needed and it will also give better error messages, JavaScript minifiers like [Google Closure Compiler](http://code.google.com/closure/compiler/) and [UglifyJS](https://github.com/mishoo/UglifyJS) will make sure code is as small/optimized as possible.

 > "Make it clear before you make it faster." - The Elements of Programming Style

Be sure to always create tests for each proposed module. Features will only be merged if they contain proper tests and documentation.

 > "Good code is its own best documentation." - Steve McConnell

We should do a code review before merging to make sure names makes sense and implementation is as good as possible.

Try to split your pull requests into logical groups, the smaller the easier to be reviewed/merged.



## Tests & Code Coverage ##

TODO


## Admins / Pull Requests ##

Even if you are an admin (have commit rights) please do pull requests when adding new features or changing current behavior, that way we can review the work and discuss. Feel free to push changes that doesn't affect behavior without asking for a pull request (readme, changelog, build script, typos, refactoring, ...).



## Large changes ##

If you are proposing some major change, please create an issue to discuss it first. (maybe it's outside the scope of the project)
