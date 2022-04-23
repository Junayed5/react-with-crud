import React from 'react';

const Update = () => {
    const updateMember = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value;
        const id = event.target.id.value;
        const user = { name, email };
        console.log(user);

        fetch(`http://localhost:4000/create/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(member => {
                console.log('Success:', member);
            })
    }
    return (
        <div>
            <h1>User create</h1>
            <form onSubmit={updateMember}>
                <input type="text" name='id' placeholder='Your Id'/><br />
                <input type="text" name="name" id="" placeholder='Name' /><br />
                <input type="email" name="email" id="" placeholder='Email' /><br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default Update;