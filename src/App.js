// Imports from Components
const { Switch, Route } = require("react-router-dom");
const { default: Navbar } = require("./Components/Content/Nav");
const { default: Dashboard } = require("./Components/Home/Dashboard");
const { default: ProjectDetails } = require("./Components/Project/ProjectDetails");

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
