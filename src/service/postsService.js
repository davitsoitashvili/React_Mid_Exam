import React from "react";

const GetPosts = async (postsUrl) => {
  const postsRequest = await fetch(postsUrl)
  return postsRequest;
};

export default GetPosts;
