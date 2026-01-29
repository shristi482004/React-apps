import { useState } from 'react'
import Card1 from './components/Card1';

export default function App() {
 

  return (
    <>
     <div className="fixed inset-0 bg-red-500 flex items-center justify-center text-white text-6xl font-black">
      TAILWIND IS WORKING
    </div>

    <Card1  title="Science of Chemistry" rating="5"/>
    <Card1  title="Science of Biology" rating="3"/>
    <Card1  title="Science of Physics" />
  
    
    </>
  )
}




