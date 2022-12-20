import {HashRouter as Router} from "react-router-dom";
import {useRouter} from './router'

function App() {
    const routes = useRouter()
    return (
        <Router>
            <div className="content">
                {routes}
            </div>
        </Router>
    );
}

export default App;