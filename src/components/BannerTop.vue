<template>
  <div class="paragragh">
    <p>blue star diving school</p>
    <p>scuba</p>
    <p>freediving</p>
    <p>snokering</p>
    <p>cmag</p>
    <p>snsi</p>
    <p>diving</p>
    <p>courses</p>
    <p>equipment</p>
  </div>
</template>

<script>
  import gsap from 'gsap'
  import SplitTextJs from 'split-text-js'

  export default {
    setup() {},
    data() {
      return {
        splitText: null
      }
    },
    mounted() {
      const titles = gsap.utils.toArray('p')
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      titles.forEach((title) => {
        const splitTitle = new SplitTextJs(title)
        tl.from(
          splitTitle.chars,
          {
            opacity: 0,
            y: 12.5,
            rotateX: -110,
            stagger: 0.1
          },
          '+=0.5'
        ).to(
          splitTitle.chars,
          {
            y: -12.5,
            rotateX: 110,
            opacity: 0,
            stagger: 0.1
          },
          '+=0.5'
        )
      })
    }
  }
</script>

<style>
  .paragragh {
    font-family: emberfont;
    font-size: 25px;
    text-align: middle;
    @apply text-teal-200;
  }
  p {
    font-size: 25px;
    text-align: center;
    margin: 0;
    line-height: 0;
  }
</style>
