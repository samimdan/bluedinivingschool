<template>
		<div  
			ref="position"
			class="flex flex-col justify-space-between align-middle absolute rounded-lg w-[300px] h-[300px] shadow-md border bordr-grey-100 px-md bg-white p-3 "
		>
			<span
				><i
					class="fa-solid fa-circle-xmark text-red-800 text-xl cursor-pointer hover:drop-shadow-md hover:text-orange-600"
					@click="closeLogin"
				></i
			></span>
			<div
				class="block text-center border-solid border-b-[1px] border-indigo-500 pb-3 mx-7"
			>
				ورود
			</div>
			<label class="mb-0">ایمیل</label>
			<div class="inline-block">
				<input
					class="w-full mb-2 mt-0 text-[11px] border-solid border-b-[1px] border-gray-400 outline-none opacity-50 focus:border-indigo-500"
					type="email"
					placeholder="ایمیل خود را وارد کنید"
					@focus="emailInputFocus"
					@focusout="emailInputFocousOut"
				/>
				<i
					ref="emailIcon"
					class="fa-solid fa-envelope absolute left-3 text-[15px] text-gray-400"
					:class="{'text-indigo-500':isEmailFocused}"
				></i>
			</div>
			<label class="block">کلمه عبور</label>
			<div class="inline-block">
				<input
					type="password"
					name=""
					class="w-full border-solid border-b-[1px] border-gray-400 text-[11px] outline-none opacity-50 focus:border-indigo-500 "
					@focus="passwordInputFocus"
					@focusout="passwordInputFocousOut"
					placeholder="کلمه عبور را وارد کنید"
				/>
				<i
					class="fa-solid fa-lock absolute left-3 text-[15px] text-gray-400"
					:class="{'text-indigo-500':isPasswordFocused}"
				></i>
			</div>
			<label class="block"></label>
			<div class="flex justify-start pb-3 text-blue-400">
				<span ml-2><a href="#">فراموشی کلمه عبور</a></span>
			</div>
			<div class="flex justify-space-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 hover:shadow-md text-white px-5 py-2 rounded"
				>
					ثبت نام
				</button>
				<button
					type="button"
					class="bg-blue-500 hover:bg-blue-700 hover:shadow-md text-white px-5 py-2 rounded"
				>
					ورود
				</button>
			</div>
		</div>
</template>
<script>
import {ref} from'vue'
import gsap from 'gsap'
export default {

	props: ["top", "left"],
	data() {
		return {
			topPosition: this.top,
			leftPostion: this.left,
			passwordIcon:'',
			isEmailFocused:false,
			isPasswordFocused:false,
			unMounted:false,
			mounted:false
		};
	},
	methods: {
		closeLogin() {
			this.$emit("loginClose");
		},
		passwordInputFocus(e){
			this.isPasswordFocused=true;
		},
		passwordInputFocousOut(e){
			this.isPasswordFocused=false;
		},
			emailInputFocus(e){
			this.isEmailFocused=true;
		},
		emailInputFocousOut(e){
			this.isEmailFocused=false;
		}
	},
	beforeMount() {
		this.topPosition = +62;
	},
	mounted() {
		this.$refs.position.style.top = this.topPosition + "px";
		this.$refs.position.style.left = this.leftPostion + "px";
	},
	beforeUnmount() { 
	},
};
</script>
<style scoped>
</style>
