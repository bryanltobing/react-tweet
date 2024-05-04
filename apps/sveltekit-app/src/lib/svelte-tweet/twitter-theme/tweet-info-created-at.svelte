<script lang="ts">
  import type { EnrichedTweet } from '../../../../../../packages/react-tweet/src/utils'
  import { formatDate } from '../../../../../../packages/react-tweet/src/date-utils'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-info-created-at.module.css'

  export let tweet: EnrichedTweet

  $: createdAt = new Date(tweet.created_at)
  $: formattedCreatedAtDate = formatDate(createdAt)
</script>

<a
  class={s.root}
  href={tweet.url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={formattedCreatedAtDate}
>
  <time datetime={createdAt.toISOString()}>{formattedCreatedAtDate}</time>
</a>
