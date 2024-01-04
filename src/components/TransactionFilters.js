import React from 'react';
import './TransactionTable.css';

const TransactionFilters = ({fromDate, setFromDate, toDate, setToDate, branch, setBranch, type, setType, status, setStatus, id, setId}) => {
   
    const branchArr = [
        {id: 1, value: "Thane", label: "Thane"},
        {id: 2, value: "Navi Mumbai", label: "Navi Mumbai"},
        {id: 3, value: "Mumbai", label: "Mumbai"},
        {id: 4, value: "Kurla", label: "Kurla"},
        {id: 5, value: "Vile Parle", label: "Vile Parle"},
        {id: 6, value: "Lower Parel", label: "Lower Parel"},
        {id: 7, value: "Andheri", label: "Andheri"},
        {id: 8, value: "Byculla", label: "Byculla"},
    ]

    const typeArr = [
        {id: 1, value: "Full", label: "Full"},
        {id: 2, value: "Short", label: "Short"},
    ]

    const statusArr = [
        {id: 1, value: "Pending", label: "Pending"},
        {id: 2, value: "Approved", label: "Approved"},
        {id: 3, value: "Rejected", label: "Rejected"},
    ]
    
  return (
    <div className='filter-container'>
       <div className='date-from'>
            <label>
            From Date:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </label>
       </div>
       <div className='to-from'>
            <label>
            To Date:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </label>
       </div>
       <div className='branch-filter'>
        <select value={branch} onChange={(e) => setBranch(e.target.value)}>
            {branchArr.map((item) => (
                <option key={item.id} value={item.value}>{item.label}</option>
            ))}
        </select>
       </div>
       <div className='type-filter'>
        <select value={type} onChange={(e) => setType(e.target.value)}>
            {typeArr.map((item) => (
                <option key={item.id} value={item.value}>{item.label}</option>
            ))}
        </select>
       </div>
       <div className='status-filter'>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statusArr.map((item) => (
                <option key={item.id} value={item.value}>{item.label}</option>
            ))}
        </select>
       </div>
       <div className='id-filter'>
        <input type='text' placeholder='Search ID' value={id} onChange={(e) => setId(e.target.value)}/>
       </div>
       
    </div>
  );
};

export default TransactionFilters;
