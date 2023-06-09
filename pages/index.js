import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CourseList from "./components/CourseList";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://neve-technical-test.s3.eu-west-2.amazonaws.com/course.json"
  ).then((response) => response.json());
  return { props: { data } };
};

export default function Home({ data }) {
  const [courses, setCourses] = React.useState([]);

  useEffect(() => {
    setCourses(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <CourseList courses={courses} />
      </main>
    </>
  );
}
