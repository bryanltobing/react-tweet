<script lang="ts">
  import type { EnrichedTweet } from '../../../../../../packages/react-tweet/src/utils'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-in-reply-to.module.css'

  export let tweet: EnrichedTweet
</script>

<a
  href={tweet.in_reply_to_url}
  class={s.root}
  target="_blank"
  rel="noopener noreferrer"
>
  Replying to @{tweet.in_reply_to_screen_name}
</a>
