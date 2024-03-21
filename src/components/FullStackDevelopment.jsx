import React from "react";
import { CourseDetails } from "./CourseDetails";
export function FullStackDevelopment() {
  const course_details_list = [
    {
      imgUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024",
      url: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
      author: "Isha Sharma",
      authorUrl: "https://www.guvi.in/blog/author/isha/",
      publishedDate: "13 Dec, 2023",
      readTime: "4 Min Read",
    },
    {
      imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      url: "https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/",
      author: "Meghana D",
      authorUrl: "https://www.guvi.in/blog/author/meghana/",
      publishedDate:"20 Oct, 2023" ,
      readTime:"3 Min Read",
    },
    {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
        title: "How does Apache work? A detailed introduction to Apache",
        url:"https://www.guvi.in/blog/how-does-apache-work/" ,
        author: "Tushar Vinocha",
        authorUrl: "https://www.guvi.in/blog/author/tushar/",
        publishedDate: "03 Oct, 2023",
        readTime:"4 Min Read",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
        title: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024",
        url: "https://www.guvi.in/blog/full-stack-developer-syllabus/",
        author: "Archana",
        authorUrl: "https://www.guvi.in/blog/author/archana/",
        publishedDate: "14 Dec, 2023",
        readTime:"6 Min Read",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
        title: "6 Essential Prerequisites For Learning ReactJS",
        url: "https://www.guvi.in/blog/prerequisites-for-reactjs/",
        author: "Ramkumar",
        authorUrl:"https://www.guvi.in/blog/author/ramkumar/" ,
        publishedDate: "06 Oct, 2023",
        readTime:"3 Min Read",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
        title: "10 Best Database Management Systems For Software Developers",
        url:"https://www.guvi.in/blog/database-management-systems-for-developers/" ,
        author: "Isha Sharma",
        authorUrl: "https://www.guvi.in/blog/author/isha/",
        publishedDate: "03 Nov, 2023",
        readTime:"3 Min Read ",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
        title: "Best Web Development Roadmap for Beginners 2024",
        url: "https://www.guvi.in/blog/web-development-roadmap-for-beginners/",
        author: "Isha Sharma",
        authorUrl:"https://www.guvi.in/blog/author/isha/" ,
        publishedDate: "14 Dec, 2023",
        readTime:"5 Min Read",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
        title: "7 Best Full-Stack Development Online Courses [2024]",
        url: "https://www.guvi.in/blog/best-full-stack-development-online-courses/",
        author: "Srinithi Sankar",
        authorUrl:"https://www.guvi.in/blog/author/srinithi/" ,
        publishedDate: "13 Dec, 2023",
        readTime:"5 Min Read",
      },
      {
        imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2021/10/The-Good-Life-GoDaddy-Store-Image-10-600x250.jpg",
        title: "8 Top Full Stack Web Developer Coding Projects For You!",
        url: "https://www.guvi.in/blog/top-full-stack-web-developer-coding-projects/",
        author: "Archana",
        authorUrl:"https://www.guvi.in/blog/author/archana/" ,
        publishedDate: "06 Oct, 2023",
        readTime:"8 Min Read",
      },
  ];
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {course_details_list.map((item, index) => {
        return <CourseDetails key={index} data={item} />;
      })}
    </div>
  );
}
