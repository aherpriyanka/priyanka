import React from "react";

function SiteName ({name}) {
  if(name === "Twitter"){
    throw new Error("This site is not available for share your content now");
  }
  return (
    <div className="siteName">{name}</div> 
  );
};
export default SiteName;
