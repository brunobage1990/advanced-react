import React, { useState } from 'react';
import { Button, Calc, PhotoGallery } from './Components';
import { sanitizeString } from './Commons/Utilits'

function App() {

  const photos = [
    "http://placeimg.com/140/60/people",
    "http://placeimg.com/140/60/animals",
    "http://placeimg.com/140/60/tech",
    "http://placeimg.com/140/60/any",
    "http://placeimg.com/140/60/nature"    
  ]

  sanitizeString('teste')
  
  return (
    <>
     <h1>Galeria de fotos</h1>
     <PhotosGallery
      photos={photos}
     />
     <Button>
       Botão
     </Button>
    </>   
  )    
}

export default App;
