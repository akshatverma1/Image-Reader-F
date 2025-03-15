import React from 'react';

export default function Home(){
    return (
        <><div>
            <h1>Home</h1>
            <p>This is the home page.</p>
            <form action="http://localhost:3000/request" method="POST">
                <input type="text" name="userName" placeholder="Enter your name" />
                <button>Submit</button>
            </form>
        </div>
        </>
    );
}