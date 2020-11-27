import { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email, password);
    }

    return (
        <div className="container col s1">
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span className="helper-text" data-error="You must enter valid email" data-success=""></span>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span className="helper-text" data-error="" data-success=""></span>
                </div>

                <div className="input-field">
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
      );
}
 
export default SignIn;