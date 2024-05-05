<script lang="ts">
  import clsx from 'clsx'
  import AvatarImg from './avatar-img.svelte'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/quoted-tweet/quoted-tweet-header.module.css'
  import type { EnrichedQuotedTweet } from '../../../../../../packages/react-tweet/src/utils.js'
  import VerifiedBadge from './verified-badge.svelte'

  export let tweet: EnrichedQuotedTweet

  $: user = tweet.user
</script>

<div class={s.header}>
  <a
    href={tweet.url}
    class={s.avatar}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class={clsx(
        s.avatarOverflow,
        user.profile_image_shape === 'Square' && s.avatarSquare,
      )}
    >
      <AvatarImg
        src={user.profile_image_url_https}
        alt={user.name}
        width={20}
        height={20}
      />
    </div>
  </a>
  <div class={s.author}>
    <div class={s.authorText}>
      <span title={user.name}>{user.name}</span>
    </div>
    <VerifiedBadge {user} />
    <div class={s.username}>
      <span title={`@${user.screen_name}`}>@{user.screen_name}</span>
    </div>
  </div>
</div>
