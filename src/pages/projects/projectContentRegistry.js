const context = require.context('./content', false, /\.js$/);

const projectContentBySlug = {};
context.keys().forEach((key) => {
  const slug = key.replace(/^\.\//, '').replace(/\.js$/, '');
  projectContentBySlug[slug] = context(key).default;
});

export default projectContentBySlug;
