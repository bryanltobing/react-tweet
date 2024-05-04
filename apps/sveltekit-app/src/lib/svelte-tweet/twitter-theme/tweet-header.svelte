<script lang="ts">
  import clsx from 'clsx'
  import type { EnrichedTweet } from '../../../../../../packages/react-tweet/src/utils'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-header.module.css'
  import AvatarImg from './avatar-img.svelte'
  import VerifiedBadge from './verified-badge.svelte'

  export let tweet: EnrichedTweet

  const { user } = tweet
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
        width={48}
        height={48}
      />
    </div>
    <div class={s.avatarOverflow}>
      <div class={s.avatarShadow}></div>
    </div>
  </a>
  <div class={s.author}>
    <a
      href={tweet.url}
      class={s.authorLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class={s.authorLinkText}>
        <span title={user.name}>{user.name}</span>
      </div>
      <VerifiedBadge {user} class={s.authorVerified} />
    </a>
    <div class={s.authorMeta}>
      <a
        href={tweet.url}
        class={s.username}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span title={`@${user.screen_name}`}>@{user.screen_name}</span>
      </a>
      <div class={s.authorFollow}>
        <span class={s.separator}>·</span>
        <a
          href={user.follow_url}
          class={s.follow}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
      </div>
    </div>
  </div>
  <a
    href={tweet.url}
    class={s.brand}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View on Twitter"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" class={s.twitterIcon}>
      <g>
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  </a>
</div>
