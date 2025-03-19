import '../CSS/Navbar.css'
export function AuthHeader(){
    return(
        <>
            <div className="auth-section">
                <button className="buy-tickets-btn">Buy Commuter Tickets</button>
                <span className="account-text">Already have an account?</span>
                <button className="login-btn">Login</button>
                <span className="or-text">or</span>
                <button className="signup-btn">Sign Up</button>
            </div>
        </>
    )
}