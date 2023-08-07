<script setup>
const a = useState("a", () => 1)
const {data: b}= useNuxtData("b")
</script>
<template>
  <div>
    <h2>TEST</h2>
    <div>
      {{ a }}<button @click="a += 1">a++</button>
    </div>
    <div>
      {{ b }}<button @click="b += 1">b++</button>
    </div>
  </div>
</template>