import React from "react";
import { Button } from "../UI/button/Button";
import styles from "./../../util/styles/Posts.module.css";

export const PostsList = ({ posts, handleDelPost }) => {
  return !posts?.length ? (
    <h2>Post not found...!</h2>
  ) : (
    <div className={styles.postWrapper}>
      {posts?.map((post, idx) => (
        <div key={post?.id} className={styles.post}>
          <div>
            <h3>
              {post?.id?.length > 5 ? idx + 1 : post.id}. {post?.title}
            </h3>
            <p>{post?.body}</p>
          </div>
          <Button onClick={() => handleDelPost(post.id)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};
