import React from 'react';
import Form from "./Form";
import List from "./List";

function App() {
    return (
        <div>
            {/* JSX element needs at least 1 parent element */}
            <Form />
            <List />
        </div>
    )
};

export default App;
