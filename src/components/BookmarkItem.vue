<script lang="ts" setup>
import type { Bookmark } from 'src/types/raindrop'
import capitalizeString from 'src/utils/capitalizeString'

defineProps<{
	bookmark: Bookmark
}>()
</script>

<template>
	<div
		class="text-lg space-y-0.5 text-gray-600 hover:text-inherit transition-colors"
	>
		<a :href="bookmark.link" target="_blank" class="line-clamp-2" :title="bookmark.title">
			{{ bookmark.title }}
		</a>
		<div class="flex flex-wrap gap-2 text-xs">
			<div
				v-for="tag in bookmark.tags"
				:key="tag"
				class="border border-gray-400 rounded-full py-0.5 px-2 cursor-default"
			>
				{{ capitalizeString(tag) }}
			</div>
		</div>
	</div>
</template>
