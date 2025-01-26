import { FormEvent, useState } from 'react'
import { Form, Salvar } from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    const contatoParaAdicionar = new Contato(nome, telefone, email, 6)
    dispatch(cadastrar(contatoParaAdicionar))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <Form onSubmit={cadastrarContato}>
      <input
        required
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Nome"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <input
        required
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
        placeholder="Telefone"
      />
      <Salvar typeof="onSubmit">Adicionar</Salvar>
    </Form>
  )
}

export default Formulario
