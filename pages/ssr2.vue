<script setup>
const a = useState("a", () => 1)
const {data: b}= useNuxtData("b")
b.value = 2
</script>
<template>
  <div>
    <div>
      {{ a }}<button @click="a += 1">a++</button>
    </div>
    <div>
      {{ b }}<button @click="b += 1">b++</button>
    </div>
    <Test></Test>
    <NuxtLink to="/ssr">to ssr</NuxtLink>
    <!-- <div v-for="title in titles">{{ title }}</div> -->
  </div>
</template>
