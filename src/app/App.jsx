import React from "react";
import ProgressBar from "./components/progressBar";
import users from "./team";

function App() {
    return (
        <>
            <ul className="d-flex justify-content-center">
                {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <img
                                src="https://miro.medium.com/max/512/1*jA5lTgPRbyimsFNod7SlFQ.png"
                                alt="image"
                            ></img>
                            <li>
                                <h3>{user.name}</h3>
                            </li>
                            <button className="btn btn-primary m-2">
                                Открыть карточку
                            </button>
                            <h4>Немного об участнике: {user.description}</h4>
                            <ProgressBar skills={user.skills} />
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default App;
