import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (role) => {
        login(role);

        if (role === "student") {
            navigate("/dashboard");
        } else {
            navigate("/admin");
        }
    };

    return (
        <div className="container">

            <div className="login-box">

                <h2>Login</h2>

                <button onClick={() => handleLogin("student")}>
                    Login as Student
                </button>

                <br />
                <br />
                
                <button onClick={() => handleLogin("admin")}>
                    Login as Admin
                </button>

            </div>

        </div>
    );
}

export default Login;