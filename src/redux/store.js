import { createStore } from 'redux'

function reducer() {
  return {
    title: "Hello world! I'm in the Redux store!",
  }
}

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
)
