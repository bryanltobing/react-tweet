<script lang="ts">
  import TweetContainer from './tweet-container.svelte'
  import styles from '../../../../../../packages/react-tweet/src/twitter-theme/tweet-not-found.module.css'
</script>

<TweetContainer>
  <div class={styles.root}>
    <h3>Tweet not found</h3>
    <p>The embedded tweet could not be found…</p>
  </div>
</TweetContainer>
