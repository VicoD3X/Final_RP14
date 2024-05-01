import React from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import '../App.css';

function EmployeeList() {
    // Accéder à l'état des employés du store Redux
    const employees = useSelector((state) => state.employees.employees);

    // Configuration des colonnes pour DataTable
    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true },
        { name: 'Last Name', selector: row => row.lastName, sortable: true },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true },
        { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true }
    ];

    return (
        <div className="TableContainer">
            
            <DataTable
                columns={columns}
                data={employees}
                defaultSortFieldId={1}
                pagination
                className="DataTable"
            />
        </div>
    );
}

export default EmployeeList;
