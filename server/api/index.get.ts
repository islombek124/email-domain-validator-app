export default defineEventHandler(async (event) => {
  const { API_BASE_URI, API_KEY, API_HOST } = useRuntimeConfig()
  const { domain } = getQuery(event)

  const data = await $fetch(API_BASE_URI, {
    params: {
      domain,
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  }).catch(err => err.data)
  return data
})
