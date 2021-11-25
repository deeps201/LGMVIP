import  React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [click, changeinclick ] = useState(false);

  useEffect(() =>
  {
     getdata();   
  } ,[]);

  const clickevent = () =>
  {
    changeinclick(!click);
  }

  const getdata = async () =>
  {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const content = await response.json();
      setUsers(content.data);
  }
  return (
    <div className="App">
      <button className="button" onClick={clickevent}>Get Data </button>
      {click && (
        <div className="box">
          <h2>USER DETAILS</h2>
            {users.map((users) => (
             <div className="data" key={users.id}>
                <img src={users.avatar} alt=""></img>
                <h4 className="name">Name : {users.first_name}{users.last_name}</h4>
                
                
              </div>
            ))}
        </div>
      )}    
    </div>
  );
}

export default App;