<script lang="ts">
  import clsx from 'clsx'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-container.module.css'
  import '../../../../../../packages/react-tweet/src/twitter-theme/theme.css'

  let className: string | undefined = undefined

  export { className as class }
</script>


<div class={clsx('react-tweet-theme', s.root, className)}>
  <article class={s.article}><slot/></article>
</div>