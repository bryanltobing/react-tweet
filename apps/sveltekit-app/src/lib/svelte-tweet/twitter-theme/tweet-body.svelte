<script lang="ts">
  import type { EnrichedTweet } from '../../../../../../packages/react-tweet/src/utils'
  import TweetLink from './tweet-link.svelte'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-body.module.css'

  export let tweet: EnrichedTweet
</script>

<p class={s.root}>
  {#each tweet.entities as item}
    {#if item.type === 'hashtag' || item.type === 'mention' || item.type === 'url' || item.type === 'symbol'}
      <TweetLink href={item.href}>
        {item.text}
      </TweetLink>
    {:else if item.type === 'media'}
      <!-- Media text is currently never displayed, some tweets however might have indices
           that do match `display_text_range` so for those cases we ignore the content. -->
    {:else}
      <!-- We use `@html` to preserve the text encoding.
           https://github.com/vercel-labs/react-tweet/issues/29 -->
      <span>{@html item.text}</span>
    {/if}
  {/each}
</p>
