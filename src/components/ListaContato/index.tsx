import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

type Props = Contato

const ListaContato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Contatos>
      <ul>
        <li>{nome}</li>
        <li>{telefone}</li>
        <li>{email}</li>
      </ul>
      <S.Controle>
        {estaEditando ? (
          <>
            <S.Cancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.Cancelar>
            <S.Salvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.Salvar>
          </>
        ) : (
          <>
            <S.Deletar onClick={() => dispatch(remover(id))}>Deletar</S.Deletar>
            <S.Editar onClick={() => setEstaEditando(true)}>Editar</S.Editar>
          </>
        )}
      </S.Controle>
    </S.Contatos>
  )
}
export default ListaContato
