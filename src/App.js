// Imports from Components
const { Switch, Route } = require("react-router-dom");
const { default: SignIn } = require("./Components/Authentification/SignIn");
const { default: Footer } = require("./Components/Content/Footer");
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
        <Route path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
