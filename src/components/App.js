import React, { useState } from "react";
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [ resource, setResource ] = useState('todos');
    return (
      <div className="ui container">
        <div>
          <button onClick={() => setResource('posts')} className="ui button primary">Posts</button>
          <button onClick={() => setResource('todos')} className="ui button secondary">Todos</button>
        </div>
        <UserList/>
        <ResourceList resource={resource}/>
      </div>
    );
}

export default App;
