import React from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const posts = [
  { id: 1, title: "Title #01", subtitle: "Sub#01", likes: 20 },
  { id: 2, title: "Title #02", subtitle: "Sub#02", likes: 10 },
  { id: 3, title: "Title #03", subtitle: "Sub#03", likes: 50 },
  { id: 4, title: "Title #04", subtitle: "Sub#04", likes: 40 },
];

function App() {
  return (
    <>
      <Header>
        <h2>Posts da Semana</h2>
      </Header>
      <hr />
      <h3>Retorno direto do map</h3>
      {posts.map((post) => (
        <Post
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
          likes={post.likes}
          key={post.id}
        />
      ))}
      <hr />
      <hr />
      <h3>Retorno indireto do map</h3>
      {posts.map((post) => {
        return (
          <Post
            post={{
              title: post.title,
              subtitle: post.subtitle,
            }}
            likes={post.likes}
            key={post.id}
          />
        );
      })}
    </>
  );
}

export default App;
