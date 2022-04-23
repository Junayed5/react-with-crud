import React, { useEffect, useState } from 'react';

const Read = () => {
    const [members,setMember] = useState([]);
    useEffect( () => {
        fetch('http://localhost:4000/create')
        .then(res => res.json())
        .then(data => setMember(data))
    },[]);

    const handleUserDelete = id => {
        const url = `http://localhost:4000/create/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const remaining = members.filter(member => member._id !== id);
            setMember(remaining);
        })
    }
    return (
        <div>
            <h2>Family member:{members.length}</h2>
            {
                members.map(member => <div key={member._id}>
                    <h1>{member.name}<button onClick={() => handleUserDelete(member._id)}>X</button> </h1>
                    <p>{member.email}</p>
                </div>)
            }
        </div>
    );
};

export default Read;