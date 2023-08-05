<script setup lang="ts">
defineProps<{
	href: string
	text: string
	isOutLink?: boolean
}>()
</script>

<template>
	<a
		:href="href"
		:target="isOutLink ? '_blank' : '_self'"
		class="underline underline-offset-1 hover:text-black"
	>
		{{ text }}
	</a>
</template>
