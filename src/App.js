import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VidaUniversitaria from "./pages/VidaUniversitaria";
import BecasyBeneficios from "./pages/BecasyBeneficios";
import Carreras from "./pages/Carreras";
import ComunidadUSM from "./pages/ComunidadUSM";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Arquitectura from "./pages/Carrera_especifica/Arquitectura";
import Construccion_Civil from  "./pages/Carrera_especifica/Construccion_Civil";
import Ingenieria_Civil from "./pages/Carrera_especifica/Ingenieria_Civil";
import Ingenieria_Civil_Ambiental from "./pages/Carrera_especifica/Ingenieria_Civil_Ambiental";
import Ingenieria_Civil_Minas from "./pages/Carrera_especifica/Ingenieria_Civil_Minas"; 
import Ingenieria_Civil_Electrica from "./pages/Carrera_especifica/Ingenieria_Civil_Electrica"; 
import Ingenieria_Civil_Electronica from "./pages/Carrera_especifica/Ingenieria_Civil_Electronica";
import Ingenieria_Civil_Industrial from "./pages/Carrera_especifica/Ingenieria_Civil_Industrial";
import Ingenieria_Civil_Informatica from "./pages/Carrera_especifica/Ingenieria_Civil_Informatica";
import Ingenieria_Civil_Matematica from "./pages/Carrera_especifica/Ingenieria_Civil_Matematica";
import Ingenieria_Civil_Mecanica from "./pages/Carrera_especifica/Ingenieria_Civil_Mecanica";
import Ingenieria_Civil_Metalurgica from "./pages/Carrera_especifica/Ingenieria_Civil_Metalurgica";
import Ingenieria_Civil_Plan_Comun from "./pages/Carrera_especifica/Ingenieria_Civil_Plan_Comun";
import Ingenieria_Civil_Quimica from "./pages/Carrera_especifica/Ingenieria_Civil_Quimica";
import Ingenieria_Civil_Telematica from "./pages/Carrera_especifica/Ingenieria_Civil_Telematica";
import Ingenieria_Comercial from "./pages/Carrera_especifica/Ingenieria_Comercial";
import Ingenieria_Aviacion_Comercial from "./pages/Carrera_especifica/Ingenieria_Aviacion_Comercial";
import Ingenieria_Diseno_Productos from "./pages/Carrera_especifica/Ingenieria_Diseno_Productos";
import Ingenieria_Fabricacion_y_Diseno_Industrial from "./pages/Carrera_especifica/Ingenieria_Fabricacion_y_Diseno_Industrial";
import Ingenieria_Mantenimiento_Industrial from "./pages/Carrera_especifica/Ingenieria_Mantenimiento_Industrial";
import Ingenieria_Prevencion_Riesgos_Laborales_Ambientales from "./pages/Carrera_especifica/Ingenieria_Prevencion_Riesgos_Laborales_Ambientales";
import Ingenieria_Informatica from "./pages/Carrera_especifica/Ingenieria_Informatica";
import Licenciatura_Astrofisica from "./pages/Carrera_especifica/Licenciatura_Astrofisica";


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vidauniversitaria" exact component={VidaUniversitaria} />
            <Route path="/becasybeneficios" exact component={BecasyBeneficios} />
            <Route path="/carreras" exact component={Carreras} />
            <Route path="/comunidadusm" exact component={ComunidadUSM} />
            <Route path="/contacto" exact component={Contacto} />
            {/*##### Carrerras #####*/}
            <Route path="/carreras/arquitectura" exact component={Arquitectura} />
            <Route path="/carreras/construccion-civil" exact component={Construccion_Civil} />
            <Route path="/carreras/ingenieria-civil" exact component={Ingenieria_Civil} />
            <Route path="/carreras/ingenieria-civil-ambiental" exact component={Ingenieria_Civil_Ambiental} />
            <Route path="/carreras/ingenieria-civil-de-minas" exact component={Ingenieria_Civil_Minas} />
            <Route path="/carreras/ingenieria-civil-electrica" exact component={Ingenieria_Civil_Electrica} />
            <Route path="/carreras/ingenieria-civil-electronica" exact component={Ingenieria_Civil_Electronica} />
            <Route path="/carreras/ingenieria-civil-industrial" exact component={Ingenieria_Civil_Industrial} />
            <Route path="/carreras/ingenieria-civil-informatica" exact component={Ingenieria_Civil_Informatica} />
            <Route path="/carreras/ingenieria-civil-matematica" exact component={Ingenieria_Civil_Matematica} />
            <Route path="/carreras/ingenieria-civil-mecanica" exact component={Ingenieria_Civil_Mecanica} />
            <Route path="/carreras/ingenieria-civil-metalurgica" exact component={Ingenieria_Civil_Metalurgica} />
            <Route path="/carreras/ingenieria-civil-plan-comun" exact component={Ingenieria_Civil_Plan_Comun} />
            <Route path="/carreras/ingenieria-civil-quimica" exact component={Ingenieria_Civil_Quimica} />
            <Route path="/carreras/ingenieria-civil-telematica" exact component={Ingenieria_Civil_Telematica} />
            <Route path="/carreras/ingenieria-comercial" exact component={Ingenieria_Comercial} />
            <Route path="/carreras/ingenieria-en-aviacion-comercial" exact component={Ingenieria_Aviacion_Comercial} />
            <Route path="/carreras/ingenieria-en-diseno-de-productos" exact component={Ingenieria_Diseno_Productos} />
            <Route path="/carreras/ingenieria-en-fabricacion-y-diseno-industrial" exact component={Ingenieria_Fabricacion_y_Diseno_Industrial} />
            <Route path="/carreras/ingenieria-en-mantenimiento-industrial" exact component={Ingenieria_Mantenimiento_Industrial} />
            <Route path="/carreras/ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales" exact component={Ingenieria_Prevencion_Riesgos_Laborales_Ambientales} />
            <Route path="/carreras/ingenieria-informatica" exact component={Ingenieria_Informatica} />
            <Route path="/carreras/licenciatura-en-astrofisica" exact component={Licenciatura_Astrofisica} />
            {/*#####################*/}
          {/*        
            <Route path="/carreras/licenciatura-en-ciencias-mencion-quimica" exact component={} />
            <Route path="/carreras/licenciatura-en-fisica" exact component={} />
            <Route path="/carreras/quimico" exact component={} />
            <Route path="/carreras/tecnico-universitario-dibujante-proyectista" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-administracion-de-empresas" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-automatizacion-y-control" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-construccion" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-control-del-medio-ambiente" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-diseno-y-produccion-industrial-en-moldes-y-matrices" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-electricidad" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-electronica" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-energias-renovables" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-gestion-de-calidad-en-alimentos" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-informatica" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-mantenimiento-aeronautico" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-mantenimiento-industrial" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-mecanica-automotriz" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-mecanica-industrial" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-mineria-y-metalurgia" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-prevencion-de-riesgos" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-proyecto-y-diseno-mecanico" exact component={} />         
            <Route path="/carreras/tecnico-universitario-en-proyectos-de-ingenieria" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-quimica-mencion-quimica-analitica" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-quimica-mencion-quimica-industrial" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-robotica-y-mecatronica" exact component={} />
            <Route path="/carreras/tecnico-universitario-en-telecomunicaciones-y-redes" exact component={} />
          */}
          
        </Switch>
      </Router>
      </div>
  );
}

export default App;
