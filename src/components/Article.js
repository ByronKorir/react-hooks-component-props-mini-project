import React from 'react'

export default function Article({ title, date, preview}) {
  const dateused= date || "January 1, 1970";
  return (
   <article key = {title}>
      <h3>{title}</h3>
      <small>{dateused}</small>
      
      <p>{preview}</p>
   </article>
  )
}