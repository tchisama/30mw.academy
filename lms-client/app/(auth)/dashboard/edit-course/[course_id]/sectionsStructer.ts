export default {
  content: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "text",
    },
    {
      name: "show image",
      type: "boolean",
    },
    {
      name: "image",
      type: "image",
    },
    {
      name: "reverse",
      type: "boolean",
    },
  ],
  video: [
    {
      name: "videoUrl",
      type: "string",
    },
    {
      name: "addContent",
      type: "boolean",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "text",
    },
    {
      name: "reverse",
      type: "boolean",
    },
  ],
  cards: [
    {
      name:"title",
      type:"string",
    },
    {
      name:"content",
      type:"text",
    },
    {
      name: "cards",
      type: "cards array",
      structer: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "icon",
          type: "string",
        },
        {
          name: "subtitle",
          type: "string",
        },
      ],
    },
  ],
};
