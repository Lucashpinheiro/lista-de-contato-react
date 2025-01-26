import { useSelector } from 'react-redux'
import ListaContato from '../../components/ListaContato'
import { Container, Titulo } from './styles'
import { RootReducer } from '../../store'
import Formulario from '../../components/Formulario'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <Titulo>Agenda de contatos</Titulo>
      <Formulario />
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <ListaContato
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default ListaDeContatos
