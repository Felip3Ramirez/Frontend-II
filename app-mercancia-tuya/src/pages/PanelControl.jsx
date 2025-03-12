
import Card from '../components/Card';
import MenuLateral from '../components/MenuLateral';
import { envios } from '../services/dataBase';

const PanelControl = () => {

    return (
        <section className="panel-control">
            <MenuLateral></MenuLateral>
            <div className="panel-control-contenido">
                {
                    envios.map((envio)=>{
                        return <Card info={envio}></Card>
                    })
                }
            </div>
        </section>
    )
}

export default PanelControl;