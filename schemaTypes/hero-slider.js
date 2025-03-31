const heroSlider = {
  name: "heroMedia",
  type: "document",
  title: "Hero Media",
  fields: [
    {
      title: "Hero MEdia Title",
      name: "heroMediaTitle",
      type: "string"
    },
    {
      title: "Hero Media Description",
      name: "heroMediaDescription",
      type: "text"
    },
    {
      title: "Hero Gallery",
      name: "heroGallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text"
            }
          ]
        }
      ]
    }
  ]
};

export default heroSlider;
