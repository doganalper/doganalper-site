<script lang="ts" setup>
import type { CollectionEntry } from 'astro:content'
import capitalizeString from 'src/utils/capitalizeString'
import formatDate from 'src/utils/formatDate'

const props = defineProps<{
	entry: CollectionEntry<any>
}>()

const publishDate = formatDate(props.entry.data.publishDate)
</script>

<template>
	<div class="space-x-2.5 text-sm">
		<time :datetime="entry.data.publishDate">
			{{ publishDate }}
		</time>
		<span>-</span>
		<span>{{ capitalizeString(entry.data.tag) }}</span>
	</div>
</template>
