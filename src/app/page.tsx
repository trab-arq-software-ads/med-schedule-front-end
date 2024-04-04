import Image from "next/image";
import ListDoctors from "./doctor/list"


export default function Home() {
  return (
    <main>
      <div className="topBar">
        <span className="nameLogo">onCLÍNICA</span>
        <div className="topBarButtons">
          <a href="" className="buttonBar">Médicos</a>
          <a href="" className="buttonBar">Consultas</a>
          <a href="" className="buttonBar">Pacientes</a>
        </div>
      </div>

      <img id="imgMain" src="./medico.jpg"></img>
    
      <div className="content">
        <ListDoctors/>
      </div>
    
    </main>
  );
}
