// Documents types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import socialLink from './objects/socialLink'

// Landing page sections
import hero from './objects/hero'
import carousel from './objects/carousel'
import imageSection from './objects/imageSection'
import textSection from './objects/textSection'
import sidesSection from './objects/sidesSection'
import videoSection from './objects/videoSection'

export const schemaTypes = [
  cta,
  embedHTML,
  figure,
  hero,
  carousel,
  imageSection,
  internalLink,
  link,
  portableText,
  socialLink,
  route,
  page,
  siteConfig,
  textSection,
  sidesSection,
  videoSection
]
