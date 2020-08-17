import React from "react";

const Confirmation = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>PIZZA COMING IN HOT!</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default Confirmation;
