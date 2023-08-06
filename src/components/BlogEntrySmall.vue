<script setup lang="ts">
import type { BlogEntry } from 'src/types/blog'
import BlogPostMetaInfo from 'src/components/BlogPostMetaInfo.vue'

const props = defineProps<{
	entry: BlogEntry
}>()

const link = `/blog/${props.entry.data.tag}/${props.entry.slug}`
// const languageText = `[${props.entry.data.language}] `
</script>

<template>
	<a class="flex flex-col space-y-1" :href="link">
		<h3 class="text-2xl font-semibold text-black">
			{{ entry.data.title }}
			{{ entry.data.draft && '(DRAFT)' }}
		</h3>
		<BlogPostMetaInfo :entry="entry" />
		<p class="text-md">{{ entry.data.description }}</p>
	</a>
</template>
