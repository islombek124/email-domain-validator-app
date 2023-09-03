<script setup lang="ts">
const isShowResults = ref<boolean>(false)
const results = ref<object>()

function showResults(data: object) {
  results.value = data
  isShowResults.value = true
}

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div mx-auto max-w-xl space-y-6>
    <div space-y-4>
      <h1 text-5xl font-bold tracking-wide capitalize>
        Email <span text-blue-400>Validator</span> App
      </h1>
      <p text="xl blue-50" font-bold tracking-wide uppercase>
        check if an email address exist or not
      </p>
    </div>
    <TheInput @send-data="showResults" />
    <TheResults v-if="isShowResults" :results="results" origin-top transform-gpu duration-300 :class="[isShowResults ? 'scale-100' : 'scale-0']" />
    <AppFooter />
  </div>
</template>
