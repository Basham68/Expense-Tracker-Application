import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddNewTransaction} from './components/AddNewTransaction'
import './App.css';
import {GlobalProvider} from './Context/GlobalState';



function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddNewTransaction/>
         
    </div>
    </GlobalProvider>
  );
}

export default App;
