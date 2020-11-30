const { default: ProjectList } = require("../Project/ProjectList")
const { default: Notification } = require("./Notification")
const { default: Theory } = require("./Theory")

const Dashboard = () => {
    return ( 
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m8">
                    <Theory />
                    <ProjectList />
                </div>
                <div className="col s12 m2 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;