<script lang="ts" setup>
import type { CollectionEntry } from 'astro:content'
import capitalizeString from 'src/utils/capitalizeString'
import formatDate from 'src/utils/formatDate'
import { computed } from 'vue'

const props = defineProps<{
	entry: CollectionEntry<'blog'>
}>()

const publishDate = formatDate(props.entry.data.publishDate, {
	locale: props.entry.data.language || 'en',
	weekday: false
})

const tags = {
	tr: {
		'development': "Yazılım",
		'travel': "Gezi",
		'life': 'Hayat'
	},
	en: {
		'development': "Development",
		'travel': "Travel",
		'life': 'Life'
	}
}

const tag = computed(() => {
	return tags[props.entry.data.language || 'en'][props.entry.data.tag]
})

const time = computed(() => {
	return props.entry.data.publishDate.toISOString()
})
</script>

<template>
	<div class="space-x-2.5 text-sm">
		<time :datetime="time">
			{{ publishDate }}
		</time>
		<span>-</span>
		<span>{{tag}}</span>
	</div>
</template>
