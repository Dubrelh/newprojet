
import tofs from "./medias/tofs.PNG"

export default function REALISATIONS(){
    return(
        <div class="real" id="real">
           <div class="spani">
              <div class="span"></div>
           </div>
           <h1> Mes realisations </h1>
           <div class="reel">
           <img src={tofs} alt="not found" />
            <div>
            <p>Mon portfolio</p>
            <p> Language utilisé : <i class="fab fa-react"></i> REACT JS </p>
            </div>
           </div>
        </div>
    )
}