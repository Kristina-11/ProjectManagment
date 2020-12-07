import { useState } from 'react';
import { connect } from "react-redux";
import { createProject } from '../../Store/Actions/projectActions';

const CreateProject = ({ createProject }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            title,
            content,
            date
        }
        createProject(obj);
    }

    return ( 
        <div className="container col s1">
            <div className="row">
                <div className="col s12">
                    <form onSubmit={handleSubmit}>
                        <h2>Create project</h2>
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
 
export default connect(null, mapDispatchToProps)(CreateProject);