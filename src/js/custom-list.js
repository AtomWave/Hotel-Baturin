// custom-list.js

export const customListData = [
  {
    text: "Custom Item 1",
    link: "#custom1",
    children: [
      {
        text: "Nested Custom Item",
        link: "#nested-custom"
      }
    ]
  },
  {
    text: "Custom Item 2",
    link: "#custom2"
  },
  {
    text: "Custom Item 3",
    link: "#custom3",
    children: [
      {
        src: "./public/assets/images/hiro.webp",
        alt: "Example Image",
        width: 300,
        height: 200,
      }
    ]
  }
];
