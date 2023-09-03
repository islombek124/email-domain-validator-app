<script setup lang="ts">
const { results } = defineProps<{
  results: object
}>()
</script>

<template>
  <table w-full px-2>
    <thead uppercase text="lg blue-400">
      <tr>
        <th scope="col">
          information
        </th>
        <th scope="col">
          result
        </th>
      </tr>
    </thead>
    <tbody text-lg capitalize>
      <tr v-for="(e, i) in Object.entries(results)" :key="i">
        <td>{{ e[0] }}</td>
        <td>{{ e[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
thead, tbody, td, th {
  border: 1px solid white;
  padding: .7em .2em;
}
</style>
