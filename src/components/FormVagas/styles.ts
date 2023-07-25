import styled from 'styled-components'
import { corPrimaria, corSecundaria } from '../../styles'

export const EstiloForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const EstiloBTN = styled.button`
  background-color: ${corPrimaria};
  border: 1px solid ${corPrimaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const EstiloCampo = styled.input`
  padding: 0 16px;
  outline-color: ${corPrimaria};
`
