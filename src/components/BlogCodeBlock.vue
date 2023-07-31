<script setup lang="ts">
import { ref, useSlots } from 'vue'

const slots = useSlots()
let copyText = ref('Copy')
function copyCode() {
	const defaultSlot = slots.default
	if (!defaultSlot) {
		console.warn('No slot was provided to copy.')
		return
	}

	const slotContent = defaultSlot()!.at(0)?.props?.value
	const range = document.createRange()
	const slotDomContent = range.createContextualFragment(slotContent)
	range.selectNodeContents(slotDomContent)

	try {
		navigator.clipboard.writeText(range.toString())
		copyText.value = 'Copied!'

		setTimeout(() => {
			copyText.value = 'Copy'
		}, 1000)
	} catch (e) {
		console.warn('Something went wrong with copying the code.')
	}
}
</script>

<template>
	<div class="relative group bg-gray-800 text-sm">
		<div
			class="absolute right-3 top-1 hidden group-hover:block cursor-pointer text-gray-400"
			@click="copyCode"
		>
			{{ copyText }}
		</div>
		<slot />
	</div>
</template>
