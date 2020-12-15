import { useState } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/authActions';

const SignIn = (props) => {

    const { signIn } = props;
    const { authError } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let obj = {
            email,
            password
        }
        signIn(obj);
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
                <div className="error">
                    { authError ? <p className="red-text center">{authError}</p> : null }
                </div>
                <div className="input-field">
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
      );
}

export default connect((state) => {
    console.log(state)
    return {
        authError: state.auth.authError,
        path: state.auth.path
    }
}, (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred))
    }
})(SignIn)