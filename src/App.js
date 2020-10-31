import logo from './logo.svg';
import './App.css';
import {useGoogleLogin} from "react-google-login";

function App() {
    const clientId = '608292150723-2sfdrmmbq7mgjgipt5vc49r0pfu3f6lt.apps.googleusercontent.com'
    const responseType = 'code'
    const { signIn, loaded } = useGoogleLogin({
        clientId,
        responseType
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button className="google-signin" onClick={signIn}>Login</button>
            </header>
        </div>
    );
}

export default App;
