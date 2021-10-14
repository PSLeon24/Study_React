import React from 'react';

function Food({fav}) {
  return <h3>I like {fav}.</h3>;
}


function App() {
  return (
    <div>
      Hello
      <Food fav="kimchi" />
      <Food fav="hamberger" />
      <Food fav="ramen" />
      <Food fav="chicken" />
    </div>
  );
}

export default App;
