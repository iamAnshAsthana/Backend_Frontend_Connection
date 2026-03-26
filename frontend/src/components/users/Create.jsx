import React, { useState } from 'react';

function Create(props) {
    const [data, setData] = useState({
        name:"",
        description: "",
        status: "Published",
        price:0
    });
    const formstate = (e) => {
        let [name, value] = [e.target.name, e.target.value];
        setData({...data, [name]:value})
    }
    const saveData = (e) => {
        e.preventDefault();
        console.log(data);
        fetch("http://127.0.0.1:5002/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(jr => jr.json()).then(r => {
            console.log(r);
        });
    }
    return (
      <div>
        <form onSubmit={saveData}>
          Name: <input type="text" onChange={formstate} name="name" />
          Description: <input type="text" onChange={formstate} name="description" />
          Price: <input type="number" onChange={formstate} name="price" />
          <button>Save</button>
        </form>
      </div>
    );
}

export default Create;