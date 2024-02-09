<template>
	<div class="w-[1200px] flex justify-between items-center gap-3 mx-auto">
		<div class="menu-top1">دوره CMAS</div>
		<div class="menu-top2">دوره SNSI</div>
		<div class="menu-top3">کمک های اولیه (BLS)</div>
		<div class="menu-top4">مدیریت اکسیژن</div>
		<div class="menu-top5">نایتروکس</div>

		<div class="menu-top7">مدرسی غواصی</div>
		<div class="menu-top7">غواصی کودکان</div>
	</div>
</template>

<script setup></script>

<style scoped>
[class*="menu-top"]{
    @apply py-4 px-3;
}
[class*="menu-top"]:hover {
@apply bg-indigo-600 cursor-pointer text-white;
}
</style>
