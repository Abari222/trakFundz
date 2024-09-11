import React from 'react'
import './BudgetPlanner.css';

import UserDashboardMap from "../UserDashboardMap/UserDashboardMap";
import { IoIosArrowDown } from "react-icons/io";
import DashboardRightMap from "../DashboardRightMap/DashboardRightMap";

const BudgetPlanner = () => {

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
      <div className="BudgetPlannerHolder">
      <div className="BudgetPlannerInner">
        <div className="BudgetPlannerLeft">
          <div className="BudgetPlannerLeftTop">
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

          <div className="BudgetPlannerLeftMiddle">
            <div className="BudgetPlannerLeftMiddleTop">
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

            <div className="BudgetPlannerLeftBottom">
              <div className="BudgetPlannerLeftBotInnerTop">
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <div className="BudgetPlannerLeftBotInnerBottom"></div>
            </div>
          </div>

          <div className="BudgetPlannerLeftBottom">
            <div className="BudgetPlannerLeftBottomTop"></div>
          </div>
        </div>

        <div className="BudgetPlannerRight">
        <p>Transaction History</p>
            <div className="BudgetPlannerRightInner">
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

export default BudgetPlanner
