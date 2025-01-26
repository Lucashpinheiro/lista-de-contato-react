import { Provider } from 'react-redux'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
