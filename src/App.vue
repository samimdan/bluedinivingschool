<template>
	<div class="grid-items1"><LogoLeft /></div>
	<div class="grid-items2"><TopMenu /></div>
	<div class="grid-items3"><BannerTop /></div>
	<div class="grid-items4"></div>
	<div class="grid-items5"><Search /></div>
	<div class="grid-items6"><LogoRight /></div>
	<div class="grid-items7"></div>
	<div class="grid-items8"></div>
	<div class="grid-items9"></div>
	<div class="grid-items10"></div>
	<div class="grid-items11"></div>
	<div class="grid-items12"></div>
	<div class="grid-items13"></div>
	<div class="grid-items14"></div>
	<!-- 	
		<SiteNavigation class="absolute h-[10%]" @loginClick="showLogin" />
		  <Base  class=" absolute h-[30%] boder-solid border-2 border-black mt-[5%]"/>
		<transition name="v">
			<LogIn v-if="LogIn" :top="top" :left="left" @loginClose="loginClose" />
		</transition>
		<SlideBar class="absolute h-[30%] mt-[17%]" />
		<RouterView />   -->
</template>
<script>
import { onMounted } from "vue";

import { ref } from "vue";
import { RouterView } from "vue-router";
import LogoLeft from "./components/main-section/logo-left.vue";
import TopMenu from "./components/topmenu.vue";
import BannerTop from "./components/BannerTop.vue";
import LogoRight from "./components/main-section/logo-right.vue";
import Search from "./components/main-section/search.vue";
import SiteNavigation from "./components/siteNavigation.vue";
import Base from "./components/main-section/base.vue";
import MenuTop from "./components/menutop/menutop.vue";
import LogIn from "./components/sigin/login.vue";
import SlideBar from "./components/slidebar.vue";
import SplitTextJs from "split-text-js";
export default {
	name: "App",
	components: {
		TopMenu,
		BannerTop,
		LogoRight,
		LogoLeft,
		Search,
	},
	setup() {},
	data() {
		return {
			LogIn: false,
			top: 0,
			left: 0,
		};
	},
	mounted() {},
	methods: {
		showLogin(topPositon, leftPosition) {
			this.LogIn = true;
			this.top = topPositon;
			this.left = leftPosition;
		},
		loginClose() {
			this.LogIn = false;
		},
	},
};
</script>
<style>
.sal {
	height: 50%;
}
.v-enter-active,
.v-leave-active {
	transition: opacity 1s ease;
}
.v-enter-from,
.v-leave-to {
	opacity: 0;
}
[class^="grid-items"] {
	border: 1px solid #000;
}
.grid-items1 {
	grid-row: 1;
	grid-column: 1 / 4;
}
.grid-items2 {
	grid-row: 1;
	grid-column: 4 / 14;
}
.grid-items3 {
	grid-row: 1;
	grid-column: 14 / 18;
	display: flex;
	justify-content: center;
	align-items: center;
	@apply bg-gray-700;
}
.grid-items4 {
	grid-row: 2/5;
	grid-column: 1 / 4;
}
.grid-items5 {
	grid-row: 2/4;
	grid-column: 4 / 14;
}
.grid-items6 {
	position: relative;
	grid-row: 2/5;
	grid-column: 14 / 18;
}
.grid-items7 {
	grid-row: 5/14;
	grid-column: 1 / 4;
}
.grid-items8 {
	grid-row: 5/14;
	grid-column: 4 / 14;
}
.grid-items9 {
	grid-row: 5/14;
	grid-column: 14 / 18;
}
.grid-items10 {
	grid-row: 4;
	grid-column: 4/6;
}
.grid-items11 {
	grid-row: 4;
	grid-column: 6/8;
}
.grid-items12 {
	grid-row: 4;
	grid-column: 8/10;
}
.grid-items13 {
	grid-row: 4;
	grid-column: 10/12;
}
.grid-items14 {
	grid-row: 4;
	grid-column: 12/14;
}
</style>
