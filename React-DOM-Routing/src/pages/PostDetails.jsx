import { useParams } from "react-router-dom";
export default function PostDetails() {
  const { id } = useParams();
  return <h2>Post Details for ID:   {id}</h2>;
}
