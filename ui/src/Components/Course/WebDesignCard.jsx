import React, { useState } from "react";

function WebDesignCard() {
  const [DiplomaData, setDiplomaData] = useState("var(--mainBgcolor)");
  const [DiplomaText, setDiplomaText] = useState("#212329");
  const [mainContainer, setmainContainer] = useState("white");
  const [DiplomaTitle, setDiplomaTitle] = useState("white");
  const [mainContainerBorder, setmainContainerBorder] = useState("transparent");

  const DarkMode = () => {
    if (DiplomaData === "black") {
      setDiplomaData("var(--mainBgcolor)");
      setDiplomaText("#212329");
      setmainContainer("white");
      setDiplomaTitle("white");
      setmainContainerBorder("transparent");
    } else {
      setDiplomaData("black");
      setDiplomaText("white");
      setDiplomaTitle("var(--MyDarkGrayBg)");
      setmainContainer("var(--MyDarkGrayBg)");
      setmainContainerBorder("1px solid gray");
    }
  };

  const courseData = [
    {
      title: "Diploma in Web Designing (DWD)",
      duration: "12 MONTHS",
      contents: [
        { category: "M.S. Office", data: ["Ms. Word", "Ms Excel", "Ms. Powerpoint", "Ms. Access"] },
        {
          category: "HTML", data: ["web Programming Introduction", "HTML-Introduction", "Basic Formatting Tags", "Grouping Using Div Span",
            "Lists	Images", " Hyperlink	Table	Headers", "Semantic Elements", "Forms", "Images",
            "Graphics", "Media", "APIs",
          ]
        },
        {
          category: "CSS", data: ["Introduction", "Selector", "Background Cursor",
            "Text Fonts", "	Box Model", "Display", "Positioning", "Floats", "Transforms (2D 3D)", "Animations",
            "Flex Box", "CSS Grid",
            "CSS Transitions", "Media Query", "Project Work ( Web Designing )",]
        },
        {
          category: "JavaScript",
          data: [
            "Overview", "Syntax & Comment", "Variable", "Operator", "Data Types", "Functios", "Object", "Event", "Strings", "Math", "Loop	RegXp", "Maps", "Errors", "Assignment"]
        }, {
          category: "Adobe Photoshop",
          data: [
            "Introduction", "Rectangular & All Tool", "Editing Photo in camera raw", "Free Transform, Scale, Rotate Etc.", "Auto Blend Layers & more",
            "Adjustments", "Exposure", "Curves Color Balance",
            "Layer Mask", "3d object creation", "Project Work ( Web Designing )"
          ]
        },
      ],
    },
    // Add more courses as needed
  ];

  return (
    <div className="container-fluid my-4 pt-3" data-aos="fade-down">
      {courseData.map((course, index) => (
        <div key={index}>
          <table className="table table-bordered border-primary table-lg table-hover" style={{ border: '1px solid skyblue' }}>
            <thead>
              <tr className="headText">
                <th colSpan="4">{course.title}</th>
              </tr>
              <tr className="my-row-color">
                <th>CATEGORY</th>
                <th colSpan="3">COURSE CONTENTS</th>
              </tr>
              <tr>
                <th colSpan="2"></th>
                <th colSpan="2" style={{ textAlign: 'center' }}>DURATION: {course.duration}</th>
              </tr>
            </thead>
            <tbody>
              {course.contents.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr>
                    <td className="fw-medium text-danger">{category.category}</td>
                    <td className="transparentTableData" colSpan="3">
                      <ul>
                        {category.data.map((content, contentIndex) => (
                          <li key={contentIndex}>{content}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default WebDesignCard;
