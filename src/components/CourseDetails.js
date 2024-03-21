import React from "react"
export function CourseDetails({data}){
    return(
        <div class="card mb-3 d-flex flex-wrap justify-content-center align-items-center text-center  m-4  m">

<img width="100%" height="200px" src={data.imgUrl} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async" fetchpriority="high"   /> 
<div class="card-body" id="card-details">
<a class="card-title text-decoration-none text-dark fs-5 fw-semibold" href={data.url}>
{data.title} </a>
<p class="card-author mt-2 mb-0"><span id="by">By</span>&nbsp;<a class="text-decoration-none" href={data.authorUrl}>{data.author}</a></p>
<div id="card-footer" class="mt-2 d-flex flex-row flex-nowrap justify-content-between">
<p class="mb-0 card-text">{data.publishedDate}</p>
<p class="mb-0 card-text">{data.readTime}</p>
</div>
</div>



        </div>
    )
}