import React, {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import Views from "./views";
import {Route, Switch} from "react-router-dom";
import Loading from "./components/shared-components/Loading";
import {auth} from './auth/FirebaseAuth'

function App() {
    const [loading, setLoadiing] = useState(true);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                localStorage.setItem("logged", true);
            } else {
                localStorage.removeItem("logged");
            }
            setLoadiing(false);
        });
    }, []);
    if (loading) {
        return <Loading/>;
    }

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" component={Views} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
