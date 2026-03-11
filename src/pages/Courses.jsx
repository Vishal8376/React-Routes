import { Link } from "react-router-dom";

const courses = [
  { id: 1, name: "React Basics" },
  { id: 2, name: "Java Programming" },
  { id: 3, name: "Data Structures" },
  { id: 4, name: "Database Systems" },
  { id: 5, name: "Machine Learning" }
];

function Courses() {
  return (
    <div className="container">
      <h2>Available Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <Link to={`/courses/${course.id}`}>
              {course.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;