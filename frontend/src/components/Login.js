function Login() {
    return (
        <div className="login">
            <form className="login-form">
            <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            <input type="submit" value="LOGIN" />
            </form>
        </div>
    );
}