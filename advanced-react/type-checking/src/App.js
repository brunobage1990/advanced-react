import React from 'react';
import PetShop from './PetShop';

function App() {

    const handleClick = () => {
      console.log('Iniciar o banho...')
    }

    return (
     <PetShop
      dogs={2}
      customerName="Bruno"
      onClick={handleClick}
      
     />
    )
}

export default App;
