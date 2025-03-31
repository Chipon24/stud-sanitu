
const person = {
    name: "person",
    type: "document",
    title: "person",
    fields: [
      {
        title: "Person name",
        name: "personName",
        type: "string"
      },
      {
        title: "Person positio",
        name: "personPosition",
        type: "string"
      },
      {
        title: "Person description",
        name: "personDescription",
        type: "text"
      },
      {
        title: "Person image",
        name: 'personImage',
        type: 'image',
        options: {
          hotspot: true
        },
        ields: [
          {
            name: 'caption',
            type: 'string',
          },
          {
            name: 'attribution',
            type: 'string',
          }
        ]
       }
    ]
  };

  export default person;