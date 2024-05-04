<script lang="ts">
  export let src: string
  export let alt: string
  let className: string = ''
  export let draggable: boolean = false

  export { className as class }
</script>

<img {src} {alt} class={className} {draggable} />
