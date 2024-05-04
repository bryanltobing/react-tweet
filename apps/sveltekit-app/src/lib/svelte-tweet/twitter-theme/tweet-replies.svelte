<script lang="ts">
  import {
    type EnrichedTweet,
    formatNumber,
  } from '../../../../../../packages/react-tweet/src/utils'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-replies.module.css'

  export let tweet: EnrichedTweet
</script>

<div class={s.replies}>
  <a class={s.link} href={tweet.url} target="_blank" rel="noopener noreferrer">
    <span class={s.text}>
      {#if tweet.conversation_count === 0}
        Read more on X
      {:else if tweet.conversation_count === 1}
        Read {formatNumber(tweet.conversation_count)} reply
      {:else}
        Read {formatNumber(tweet.conversation_count)} replies
      {/if}
    </span>
  </a>
</div>
