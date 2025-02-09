import './signup-page.css';
export default function Signup() {
    return (
        <div className="form-container">
            <form >
                <div>
                    <label>Username</label>
                    <input name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}