import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from './store/castomerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { AsyncIncrementCreator, AsyncDecrementCreator } from  './store/countReducer'; 
import { fetchCustomers } from './asyncActions/customer';
import { fetchUsers } from './store/userReducer';

function App() {
  // создаем диспетчер для изменения State
  const dispatch = useDispatch();
  // получаем состояние state => состояние.редусер.поле
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users);


  /**
   * Обработчик добавления денег
   * @date 3/9/2024 - 11:05:33 PM
   *
   * @param {*} cash
   */
  const addCash = (cash) => {
    // передаем в диспетчер наше действие
    dispatch(addCashAction(cash));
  }

  /**
  * Обработчик удаления денег
  * @date 3/9/2024 - 11:05:33 PM
  *
  * @param {*} cash
  */
  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };

    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <h2>Первая часть</h2>
      <div className='card'>
        {`Вот столько денег: ${cash}`}
      </div>
      <div className="card">
        <div className='buttons'>
          <button onClick={() => addCash(+prompt("Сколько положить?", 0))}>
            Пополнить счет
          </button>
          <button onClick={() => getCash(+prompt("Сколько положить?", 0))}>
            Снять деньги
          </button>
        </div>

        <div className='buttons'>
          <button onClick={() => addCustomer(prompt("Имя нового клиента", ""))}>
            Добавить клиента
          </button>
          <button onClick={() => dispatch(fetchCustomers())}>
            Получить клиентов
          </button>
        </div>

        {customers.length > 0 ?
          <div className="card" style={{ flexDirection: 'column-reverse' }}>
            {customers.map(customer =>
              <div
                className='customer'
                key={customer.id}
                onClick={() => removeCustomer(customer)}
              >{customer.name}</div>
            )}
          </div>
          :
          <div className="card">Клиентов нет ;(</div>
        }
      </div>
      <div
        style={{
          width: '100%',
          border: 'solid 1px',
        }}
      ></div>

      <h2>Вторая часть</h2>
      <div className="card">{count}</div>

      <div className='buttons'>
        <button onClick={() => dispatch(AsyncIncrementCreator())}>
          Инкремент
        </button>
        <button onClick={() => dispatch(AsyncDecrementCreator())}>
          Декремент
        </button>
        <button onClick={() => dispatch(fetchUsers())}>
          Получить пользователей
        </button>
      </div>
      <div className="card" style={{ flexDirection: 'column-reverse' }}>
          {users.map((user, index) =>
            <div
              className='customer'
              key={index}
            >{user.name}</div>
          )}
        </div>
    </>
  )
}

export default App

