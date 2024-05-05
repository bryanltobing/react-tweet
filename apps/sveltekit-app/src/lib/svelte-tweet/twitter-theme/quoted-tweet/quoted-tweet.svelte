<script lang="ts">
  import { type EnrichedQuotedTweet } from '../../../../../../../packages/react-tweet/src/utils'
  import QuotedTweetContainer from './quoted-tweet-container.svelte'
  import QuotedTweetHeader from './quoted-tweet-header.svelte'
  import QuotedTweetBody from './quoted-tweet-body.svelte'
  import TweetMedia from '../tweet-media.svelte'

  export let tweet: EnrichedQuotedTweet
</script>

<QuotedTweetContainer {tweet}>
  <QuotedTweetHeader {tweet} />
  <QuotedTweetBody {tweet} />
  {#if tweet.mediaDetails?.length}
    <TweetMedia {tweet} />
  {/if}
</QuotedTweetContainer>
