<script lang="ts">
  import clsx from 'clsx'
  import {
    type EnrichedTweet,
    type EnrichedQuotedTweet,
    getMediaUrl,
  } from '../../../../../../packages/react-tweet/src/utils'
  import { type MediaDetails } from '../../../../../../packages/react-tweet/src/api/index'
  import TweetMediaVideo from './tweet-media-video.svelte'
  import MediaImg from './media-img.svelte'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-media.module.css'

  export let tweet: EnrichedTweet | EnrichedQuotedTweet
  export let quoted: boolean | undefined = undefined

  const getSkeletonStyle = (media: MediaDetails, itemCount: number) => {
    let paddingBottom = 56.25 // default of 16x9

    // if we only have 1 item, show at original ratio
    if (itemCount === 1)
      paddingBottom =
        (100 / media.original_info.width) * media.original_info.height

    // if we have 2 items, double the default to be 16x9 total
    if (itemCount === 2) paddingBottom = paddingBottom * 2

    // modified from the original where it returns an object to passed inside jsx style
    return `width: ${media.type === 'photo' ? 'auto' : 'unset'}; padding-bottom: ${paddingBottom}%;`
  }

  $: length = tweet.mediaDetails?.length ?? 0
  $: Img = MediaImg
</script>

<div class={clsx(s.root, !quoted && s.rounded)}>
  <div
    class={clsx(
      s.mediaWrapper,
      length > 1 && s.grid2Columns,
      length === 3 && s.grid3,
      length > 4 && s.grid2x2,
    )}
  >
    {#if tweet.mediaDetails}
      {#each tweet.mediaDetails as media (media.media_url_https)}
        {#if media.type === 'photo'}
          <a
            href={tweet.url}
            class={clsx(s.mediaContainer, s.mediaLink)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class={s.skeleton} style={getSkeletonStyle(media, length)} />
            <Img
              src={getMediaUrl(media, 'small')}
              alt={media.ext_alt_text || 'Image'}
              class={s.image}
              draggable
            />
          </a>
        {:else}
          <div class={s.mediaContainer}>
            <div class={s.skeleton} style={getSkeletonStyle(media, length)} />
            <TweetMediaVideo {tweet} {media} />
          </div>
        {/if}
      {/each}
    {/if}
  </div>
</div>
