import React from "react";

function CardSection(props) {
  const { supportiveImg, heading, desc, author } = props.obj;
  console.log({ heading, supportiveImg, desc, props });

  return (
    <div>
      {/* bg-light */}
      <div
        className={!author ? "" : "card custom-card "}
        style={{ width: "17rem" }}
      >
        <div className="card-body">
          {props.type !== "Lower" ? (
            <img
              src={require(`../../images/${supportiveImg}`)}
              className="card-img-left"
              alt={"some issue"}
            />
          ) : (
            <img
              src={require(`../../images/${supportiveImg}`)}
              className="lowerSectiomImage"
              alt={"some issue"}
              // width={"100px"}
            />
          )}
          <h6 className="card-subTitle fw-lighter">{author}</h6>
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
