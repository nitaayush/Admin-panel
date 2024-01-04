// src/App.js
import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionFilters from './components/TransactionFilters';
import './App.css';

const App = () => {
  const initialData = [
    // Initial transaction data
    {id: 124235, date: "2023-04-19", branch: "Thane", type: "Full", amount: "5,47,890", bank: "CMV HDFC 1223562536", req: "Sharad Verma", empCode: "A123", status: "Pending"},
    {id: 563233, date: "2023-06-09", branch: "Navi Mumbai", type: "Full", amount: "2,46,732", bank: "UYT SCB 632786213", req: "Pramod Mehta", empCode: "A3445", status: "Approved"},
    {id: 124239, date: "2023-05-06", branch: "Mumbai", type: "Short", amount: "5,53,672", bank: "OIT HDFC 1223562536", req: "Vikas Singh", empCode: "A9765", status: "Rejected"},
    {id: 124238, date: "2023-03-12", branch: "Kurla", type: "Full", amount: "1,47,890", bank: "YTF SBI 123212536", req: "Sharad Shrivastava", empCode: "A6467", status: "Approved"},
    {id: 124237, date: "2023-02-22", branch: "Vile Parle", type: "Full", amount: "5,47,890", bank: "CMV HDFC 1223562536", req: "Sharad Verma", empCode: "A123", status: "Pending"},
    {id: 126237, date: "2023-07-13", branch: "Lower Parel", type: "Short", amount: "3,20,890", bank: "PDS HDFC 1223562536", req: "Sharad Kappor", empCode: "A123", status: "Rejected"},
    {id: 124637, date: "2023-08-16", branch: "Andheri", type: "Full", amount: "7,47,890", bank: "GBG HDFC 1223562536", req: "Sharad Verma", empCode: "A123", status: "Approved"}
  ];

  const [transactions, setTransactions] = useState(initialData);
  const [id, setId] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [sortType, setSortType] = useState("")
  const [noData, setNoData] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);

  useEffect(() => {
    if(fromDate !== "" && toDate !== "" && (fromDate > toDate || toDate < fromDate)) {
      setInvalidDate(true)
    } else {
      setInvalidDate(false)
    }
  }, [fromDate, toDate])
    

  const handleDelete = (e) => {
    let updatedData = [...transactions];
    let index;
    if(e.target.tagName === "IMG") {
      index = updatedData.findIndex((item) => item.id.toString() === e.target.dataset.id);
      updatedData.splice(index, 1);
      setTransactions(updatedData);
    }
  };

  return (
    <div className="App">
      <h1>Transaction Admin Panel</h1>
      <TransactionFilters
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        branch={branch}
        setBranch={setBranch}
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
        id={id}
        setId={setId}
      />

      {!noData && <TransactionTable data={transactions} 
      onDelete={handleDelete}  
      fromDate={fromDate}
      toDate={toDate}
      branch={branch}
      type={type}
      status={status}
      id={id}
      sortType={sortType}
      setSortType={setSortType}
      setNoData={setNoData}
      />
      
      }
      {invalidDate && "Invalid Selection of Dates, please re-check!"}
      
    </div>
  );
};

export default App;
