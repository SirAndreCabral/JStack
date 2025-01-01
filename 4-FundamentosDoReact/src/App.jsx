import React, { useState } from "react";

import Post from "./Post.jsx";
import Header from "./Header.jsx";
import ThemeProvider from "./ThemeContext.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title #01",
      subtitle: "Sub#01",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title #02",
      subtitle: "Sub#02",
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title #03",
      subtitle: "Sub#03",
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title #04",
      subtitle: "Sub#04",
      likes: 40,
      read: true,
    },
  ]);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function handleRefresh() {
    setTimeout(() => {
      setPosts((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          title: `Title #0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: randomIntFromInterval(1, 100),
        },
      ]);
    }, 2000);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id != postId));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <h3>Retorno indireto do map</h3>

      {posts.map((post) => {
        return <Post key={post.id} onRemove={handleRemovePost} post={post} />;
      })}
    </ThemeProvider>
  );
}

export default App;
