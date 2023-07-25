import styled from 'styled-components'
import { corPrimaria } from '../../styles'

export const EstiloFormHero = styled.form`
& {
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}
&:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${corPrimaria};
  content: '';
  opacity: 0.7;
}
@media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
`
export const HeroTitle = styled.h2`
font-family: Gloock, serif;
font-size: 48px;
margin-left: 8px;
margin-right: 8px;

@media (max-width: 768px) {
  font-size: 28px;
`

export const EstiloCampo = styled.input`
  padding: 0 16px;
  outline-color: ${corPrimaria};
`

export const EstiloDivHero = styled.div`
  position: relative;
  color: #eee;
`
