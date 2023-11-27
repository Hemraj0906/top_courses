// // import React from 'react'
// // import Card from "./Cards"


// //  const Cards = (props) => {
// //   const courses = props.courses; //courses
// //   //console.log(courses)
// //   // console.log(courses)

// //   //data comming from props that data i wont to be convert

// //   // sara data [{key:[]},{key:[]},{key:[]},{key:[]},{key:[]}]
// //   // ----- ---> i wont to convert into single array of object[{}]

// //   //   let allcourses = []
// //   //   const getCourses = () => {
// //   //       Object.values(courses).forEach((coursesCategory) => {
// //   //           coursesCategory.forEach((sigleCourse) => {
// //   //             allcourses.push(sigleCourse);
// //   //           })
// //   //       })
// //   //     return allcourses
// //   // }

// //   // function getCourses() {
// //   //   let allcourses = []

// //   //    Object.values(courses).forEach((arr) => {
// //   //           arr.forEach(courseData => {
// //   //             allcourses.push(courseData);
// //   //           })
// //   //       })
// //   //     return allcourses

// //   //  }

// //   /////////////////////
// //   //  function getCourses() {
// //   //   let allcourses = [];

// //   //   Object.values(courses).forEach((arr) => {
// //   //     if (Array.isArray(arr)) {
// //   //       arr.forEach((courseData) => {
// //   //         allcourses.push(courseData);
// //   //       });
// //   //     } else {
// //   //       // Handle the case where 'arr' is not an array
// //   //       console.error("Error: Invalid array element");
// //   //     }
// //   //   });

// //   //   return allcourses;
// //   // }

// //   ///////////////////
// //   // function getCourses() {
// //   //   let allCourses = [];

// //   //   if (courses === undefined || courses === null) {
// //   //     // Handle the case where 'courses' is undefined or null
// //   //     console.error("Error: Invalid courses variable");
// //   //     return [];
// //   //   }

// //   //   Object.values(courses).forEach((arr) => {
// //   //     arr.forEach((courseData) => {
// //   //       allCourses.push(courseData);
// //   //     });
// //   //   });

// //   //   return allCourses;
// //   // }

// //   function getCourses() {
// //     let allCourses = [];

// //     if (courses === undefined || courses === null) {
// //       // Handle the case where 'courses' is undefined or null
// //       console.error("Error: Invalid courses variable");
// //       return [];
// //     }

// //     Object.values(courses).forEach((arr) => {
// //       if (Array.isArray(arr)) {
// //         arr.forEach((courseData) => {
// //           allCourses.push(courseData);
// //         });
// //       } else {
// //         // Handle the case where 'arr' is not an array
// //         console.error("Error: Invalid array element");
// //       }
// //     });

// //     return allCourses;
// //   }

// //   return (
// //     <div>
// //       {getCourses().map((course) => (
// //         <Card key={course.id} course={course} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Cards













// import React from "react";
// import Card from "./Cards";

// const Cards = (props) => {
//   let courses = props.courses;
//   // console.log(courses)

 

//   function flattenCoursesArray(courses) {
//     let allCourses = [];

//     if (!courses || !Array.isArray(courses)) {
//       console.error("Error: Invalid input variable");
//       return [];
//     }

//     courses.forEach((obj) => {
//       if (obj && obj.key && Array.isArray(obj.key)) {
//         obj.key.forEach((courseData) => {
//           if (courseData && typeof courseData === "object") {
//             allCourses.push(courseData);
//           } else {
//             console.error("Error: Invalid courseData element");
//           }
//         });
//       } else {
//         console.error("Error: Invalid object or key property");
//       }
//     });

//     return allCourses;
//   }

//   return (
//     <div>
//       {flattenCoursesArray().map((course) => (
//         <Card key={course.id} course={course} />
        
//       ))}
//     </div>
//   );
// };

// export default Cards;





import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      //main sirf specific categiry ka data array krunga
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
