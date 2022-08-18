<template>
  <div class="home">
   home
   <p>My name is {{name}}</p>
   <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    console.log('setup')
    let name = 'maro'
    let age = 14
    const handleClick = () =>{
      alert('Clicked me')
    }
    return {name,age,handleClick}
  },
}
</script>
