import Input from "./Input";

export default Formulario;

function Formulario(){
    return(
        <form className="login-form" action="">
            <h2>Login</h2>
            <Input/>
            <Input/>
            <button type="submit">Login</button>
        </form>
    );
}