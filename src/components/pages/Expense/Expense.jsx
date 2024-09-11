import React from 'react'
import "./Expense.css"
import UserDashboardMap from "../UserDashboardMap/UserDashboardMap";
import { IoIosArrowDown } from "react-icons/io";
import DashboardRightMap from "../DashboardRightMap/DashboardRightMap";

const Expense = () => {

  const buttonConfigs = [
    // { size: 'large', label: 'Large Button 1' },
    // { size: 'large', label: 'Large Button 2' },
    // { size: 'small', label: 'Small Button 1' },
    // { size: 'small', label: 'Small Button 2' },
    { size: 'large', label: 'Utility bills' },
    { size: 'small', label: 'Transportation' },
    { size: 'large', label: 'Internet dats' },
    { size: 'small', label: 'food' },
    { size: 'large', label: 'Personal care' },
    { size: 'small', label: 'Gift' },
    { size: 'large', label: 'Entertainment' },
    { size: 'small', label: 'Health' },
    { size: 'large', label: 'Subscription' },
    { size: 'small', label: 'Groceries' },
    { size: 'large', label: 'Education' },
    { size: 'small', label: 'Airtime' },
    { size: 'large', label: 'Businesses' },
  ];

  const roll = [
    {
      balanceName: "Available Balance",
      amount: "0.00",
      trackerName: "Expense Tracker",
      backgroundColor: "#DBBFFF",
    },
    {
      balanceName: "Total Balance",
      amount: "0.00",
      trackerName: "Budget Planner",
      backgroundColor: "#FBFDC7",
    },
    {
      balanceName: "Total Balance",
      amount: "0.00",
      trackerName: "Debt Manager",
      backgroundColor: "#E2BDFF",
    },
  ];

  const dashRight = [
    {
      theName: "Expense",
      activity: "No Activity",
      background: "#E8D8FD"

    },
    {
      theName: "Budget",
      activity: "No Activty",
      background: "#FEFFEF"
    },
    {
      theName: "Loan Payment",
      activity: "No Activity",
      background: "#E8D0FF"
    }
  ]
  return (
      <div className="expenseHolder">
      <div className="expenseInner">
        <div className="expenseLeft">
          <div className="expenseLeftTop">
            {roll.map((e, id) => {
              return (
                <UserDashboardMap
                  e={e}
                  key={id}
                  id={id}
                  backgroundColor={e.backgroundColor}
                />
              );
            })}
          </div>

          <div className="expenseLeftMiddle">
            <div className="expenseLeftMiddleTop">
              <p className="moneyFlow"> Money Flow </p>

              <div className="incomeExpenseHolder">
                <div className="incomeExpense">
                  <div className="purpleRound"> </div>
                  <p className="incomeText"> Income </p>
                  <div className="lightPurleRound"></div>
                  <p className="expenseText"> Expense </p>
                </div>

                <div className="incomeSelect">
                  <div className="expenseSelect">
                    <IoIosArrowDown />
                    <p className="expense"> Expense Tracker </p>
                  </div>

                  <div className="weekSelect">
                    <IoIosArrowDown />
                    <p className="thisWeek"> This week </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="expenseLeftBottom">
              <div className="expenseLeftBotInnerTop">
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <div className="expenseLeftBotInnerBottom"></div>
            </div>
          </div>

          <div className="expenseLeftBottom">
            <div className="expenseLeftBottomTop"></div>
          </div>
        </div>

        <div className="expenseRight">
        <p>Transaction History</p>
            <div className="expenseRightInner">
              {/* {
                dashRight.map((e, index) => (
                  <DashboardRightMap e={e} key={index} backgroundColor={e.background} />
                ))
              } */}
              
              {/* <div className='transactionH'>
              <p>Transaction History</p>
              </div> */}
              <div className='transactionBut'>
              <p>No Transaction Found</p>
              </div>
             
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Expense
