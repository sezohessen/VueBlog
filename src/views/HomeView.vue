<template>
  <div class="home">
   <h1>Home</h1>
   <p ref="p">My name is {{name}} and my age is {{age}}</p>
   <button @click="handleClick">Click me</button>
   <button @click="age++">Increase Age</button>
   <input type="text" v-model="name">
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'HomeView',
  setup() {

    console.log('setup')
    const p = ref(null)
    const name = ref('maro')
    const age = ref(14)
    const handleClick = () =>{
      console.log(p,p.value)
      p.value.classList.add('test')
      /* p.value.textContent = 'Hello From Setup' */
      name.value = 'Sezo'
      age.value = 23
    }
    return {name,age,handleClick,p}
  },
}
</script>
