import styled from 'styled-components'
import LogoMarvel from '../Img/Marvel_Logo.svg.png'

const Logo = styled.img`
  width: 20%;
  height: 3rem;
  background-color: rgb(237,29,36);
  background-color: rgb(221,221,221);
`

export default function Header() {
  return (
    <div>
      <Logo src={LogoMarvel} alt='Logo' />
    </div>
  )
}