import { Action, Reducer, Store, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Persistor, createTransform, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./middlewares/saga";
import { InjectedReducers, createReducer } from "./reducers";

type AppStore = Store<any, Action<string>> & { dispatch: unknown } & {
  addReducer: (_key: string, _reducer: Reducer) => void;
  removeReducer: (_key: string) => void;
  runSaga: (_listSagas: any[]) => void;
};

const configureStore = (): [AppStore, Persistor] => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const rootReducer = createReducer();

  const transform = createTransform((inboundState, key) => {
    if (/customer/.test(key as string)) {
      return inboundState;
    }
  });
  const persistedReducer = persistReducer(
    {
      key: "root",
      storage,
      transforms: [transform],
    },
    rootReducer,
  );

  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares))) as AppStore;
  const persistor = persistStore(store);

  const injectedReducers: InjectedReducers = {};

  store.addReducer = (key: string, reducer: Reducer) => {
    if (!key || injectedReducers[key]) {
      return;
    }

    injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(injectedReducers));
  };

  store.removeReducer = (key: string) => {
    if (!key || !injectedReducers[key]) {
      return;
    }

    delete injectedReducers[key];
    store.replaceReducer(createReducer(injectedReducers));
  };

  store.runSaga = (listSagas: any[]) => {
    sagaMiddleware.run(rootSaga(listSagas));
  };

  return [store, persistor];
};

export default configureStore;
