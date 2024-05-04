<script lang="ts">
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-link.module.css'

  export let href: string
</script>

<a {href} class={s.root} target="_blank" rel="noopener noreferrer nofollow">
  <slot></slot>
</a>
