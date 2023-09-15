const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "icon",
        title: "Icon",
        type: "string",
      },
      {
        name: "description",
        title: "About",
        type: "array",
        of : [{type: "block"}],
      },
      {
        name: "location",
        title: "Location",
        type: "string",
      },
      {
        name: "date",
        title: "Date",
        type: "string",
      },    
    ]
  }
  
  export default experience;
