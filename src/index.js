import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Board from './pages/Board';
import ErrPage from './pages/error';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import boardReducer from './reducer/reducer';

const store = createStore(boardReducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store = { store }>
        <HashRouter>
            <div className="main">
                <Switch>
                    {/* 메인 페이지 path가 /일 때는 반드시 exact 속성이 있어야 함 */}
                    {/* 그렇지 않으면 /가 들어가는 모든 경로에서 홈 화면만 보이게 됨 */}
                    <Route exact path="/" component={ Home }/>
                    <Route path="/Board" component={ Board }/>
                    <Route component={ ErrPage }/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
