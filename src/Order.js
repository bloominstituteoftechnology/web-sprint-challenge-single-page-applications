import React from "react";

export default function User(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your User&apos;s details...</h3>;
  }

  return (
    <div className="container">
      <h3>{details.name}</h3>
      <p>Size: {details.size}</p>
    </div>
  );
}
