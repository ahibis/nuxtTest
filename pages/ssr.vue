<script setup>
const img = await import("~/public/test.jpg")
useHead({
  link:[
    {
      rel: 'icon',
      href: "",
      type: 'image/jpg',
      crossorigin: 'anonymous'
    }
  ]
})
console.log(useRoute())
const a = useState("a", () => 1)
const {data: b}= useNuxtData("b")
b.value = 2
const { data: titles } = await useFetch("https://jsonplaceholder.typicode.com/todos/",
  {
    transform: todos => todos.map(({ title }) => title)
  })

const nuxtApp = useNuxtApp()
console.log(nuxtApp)
console.log(useRequestEvent())
console.log(useRequestURL())
//showError({ statusCode: 404, statusMessage: "Page Not Found" })
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
    <NuxtLink to="/ssr2">to ssr2</NuxtLink>
    <!-- <div v-for="title in titles">{{ title }}</div> -->
  </div>
</template>