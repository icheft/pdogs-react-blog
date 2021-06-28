// import logo from './logo.svg';

// using index.css
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
// we don't react anymore (in v17)

function App() {
    // create variable
    const title = 'PDOGS Assignment Blog';
    // need to start with a capital letter
    return (
        <Router>
            <div className="App">
                {/* <h1>{title}</h1> */}
                <Navbar />
                {/* always showing the navbar */}
                {/* important: class itself conflicts with js' class */}
                <div className="content">
                    <Switch>
                        {/* make sure that only one page shows up in the browser at one time */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        <Route path="*">
                            {/* not catching any of the route */}
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App; // always export our component functions
