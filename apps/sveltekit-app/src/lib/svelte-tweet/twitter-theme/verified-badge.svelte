<script lang="ts">
  import clsx from 'clsx'
  import type { TweetUser } from '../../../../../../packages/react-tweet/src/api/types'
  import { Verified, VerifiedBusiness, VerifiedGovernment } from './icons/index'
  import s from '../../../../../../packages/react-tweet/src/twitter-theme/verified-badge.module.css'

  export let user: TweetUser
  let className: string | undefined = undefined

  export { className as class }

  let iconClassName: string | null = s.verifiedBlue

  $: verified = user.verified || user.is_blue_verified || user.verified_type
  $: icon = verified ? Verified : null
  $: iconClassName =
    verified && !user.is_blue_verified ? s.verifiedOld : s.verifiedBlue

  $: {
    if (verified) {
      switch (user.verified_type) {
        case 'Government':
          icon = VerifiedGovernment
          iconClassName = s.verifiedGovernment
          break
        case 'Business':
          icon = VerifiedBusiness
          iconClassName = null
          break
      }
    }
  }
</script>

{#if verified}
  <div class={clsx(className, iconClassName)}>
    <svelte:component this={icon} />
  </div>
{/if}
