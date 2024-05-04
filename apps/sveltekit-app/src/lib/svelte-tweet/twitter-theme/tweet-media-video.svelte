<script lang="ts">
  import clsx from 'clsx'
  import type {
    MediaAnimatedGif,
    MediaVideo,
  } from '../../../../../../packages/react-tweet/src/api/index'
  import {
    type EnrichedQuotedTweet,
    type EnrichedTweet,
    getMediaUrl,
    getMp4Video,
  } from '../../../../../../packages/react-tweet/src/utils'
  import mediaStyles from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-media.module.css'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-media-video.module.css'

  export let tweet: EnrichedTweet | EnrichedQuotedTweet
  export let media: MediaAnimatedGif | MediaVideo

  let playButton = true
  let isPlaying = false
  let ended = false
  let timeout = 0

  $: mp4Video = getMp4Video(media)

  function handlePlay() {
    if (timeout) window.clearTimeout(timeout)
    if (!isPlaying) isPlaying = true
    if (ended) ended = false
  }

  function handlePause() {
    // When the video is seeked (moved to a different timestamp), it will pause for a moment
    // before resuming. We don't want to show the message in that case so we wait a bit.
    if (timeout) window.clearTimeout(timeout)
    timeout = window.setTimeout(() => {
      if (isPlaying) isPlaying = false
      timeout = 0
    }, 100)
  }

  function handleEnded() {
    ended = true
  }

  function handleButtonClick(event: MouseEvent) {
    const video = (event.currentTarget as any)
      ?.previousSibling as HTMLMediaElement

    event.preventDefault()
    playButton = false
    isPlaying = true
    video.play()
    video.focus()
  }
</script>

<video
  class={mediaStyles.image}
  poster={getMediaUrl(media, 'small')}
  controls={!playButton}
  muted
  preload="none"
  tabindex={playButton ? -1 : 0}
  on:play={handlePlay}
  on:pause={handlePause}
  on:ended={handleEnded}
>
  <source src={mp4Video.url} type={mp4Video.content_type} />
</video>

{#if playButton}
  <button
    type="button"
    class={s.videoButton}
    aria-label="View video on X"
    on:click={handleButtonClick}
  >
    <svg viewBox="0 0 24 24" class={s.videoButtonIcon} aria-hidden="true">
      <g>
        <path d="M21 12L4 2v20l17-10z"></path>
      </g>
    </svg>
  </button>
{/if}

{#if !isPlaying && !ended}
  <div class={s.watchOnTwitter}>
    <a
      href={tweet.url}
      class={s.anchor}
      target="_blank"
      rel="noopener noreferrer"
    >
      {playButton ? 'Watch on X' : 'Continue watching on X'}
    </a>
  </div>
{/if}

{#if ended}
  <a
    href={tweet.url}
    class={clsx(s.anchor, s.viewReplies)}
    target="_blank"
    rel="noopener noreferrer"
  >
    View replies
  </a>
{/if}
