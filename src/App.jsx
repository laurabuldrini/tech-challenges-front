import './App.css';
import React, { useState, useEffect } from 'react'; // Importa o hook { useState } e { useEffect } que permite adicionar estado a componentes da funçao 
import credentials from './credentials.json'; // Importa o arquivo com as credenciais estabelecidas



function Login () {

  //useState evita um infinite loop - update o input quando ele muda
  const [username, setUsername] = useState(""); //aceita um default value e retorna um array de 2 valores, o username digitado e uma funçao
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // useEffect verifica as credenciais e ve se elas match com a do arquivo credentials.json
  useEffect(() => {
   console.log(credentials); 
  }, []); // [] está vazio para afzer com que useEffect seja executado uma vez

  function handleSubmit(event) { // handleSubmit - funçao de java chamada quando um formulário é enviado (handleClick é usada para definir uma função que é chamada quando um elemento for clicado)
    event.preventDefault();

    // verifica se o usuario e a senha correspondem ás credenciais do arquivo credentials.json
    const credencialValida = credentials.some(credencial => {
      return credencial.username === username && credencial.password === password; // && - indicates that both conditions needs to be satisfied
    });

    if (username === "" || password === "") {
      setMessage('Please, fill out all fields!');
    } else if (credencialValida ){
      setMessage('Information Authenticated');
    } else {
      setMessage('Incorrect Username or Password');
    }
  }



  return (
    <>
    <div className="loginForm">
      <header className="header"/>
        <img src="https://invision-bucket.s3.us-east-1.amazonaws.com/monthly_2023_06/BRASA_Logo_horizontalPRETAPNG.png.21df0f6d75a657d0effa06046c9d542d.png.966f798a5ce47f6e14ac58356cbdc783.png" alt="Logo"/>
      <h2>Login Information:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "username"> Enter Username: </label>
        <input type="text" id="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input> {/* onChange - acionado toda vez que o valor do formulario é alterado pelo usuário */}
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input> {/* e - parâmetro que representa o evento de mudança */}
        <div className="message"><h4>{message}</h4></div>
        <button className="btn" >Login</button> 
      </form>

    </div>




    </>
  );
}

export default Login;
