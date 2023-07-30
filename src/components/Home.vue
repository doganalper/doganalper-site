<script setup lang="ts">
import SocialPlatforms from 'src/constants/social'
</script>

<template>
	<section>
		<div class="md:col-span-6 space-y-3">
			<h1 class="text-4xl text-black dark:text-white">Hello, I'm <strong>Alper</strong></h1>
			<p class="text-lg">
				Frontend Developer, based in 📍İstanbul, Türkiye
			</p>
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
