import { useState } from "react";
export default 


function TodoApp() {
    const [title, setTitle] = useState("Hola");
function handleClick(e){
    e.preventDefault();
    setTitle("Yere");
}
function handleChange (e){
    const value = e.target.value;
    setTitle(value);
}
    return (
        <div className="todoContainer">
            <form className="todoCreateForm" >
                <input onChange={handleChange} type="text" className="todoInput" value={title} />
                <input
                    onClick={handleClick}
                    type="submit"
                    value="Create Todo"
                    className="buttonCreate"
                />
                {title}
            </form>
        </div>
    );
}
