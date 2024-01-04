// src/components/TransactionTable.js
import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ data, onDelete, fromDate, toDate, branch, type, status, sortType, setSortType, id }) => {

    const handleFilter = () => {
        let filteredData = [...data];

        // Apply filters based on criteria
        if(fromDate && toDate){
            filteredData = filteredData.filter(item => item.date >= fromDate && item.date <= toDate);
        }

        if(fromDate && !toDate){
            filteredData = filteredData.filter(item => item.date >= fromDate);
        }

        if(!fromDate && toDate){
            filteredData = filteredData.filter(item => item.date <= toDate);
        }

        if (branch) {
            filteredData = filteredData.filter(item => item.branch === branch);
        }

        if (type) {
            filteredData = filteredData.filter(item => item.type === type);
        }

        if (status) {
            filteredData = filteredData.filter(item => item.status === status);
        }

        if (id) {
            filteredData = filteredData.filter(item => (item.id).toString().toLowerCase().includes(id));
        }

        if(sortType === "asc") {
            filteredData = filteredData.sort((a, b) => {
                if(a.date < b.date) {
                    return -1;
                } else if(a.date > b.date){
                    return 1;
                } else {
                    return 0;
                }
            })
        }

        if(sortType === "dsc"){
            filteredData = filteredData.sort((a, b) => {
                if(a.date > b.date) {
                    return -1;
                } else if(a.date < b.date){
                    return 1;
                } else {
                    return 0;
                }
            })
        }

        return filteredData;
    };



  return (
    <table>
      {/* Table Header */}
      <thead>
        <tr>
          <th>ID</th>
          <th className='sort-container' onClick={() => sortType === "asc" ? setSortType("dsc") : setSortType("asc")}>DATE <span><img className='sort-img' src='sort.png' /></span></th>
          <th>BRANCH</th>
          <th>TYPE</th>
          <th>AMOUNT<br />(IN RUPEES)</th>
          <th>BANK</th>
          <th>REQUESTED BY<br />(EMPLOYEE CODE)</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody onClick={(e) =>  onDelete(e)}>
        {handleFilter() && handleFilter().length > 0 ? handleFilter().map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.branch}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.bank}</td>
            <td>{transaction.req}<br /> {transaction.empCode}</td>
            <td>{transaction.status}</td>
            <td><img className='close-img' src='close.png' data-id={transaction.id}/></td>
          </tr>
        )) : <div style={{textAlign: "center"}}>No Data found!</div>}
      </tbody>
    </table>
  );
};

export default TransactionTable;
