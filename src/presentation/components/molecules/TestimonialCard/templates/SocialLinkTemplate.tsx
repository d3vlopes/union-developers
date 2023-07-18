import { Fragment } from 'react'

import { SocialLink } from '..'

export const SocialLinkTemplate = (socialLink: SocialLink) => {
  return (
    <Fragment key={socialLink.id}>
      <a href={socialLink.url} target="_blank">
        <img src={socialLink.iconUrl} alt={socialLink.name} />
        {socialLink.name}
      </a>
    </Fragment>
  )
}
