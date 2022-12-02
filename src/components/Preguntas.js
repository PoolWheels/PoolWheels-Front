import "../styles/faq.scss";
import { useAuth } from "../contexts/Auth";
import React, { useEffect } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  OutlinedInput,
  InputLabel,
} from "@mui/material";

export default function Preguntas() {
  const auth = useAuth();
  const [post, setPost] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState({
    text: "",
    type: "",
  });

  useEffect(() => {
    getComments();
  }, [post]);

  async function getComments() {
    try {
      var response = await fetch("http://localhost:8080/api/v1/comment", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + auth.token,
        },
      });
      var data = await response.json();
      setComments(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function postComments() {
    try {
      var response = await fetch("http://localhost:8080/api/v1/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer " + auth.token,
        },
        body: JSON.stringify({
          user: "0001",
          creationDate: new Date().toJSON(),
          modificationDate: "",
          description: newComment.text,
          type: newComment.type,
        }),
      });
      setPost((prev) => !prev);
    } catch (e) {
      console.log(e.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewComment((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComments();
  }

  const mappedComments = comments.map((comment) => {
    return (
      <div key={comment.id} className="comment">
        <h2>"{comment.description}"</h2>
        <p>{comment.creationDate}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Comentarios</h1>
      <hr />
      <div className="comments--container">{mappedComments}</div>
      <h1>Envía un comentario</h1>
      <hr />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <TextField
            id="comment"
            name="text"
            label="Comentario"
            multiline
            rows={4}
            cols={80}
            value={newComment.text}
            variant="filled"
            onChange={handleChange}
          />
          <br />
          <br />
          <InputLabel id="select-label">Selecciona un tipo</InputLabel>
          <Select
            labelId="select-label"
            label="Selecciona un tipo"
            id="select"
            value={newComment.type}
            onChange={handleChange}
            name="type"
          >
            <MenuItem value="SUGGESTION">Sugerencia</MenuItem>
            <MenuItem value="COMPLAINT">Queja</MenuItem>
          </Select>
          <br />
          <br />
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
