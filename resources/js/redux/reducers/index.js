import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";
// import { itemReducer } from "./itemReducer";
// import { taxReducer } from "./taxReducer";
// import { currencyReducer } from "./currencyReducer"
// import { contactReducer } from "./contactReducer";
// import { vendorReducer } from "./vendorReducer";
// import { accountReducer } from "./accountReducer";
// import { revenueReducer } from "./revenueReducer";
// import { defaultSettingReducer } from "./defaultSettingReducer";
// import { expensesReducer } from "./expenseReducer";
// import { userReducer } from "./userReducer";
// import { transferReducer } from "./transferReducer";
// import { transactionReducer } from "./transactionReducer";
// import { invoiceReducer } from "./invoiceReducer";
// import { billReducer } from "./billReducer";

const reducers = combineReducers({
    allContent : contentReducer,
    // allCategories : categoryReducer,
    // allTaxes : taxReducer,
    // allCurrencies : currencyReducer,
    // allContacts : contactReducer,
    // allVendors : vendorReducer,
    // allAccounts : accountReducer,
    // allRevenues : revenueReducer,
    // allDefaultSettings : defaultSettingReducer,
    // allExpenses : expensesReducer,
    // allUsers : userReducer,
    // allTransfers : transferReducer,
    // allTransactions : transactionReducer,
    // allInvoices : invoiceReducer,
    // allBills : billReducer,
})

export default reducers;