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
}

const initialState: TodoState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      console.log(state)
      console.log(action)
      state.todos.push(action.payload)
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
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
      changeTodo.tomatos = changeTodo.tomatos + 1

    },
    decreaseTomato(state, action: PayloadAction<string>) {
      const changeTodo = state.todos.find(todo => todo.id === action.payload)

      if (!changeTodo) return
      changeTodo.tomatos--
    },
  }
})

export const { addTodo, removeTodo, changeName, increaseTomato, decreaseTomato } = todoSlice.actions
export default todoSlice.reducer
