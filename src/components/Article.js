import React from 'react'

export default function Article({key, title, date, preview}) {
  const dateused= date || "January 1, 1970";
  return (
   <article key = {key}>
      <h3>{title}</h3>
      <small>{dateused}</small>
      <p>{preview}</p>
   </article>
  )
}
