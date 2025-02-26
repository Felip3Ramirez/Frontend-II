import imgUser from './assets/user.png';

const PanelControl = () => {
    
 return(
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
        <div className="panel-control-contenido">
            <section className="panel-control-card">
                <div></div>
                <div>Ver</div>
            </section>
            <section className="panel-control-card">
                <div></div>
                <div>Ver</div>
            </section>
            <section className="panel-control-card">
                <div></div>
                <div>Ver</div>
            </section>
        </div>
    </section>
 )   
}

export default PanelControl;