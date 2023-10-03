// store.js
import { writable } from 'svelte/store';


export const user = writable({
  name: "",
  surname: "",
  contractDate: new Date().toISOString().substring(0,10),
  photo: null as string | ArrayBuffer | null | undefined
})

