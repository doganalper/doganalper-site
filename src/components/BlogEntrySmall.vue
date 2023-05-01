<script setup lang="ts">
import type { BlogEntry } from 'src/types/blog'

const props = defineProps<{
	entry: BlogEntry
}>()

function capitalizeString(str: string): string {
	if (!str) {
		return ''
	}
	return str.charAt(0).toUpperCase() + str.slice(1)
}
const link = `/blog/${props.entry.data.tag}/${props.entry.slug}`
</script>

<template>
	<a class="flex flex-col space-y-1" :href="link">
		<h3 class="text-2xl font-semibold text-black dark:text-slate-200">
			{{ entry.data.title }}
		</h3>
		<div class="space-x-1 text-sm">
			<time datetime="{entry.data.publishDate}">
				{{ entry.data.publishDate }}
			</time>
			<span>-</span>
			<span>{{ capitalizeString(entry.data.tag) }}</span>
		</div>
		<p class="text-md">{{ entry.data.description }}</p>
	</a>
</template>
