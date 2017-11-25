import React from 'react';
import ReactDOM from 'react-dom';
import test from './sass/test.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux-zero/react';
import store from './store';


const Index = () => 
{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();