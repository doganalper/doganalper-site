<script setup lang="ts">
import AboutExperiences from 'src/components/AboutExperiences.vue'

const yearCount = new Date().getFullYear() - 2021 + 1
</script>

<template>
	<section class="space-y-5">
		<p class="text-lg">
			Frontend Developer, based in 📍İstanbul, Türkiye
			<br />
			I have {{ yearCount }} years experience using mostly VueJs and it's
			ecosystem. I like building CLI applications for my personal use and
			currently learning how to develop plugins for neovim.
		</p>
		<AboutExperiences />
	</section>
</template>
