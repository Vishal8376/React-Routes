import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (
        <div className="container">

            <h2>Student Dashboard</h2>

            <div className="dashboard-links">
                <Link to="profile">Profile</Link>
                <Link to="mycourses">My Courses</Link>
            </div>

            <Outlet />
        
        </div>
    )
}
export default Dashboard