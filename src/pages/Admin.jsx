import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <Link to="add-course">Add Course</Link>

      <Outlet />
    </div>
  );
}

export default Admin;