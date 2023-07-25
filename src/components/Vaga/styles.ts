import styled from 'styled-components'
import { corPrimaria, corSecundaria } from '../../styles'

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLI = styled.li`
  & {
    border: 1px solid ${corPrimaria};
    background-color: ${corSecundaria};
    color: ${corPrimaria};
    padding: 16px;
    transition: all ease 0.3s;
    border-radius: 8px;
  }

  &:hover {
    background-color: ${corPrimaria};
    color: ${corSecundaria};
  }
  &:hover a {
    border-color: ${corPrimaria};
    background-color: ${corSecundaria};
    color: ${corPrimaria};
  }
`
