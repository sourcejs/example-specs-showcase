# SourceJS Spec Page Showcase

View source code of component folders (`/default`, `/jade` and etc) and compare them with [rendered output](http://sourcejs.com/specs/examples).

Examples are made for SourceJS 0.5.1+ version.

## Setup Instructions

1. [Install SourceJS](http://sourcejs.com/docs/base/#install).
2. Install SourceJS plugins [sourcejs-contrib-dss](http://github.com/sourcejs/sourcejs-contrib-dss), [sourcejs-jade](http://github.com/sourcejs/sourcejs-jade).
3. Checkout this repo contents as a nested folder in `sourcejs/user/specs`:

```
cd sourcejs/user/specs
git clone https://github.com/sourcejs/example-specs-showcase
```

Re-run SourceJS app, and open http://127.0.0.1:8080/specs/example-specs-showcase.

```
cd sourcejs
node app.js
open http://127.0.0.1:8080/specs/example-specs-showcase
```