import { useState } from 'react'
import { useAppContext } from '../store/store';
import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [cover, setCover] = useState("");
    const [intro, setIntro] = useState("");
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState("");

    const store = useAppContext();
    const navigate = useNavigate();

    function handleChange (e){
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case 'titulo':
                setTitulo(value);
                break;
            case 'autor':
                setAutor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;
            
                default:
        }
    }
    function handleOnChangeFile(e){
        const elemento = e.target;
        const file = elemento.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file)

        reader.onloadend = function(){
            setCover(reader.result.toString());
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        const newBook= {
            id:crypto.randomUUID(),
            titulo,
            autor,
            cover,
            intro,
            completed,
            review,
        };

        store.createItem(newBook);
        navigate("/");
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} >
                <div>
                    <div>Titulo</div>
                    <input type="text" name='titulo' onChange={handleChange} value={titulo} />
                    {titulo}
                </div>
                <div>
                    <div>Autor</div>
                    <input type="text" name='autor' onChange={handleChange} value={autor} />
                    {autor}
                </div>
                <div>
                    <div>Cover</div>
                    <input type="file" name='cover' onChange={handleOnChangeFile}  />
                    <div>{!!cover?<img src={cover} width="200px" alt='preview' />:''}</div>
                </div>
                <div>
                    <div>Intro</div>
                    <input type="text" name='intro' onChange={handleChange} value={intro} />
                    {intro}
                </div>
                <div>
                    <div>Completed</div>
                    <input type="checkbox" name='completed' onChange={handleChange} value={completed} />
                    {completed}
                </div>
                <div>
                    <div>Review</div>
                    <input type="text" name='review' onChange={handleChange} value={review} />
                    {review}
                </div>
                <input type="submit" value="Registrar Libro" />
            </form>
        </Layout>
    )
}