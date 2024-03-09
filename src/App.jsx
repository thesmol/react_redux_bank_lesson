import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  // создаем диспетчер для изменения State
  const dispatch = useDispatch();
  // получаем состояние
  const cash = useSelector(state => state.cash);

  
  /**
   * Обработчик добавления денег
   * @date 3/9/2024 - 11:05:33 PM
   *
   * @param {*} cash
   */
  const addCash = (cash) => {
    // передаем в диспетчер наше действие
    dispatch({
      type: "ADD_CASH",
      payload: cash,
    });
  }

   /**
   * Обработчик удаления денег
   * @date 3/9/2024 - 11:05:33 PM
   *
   * @param {*} cash
   */
  const getCash = (cash) => {
    dispatch({
      type: "GET_CASH",
      payload: cash,
    });
  }

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div className='card'>
        {`Вот столько денег: ${cash}`}
      </div>
      <div className="card">
        <button onClick={() => addCash(+prompt("Сколько положить?", 0))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(+prompt("Сколько положить?", 0))}>
          Снять деньги
        </button>
      </div>
    </>
  )
}

export default App

