import { addManyCustomersAction } from "../store/castomerReducer"


/**
 * Асинхронных запрос к внешнему API
 * Из функции возвращаем новую функцию, которая принимает 
 * параметром - dispatch
 * Получив данные (json) вызывается прокинутый dispatch,
 * в него прокинуть action creator, который добавит много
 * пользователей
 * @date 3/10/2024 - 10:50:32 PM
 *
 * @returns {(dispatch: any) => void}
 */
export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(Array.from(json))))
    }
}
