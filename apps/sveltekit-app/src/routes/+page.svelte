<script lang="ts">
  import TweetContainer from '$lib/svelte-tweet/twitter-theme/tweet-container.svelte'
  import type { PageData } from './$types'
  import TweetHeader from '$lib/svelte-tweet/twitter-theme/tweet-header.svelte'
  import TweetBody from '$lib/svelte-tweet/twitter-theme/tweet-body.svelte'
  import { enrichTweet } from '../../../../packages/react-tweet/src/utils'
  import TweetInReplyTo from '$lib/svelte-tweet/twitter-theme/tweet-in-reply-to.svelte'
  import TweetMedia from '$lib/svelte-tweet/twitter-theme/tweet-media.svelte'
  import TweetInfo from '$lib/svelte-tweet/twitter-theme/tweet-info.svelte'
  import TweetActions from '$lib/svelte-tweet/twitter-theme/tweet-actions.svelte'
  import TweetReplies from '$lib/svelte-tweet/twitter-theme/tweet-replies.svelte'

  export let data: PageData
  const tweet = enrichTweet(data.tweet)
</script>

<div style="margin-left: auto; margin-right: auto; max-width: 500px">
  <TweetContainer>
    <TweetHeader {tweet} />
    {#if tweet.in_reply_to_status_id_str}
      <TweetInReplyTo {tweet} />
    {/if}
    <TweetBody {tweet} />
    {#if tweet.mediaDetails?.length}
      <TweetMedia {tweet} />
    {/if}
    <TweetInfo {tweet} />
    <TweetActions {tweet} />
    <TweetReplies {tweet} />
  </TweetContainer>
</div>
