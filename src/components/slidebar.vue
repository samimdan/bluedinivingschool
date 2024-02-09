/** * @author Samim danesh amoz * @email samim.danesh@hotmail.com * @create date
2024-01-23 10:53:04 * @modify date 2024-01-23 10:53:04 * @desc [description] */
<template>
	<div class="slider-container relative w-full mx-auto mb-10">
		<!-- <div class="video-wrapper relative w-full  overflow-hidden mx-auto ">
			<video class="absoulte top-0 left-0" palysinline loop muted autoplay>
				<source src="../image/videos/Waves.mp4" type="video/mp4" />
			</video>
		</div> -->
		<div
			class="slide-wrapper flex w-full absolute justify-center mx-auto top-0 left-0"
		>
			<div
				class="flex-initail text-teal-300 bg-gray-900/20 m-2 rounded-md flex flex-col justify-center items-center border-solid border-[1px] border-teal-800"
			>
				<div
					class="slide-info-rigth border-solid border-b-2 pb-5 px-9 border-teal-300"
				>
					<img
						src="../image/svg/cmas-small.svg"
						width="70px"
						alt=""
						srcset=""
					/>
				</div>
				<div class="slide-info-rigth2 mt-3 mr-2">
					یک کنفدراسیون بین‌المللی دربر گیرنده فعالیت‌های زیر آبی است
				</div>
				<div class="slide-info-rigth3 mr-2">
					<p class="mt-9">
						CMAS دارای سیستم نامگذاری ستاره‌ای برای دوره‌های غواصی است:
					</p>
					<p class="mt-3"><b>دوره‌های غواصی</b></p>
					<ul>
						<li>غواص یک ستاره</li>
						<li>غواص دو ستاره</li>
						<li>غواص سه ستاره</li>
					</ul>
					<p class="mt-3"><b>دوره‌های اسنورکلینگ</b></p>
					<ul>
						<li>اسنورکلر یک ستاره</li>
						<li>اسنورکلر دو ستاره</li>
						<li>اسنورکلر سه ستاره</li>
					</ul>
				</div>
			</div>
			<transition
				appear
				name=" slids"
				@beforeEnter="beforeEnter"
				@enter="enter"
			>
				<div class="slide1 flex-initial w-[700px]">
					<img :src="slide[1]" class="h-full" alt="" srcset="" />
				</div>
			</transition>
			<div
				class="flex-initai w-[250px] bg-gray-900/30 m-2 rounded-md flex flex-col justify-center items-center text-yellow-200"
			>
				<div
					class="slide-info-rigth border-solid border-b-2 pb-5 border-yellow-300 mr-2"
				>
					<img
						src="../image/svg/SNSIREC_2020.svg"
						width="150px"
						alt=""
						srcset=""
					/>
				</div>
				<div class="slide-info-rigth2 mt-3 mr-2">
					یک کنفدراسیون بین‌المللی دربر گیرنده فعالیت‌های زیر آبی است
				</div>
				<div class="slide-info-rigth3">
					<p class="mt-9">
						CMAS دارای سیستم نامگذاری ستاره‌ای برای دوره‌های غواصی است:
					</p>
					<p class="mt-3"><b>دوره‌های غواصی</b></p>
					<ul>
						<li>غواص یک ستاره</li>
						<li>غواص دو ستاره</li>
						<li>غواص سه ستاره</li>
					</ul>
					<p><b>دوره‌های اسنورکلینگ</b></p>
					<ul>
						<li>اسنورکلر یک ستاره</li>
						<li>اسنورکلر دو ستاره</li>
						<li>اسنورکلر سه ستاره</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
	data() {
		return {
			slideImgs: [
				"./src/image/slide/Bls.jpg",
				"./src/image/slide/fix-slide.jpg",
				"./src/image/slide/diveUnderWater.jpg",
				"./src/image/slide/repaire.jpg",
				"./src/image/slide/sell-slide.jpg",
				"./src/image/slide/slide-freedive.jpg",
				"./src/image/slide/snsi-progress.jpg",
			],
			slide: "",
		};
	},
	setup() {
		const beforeEnter = (el) => {
			el.style.transform = "translateX(-100%)";
			el.style.opacity = 0;

			console.log(this.slide[0]);
		};

		const enter = (el) => {
			el.style.transform = "translateX(0%)";
			el.style.opacity = 1;
		};
	},
	mounted() {
		this.slide = this.slideImgs;
	},
};
</script>
<style>
ul {
	line-height: 2;
}

li {
	margin-right: 15px;
}
</style>
