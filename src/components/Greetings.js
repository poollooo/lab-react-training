import React from 'react'

//The component should display a greeting text in the chosen language.

function Greetings ({lang, children}) {
  let greeting = ''
  switch (lang) {
    case 'de':
      greeting = 'Hallo'
      break
    case 'en':
      greeting = 'Hello'
      break
    case 'es':
      greeting = 'Hola'
      break
    case 'fr':
      greeting = 'Bonjour'
      break
    default:
      greeting = 'Hello'
  }
  return (
    <div className={lang}>
      <p>{greeting} {children}</p>
    </div>
  )
}

export default Greetings