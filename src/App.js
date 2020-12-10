import React, {useState, useEffect} from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    /* everything inside this arrow func is going 
    to be executed every single time the app renders*/
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType]);
// Whenever options in dependency array changes the hook will be rerun because its a dependency
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Post</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
};