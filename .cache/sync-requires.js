const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/tannaaman/minimalist-portfolio-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/home/tannaaman/minimalist-portfolio-website/src/pages/404.jsx"))),
  "component---src-pages-blog-jsx": hot(preferDefault(require("/home/tannaaman/minimalist-portfolio-website/src/pages/blog.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/tannaaman/minimalist-portfolio-website/src/pages/index.jsx"))),
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/home/tannaaman/minimalist-portfolio-website/src/templates/blog-post.jsx")))
}

