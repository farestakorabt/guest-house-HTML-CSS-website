import { React, useEffect } from "react";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Project1, Project2, Project3, Project4 } from "./pages/Projects";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  // console.log(window.location.href.toString());

  useEffect(() => {
    const handleScrollToElement = (e) => {
      const url = window.location.origin + "/";

      const wheelRouter = (after, before) => {
        if (e.wheelDeltaY < 0) {
          setTimeout(() => {
            history.push(after);
          }, 500);
        } else if (e.wheelDeltaY > 0) {
          setTimeout(() => {
            history.push(before);
          }, 500);
        }
      };

      switch (window.location.href.toString()) {
        case url:
          if (e.wheelDeltaY < 0) {
            setTimeout(() => {
              history.push("project1");
            }, 500);
          }
          break;
        case url + "project1":
          wheelRouter("project2", "");
          break;
        case url + "project2":
          wheelRouter("project3", "project1");
          break;
        case url + "project3":
          wheelRouter("project4", "project2");
          break;
        case url + "project4":
          wheelRouter("contact", "project3");
          break;
        case url + "contact":
          if (e.wheelDeltaY > 0) {
            setTimeout(() => {
              history.push("project4");
            }, 500);
          }
          break;
        default:
          console.log("nothing");
      }
    };
    window.addEventListener("wheel", handleScrollToElement);
  }, [history]);

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/project1" component={Project1} />
        <Route exact path="/project2" component={Project2} />
        <Route exact path="/project3" component={Project3} />
        <Route exact path="/project4" component={Project4} />
        <Redirect to="/" />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
