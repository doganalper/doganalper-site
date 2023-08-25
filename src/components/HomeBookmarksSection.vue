<script lang="ts" setup>
import BookmarkItem from 'src/components/BookmarkItem.vue'
import type { Bookmark } from 'src/types/raindrop'

defineProps<{
	bookmarks: Bookmark[]
}>()
</script>

<template>
	<div>
		<div class="space-y-2 sticky top-4">
			<h2 class="text-2xl">Latest Bookmarks</h2>
			<hr color="black" />
			<div class="space-y-4">
				<BookmarkItem
					v-for="(bookmark, index) in bookmarks"
					:key="index"
					:bookmark="bookmark"
				/>
			</div>
		</div>
	</div>
</template>
