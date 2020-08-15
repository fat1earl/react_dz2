import React from "react";

export class Accounting extends React.Component {
    constructor(props) {
      super(props)
  
      const expensesStr = localStorage.getItem("expenses");
      const expenses = expensesStr ? JSON.parse(expensesStr) : [];
  
      const counterStr = localStorage.getItem("counter");
      const counter = (counterStr ? Number(counterStr) : 0) || 0;
      this.state = {
        expenses,
        description: "",
        value: 0,
      };
  
      this._counter = counter;
    }
  

    getNextId = () => {
      this._counter++;
  
      localStorage.setItem("counter", this._counter);
  
      return this._counter;
    };
  
    render() {
      return (
        <div
          onClick={(evt) => {
            if (evt.target.getAttribute("role") === "delete") {
              const expenseId = Number(evt.target.dataset.expenseId);
  
              this.setState(
                (state) => ({
                  expenses: state.expenses.filter((e) => e.id !== expenseId),
                }),
                () => {
                  localStorage.setItem(
                    "expenses",
                    JSON.stringify(this.state.expenses)
                  );
                }
              );
            }
          }}
            >
          <input
            type="text"
            value={this.state.description}
            onChange={(e) =>
              this.setState({
                description: e.target.value,
              })
            }
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <input
            type="number"
            min={0}
            value={this.state.value}
            onChange={(e) =>
              this.setState({
                value: e.target.valueAsNumber,
              })
            }
          />
          <button
            onClick={() => {
              const expenses = [
                ...this.state.expenses,
                {
                  id: this.getNextId(),
                  description: this.state.description,
                  value: this.state.value,
                },
              ];
  
              this.setState(
                {
                  expenses: expenses,
                  description: "",
                  value: 0,
                }
                
              );
  
              localStorage.setItem("expenses", JSON.stringify(expenses));
            }}
          >
            Добавить
          </button>
          
          <table>
            <thead>
              <tr>
                <th>Стоимость</th>
                <th>Значение</th>
                
              </tr>
            </thead>

            <tbody>
              {this.state.expenses.map((expense) => (
                <tr>
                  <td>{expense.value}</td>
                  <td>{expense.description}</td>
                  <td>
                    <button data-expense-id={expense.id} role="delete">
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  Итого:{" "}
                  {this.state.expenses.reduce(
                    (acc, expense) => acc + expense.value,
                    0
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }