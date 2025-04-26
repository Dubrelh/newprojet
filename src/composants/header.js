import tof from "./medias/tof.jpg";
import moncv from "./medias/moncv.pdf";
import "../fontawesome/css/all.min.css";


export default function HEADER(){
    return(
        <div class="header" id="acceuil">
        <div class="entete">
            <div class="present">
              <p>Salut , je suis </p>
              <p>FOTSO KEMENI HENRY DUBREL</p>
              <p> Etudiant en genie logiciel </p>
              <div class="liens">
                <a href={moncv} download> <i class="fas fa-download"></i> mon cv </a>
                <a href="#propos"> A propos de moi </a>
              </div>
            </div>
            <div class="img">
              <img src={tof} alt="not found" />
            </div>
        </div>
        </div>
     )
}