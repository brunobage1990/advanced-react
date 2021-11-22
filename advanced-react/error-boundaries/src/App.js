import React, { Fragment } from 'react';

const store = [{
  type:'Roupa'
},{
  type:'Calçados'
},{
  type:'Camiseta'
}]

function Colunm({ type }) {
  return (
    <tr>
      <td>{type}</td>
    </tr>
  )
}

function App() {

  const renderColunms = (element, key) => {
    <Fragment key={'colunm-${key}'}>
      <Colunm type={element.type} />
    </Fragment>
  }

  return (
    <table>
      {store.map(renderColunms)}
    </table>
  );
}

export default App;
