<script lang="ts">
  import type { EnrichedQuotedTweet } from '../../../../../../packages/react-tweet/src/utils.js'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/quoted-tweet/quoted-tweet-body.module.css'

  export let tweet: EnrichedQuotedTweet
</script>

<p class={s.root}>
  {#each tweet.entities as item, i}
    {@html item.text}
  {/each}
</p>
