import React from "react";

export default function Cards(props) {
  console.log("These are the Card props: ", props);

  return (
    <div>
      <Card props={props} />
    </div>
  );
}

const Card = (props) => {
  console.log("These are the single Card props: ", props);

  return <div>Cards will go here</div>;
};
//   props.foodData.forEach((store) => {});
//      return (
//     <div key={store.id}>
//       <img src={store.imgURL} alt={store.name} />
//       <h4>{store.name}</h4>
//       <p>{store.type}</p>
//       <div className="p-highlights">
//         <p>{store.time}</p>
//         <p>{store.delivery}</p>
//       </div>
//       </div>
//   )}
