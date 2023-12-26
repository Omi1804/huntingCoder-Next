import React from "react";
import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <div className={styles.aboutUsPage}>
      <h1 className={styles.heading}>About Hunting Coders</h1>
      <div className={styles.content}>
        <p>
          Welcome to <strong>Hunting Coders</strong>, your go-to community for
          all things coding. Whether you're a seasoned developer or just
          starting out, our blog offers a rich repository of knowledge,
          insights, and tips to enhance your coding journey.
        </p>
        <p>
          Our mission is to empower coders by providing the latest in tech news,
          in-depth tutorials, and a platform for sharing experiences and best
          practices. Join us in our quest to explore the ever-evolving world of
          software development.
        </p>

        <h2 className={styles.subHeadings}>Our Journey</h2>
        <p>
          Founded in 2024, Hunting Coders began as a small forum for coding
          enthusiasts. Over the years, we've grown into a vibrant community of
          developers, sharing everything from basic coding tutorials to advanced
          software engineering concepts.
        </p>

        <h2 className={styles.subHeadings}>What We Offer</h2>
        <p>
          Our blog features a variety of content, including:
          <ul>
            <li>Weekly coding challenges to sharpen your skills</li>
            <li>Interviews with industry leaders and successful developers</li>
            <li>Reviews of the latest development tools and technologies</li>
            <li>Guest posts from prominent community members</li>
          </ul>
        </p>

        <h2 className={styles.subHeadings}>Community Engagement</h2>
        <p>
          At Hunting Coders, we believe in the power of community. We host
          regular meetups, webinars, and hackathons, offering a platform for
          coders to connect, collaborate, and create amazing things together.
        </p>

        <h2 className={styles.subHeadings}>Looking Ahead</h2>
        <p>
          Our vision for the future is to continue growing as a central hub for
          coders worldwide. We're constantly exploring new ways to engage our
          audience and provide value to our community.
        </p>

        <div className={styles.teamSection}>
          <h2 className={styles.subHeadings}>Meet Our Team</h2>
          <ul>
            <li>Om Nigam</li>
            <li>Pragya Srivastava</li>
            <li>Swati Nigam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
