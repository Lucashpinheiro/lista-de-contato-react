import { useSelector } from 'react-redux'

import ListaContato from '../../components/ListaContato'
import * as S from './styles'
import { RootReducer } from '../../store'
import Formulario from '../../components/Formulario'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Container>
      <S.Titulo>Agenda de contatos</S.Titulo>
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
    </S.Container>
  )
}
export default ListaDeContatos
