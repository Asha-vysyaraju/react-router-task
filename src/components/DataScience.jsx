import React from "react";
import { CourseDetails } from "./CourseDetails";
export function DataScience(){
    const course_details_list = [
        {
          imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples.webp",
          title: "12 Real-World Data Science Examples: Power Of Data Science",
          url: "https://www.guvi.in/blog/real-world-data-science-examples/",
          author: "Lukesh S",
          authorUrl: "https://www.guvi.in/blog/author/lukesh/",
          publishedDate: "21 Oct, 2023",
          readTime: "7 Min Read",
        },
        {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
            title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
            url: "https://www.guvi.in/blog/top-non-coding-jobs-in-data-science/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "13 Dec, 2023",
            readTime: "6 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science.png",
            title: "Can A Commerce Student Do Data Science?",
            url: "https://www.guvi.in/blog/can-commerce-students-do-data-science/",
            author: "Saakshi Priyadarshini",
            authorUrl: "https://www.guvi.in/blog/author/saakshi/",
            publishedDate: "08 Sep, 2023",
            readTime: "3 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
            title: "Roles and Responsibilities of a Data Scientist ",
            url: "https://www.guvi.in/blog/roles-and-responsibilities-of-a-data-scientist/",
            author: "Jaishree Tomar",
            authorUrl: "https://www.guvi.in/blog/author/jaishree/",
            publishedDate: "20 Oct, 2023",
            readTime: "5 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-scaled.jpg",
            title: "How to become a Data Scientist after Mechanical Engineering? ",
            url: "https://www.guvi.in/blog/how-to-become-data-scientist-after-mechanical-engineering/",
            author: "Lahari Chandana",
            authorUrl: "https://www.guvi.in/blog/author/lahari-chandana/",
            publishedDate: ">03 Oct, 202",
            readTime: "3 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text.png",
            title: "Data Science vs Data Analytics | Best Career Choice in 2024 ",
            url: "https://www.guvi.in/blog/data-science-vs-data-analytics-career/",
            author: "Lahari Chandana",
            authorUrl: "https://www.guvi.in/blog/author/lahari-chandana/",
            publishedDate: "16 Mar, 2024",
            readTime: "3 Min Read",
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
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
            title: "Top Product-Based Companies for Data Scientists in 2024",
            url: "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/",
            author: "Jaishree Tomar",
            authorUrl: "https://www.guvi.in/blog/author/jaishree/",
            publishedDate: "13 Dec, 2023",
            readTime: "4 Min Read",
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
      ];
      return (
        <div className="d-flex flex-wrap justify-content-center">
          {course_details_list.map((item, index) => {
            return <CourseDetails key={index} data={item} />;
          })}
        </div>
      );
}
