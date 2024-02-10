/** * Component: productionsmal.vue * Description: This component represents a
small ocean video. * It includes a video source from the
"../images/videos/Ocean.mp4" file. */
<template>
  <div class="w-full h-full relative">
    <video class="w-full h-full object-cover" muted loop autoplay preload>
      <source src="../images/videos/ocean-small.webm" type="" />
    </video>
    <svg x="0" y="0" width="100%" height="100%">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" />
          <text x="50%" y="90%" text-anchor="middle" fill="red">
            '&#xe915;'
          </text>
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>
  </div>
</template>
<script>
  import gsap from 'gsap'
  import TextPlugin from 'gsap/TextPlugin'
  gsap.registerPlugin(TextPlugin)
  export default {
    data() {
      let textSvgCode = [
        '&#xe915;',
        '&#xe90d;',
        '&#xe902;',
        '&#xe901;',
        '&#xe905;', //Snsi
        '&#xe904;',
        '&#xe903;',
        '&#xe900;',
        '&#xe90c;'
      ]
      return {
        textSvgCode
      }
    },
    /**
     * Mounts the component and initializes the animation timeline.
     * The animation timeline repeats indefinitely with a delay of 1 second between each repetition.
     * Each code in the textSvgCode array is animated sequentially.
     * The code starts with a scale of 0.5 and opacity of 0, then gradually scales up to 1 and becomes fully visible.
     * After a delay of 3 seconds, the code scales back down to 0.5 and fades out.
     * The animation duration for scaling and fading is 2 seconds.
     * The easing function used is 'power1.inOut'.
     */
    mounted() {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      this.textSvgCode.forEach((code) => {
        tl.set('text', {
          text: code,
          scale: 0.5,
          opacity: 0,
          duration: 2
        }),
        tl.to('text', {
          text: code,
          scale: 1,
          duration: 2,
          opacity: 1,
          ease: 'power1.inOut',
        }),
        tl.to('text', {
          delay: 3,
          text: code,
          scale: 0.5,
          opacity: 0,
          duration: 3,
          ease: 'power1.inOut'
        })
      })
    }}
</script>
<style>
  svg {
    position: absolute;
    font-family: 'icomoon';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 9.5rem;
  }
  svg rect {
    fill: white;
    mask: url(#mask);
  }
</style>
