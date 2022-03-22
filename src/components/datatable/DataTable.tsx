import './DataTable.scss';
import { DataGrid} from "@mui/x-data-grid";
import {User, userColumns, userRows} from "../../data/dataTableSource";
import { Link } from 'react-router-dom';
import { useState} from "react";

const DataTable = () => {
    const [data, setData] = useState<User[]>(userRows);

    const handleDelete = (id: number) => {
        setData(data.filter((item) => item.id !== id));
    }

    const actionColumn = [
        {
            field: "action",
            headerName: 'Action',
            width: 200,
            renderCell: (param: any) => (
                <div className='cellAction'>
                    <Link to='/users/test' style={{ textDecoration: 'none'}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className='deleteButton' onClick={() => handleDelete(param.row.id)}>
                        Delete
                    </div>
                </div>
            )
        }
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link to='/users/new' className='link'>
                    Add New
                </Link>
            </div>
            <DataGrid
                className= 'dataGrid'
                columns={userColumns.concat(actionColumn)}
                rows={data}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}
export default DataTable;
