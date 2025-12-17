import { Link } from "react-router-dom";
const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "React Router" },
  { id: 3, title: "State Management" },
];
export default function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <Link to={`/posts/${p.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
