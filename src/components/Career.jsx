import React from "react";
import { CourseDetails } from "./CourseDetails";
export function Career(){
    const course_details_list = [
        {
          imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp",
          title: "Effective Cloud Computing Career Roadmap 2024",
          url: "https://www.guvi.in/blog/cloud-computing-career-roadmap/",
          author: "Lukesh S",
          authorUrl: "https://www.guvi.in/blog/author/lukesh/",
          publishedDate: "13 Dec, 2023",
          readTime: "10 Min Read ",
        },
        {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1.png",
            title: "Top 10 High Paying Cloud-Computing Jobs without Coding in 2024",
            url: "https://www.guvi.in/blog/top-non-coding-jobs-in-cloud-computing/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "13 Dec, 2023",
          readTime: "10 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Astounding-Websites-To-Learn-Cloud-Computing.png",
            title: "9 Astounding Websites To Learn Cloud Computing in 2024 ",
            url: "https://www.guvi.in/blog/websites-to-learn-cloud-computing/",
            author: "Lukesh S",
            authorUrl: "https://www.guvi.in/blog/author/lukesh/",
            publishedDate: "13 Dec, 2023",
            readTime: "10 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp",
            title: "Top 10 Cloud Computing Project Ideas [2024] ",
            url: "https://www.guvi.in/blog/cloud-computing-project-ideas/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "31 Jan, 2024",
            readTime: "4 Min Read ",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/11/best-youtube-channels-to-learn-cloud-computing.webp",
            title: "Best YouTube Channels to Learn Cloud Computing Engineering",
            url: "https://www.guvi.in/blog/best-youtube-channels-to-learn-cloud-computing-engineering/",
            author: "Meghana D",
            authorUrl: "https://www.guvi.in/blog/author/meghana/",
            publishedDate: "18 Nov, 2023",
            readTime: "5 Min Read",
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
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/06/AWS.jpg",
            title: "Is AWS Certification Worth It? | Best AWS Certifications 2024 ",
            url: "https://www.guvi.in/blog/is-aws-certification-worth/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "13 Dec, 2023",
            readTime: "3 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp",
            title: "Top 7 Cloud Computing Tools of 2024 ",
            url: "https://www.guvi.in/blog/most-in-demand-cloud-computing-tools/",
            author: "Jaishree Tomar",
            authorUrl: "https://www.guvi.in/blog/author/jaishree/",
            publishedDate: "13 Dec, 2023",
            readTime: "5 Min Read",
          },
          {
            imgUrl:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Cloud-Engineers.webp",
            title:"Top Product-Based Companies for Cloud Engineers 2024" ,
            url: "https://www.guvi.in/blog/product-based-companies-for-cloud-engineers/",
            author: "Isha Sharma",
            authorUrl: "https://www.guvi.in/blog/author/isha/",
            publishedDate: "13 Dec, 2023",
            readTime: "5 Min Read",
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
