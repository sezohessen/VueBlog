<template>
  <div class="home">
   <h1>Home</h1>
   <p ref="p">My name is {{name}}</p>
   <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'HomeView',
  setup() {

    console.log('setup')
    const p = ref(null)
    let name = 'maro'
    let age = 14
    const handleClick = () =>{
      console.log(p,p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hello From Setup'
    }
    return {name,age,handleClick,p}
  },
}
</script>
