import React from "react";
import styles from "@/styles/blogs.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.blogItems}>
        <Link href="/blogpost/title1">
          <h1 className="title">Title 1</h1>
        </Link>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
          fugiat ad recusandae at nostrum vero vel fugit possimus repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          totam voluptatem eius nesciunt labore, ipsum aliquid. Eligendi at
          quas, ipsa dolor facilis exercitationem non delectus nobis qui, cumque
          voluptatibus perspiciatis.
        </p>
      </div>
      <div className={styles.blogItems}>
        <Link href="/blogpost/title2">
          <h1 className="title">Title 2</h1>
        </Link>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
          fugiat ad recusandae at nostrum vero vel fugit possimus repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          totam voluptatem eius nesciunt labore, ipsum aliquid. Eligendi at
          quas, ipsa dolor facilis exercitationem non delectus nobis qui, cumque
          voluptatibus perspiciatis.
        </p>
      </div>
      <div className={styles.blogItems}>
        <Link href="/blogpost/title3">
          <h1 className="title">Title 3</h1>
        </Link>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
          fugiat ad recusandae at nostrum vero vel fugit possimus repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          totam voluptatem eius nesciunt labore, ipsum aliquid. Eligendi at
          quas, ipsa dolor facilis exercitationem non delectus nobis qui, cumque
          voluptatibus perspiciatis.
        </p>
      </div>
      <div className={styles.blogItems}>
        <Link href="/blogpost/title4">
          <h1 className="title">Title 4</h1>
        </Link>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet rerum
          fugiat ad recusandae at nostrum vero vel fugit possimus repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          totam voluptatem eius nesciunt labore, ipsum aliquid. Eligendi at
          quas, ipsa dolor facilis exercitationem non delectus nobis qui, cumque
          voluptatibus perspiciatis.
        </p>
      </div>
    </div>
  );
};

export default Blog;
