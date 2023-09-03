<script setup lang="ts">
const emit = defineEmits<{
  (e: 'sendData', val: object): void
}>()
const term = ref<string>()
async function handleSubmit() {
  if (!term)
    return
  const { data } = await useFetch('/api', {
    query: {
      domain: term,
    },
    pick: ['valid', 'block', 'disposable', 'domain', 'text', 'reason'],
  })
  emit('sendData', data.value)
}
</script>

<template>
  <div mx-auto>
    <form flex items-center gap-4 @submit.prevent="handleSubmit">
      <input v-model="term" p="x4 y2" w-full rounded-sm text-black outline-none type="text" placeholder="demo@gmail.com">
      <button p="x8 y2" rounded-sm bg-blue-500 capitalize text-white>
        Validate
      </button>
    </form>
  </div>
</template>
