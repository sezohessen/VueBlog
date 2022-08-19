<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>
  </div>
</template>
<script>
import PostList from '../components/PostList.vue'
import {ref} from 'vue'
export default {
  name: 'HomeView',
  components:{PostList},
  setup() {
      const posts = ref([
          {title:'title one',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati repellendus, tempora odio molestias corporis, laborum maiores nostrum atque, quod perferendis? Deserunt iure qui vitae expedita quasi aperiam, dolore blanditiis ipsa sed doloribus enim vel corrupti maxime ex commodi voluptatum perferendis ipsam deleniti officiis quos! Voluptas consectetur laudantium rerum dolores non eveniet magni quos ex distinctio quam perferendis cum mollitia vel delectus ducimus, explicabo accusantium quasi ab enim quisquam aliquid laborum voluptatum quae. Iure inventore ratione exercitationem! Quibusdam soluta tempora pariatur suscipit iste, quos ex ullam nobis doloribus odit adipisci porro? Tempore, magnam? Qui nihil dolor distinctio deleniti, repellat voluptas!',id:1},
          {title:'title two',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aspernatur quasi nulla qui quia tempora eaque obcaecati culpa. Pariatur commodi fuga beatae officiis alias consequatur quidem cum facere animi ipsam.',id:2}
      ])
    return {posts}
  },
}
</script>
