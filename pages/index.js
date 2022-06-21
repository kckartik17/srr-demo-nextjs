import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: {
      todos: data,
    },
  };
}

export default function Home({ todos }) {
  return (
    <div className={styles.container}>
      {todos?.length === 0 ? (
        <div>Loading....</div>
      ) : (
        todos?.map((todo) => (
          <div key={todo.id}>
            <p>
              {todo.id} : {todo.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
