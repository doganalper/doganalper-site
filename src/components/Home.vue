<script setup lang="ts">
import SocialPlatforms from 'src/constants/social'
import { onMounted, ref } from 'vue'

const overDiv = ref<HTMLDivElement | null>(null)
onMounted(() => {
	setInterval(() => {
		const displayed = overDiv.value?.classList.contains('w-full')

		if (displayed) {
			overDiv.value?.classList.remove('w-full')
			overDiv.value?.classList.add('w-0')
		} else {
			overDiv.value?.classList.add('w-full')
			overDiv.value?.classList.remove('w-0')
		}
	}, 3000)
})
</script>

<template>
	<section>
		<div class="md:col-span-6 space-y-3">
			<h1 class="text-4xl">
				Hello, I'm
				<div class="inline relative">
					<strong class="text-black">Alper</strong>
					<div
						class="absolute w-0 right-0 inline bg-neutral-100 h-full transition-all duration-[850ms] ease-out"
						ref="overDiv"
					></div>
				</div>
			</h1>
			<div class="flex space-x-2">
				<a
					v-for="platform in SocialPlatforms"
					:key="platform.name"
					:href="platform.href"
					rel="noreferrer"
					class="external-link"
					target="_blank"
				>
					{{ platform.name }}
				</a>
			</div>
		</div>
	</section>
</template>
