import React from "react";
import SiteName from "./SiteName";
import ErrorBoundary from "../Error/ErrorBoundary";

const PostContent = () => {
    const includeList = [
        {id : 1, count : 2 , isfor : "Paragraph" },
        {id: 2, count : 1200 , isfor : "Words" },
        {id: 3, count : 1212 , isfor : "Bytes" }
    ]
  return (
    <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <ul>
            {includeList.map(item => (
                <React.Fragment key={item.id}>
                    <li>{item.count} - {item.isfor} </li>
                </React.Fragment>
            ))}
        </ul>
        <div className="clearfix"/>
        <h4>Post share with following locations - </h4>
        <ErrorBoundary>
            <SiteName name="Facebook"/>
            </ErrorBoundary>

            <ErrorBoundary>
            <SiteName name="Twitter"/>
            </ErrorBoundary>

            <ErrorBoundary>
            <SiteName name="Whatsapp"/>
            </ErrorBoundary>

            <ErrorBoundary>
            <SiteName name="Gmail"/>
            </ErrorBoundary>
    </div>
  );
};
export default PostContent;
