import CardAmarilla from "./CardAmarilla";
import CardRosa from "./CardRosa";

function TarjetaContenedoraIzquierda (){
    return(
        <div className="tarjetaContenedoraIzquierda">
            <CardRosa></CardRosa>
            <CardAmarilla></CardAmarilla>
            <CardAmarilla></CardAmarilla>
            <CardRosa></CardRosa>
            <CardRosa></CardRosa>
            <CardAmarilla></CardAmarilla>
        </div>
    )
}
export default TarjetaContenedoraIzquierda;