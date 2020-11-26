// Imports from Components
const { Switch, Route } = require("react-router-dom");
const { default: Navbar } = require("./Components/Content/Nav");
const { default: Dashboard } = require("./Components/Home/Dashboard");

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
