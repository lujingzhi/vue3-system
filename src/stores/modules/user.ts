import { defineStore } from "pinia";

interface IUser {
  value: string
}

export const useUserStore = defineStore('', {
  state: (): IUser => ({
    value: ''
  }),
  actions: {
    setState(value: string) {
      this.value = value
    }
  }
})