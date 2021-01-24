import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { img, title, desc, time, cost } = props;
  return (
    <CardWhole>
      <CardSection style={{ overflow: "hidden", position: "relative" }}>
        <img src={img || "https://picsum.photos/300/125"} />
      </CardSection>
      <CardSection style={{ paddingLeft: "10px" }}>
        <h4 style={{ marginBottom: "-10px", marginTop: "10px" }}>{title}</h4>
        <p>{desc}</p>
        <Tags>
          <Tag style={{ backgroundColor: "lightgreen", marginLeft: "-5px" }}>
            {time}
          </Tag>
          <Tag style={{ backgroundColor: "orange", marginLeft: "3px" }}>
            {cost}
          </Tag>
        </Tags>
      </CardSection>
    </CardWhole>
  );
};
export default Card;

const CardWhole = styled.div`
  background-color: #f8f8f8;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    box-shadow: 5px 5px 5px 5px gray;
  }
`;

const CardSection = styled.div`
  height: 50%;
  border-radius: 5px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 12px;
`;
