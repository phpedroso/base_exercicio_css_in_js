import { FormEvent, useState } from 'react'

import { EstiloBTN, EstiloCampo, EstiloForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <EstiloForm onSubmit={aoEnviarForm}>
      <EstiloCampo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <EstiloBTN type="submit">Pesquisar</EstiloBTN>
    </EstiloForm>
  )
}
export default FormVagas
