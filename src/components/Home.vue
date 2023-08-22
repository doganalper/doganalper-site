<script setup lang="ts">
import SocialPlatforms from 'src/constants/social'
import { onMounted, ref } from 'vue'

const text = ref('Alper')
const defaultText = text.value.split('')
const restart = ref(false)
onMounted(() => {
	setInterval(() => {
		const currentLength = text.value.length

		if (restart.value) {
			const nextChar = defaultText[currentLength]
			if (!nextChar) {
				restart.value = false
				return
			}
			text.value = `${text.value}${nextChar}`
			return
		}

		if (currentLength !== 0) {
			text.value = text.value.slice(0, -1)
		} else {
			restart.value = true
		}
	}, 750)
})
</script>

<template>
	<section>
		<div class="md:col-span-6 space-y-3">
			<h1 class="text-4xl">
				Hello, I'm
				<strong class="text-black">{{ text }}</strong>
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
