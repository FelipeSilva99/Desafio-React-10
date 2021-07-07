import styled from 'styled-components'
import Malekith from '../Img/Malekith.jpg'
import Whiplash from '../Img/Whiplash.jpg'
import Laufey from '../Img/Laufey.jpg'
import Aldrich from '../Img/Aldrich_Killian.jpg'
import Ronan from '../Img/Ronan, O Acusador.jpg'
import Kaecilius from '../Img/Kaecilius.png'
import Hela from '../Img/Hela.jpg'
import Ultron from '../Img/Ultron.jpeg'
import Zemo from '../Img/Helmut Zemo.jpg'
import Caveira from '../Img/Caveira Vermelha.jpg'
import Loki from '../Img/Loki.jpg'
import Killmonger from '../Img/Erik Killmonger.jpg'
import Thanos from '../Img/Thanos.jpg'

const Viloes = styled.img`
    width: 10rem;
`



export default function Main() {
  return(
    <div>
      <h1>Viloes</h1>
      <div>
        <h2>Malekith</h2>
        <Viloes src={Malekith} alt='Malekith'/>
        <p>Visto em Thor: O Mundo Sombrio.</p>
      </div>
      <div>
        <h2>Whiplash</h2>
        <Viloes src={Whiplash} alt='Whiplash'/>
        <p>Visto em Homem de Ferro 2.</p>
      </div>
      <div>
        <h2>Laufey</h2>
        <Viloes src={Laufey} alt='Laufey'/>
        <p>Visto em Thor.</p>
      </div>
      <div>
        <h2>Aldrich Killian</h2>
        <Viloes src={Aldrich} alt='Aldrich'/>
        <p>Visto em Homem de Ferro 3.</p>
      </div>
      <div>
        <h2>Ronan, O Acusador</h2>
        <Viloes src={Ronan} alt='Ronan'/>
        <p>Visto em Guardiões da Galáxia.</p>
      </div>
      <div>
        <h2>Kaecilius</h2>
        <Viloes src={Kaecilius} alt='Kaecilius'/>
        <p>Visto em Doutor Estranho.</p>
      </div>
      <div>
        <h2>Hela</h2>
        <Viloes src={Hela} alt='Hela'/>
        <p>Visto em Thor: Ragnarok.</p>
      </div>
      <div>
        <h2>Ultron</h2>
        <Viloes src={Ultron} alt='Ultron'/>
        <p>Visto em Vingadores: Era de Ultron.</p>
      </div>
      <div>
        <h2>Helmut Zemo</h2>
        <Viloes src={Zemo} alt='Zemo'/>
        <p>Visto em Capitão América: Guerra Civil.</p>
      </div>
      <div>
        <h2>Caveira Vermelha</h2>
        <Viloes src={Caveira} alt='Caveira'/>
        <p>Visto em Capitão América: O Primeiro Vingador.</p>
      </div>
      <div>
        <h2>Loki</h2>
        <Viloes src={Loki} alt='Loki'/>
        <p>Visto em Thor e Os Vingadores.</p>
      </div>
      <div>
        <h2>Erik Killmonger</h2>
        <Viloes src={Killmonger} alt='Killmonger'/>
        <p>Visto em Pantera Negra.</p>
      </div>
      <div>
        <h2>Thanos</h2>
        <Viloes src={Thanos} alt='Thanos'/>
        <p>Visto em Vingadores: Guerra Infinita.</p>
      </div>
    </div>
  )
}