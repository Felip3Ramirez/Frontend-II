import'./PanelMaquetacion.css'
import TarjetaContenedora from "../components/TarjetaContenedoraDerecha";
import TarjetaContenedoraIzquierda from '../components/TarjetaContenedoraIzquierda';
import TarjetaContenedoraDerecha from '../components/TarjetaContenedoraDerecha';


function PanelMaquetacion(){
    return(
        <div className="contenedorPrincipal">  
            <TarjetaContenedoraIzquierda></TarjetaContenedoraIzquierda>
            <TarjetaContenedoraDerecha></TarjetaContenedoraDerecha>
        </div>
    )
}
export default PanelMaquetacion;