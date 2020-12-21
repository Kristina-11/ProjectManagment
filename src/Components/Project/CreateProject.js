import { useState } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { createProject } from '../../Store/Actions/projectActions';

const CreateProject = (props) => {
    const { createProject, auth, properties } = props;
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    if (!auth) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            title,
            content,
            due: date
        }
        createProject(obj);
        properties.history.push('/');
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" className="validate" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                            <span className="helper-text" data-error="You must enter a title" data-success="Good!"></span>
                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Project content</label>
                            <input type="text" id="content" className="validate" value={content} onChange={(e) => setContent(e.target.value)} required/>
                            <span className="helper-text" data-error="You must enter a content" data-success="Good!"></span>
                        </div>

                        <div className="input-field">
                            <input type="date" id="date" className="validate" value={date} onChange={(e) => setDate(e.target.value)} required/>
                            <span className="helper-text" data-error="You should specify a date" data-success="Good!"></span>
                        </div>

                        <div className="input-field">
                            <button className="btn">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
 
export default connect((state) => {
    return {
        auth: state.firebase.auth.uid
    }
}, mapDispatchToProps)(CreateProject);