import EmployeeList from "../components/EmployeeList";

function FormEmployee() {
    return (
        <>
            <div className="TableSuperContainer">
                <h1 className="TableTitle">Liste des employées</h1>
                <EmployeeList />
            </div>
        </>
    );
}

export default FormEmployee;