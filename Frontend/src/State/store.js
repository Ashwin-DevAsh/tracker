import {createStore,applyMiddleware,compose} from 'redux'
import reducers from './Reducers/index'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './Sagas';


const initialState = {}
const sagaMiddleWare = createSagaMiddleware()
const middleware = [thunk,sagaMiddleWare]

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleWare.run(watcherSaga)

export default store
