import "./login.scss"
const Login = () => {
    return (
        <div className="login">
            <div className = "card">
                <div className ="left">
                    <h1>Welcome Back</h1>
                    <p>Please login to your account to continue.</p>
                    <span> Don't have an account? Sign up now.</span>
                    <button>Register</button>
            
                </div>
                <div className ="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;