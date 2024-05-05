<script lang="ts">
  import type { EnrichedQuotedTweet } from '../../../../../../../packages/react-tweet/src/utils.js'
  import s from '../../../../../../../packages/react-tweet/src/twitter-theme/quoted-tweet/quoted-tweet-container.module.css'
  export let tweet: EnrichedQuotedTweet

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      window.open(tweet.url, '_blank')
    }
  }
</script>

<div
  class={s.root}
  tabindex="0"
  role="button"
  on:click|preventDefault={() => {
    window.open(tweet.url, '_blank')
  }}
  on:keydown={handleKeyDown}
>
  <article class={s.article}>
    <slot></slot>
  </article>
</div>
