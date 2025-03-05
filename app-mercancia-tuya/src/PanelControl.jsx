
import Card from './Card';
import MenuLateral from './MenuLateral';

const PanelControl = () => {
    let envios = [
        {
            origen:"Medellin",
            destino:"Bogota",
            id:"PEDIDO2390"
        },
        {
            origen:"Medellin",
            destino:"Cali",
            id:"PEDIDO908"
        },
        {
            origen:"Medellin",
            destino:"Nekocli",
            id:"PEDIDO4564"
        },
        {
            origen:"Medellin",
            destino:"Nekocli",
            id:"PEDIDO4564"
        }

    ]

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