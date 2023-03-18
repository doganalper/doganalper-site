<script setup lang="ts">
import Job from 'src/constants/job'
import AboutExperience from 'src/components/AboutExperience.vue'
</script>

<template>
	<section class="space-y-3">
		<h2 class="section-header">Experiences</h2>
		<ul class="space-y-3 section-body">
			<AboutExperience
				v-for="experience in Job.previous"
				:key="experience.company"
				:experience="experience"
			/>
		</ul>
	</section>
</template>
