<template>
  <div class="tag">
    <h1>All posts of {{tag}}</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="tagPostsOnly.length" class="layout">
        <PostList :posts="tagPostsOnly"/>
        <TagCloud :posts="posts"/>
    </div>
    <div v-else>
        <Spinner/>
    </div>
  </div>
</template>
<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import { computed, ref } from '@vue/runtime-core'
export default {
    name:'Tag',
    props:['tag'],
    components:{PostList,Spinner,TagCloud},
    setup(props) {
        const route = useRoute()
        const {posts,error,load} = getPosts()
        const tagPostsOnly = computed(()=>{
          return posts.value.filter((post)=> post.tags.includes(route.params.tag))
        })
        load()
        return {posts,error,tagPostsOnly}
  },
}
</script>

<style>

</style>