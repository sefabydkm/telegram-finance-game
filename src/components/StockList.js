import React from 'react';
import MUIDataTable from "mui-datatables";

function StockList(props) {
    const columns = [
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "company",
            label: "Company",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "City",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "State",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const data = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    ];

    const options = {

        filterType: 'checkbox',
        print:false,
        download:false,
        viewColumns:false,
        selectableRows:'none',
        onCellClick: (cellIndex, rowIndex) => {
            console.log(cellIndex, rowIndex);
        }
    };

    return (
        <div>
            <MUIDataTable
                title={"Stock List"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
}

export default StockList;