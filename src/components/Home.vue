<script setup lang="ts">
import SocialPlatforms from 'src/constants/social'
</script>

<template>
	<section>
		<div class="md:col-span-6 space-y-3">
			<h1 class="text-4xl">
				Hello, I'm
				<strong class="text-black">Alper</strong>
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
