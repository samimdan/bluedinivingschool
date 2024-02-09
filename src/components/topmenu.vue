<template>
	<div
		ref="container"
		class="flex flex-row-reverse justify-space-around items-center gap-7 text-no-wrap bg-gray-700 text-white text-[13px] relative h-[100%]"
	>
		<div ref="home" title="خانه" class="relative rounded px-7 h-[94%] py-7">
			خانه
		</div>
		<div ref="shop" title="فروشگاه" class="relative rounded px-7 h-[94%] py-7">
			فروشگاه
		</div>
		<div
			ref="courses"
			title="دوره های آموزشی"
			class="relative rounded px-[4px] h-[94%] py-7"
		>
			دوره های آموزشی
		</div>
		<div
			ref="Instructor"
			title="مدرسی غواصی"
			class="relative rounded px-[10px] h-[94%] py-7"
		>
			مدرسی غواصی
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			refElements: [],
		};
	},
	mounted() {
		this.refElements = [
			this.$refs.home,
			this.$refs.shop,
			this.$refs.courses,
			this.$refs.Instructor,
		];
		this.refElements.forEach((element) => {
			element.addEventListener("mouseenter", () => {
				element.classList.add("border-hover");
			});
			element.addEventListener("mouseleave", () => {
				element.classList.remove("border-hover");
			});
		});
	},
};
</script>
<style>
:root {
	--tw-gradient-stops: rgb(0 0 0 /0%) 70%, rgb(11 78 230/9%) 80%,
		rgb(0 220 255) 100%;
}
[class*="header-nav"] {
	@apply text-white  cursor-pointer;
}
.icon-home-hover {
	@apply: text-2xl text-indigo-500 align-middle;
}
.border-hover {
	overflow: hidden;
	position: relative;
	cursor: pointer;
}
.border-hover::before {
	content: "";
	position: absolute;
	width: 150%;
	height: 150%;
	background: conic-gradient(
		from 0deg,
		rgb(0 0 0 /0%) 70%,
		rgb(11 78 230/9%) 80%,
		rgb(0 220 255) 100%
	);
	left: -25%;
	top: -25%;
	animation: rotate 3s linear infinite;
}
.border-hover::after {
	position: absolute;
	width: 80%;
	height: 80%;
	@apply bg-gray-700;
	content: attr(title);
	left: 10%;
	top: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.for-div div {
	/* border: 1px solid #fff; */
}
</style>
