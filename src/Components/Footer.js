import styled from 'styled-components'
import LOGO2 from '../Img/LOGO2.jpg'


const Fechamento = styled.img`
    width: 7rem;
`


export default function Footer() {
  return (
    <div>
      <h2></h2>
        <Fechamento src={LOGO2} alt='Logo'/>
    </div>
  )
}