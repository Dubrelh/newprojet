import "./App.css";
import HEADER from "./composants/header";
import NAVBAR from "./composants/navbar";
import APPROPOS from "./composants/a_propo";
import COPETENCES from "./composants/competences";
import REALISATIONS from "./composants/realisation";
import TOPBAR from "./composants/topbar";
import CONTACT from "./composants/contact";

export default function App() {
  return(
    <div class="all">
      <div class="body">
       <TOPBAR />
       <HEADER />
       <NAVBAR />
       <APPROPOS />
       <COPETENCES />
       <REALISATIONS />
       <CONTACT />
       <div class="end">
           <p>&copy; Henry kemeni.Tout drois reservé.</p>
       </div>
      </div>
    </div>
  );
}