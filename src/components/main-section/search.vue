<template>
	<div class="flex justify-center align-center mt-7 mx-15 relative">
		<input
			type="search"
			class="border-solid border-2 border-indigo-500 p-3 w-full rounded-lg focus: border-indigo-400 rtl text-right"
			:placeholder="typeValue"
		/>
		<button
			class="absolute top-0 left-[2px] py-[6px] px-2 rounded-tl-md rounded-bl-md text-lg bg-indigo-500 text-white"
		>
			<i class="fa-solid fa-magnifying-glass mt-2"></i>
		</button>
	</div>
</template>
<script>
export default {
	name: "typeWiriter",
	data: () => {
		return {
			typeValue: "",
			typeStatus: false,
			displayTextArray: [
				"کالا یا دورهی مورد نظر را وارد کنید",
				"در صورت نارضایتی از دوره مدرس شما عوض می شود",
				"کالا های  ماهفت روز ضمانت بازگشت کالا دارد",
			],
			typingSpeed: 100,
			erasingSpeed: 100,
			newTextDelay: 2000,
			displayTextArrayIndex: 0,
			charIndex: 0,
		};
	},
	props: {},
	created() {
		setTimeout(this.typeText, this.newTextDelay + 200);
	},
	methods: {
		typeText() {
			if (
				this.charIndex <
				this.displayTextArray[this.displayTextArrayIndex].length
			) {
				if (!this.typeStatus) this.typeStatus = true;
				this.typeValue += this.displayTextArray[
					this.displayTextArrayIndex
				].charAt(this.charIndex);
				this.charIndex += 1;
				setTimeout(this.typeText, this.typingSpeed);
			} else {
				this.typeStatus = false;
				setTimeout(this.eraseText, this.newTextDelay);
			}
		},
		eraseText() {
			if (this.charIndex > 0) {
				if (!this.typeStatus) this.typeStatus = true;
				this.typeValue = this.displayTextArray[
					this.displayTextArrayIndex
				].substring(0, this.charIndex - 1);
				this.charIndex -= 1;
				setTimeout(this.eraseText, this.erasingSpeed);
			} else {
				this.typeStatus = false;
				this.displayTextArrayIndex += 1;
				if (this.displayTextArrayIndex >= this.displayTextArray.length)
					this.displayTextArrayIndex = 0;
				setTimeout(this.typeText, this.typingSpeed + 1000);
			}
		},
	},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
h1 {
	font-size: 6rem;
	font-weight: normal;
}
.blinking-cursor {
	font-size: 6rem;
	color: #2c3e50;
	-webkit-animation: 1s blink step-end infinite;
	-moz-animation: 1s blink step-end infinite;
	-ms-animation: 1s blink step-end infinite;
	-o-animation: 1s blink step-end infinite;
	animation: 1s blink step-end infinite;
}
@keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #2c3e50;
	}
}
@-moz-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #2c3e50;
	}
}
@-webkit-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #2c3e50;
	}
}
@-ms-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #2c3e50;
	}
}
@-o-keyframes blink {
	from,
	to {
		color: transparent;
	}
	50% {
		color: #2c3e50;
	}
}
</style>
