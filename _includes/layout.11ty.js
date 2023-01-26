// https://www.11ty.dev/docs/layouts/

module.exports = {
  data: {
    layout: "mylayout.njk",
    title: "My Rad JavaScript Blog Post"
  },
  render(data) {
    return `<h1>${data.title}</h1>`;
  }
}