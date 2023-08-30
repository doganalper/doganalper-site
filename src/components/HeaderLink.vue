<script setup lang="ts">
import type { IRouteItem } from 'src/types/route'
interface Props {
	route: IRouteItem
	currentPathname: string
}
const props = defineProps<Props>()

const to = `${props.route.href}`

const isBlog =  props.currentPathname.includes('blog') && to.includes('blog')
const isActive = isBlog ? true : to === props.currentPathname
</script>

<template>
	<li role="menuitem" class="flex space-x-1 items-center" v-if="route.soon">
		<span>{{ route.text }}</span>
		<span class="text-xs">(soon)</span>
	</li>
	<li role="menuitem" v-else>
		<a
			:href="to"
			:class="{
				'text-black font-semibold underline underline-offset-2': isActive,
				'text-zinc-600': !isActive
			}"
			>{{ route.text }}</a
		>
	</li>
</template>
