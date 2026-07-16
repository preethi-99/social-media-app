import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
    return (
        <div className="register">
            <div className = "card">
                <div className ="left">
                    <h1>Welcome Back</h1>
                    <p>Please register to your account to continue.</p>
                    <span> Already have an account? Login now.</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
            
                </div>
                <div className ="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type = "text" placeholder="Full Name" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;