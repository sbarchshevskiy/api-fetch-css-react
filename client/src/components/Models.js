import React from 'react';

export default function Models({models, loading}) {

  return loading ? (<h1>loading...</h1>) : (
    <section className="cards">
      {models.map(model => (
        <h1 key={model.Model_ID}>{model.Model_Name}</h1>
      ))}
    </section>
  )
}