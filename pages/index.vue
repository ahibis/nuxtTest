<script setup>
const route = useRoute()
const text = ref("")
onMounted(() => {
  console.log(1)
})
function ax(a){
  let b = 1
  return a.replaceAll(/\"|“|”/g,(_,i)=>(b = b-1, b % 2 ? "»" : "«"))
}
const result = computed(()=>ax(text.value))
</script>

<template>
  <div style="display: flex">
  <textarea v-model="text" style="width: 300px; height:300px"></textarea><br>
  <textarea v-model="result" style="width: 300px; height:300px"></textarea>
  </div>
  <nuxt-link to="/draw">fdf</nuxt-link>
  <!-- <nuxt-img 
    src="/test.jpg" 
    width="3000px"
    style="width:100vw"
    format="webp"
    preload
  /> -->
</template>
