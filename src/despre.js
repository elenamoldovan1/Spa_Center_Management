import "./despre.css";
import Type1 from "./images/cumiere.jpg";
import Type2 from "./images/pietre.jpg";
import Type3 from "./images/terapeutic.jpg";
import Type4 from "./images/relaxare.jpg";
import Type5 from "./images/ventuze.jpg";
import Type6 from "./images/presodrenaj.jpg";
import Type7 from "./images/reflexoterapie.jpg";

export default function Tip1() {
  return (
    <div id="tip1">
      <h1 className="model-title">Despre masaje</h1>
      <div className="divider"></div>
      <div className="members">
        <div className="member">
          <img width={400} height={400} src={Type1} alt="" />
          <div className="description">
            <h1>Masaj cu miere de albine</h1>
            <p>
              Masajul anticelulitic cu miere te ajuta sa slăbești sănătos, pe
              nesimțite, fără efort și este un ajutor de nadejde în lupta cu
              kilogramele.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type2} alt="" />
          <div className="description">
            <h1>Masaj cu pietre vulcanice</h1>
            <p>
              Masajul cu pietre vulcanice, denumit si terapie geotermala, este o
              binecuvantare pentru trup si suflet. Tehnicile sunt simple si
              produc un efect intens de relaxare.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type3} alt="" />
          <div className="description">
            <h1>Masaj terapeutic</h1>
            <p>
              Masajul terapeutic consta in prelucrarea manuala a tesuturilor moi
              cu scopul de a stimula circulatia sangelui, a limfei si de a
              decontractura musculatura.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type4} alt="" />
          <div className="description">
            <h1>Masaj de relaxare</h1>
            <p>
              Masajul de relaxare este cea mai bună experiență de răsfăț. Veți
              fi transportat într-un loc calmant și liniștitor prin utilizarea
              uleiurilor esențiale și a muzicii. Terapeutul nostru va folosi
              tehnici tradiționale de masaj suedez, precum și tehnici de
              întindere, presiune și căldură pentru o relaxare maximă.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type5} alt="" />
          <div className="description">
            <h1>Tratament cu ventuze</h1>
            <p>
              Terapia cu ventuze este una dintre cele mai vechi și eficiente
              metode de a elimina toxinele din țesuturi și organe. Modul de
              practicare a acestei terapii este de a pune niște cupe speciale pe
              zonele tratate, pentru a crea un vid, astfel facilitând eliminarea
              de impurități și toxine prin intermediul țesuturilor.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type6} alt="" />
          <div className="description">
            <h1>Preso drenaj</h1>
            <p>
              Presoterapia este un ansamblu de tehnici prin care drenajul
              limfatic devine mult mai eficient. Toxinele sunt eliminate din
              corp in timpul sedintelor de presoterapie, finalizand cu succes
              procesul de detoxifiere.
            </p>
          </div>
        </div>
        <div className="member">
          <img width={400} src={Type7} alt="" />
          <div className="description">
            <h1>Reflexoterapie</h1>
            <p>
              Reflexoterapia este o foarte buna metoda de prevenire si tratare a
              unor tulburari sau afectiuni. Tehnicile de reflexoterapie au la
              baza principii asemanatoare cu acupunctura si presopunctura -
              stimularea unor puncte reflexogene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
