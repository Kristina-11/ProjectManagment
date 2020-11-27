import { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, lastName, email, password);
    }

    return (
        <div className="container col s1">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="validate" value={name} onChange={(e) => setName(e.target.value)} />
                    <span className="helper-text" data-error="You must a valid name" data-success=""></span>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="validate" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <span className="helper-text" data-error="You must enter a valid last name" data-success=""></span>
                </div>
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
 
export default SignUp;