import imgUser from './assets/user.png';
import Card from './Card';
import CardClientes from './CardClientes';

const PanelClientes = () => {

    return (
        <section className="panel-control">
            <aside className="panel-control-aside">
                <div>
                    <img src={imgUser} alt="Logo" />
                </div>
                <nav>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </nav>
            </aside>
            <div className="panel-cliente-contenido">
                <h2>Listado Clientes</h2>
            <CardClientes></CardClientes>
            <CardClientes></CardClientes>
            <CardClientes></CardClientes>
            <CardClientes></CardClientes>
            <CardClientes></CardClientes>
            <CardClientes></CardClientes>
                
            </div>
        </section>
    )
}

export default PanelClientes;