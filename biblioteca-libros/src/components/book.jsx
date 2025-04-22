import { Link } from "react-router-dom"

export default function Book ({item}){
    return(
        <div>
            <Link to={`view/${item.id}`}>
            <img src={item.cover} width="200" alt={item.titulo} />
            <div>{item.titulo}</div>
            </Link>
        </div>
    )
}