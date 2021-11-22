import React, { Fragment} from 'react';

const store = ['','','']

function Colunm() {
  return (
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}

function App() {

  const renderColunms = (element, key) => {
    <Fragment key={'colunm-${key}'}>
      <Colunm />
    </Fragment>
  }

  return (
    <table>  
      {store.map(renderColunms)}
    </table>
  )
}

export default App;
