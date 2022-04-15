let mix = require("laravel-mix");
mix.setPublicPath("dist");

mix.sass("src/scss/styles.scss", "css");
// mix.sass("scss/partials/icons.scss", "css");

mix.js(["src/scripts/components/ibp-header.js", "src/scripts/components/ibp-footer.js"], "js/ibp-components.js");

mix.browserSync({
  server: "dist",
  index: "index.html",
  files: ["dist/css/*", "dist/index.html", "dist/js/*"],
  open: false,
  cors: true,
});

mix.options({
  processCssUrls: false,
  terser: {
    extractComments: false,
  },
});
