import { AgGridReact } from "ag-grid-react";

const defaultColDef = {
    sortable: true,
    filter: true
};

const columnDefs = [
    { field: 'name' },
    { field: 'date' },
    { field: 'difficulty' },
];

const TodoTable = ({ todos }) => {

    return (
        <div className="content ag-theme-alpine">
            <AgGridReact
                rowData={todos}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
            />
        </div>);
}

export default TodoTable;