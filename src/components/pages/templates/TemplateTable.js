//Importacion de React.
import React from 'react';
//Importaciones del componente singular Material Table.
import MaterialTable from 'material-table';

//Contenido del componente.
const TemplateTable = props => (
  <MaterialTable
    title={props.titletable}
    columns={props.columns}
    data={props.data}
    options={{
          headerStyle: {
            backgroundColor: '#3f51b5',
            color: '#FFF'
          },
          exportButton: true
        }}
  />
);

export default TemplateTable;