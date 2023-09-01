
/*   

connect react to node

 "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy" :"http://localhost:5000/"
}
*/





import { useState } from "react"
import './App.css';
import axios from 'axios';
function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  /*
    function getdatafromnode() {
      axios.get('/players')
        .then((res) => {
          console.log(res)
          console.log(res.data)  // print only data 
        })
        .catch((err) => {
          console.log(err)
        })
    }
    */


  function login(event) {
    event.preventDefault()
    var user = {
      username: username,
      password: password
    }
    // console.log(user)

    axios.post('/login', user)
      .then(res => { alert(res.data) })
      .catch(err => { console.log(err) })
  }


  return (
    <div className="App">
      <h1> Connecting app to node  </h1>

      <b>
          username : javascript  ***
          password : react
      </b>

      {/*
      <button onClick={getdatafromnode}>
        Get data from Backend
      </button>

       */}

      <form action="">

        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br></br>
        <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br></br>
        <button onClick={login}>LOGIN</button>

      </form>

    </div>
  );
}

export default App;
