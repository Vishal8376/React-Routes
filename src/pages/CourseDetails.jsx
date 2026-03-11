import { useParams } from "react-router-dom";

const courses = {
  1: "React Basics Course Details",
  2: "Java Programming Course Details",
  3: "Data Structures Course Details",
  4: "Database Systems Course Details",
  5: "Machine Learning Course Details"
};

function CourseDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Course Details</h2>
      <p>{courses[id]}</p>
    </div>
  );
}

export default CourseDetails;