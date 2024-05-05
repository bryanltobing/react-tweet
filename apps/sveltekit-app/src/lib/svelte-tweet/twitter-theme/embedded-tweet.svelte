<script lang="ts">
  import type { Tweet } from '../../../../../../packages/react-tweet/src/api/index.js'
  import TweetContainer from './tweet-container.svelte'
  import TweetHeader from './tweet-header.svelte'
  import TweetInReplyTo from './tweet-in-reply-to.svelte'
  import TweetBody from './tweet-body.svelte'
  import TweetMedia from './tweet-media.svelte'
  import TweetInfo from './tweet-info.svelte'
  import TweetActions from './tweet-actions.svelte'
  import TweetReplies from './tweet-replies.svelte'
  import { QuotedTweet } from './quoted-tweet'
  import { enrichTweet } from '../../../../../../packages/react-tweet/src/utils.js'

  export let tweet: Tweet

  $: enrichedTweet = enrichTweet(tweet)
</script>

<TweetContainer>
  <TweetHeader tweet={enrichedTweet} />
  {#if enrichedTweet.in_reply_to_status_id_str}
    <TweetInReplyTo tweet={enrichedTweet} />
  {/if}
  <TweetBody tweet={enrichedTweet} />
  {#if enrichedTweet.mediaDetails?.length}
    <TweetMedia tweet={enrichedTweet} />
  {/if}
  {#if enrichedTweet.quoted_tweet}
    <QuotedTweet tweet={enrichedTweet.quoted_tweet} />
  {/if}
  <TweetInfo tweet={enrichedTweet} />
  <TweetActions tweet={enrichedTweet} />
  <TweetReplies tweet={enrichedTweet} />
</TweetContainer>
