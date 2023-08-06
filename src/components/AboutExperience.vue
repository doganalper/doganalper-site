<script setup lang="ts">
import type { IExperience } from 'src/types/job'
import LinkIcon from 'src/components/LinkIcon.vue'

const props = defineProps<{
	experience: IExperience
}>()

const dateStr = `${props.experience.dates[0]} - ${
	props.experience.dates[1] ?? 'Present'
}`
</script>

<template>
	<li class="space-y-1 text-xl">
		<details class="flex space-x-3" :open="!experience.dates[1]">
			<summary class="cursor-pointer">
				<h3 class="space-x-2 inline-flex items-center">
					<span class="no-underline">{{ experience.company }}</span>
					<span class="select-none">{{ dateStr }}</span>
					<LinkIcon
						class="-mt-2"
						:href="experience.href"
						nofollow
						:name="experience.company"
					/>
				</h3>
			</summary>
			<span class="pl-2 mt-2">
				<h4>{{ experience.role }}</h4>
				<p class="text-lg">{{ experience.companySummary }}</p>
				<ul class="list-disc pl-10 space-y-1 mt-2 text-base">
					<li v-for="sum in experience.roleSummary" :key="sum">
						{{ sum }}
					</li>
				</ul>
			</span>
		</details>
	</li>
</template>
