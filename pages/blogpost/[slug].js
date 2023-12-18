import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/blog.module.css";
import Link from "next/link";

const slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  return (
    <div className={styles.blog}>
      <div className={styles.title}>
        <Link href="/blog">
          <button>back</button>
        </Link>
        <h1>{blog && blog.title}</h1>
      </div>
      <div className={styles.description}>
        <p>{blog && blog.content}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  let blog = await data.json();

  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default slug;
