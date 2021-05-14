import React from 'react';
import ModelDetails from "./ModelDetails";

export default function Models({models, loading}) {

  return loading ? (<h1>loading...</h1>) : (
    <section className="cards">
      {models.map(model => (
        <ModelDetails key={model.Make_Name} model={model}></ModelDetails>
      ))}
    </section>
  )
}