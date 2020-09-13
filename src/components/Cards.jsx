import React from "react";

export default function Cards(props) {
  console.log("These are the Card props: ", props);

  return (
    <div>
      This is where the cards will go
      {/* {props.foodData.map((store) => (
        <Card key={store.id} store={store} />
      ))} */}
    </div>
  );
}

// function Card({ store }) {
//   const { name, imgURL, type, time, delivery } = store;

//   return (
//     <div className="store-card">
//       <img src={imgURL} alt={name} />
//       <h4>{name}</h4>
//       <p>{type}</p>
//       <div className="p-highlights">
//         <p>{time}</p>
//         <p>{delivery}</p>
//       </div>
//     </div>
//   );
// }
