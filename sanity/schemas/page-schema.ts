const page = {
    name: "page",
    title: "Page Content",
    type: "document",
    fields: [
      {
        name: "portfolio",
        title: "Portfolio",
        type: "string",
      },
      {
        name: "intro",
        title: "Intro",
        type: "array",
        of : [{type: "block"}],
      },
      {
        name: "about",
        title: "About",
        type: "array",
        of : [{type: "block"}],
      },
      {
        name: "githubLink",
        title: "Github Link",
        type: "string",
      },
      {
        name: "linkedInLink",
        title: "LinkedIn Link",
        type: "string",
      },
      {
        name: "cvLink",
        title: "CV Link",
        type: "string",
      },
      {
        name: "profileImage",
        title: "Profile Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "skills",
        title: "Skills",
        type: "array",
        of: [{type: "string"}]
      },
      {
        name: "contact",
        title: "Contact Message",
        type: "array",
        of : [{type: "block"}],
      },
    //   {
    //     name: "resumePDF",
    //     title: "Resume PDF",
    //     type: 'file',
    //     options:{
    //       accept:".pdf"
    //    }
    //   }
    ]
  }
  
  export default page;
