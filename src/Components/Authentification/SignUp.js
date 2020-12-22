import { useState } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {  getFirestore } from 'redux-firestore';
import {  getFirebase } from 'react-redux-firebase';

const SignUp = (props) => {
    const { auth } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const [message, setMessage] = useState('');
    
    if(auth) return <Redirect to='/profile' />
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const firestore = getFirestore();
        const firebase = getFirebase();

        try {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(resp => {
                return firestore.collection('users').doc(resp.user.uid).set({
                  firstName: name,
                  lastName: lastName,
                  initials: name[0] + lastName[0]
                });
              }).catch((err) => {
                    setMessage(err.message);
              });
          } catch (error) {
            setMessage(error);
          }
    }

    return (
        <div className="container col s1">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="validate" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <span className="helper-text" data-error="You must enter valid email" data-success=""></span>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="validate" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <span className="helper-text" data-error="" data-success=""></span>
                </div>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="validate" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <span className="helper-text" data-error="You must enter a valid name" data-success=""></span>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="validate" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                    <span className="helper-text" data-error="You must enter a valid last name" data-success=""></span>
                </div>
                
                <div className="red-text center">
                    { message ? <p>{message}</p> : null }
                </div>

                <div className="input-field">
                    <button className="btn">Sign Up</button>
                </div>
            </form>
        </div>
      );
}
 
export default connect((state) => {
    return {
        auth: state.firebase.auth.uid
    }
})(SignUp)