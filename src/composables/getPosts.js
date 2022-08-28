import {ref} from 'vue'

const getPosts = ()=>{
    const posts = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            /* Delay */
            /* await new Promise(resolve => {
                setTimeout(resolve,2000)
            }) */
            /*    
            Firebase
            const res = await projectFirestore.collection('posts').get()
            // console.log(res.docs)

            posts.value = res.docs.map(doc => {
                // console.log(doc.data())
                return { ...doc.data(), id: doc.id }
            }) */
            let data = await fetch('http://localhost:3000/posts')
            if(!data.ok){
                throw Error('No data Available')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return {posts,error,load}
}
export default getPosts