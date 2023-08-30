<script setup lang="ts">
defineProps<{
	href: string
	text: string
	isOuterLink?: boolean
}>()
</script>

<template>
	<a
		:href="href"
		:target="isOuterLink ? '_blank' : '_self'"
		class="underline underline-offset-1 hover:text-black"
	>
		{{ text }}
	</a>
</template>
