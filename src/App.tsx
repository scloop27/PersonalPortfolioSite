import React from "react";
import { Switch, Route } from "wouter";
import Navigation from "./components/Navigation";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Interests from "./pages/Interests";
import Playbook from "./pages/Playbook";

function Router() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <Switch>
        <Route path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/interests" component={Interests} />
        <Route path="/playbook" component={Playbook} />
      </Switch>
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
