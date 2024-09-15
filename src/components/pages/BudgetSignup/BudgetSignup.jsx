import React from 'react'
import './BudgetSignup.css';

import UserDashboardMap from "../UserDashboardMap/UserDashboardMap";
import { IoIosArrowDown } from "react-icons/io";
import DashboardRightMap from "../DashboardRightMap/DashboardRightMap";

const BudgetSignup = () => {

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
    // {
    //   balanceName: "Total Balance",
    //   amount: "0.00",
    //   trackerName: "Debt Manager",
    //   backgroundColor: "#E2BDFF",
    // },
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
      <div className="BudgetSignupHolder">
      <div className="BudgetSignupInner">
        <div className="BudgetSignupLeft">
          <div className="BudgetSignupLeftTop">
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

          <div className='budget-Button'>
            <div className=''>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className=''>
            <button>Click here</button>
          </div>

          <div>
            <div>
            <h5>Budget</h5>
            <p>Manage your money</p>

            <button></button>
            </div>

            <div>
              <div>
                <P>Budget</P>
                <P>Budget</P>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="BudgetSignupLeftMiddle">
            <div className="BudgetSignupLeftMiddleTop">
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

            <div className="BudgetSignupLeftBottom">
              <div className="BudgetSignupLeftBotInnerTop">
                <hr />
                <hr />
                <hr />
                <hr />
              </div>
              <div className="BudgetSignupBotInnerBottom"></div>
            </div>
          </div>

          <div className="BudgetSignupLeftBottom">
            <div className="BudgetSignupLeftBottomTop"></div>
          </div>
        </div>

        <div className="BudgetSignupRight">
          <div >
        <p>Transaction History</p>
            <div className="BudgetSignupRightInner">
              <div className='transactionBut'>
              <p>No Transaction Found</p>
              </div>
            </div>
            </div>

            <div>
            <p>Transaction History</p>
            <div className="BudgetSignupRightInner">
              <div className='transactionBut'>
              <p>No Transaction Found</p>
              </div>
            </div>


            </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetSignup
