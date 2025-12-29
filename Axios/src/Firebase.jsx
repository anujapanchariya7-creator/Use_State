import axios from "./Axios";
import { useEffect } from "react";

function Firebase() {
  useEffect(() => {
    const newStudent = {
      name: "ani",
      course: "react",
    };

    axios
      .post("/student.json", newStudent)
      .then((res) => console.log("Added:", res.data))
      .catch((err) => console.error(err));
  }, []);

  return <h3>Firebase POST Test</h3>;
}

export default Firebase;
