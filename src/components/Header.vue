<script setup lang="ts">
import Routes from 'src/constants/routes'
import HeaderLink from 'src/components/HeaderLink.vue'

defineProps<{
	pathname: string
}>()
</script>

<template>
	<header>
		<nav role="navigation">
			<ul role="menu" class="flex space-x-6">
				<HeaderLink
					v-for="route in Routes"
					:route="route"
					:current-pathname="pathname"
				/>
			</ul>
		</nav>
	</header>
</template>
