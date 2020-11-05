import React, { useState } from "react";
import { ButtonType, COMMENTS_url, LogOutButton, POSTS_URL, removeToken } from "../../constants";
import GetPosts from "../../service/postsService";
import Button from "../presentation/Button";


const onClickPostsButton = () => {
    var posts = GetPosts(POSTS_URL)
      .then((respone) => respone.json())
      .then((respone) => console.log(respone));
  };
  
  const onClickCommentsButton = () => {
    var comments = GetPosts(COMMENTS_url)
      .then((respone) => respone.json())
      .then((respone) => console.log(respone));
  };

function Menu({onClick}) {
    const [hasPosts, posts] = useState(false);
    const [hasComments, getComments] = useState(false);

 
    return (
        <>
        <Button {...ButtonType.posts} onClick={onClickPostsButton}/>
        <Button {...ButtonType.comments} onClick={onClickCommentsButton}/>
        <hr/>
        <Button {...LogOutButton} onClick={onClick}/>
        </>
    )
}

export default Menu;