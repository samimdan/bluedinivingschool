<template>
  <div class="flex items-center mr-1 text-white">
    <div class="icon-scubahoriz text-5xl"></div>
  </div>
  <div
    class="flex justify-between items-center text-center gap-4 basket-menu text-white text-[15px] ml-4"
  >
    <i class="fa-solid fa-cart-shopping"></i>
    <i class="fa-solid fa-bell"></i>
    <i
      ref="loginIconPosition"
      @click="loginClick"
      class="fa-solid fa-circle-user text-4xl hover:shadow-md cursor-pointer transition-colors duration-1000 hover:text-cyan-400"
      id="login-account-icon"
    ></i>
  </div>
</template>
<script>
  import gsap from 'gsap'
  import { TextPlugin } from 'gsap/TextPlugin'
  gsap.registerPlugin(TextPlugin)
  export default {
    setup() {},
    props: {},
    data() {
      return {
        topPositon: 0,
        leftPosition: 0,
        elements: []
      }
    },
    mounted() {
      this.topPositon = this.$refs.loginIconPosition.offsetTop
      this.leftPosition = this.$refs.loginIconPosition.offsetLeft
      this.elements.push(this.$refs.home)
      this.$refs.home.addEventListener('mouseenter', () => {
        this.$refs.home.classList.add('hollo')
        console.log('hollo')
      })
      this.$refs.home.addEventListener('mouseleave', () => {
        this.$refs.home.classList.remove('hollo')
        console.log('hollo remove')
      })
    },
    methods: {
      loginClick() {
        this.$emit('loginClick', this.topPositon, this.leftPosition)
      }
    }
  }
</script>
<style type="css">
  /**
 * Applies the `text-white` and `cursor-pointer` styles to elements with a class attribute containing the string "header-nav".
 */
  [class*='header-nav'] {
    @apply text-white cursor-pointer;
  }
  .icon-home-hover {
    @apply text-2xl text-indigo-500 align-middle;
  }
  .hollo {
    overflow: hidden;
    top: -14px;
    left: -10px;
    text-align: center;
  }
  .hollo::before {
    position: absolute;
    width: 110%;
    height: 110%;
    background: conic-gradient(
      from 0deg,
      rgb(0 0 0 /0%) 70%,
      rgb(11 78 230/9%) 80%,
      rgb(0 220 255) 100%
    );
    content: '';
    left: -25%;
    top: -25%;
    animation: rotate 2s linear infinite;
  }
  .hollo::after {
    position: absolute;
    width: 98%;
    height: 98%;
    background-color: #4b5563ff;
    content: 'خانه';
    left: 1%;
    top: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>
