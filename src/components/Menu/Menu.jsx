import React from "react";
import {
  ButtonType,
  COMMENTS_url,
  LogOutButton,
  POSTS_URL,
} from "../../constants";
import GetPosts from "../../service/postsService";
import Button from "../presentation/Button";

function Menu({ onClick }) {
  const onClickPostsButton = () => {
    GetPosts(POSTS_URL)
      .then((respone) => respone.json())
      .then((respone) => {
        var posts = [];
        respone.forEach((post) => {
          posts.push(
            `user ID : ${post.id} id : ${post.id} title : ${post.title} body : ${post.body}`
          );
        });
        alert(posts);
      });
  };

  const onClickCommentsButton = () => {
    GetPosts(COMMENTS_url)
      .then((respone) => respone.json())
      .then((respone) => {
        var comments = [];
        respone.forEach((post) => {
            comments.push(
            `user ID : ${post.id} id : ${post.id} name : ${post.name} email : ${post.email} body: ${post.body}`
          );
        });
        alert(comments);
      });
  };

  return (
    <>
      <Button {...ButtonType.posts} onClick={onClickPostsButton} />
      <Button {...ButtonType.comments} onClick={onClickCommentsButton} />
      <hr />
      <Button {...LogOutButton} onClick={onClick} />
    </>
  );
}

export default Menu;
