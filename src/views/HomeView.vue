<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search Term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handelClick">Stop Watch</button>


   <!-- -------------- -->
   <!-- <h2>Refs</h2>
   <p ref="p">My name is {{ninjaOne.name}} and my age is {{ninjaOne.age}}</p>
   <button @click="handleClick">Click me</button>
   <button @click="age++">Increase Age</button>
   <button @click="updateNinjaOne"> Update Age</button>
   <hr>
   <h2>Reactive</h2>
   <p>My name is {{ninjaTwo.name}} and my age is {{ninjaTwo.age}}</p>
   <button @click="updateNinjaTwo"> Update Age</button> -->
  </div>
</template>

<script>
import {ref,reactive, computed, watch} from 'vue'
export default {
  name: 'HomeView',
  setup() {
    const search = ref('')
    const names = ref(['maro','sezo','ahmed','hussien','hassan'])
    const StopWatch = watch(search,()=>{
      console.log('waction function runing')
    })
    /* WatchEffect runs when the setup function created initially or using value inside it that could be changed */
    const matchingNames  = computed(()=> {
      return names.value.filter((name)=> name.includes(search.value))
    })
    const handelClick = ()=>{
      StopWatch()//Invoke
    }
    return { names,search,matchingNames,handelClick }
    /* ----------------- */
    const ninjaOne = ref({name:'Sezo',age:22})
    const ninjaTwo = reactive({name:'Hussien',age:28})
    const updateNinjaOne = () =>{
      ninjaOne.value.age = 23 /* Diff here */
    }
    const updateNinjaTwo = () =>{
      ninjaTwo.age = 50 /* Diff here */
    }
    return {ninjaOne,updateNinjaOne,ninjaTwo,updateNinjaTwo}
    /* ----------------- */
    console.log('setup')
    const p = ref(null)
    /* const name = ref('maro') */
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
