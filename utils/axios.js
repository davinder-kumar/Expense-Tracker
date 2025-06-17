import axios from "axios";

const refUrl = ""; //ADD FIREBASE URL
async function saveExpense(expenseData) {
  const data = await axios.post(refUrl + "expensesData.json", expenseData);
  return data.data.name;
}

function deleteExpense(id) {
  return axios.delete(refUrl + "expensesData/" + id + ".json");
}

function updateExpense(id, updateData) {
  return axios.put(refUrl + "expensesData/" + id + ".json", updateData);
}

async function fetchExpenses() {
    const res = await axios.get(refUrl + "expensesData.json");
    const expensesData = [];
    for (let key in res.data) {
      expensesData.push({
        id: key,
        description: res.data[key].description,
        amount: res.data[key].amount,
        date: new Date(res.data[key].date),
      });
    }
    return expensesData;
}

export { saveExpense, fetchExpenses, deleteExpense, updateExpense };
