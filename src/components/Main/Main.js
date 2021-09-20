import "./Main.css";
import React from "react";
import Card from "../Card/Card";

export default function Main({ apods }) {
  const cards = apods.map((apod) => {
    return (
      <Card
        key={apod.date}
        title={apod.title}
        mediaType={apod.media_type}
        url={apod.url}
        date={apod.date}
        explanation={apod.explanation}
      />
    );
  });

  return (
    <main>
      {cards}
    </main>
  );
}
