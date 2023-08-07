<template>
  <div>
    <input v-model="max"><br>
    <input v-model="line1"><br>
    <input v-model="line2">
    {{ result }}
  </div>
</template>
<script setup>
const max = ref(0)
const line1 = ref("")
const line2 = ref("")
const result = computed(()=>{
  const length = max.value
  const numbers1= line1
    .value
    .split(" ")
    .map(e=>Number(e))
  const numbers2= line2
    .value
    .split(" ").
    map(e=>Number(e))
  
  
})
</script>