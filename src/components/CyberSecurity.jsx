import React from "react";
import { CourseDetails } from "./CourseDetails";
export function CyberSecurity(){
    const course_details_list = [
        {
          imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
          title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
          url: "https://www.guvi.in/blog/difference-between-cybersecurity-and-ethical-hacking/",
          author: "Tushar Vinocha",
          authorUrl: "https://www.guvi.in/blog/author/tushar/",
          publishedDate: "04 Oct, 2023",
          readTime: "5 Min Read ",
        },
        {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Gu",
            url: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
            author: "Jaishree Tomar",
            authorUrl: "https://www.guvi.in/blog/author/jaishree/",
            publishedDate: "04 Dec, 2023",
            readTime: "3 Min Read",
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
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
            title: "What is Cybersecurity? Importance and its uses &#038; the growing challenge...",
            url: "https://www.guvi.in/blog/what-is-cybersecurity/",
            author: "Tushar Vinocha",
            authorUrl: "https://www.guvi.in/blog/author/tushar/",
            publishedDate: "26 Oct, 2023",
            readTime: "4 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            title: "What Is Hacking? Types of Hacking &amp; More",
            url: "https://www.guvi.in/blog/what-is-hacking/",
            author: "Meghana D",
            authorUrl: "https://www.guvi.in/blog/author/meghana/",
            publishedDate: "26 Oct, 2023",
            readTime: "6 Min Read",
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
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png",
            title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
            url: "https://www.guvi.in/blog/cybersecurity-certifications/",
            author: "Tushar Vinocha",
            authorUrl: "https://www.guvi.in/blog/author/tushar/",
            publishedDate: "07 Oct, 2023",
            readTime: ">3 Min Read ",
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
