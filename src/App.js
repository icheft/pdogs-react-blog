import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import About from './About';
import Edit from './Edit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/hamburger.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                        <Route exact path="/create">
                            <Create />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        <Route path="/edit/:id">
                            <Edit />
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
