<script setup lang="ts">
defineProps<{
	href: string
	nofollow?: boolean
	name: string
}>()
</script>

<template>
	<a
		:href="href"
		target="_blank"
		class="text-2xl external-link inline"
		:aria-label="name"
		:rel="nofollow ? 'nofollow' : 'noreferrer'"
	>
		<svg
			height="16"
			width="16"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			class="inline fill-[#94A3B8] hover:fill-black"
		>
			<g>
				<path
					d="M1,16a1,1,0,0,1-.707-1.707l5-5a1,1,0,0,1,1.414,1.414l-5,5A1,1,0,0,1,1,16Z"
				/>
				<path
					d="M.966,10.792,2.488,9.269l-.055-.128c-.006-.016-.576-1.584.275-2.435l4.03-4.03c.842-.842,2.4-.287,2.4-.288h0l.163.07L10.823.935,9.89.535C9.777.491,7.1-.511,5.323,1.263l-4.03,4.03C-.48,7.064.523,9.746.581,9.894Z"
				/>
				<path
					d="M5.208,15.034l1.523-1.522.128.055c.016.006,1.584.576,2.435-.275l4.03-4.03c.842-.842.287-2.4.288-2.4h0l-.07-.163,1.523-1.523.4.933c.044.113,1.046,2.794-.728,4.567l-4.03,4.03c-1.771,1.773-4.453.77-4.6.712Z"
				/>
				<path
					d="M10,7a1,1,0,0,1-.707-1.707l5-5a1,1,0,0,1,1.414,1.414l-5,5A1,1,0,0,1,10,7Z"
				/>
			</g>
		</svg>
	</a>
</template>
