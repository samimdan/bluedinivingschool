<template>
  <div
    class="container w-full h-full align-center flex justify-around items-center bg-gray-700 text-teal-200"
  >
    <div class="iems justify-self-end text-[30px] p-2">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="iems text-[18px] p-2"><span class="icon-cart"></span></div>
    <div class="iems text-[18px] p-2"><i class="fa-solid fa-bell"></i></div>
    <div class="iems text-[20px] p-2"><i class="fa-solid fa-headset"></i></div>
  </div>
</template>
<script>
  /**
   * Component: LogoLeft
   * Description: This component represents the left side of the logo in the main section.
   */
  /**
   * Import the gsap library for animation.
   */
  import gsap from 'gsap'
  export default {
    setup() {},
    data() {},
    mounted() {
      /**
       * Adds event listeners to the items and animates them on mouseenter and mouseleave events.
       * @param {Array} items - The items to apply the event listeners and animations to.
       */
      let items = gsap.utils.toArray('.iems')
      items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            y: -10,
            duration: 0.5,
            ease: 'power2.inOut',
            color: '#F43F5E',
            cursor: 'pointer'
          })
        })
      }),
        items.forEach((item) => {
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              y: 0,
              scale: 1,
              duration: 1,
              ease: 'none',
              color: '#99F6E4'
            })
          })
        })
    }
  }
</script>
<style scoped></style>
