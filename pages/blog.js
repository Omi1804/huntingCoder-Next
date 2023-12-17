import React, { useEffect, useState } from "react";
import styles from "@/styles/blogs.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setBlogs(resData);
      });
  }, []);
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

export default Blog;
