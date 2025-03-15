import CardAmarilla from "./CardAmarilla";
import CardRosa from "./CardRosa";

function TarjetaContenedoraDerecha (){
    return(
        <div className="tarjetaContenedoraDerecha">
            <CardAmarilla></CardAmarilla>
            <CardRosa></CardRosa>
            <CardRosa></CardRosa>
            <CardAmarilla></CardAmarilla>
            <CardAmarilla></CardAmarilla>
            <CardRosa></CardRosa>
        </div>
    )
}
export default TarjetaContenedoraDerecha;