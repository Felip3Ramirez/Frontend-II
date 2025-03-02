import imgUser from './assets/user.png';

import CardClientes from './CardClientes';

const PanelEnvios = () => {

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
                <h2>Listado Envios</h2>
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

export default PanelEnvios;