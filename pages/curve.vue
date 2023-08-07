<template>
  <div>
    <div class="table">
    Направление точки A
    <input type="range" min="-1.571" max="1.571" step="0.1" v-model.number="points.a">
    Направление точки B
    <input type="range" min="-1.571" max="1.571" step="0.1" v-model.number="points.b">
    Направление точки C
    <input type="range" min="-1.571" max="1.571" step="0.1" v-model.number="points.c">
    Направление вектора AB
    <input type="range" min="-1.571" max="1.571" step="0.1" v-model.number="vectors.ab">
    Направление вектора BC
    <input type="range" min="-1.571" max="1.571" step="0.1" v-model.number="vectors.bc">
    A - AB + B - AB + B - BC + C - BC
    <span>{{ difference }}</span>
    </div>
    
  </div>
</template>
<script setup>
const {PI} = Math
const points = reactive({
  a:0,
  b:0,
  c:0
})
const vectors = reactive({
  ab:PI/4,
  bc:-PI/4
})
const difference = computed(()=>{
  const {a,b,c} = points
  const {ab, bc} = vectors
  return a - ab + b - ab + b - bc + c - bc
})
</script>
<style>
.table{
  display:grid; 
  grid-template-columns: 20% 1fr;
}
.table input{
  width: 100%;
}
</style>