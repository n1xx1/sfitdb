const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "unset",
              fontStyle: "unset",
              quotes: "unset",
            },
            "blockquote p:first-of-type::before": {
              content: "''",
            },
            "blockquote p:last-of-type::after": {
              content: "''",
            },
            h1: {
              marginTop: em(36, 24),
              marginBottom: em(32, 30),
            },
          },
        },
      },
    },
  },
};
