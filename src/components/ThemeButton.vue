<script setup lang="ts">
import { useTheme, type Theme } from 'src/utils/theme'
import { onMounted, ref } from 'vue'

let theme = ref<Theme>()
onMounted(() => {
	theme.value = useTheme().theme
})

function setTheme() {
	theme.value = useTheme().setTheme()
}
</script>

<template>
	<button @click="setTheme">
		{{ theme === 'dark' ? 'Light' : 'Dark' }} Theme
	</button>
</template>
