import { getTweet } from '../../../../packages/react-tweet/src/api'

import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const tweet = await getTweet('1786974230858621357')
  return {
    tweet,
  }
}

// Tweet in reply to
// https://x.com/TkDodo/status/1786279116179656888
// Normal tweet
// https://x.com/TkDodo/status/1786193488402632754
// Tweet with media video
// https://twitter.com/steepymaroon46/status/1786064282305892532
// Tweet with masukan konkret
// https://x.com/prastow/status/1784283247876431907
// Quoted tweet
// https://x.com/bryanltobing/status/1786974230858621357
