import React from 'react';

export function PersonCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "300px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2>
      {props.lastName}, {props.firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={props.increaseAge}>Birthday Button for {props.firstName} {props.lastName} </button>
    </div>
  );
}


// import React from 'react';

// function PersonCard(props) {
//   return (
//     <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '300px' }}>
//       <h2>{props.firstName} {props.lastName}</h2>
//       <p>Age: {props.age}</p>
//       <p>Hair Color: {props.hairColor}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown" />
//       <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
//       <PersonCard firstName="Michael" lastName="Johnson" age={35} hairColor="Black" />
//       <PersonCard firstName="Emily" lastName="Williams" age={28} hairColor="Red" />
//     </div>
//   );
// }

// export default App;
