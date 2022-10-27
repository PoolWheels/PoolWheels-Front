import '../styles/faq.scss'
import { useAuth } from '../contexts/Auth';
import React, { useEffect } from 'react'
import testComments from './testComments';
import Button from '@mui/material/Button';

export default function Preguntas(){

    const auth = useAuth();
    const [comments, setComments] = React.useState([]);
    const [newComment, setNewComment] = React.useState({
        text: "",
        type: ""
    });

    useEffect(()=>{
        getComments();
    }, []);

    async function getComments(){
        try{
            var response = await fetch('http://localhost:8080/api/v1/comment', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : 'Bearer ' + auth.token
                }});
            var data = await response.json();
            setComments(data);
        }catch(e){
            console.log(e.message);
        }
    }

    async function postComments(){
        try{
            var response = await fetch('http://localhost:8080/api/v1/comment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : 'Bearer ' + auth.token
                },
                body: JSON.stringify(
                    {
                       user: "0001",
                       creationDate: "",
                       modificationDate: "",
                       description: newComment.text,
                       type: newComment.type
                    }
                )});
            var data = await response.json();
        }catch(e){
            console.log(e.message);
        }
    }

    function handleChange(event){
        const {name, value } = event.target;
        setNewComment(prevFormData => ({
            ...prevFormData,
            [name] : value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        postComments();
    }

    const mappedComments = comments.map( comment => {
        return (
            <div key={comment.id} className='comment'>
                <h2>"{comment.description}"</h2>
                <p>{comment.creationDate}</p>
            </div>  
        )
    });

    return(
        <div>
            <h1>Comentarios</h1>
            <hr />
            <div className='comments--container'>    
                {mappedComments}    
            </div>
            <h1>Envia un comentario</h1>
            <hr />
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        value={newComment.text}
                        placeholder="Comments"
                        name="text"
                        id="comment"
                        rows="4" 
                        cols="80"
                        onChange={handleChange}
                    />
                    <br/>
                    <select 
                        id="type"
                        value={newComment.type}
                        onChange={handleChange}
                        name="type"
                    >
                        <option value="">-- Choose --</option>
                        <option value="SUGGESTION">Suggestion</option>
                        <option value="COMPLAINT">Complaint</option>
                    </select>
                    <br/>
                    <br/>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}