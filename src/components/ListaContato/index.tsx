import { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import Contato from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

type Props = Contato

const ListaContato = ({ nome: nomeOriginal, email: emailOriginal, telefone: telefoneOriginal, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  useEffect(()=>{
    setNome(nomeOriginal), setEmail(emailOriginal), setTelefone(telefoneOriginal)
  },[nomeOriginal, emailOriginal, telefoneOriginal])

  const editarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaEditar = new Contato(nome, telefone, email, 6)
    dispatch(editar(contatoParaEditar))
  }

  return (
    <>
      <form></form>
      <S.Contatos>
        <ul>
          <li>{nome}</li>
          <li>{telefone}</li>
          <li>{email}</li>
        </ul>
        <S.Controle>
          {estaEditando ? (
            <>
              <S.Cancelar onClick={() => {
                setEstaEditando(false)
                setNome(nomeOriginal)
                setEmail(emailOriginal)
                setTelefone(telefoneOriginal)
              }}>
                Cancelar
              </S.Cancelar>
              <S.Salvar onSubmit={editarContato}
                onClick={() => {
                  setEstaEditando(false)
                }}
              >
                Salvar
              </S.Salvar>
              <form>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </form>
            </>
          ) : (
            <>
              <S.Deletar onClick={() => dispatch(remover(id))}>
                Deletar
              </S.Deletar>
              <S.Editar onClick={() => setEstaEditando(true)}>Editar</S.Editar>
            </>
          )}
        </S.Controle>
      </S.Contatos>
    </>
  )
}
export default ListaContato
