import React, { useEffect, useState } from "react";
import styles from "@/styles/blogs.module.css";
import Link from "next/link";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className={styles.blogs}>
      {blogs &&
        blogs.map((item) => {
          return (
            <div className={styles.blogItems} key={item.title}>
              <Link href={`/blogpost/${item.slug}`}>
                <h1 className="title">{item.title}</h1>
              </Link>
              <p className="description">
                {item.content.substr(0, 400) + "..."}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
