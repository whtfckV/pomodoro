import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { MINUTES_PER_TOMATO, ONE_MINUTE } from './constants';
import { generateId } from 'src/utils/ts/GenerateRandomIndex';


export type Todo = {
  name: string
  tomatoes: number
  id: string
}

type TodoChange = {
  value: string
  id: string
}

type State = {
  todos: Todo[]
  fullTime: number
}


const initialState: State = {
  todos: [],
  fullTime: 0
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo: Todo = generateId({
        name: action.payload,
        tomatoes: 10,
      })
      state.todos.push(newTodo)
      state.fullTime += newTodo.tomatoes * MINUTES_PER_TOMATO * ONE_MINUTE
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => {
        if (todo.id === action.payload) {
          state.fullTime -= todo.tomatoes * MINUTES_PER_TOMATO * ONE_MINUTE
          return false
        } else {
          return true
        }
      })
    },
    changeName(state, action: PayloadAction<TodoChange>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload.id)

      if (!changeTodo) return
      changeTodo.name = action.payload.value
    },
    increaseTomato(state, action: PayloadAction<string>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload)

      if (!changeTodo) return
      changeTodo.tomatoes++
      state.fullTime += MINUTES_PER_TOMATO * ONE_MINUTE

    },
    decreaseTomato(state, action: PayloadAction<string>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload)

      if (!changeTodo) return
      changeTodo.tomatoes--
      state.fullTime -= MINUTES_PER_TOMATO * ONE_MINUTE
    },
    changeTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload
    }
  }
})

export const {
  addTodo,
  removeTodo,
  changeName,
  increaseTomato,
  decreaseTomato,
  changeTodos
} = todoSlice.actions
export default todoSlice.reducer
