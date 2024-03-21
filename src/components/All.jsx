import React from "react";
import { CourseDetails } from "./CourseDetails";
export function All(){
    const course_details_list = [
        {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Cloud-Engineers.webp",
            title:"Top Product-Based Companies for Cloud Engineers 2024" ,
            url: "https://www.guvi.in/blog/product-based-companies-for-cloud-engineers/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "13 Dec, 2023",
            readTime: "5 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg",
            title: "Top 7 Cyber Security Attacks in Real Life",
            url: "https://www.guvi.in/blog/cyber-security-attacks-in-real-life/",
            author: "Lahari Chandana",
            authorUrl: "https://www.guvi.in/blog/author/lahari-chandana/",
            publishedDate: "05 Oct, 2023",
            readTime: "3 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
            title: "Top Product-Based Companies for Data Science Freshers",
            url: "https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/",
            author: "Jaishree Tomar",
            authorUrl: "https://www.guvi.in/blog/author/jaishree/",
            publishedDate: "10 Nov, 2023",
            readTime: "4 Min Read ",
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
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-How-Long-It-Would-Take-to-Master-Cloud-Computing-Engineering.webp",
            title: "How Long It Would Take to Master Cloud Computing Engineering",
            url: "https://www.guvi.in/blog/how-long-it-would-take-to-master-cloud-computing-engineering/",
            author: "Meghana D",
            authorUrl: "https://www.guvi.in/blog/author/meghana/",
            publishedDate: "17 Nov, 202",
            readTime: "6 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
            title: "8 Different Types of Cybersecurity and Threats Involved",
            url: "https://www.guvi.in/blog/types-of-cybersecurity/",
            author: "Tushar Vinocha",
            authorUrl: "https://www.guvi.in/blog/author/tushar/",
            publishedDate: "08 Sep, 2023",
            readTime: "4 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science.png",
            title: "How Long Would It Take to Learn Data Science?",
            url: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
            author: "Meghana D",
            authorUrl: "https://www.guvi.in/blog/author/meghana/",
            publishedDate: "20 Oct, 2023",
            readTime: "4 Min Read",
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
      ];
      return (
        <div className="d-flex flex-wrap justify-content-center">
          {course_details_list.map((item, index) => {
            return <CourseDetails key={index} data={item} />;
          })}
        </div>
      );

        }