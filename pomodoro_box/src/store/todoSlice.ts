import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


interface ITodo {
  name: string
  tomatos: number
  id: string
}

interface ITodoChange {
  value: string
  id: string
}

interface TodoState {
  todos: ITodo[]
  fullTime: number
}

const MINUTES_PER_TOMATO = 25

const initialState: TodoState = {
  todos: [],
  fullTime: 0
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      console.log(state)
      console.log(action)
      state.todos.push(action.payload)
      state.fullTime += action.payload.tomatos * MINUTES_PER_TOMATO
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => {
        if (todo.id === action.payload) {
          state.fullTime -= todo.tomatos * MINUTES_PER_TOMATO

          return false
        } else {
          return true
        }
      })
    },
    changeName(state, action: PayloadAction<ITodoChange>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload.id)

      if (!changeTodo) return
      changeTodo.name = action.payload.value
    },
    increaseTomato(state, action: PayloadAction<string>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload)

      console.log(changeTodo)
      if (!changeTodo) return
      changeTodo.tomatos++
      state.fullTime += MINUTES_PER_TOMATO

    },
    decreaseTomato(state, action: PayloadAction<string>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload)

      if (!changeTodo) return
      changeTodo.tomatos--
      state.fullTime -= MINUTES_PER_TOMATO
    },
  }
})

export const { addTodo, removeTodo, changeName, increaseTomato, decreaseTomato } = todoSlice.actions
export default todoSlice.reducer
