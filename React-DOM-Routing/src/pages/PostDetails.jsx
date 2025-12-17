import { useParams, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "React Basics",
    description:
      "Learn the fundamentals of React including components, JSX, props, and state. This post helps beginners understand how React builds UI efficiently.",
    author: "Anuja Panchariya",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "React Router",
    description:
      "Deep dive into client-side routing using React Router. Covers routes, links, dynamic params, protected routes, and navigation patterns.",
    author: "Anuja Panchariya",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "State Management",
    description:
      "Understand how state works in React using useState, lifting state up, and managing shared data across components.",
    author: "Anuja Panchariya",
    readTime: "6 min read",
  },
];

export default function PostDetails() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p style={{ color: "#6b7280", marginBottom: "10px" }}>
        By {post.author} • {post.readTime}
      </p>
      <p style={{ lineHeight: "1.6" }}>{post.description}</p>

      <br />
      <Link to="/">← Back to posts</Link>
    </div>
  );
}
