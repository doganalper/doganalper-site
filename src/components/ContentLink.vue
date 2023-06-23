<script setup lang="ts">
defineProps<{
	href: string
	text: string
	isOutLink: boolean
}>()
</script>

<template>
	<a
		:href="href"
		:target="isOutLink ? '_blank' : '_self'"
		class="underline underline-offset-1 dark:hover:text-white hover:text-black"
	>
		{{ text }}
	</a>
</template>
