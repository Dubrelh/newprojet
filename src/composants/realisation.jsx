
import tofs from "./medias/tofs.PNG"
import vanousprod from "./medias/vanousprod.PNG"


export default function REALISATIONS(){
    return(
        <div class="real" id="real">
           <div class="spani">
              <div class="span"></div>
           </div>
           <h1> Mes realisations </h1>
           {/* <div class="reel">
           <img src={tofs} alt="not found" />
            <div>
            <p>Mon portfolio</p>
            <p> Language utilisé : <i class="fab fa-react"></i> REACT JS </p>
            </div>
           </div> */}
           <Realistion img={tofs} title= "Mon portfolio" technos= "React js" lien="https://portfolio-henry-five.vercel.app/" />
           <Realistion img={vanousprod} title= "Vanou's cake" technos= "html, css, javascript" lien="https://vanouscakes.vercel.app/" />
        </div>
    )
}

function Realistion (props){
  return(
    <div className='realisation'>
      <div className='imag'>
        <img className='img' src={props.img} alt="not found" />
      </div>
      <div className='title'>
        <h2>{props.title}</h2>
        <div>
            <h3> Technologies utilisés: {props.technos}</h3>
            <a href={props.lien}>En savoir plus...</a>
        </div>
      </div>
    </div>
  )
}
