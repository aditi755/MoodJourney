import React from 'react'

function Main(props) {
    const {children} = props //children taking and main

  return (
    <main className="flex-1">  
   
        {children}
    </main>
  )
}

export default Main