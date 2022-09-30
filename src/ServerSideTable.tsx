import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

import PopupMenu from './PopupMenu';

export interface ServerSideTableProps {
  id: number;
};

export const ServerSideTable: React.FC<ServerSideTableProps> = ({ id }) => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];

  const columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    {
      field: 'actions',
      cellRenderer: PopupMenu,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        // rowModelType="serverSide"
      >
      </AgGridReact>
    </div>
  );
}
