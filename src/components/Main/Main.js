import "./Main.css";
import React from "react";
import Card from "../Card/Card";

export default function Main({ apods }) {
  const cards = apods.map((apod) => {
    if (apod.media_type === "image") {
    return (
      <Card
        key={apod.date}
        title={apod.title}
        url={apod.url}
        date={apod.date}
        explanation={apod.explanation}
      />
    )}
    else {
      return (
      <>
      </>
      )
    }
  });

  return (
    <main>
      {cards}
    </main>
  );
}
