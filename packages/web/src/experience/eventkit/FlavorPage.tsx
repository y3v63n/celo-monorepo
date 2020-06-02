import * as React from 'react'
import Page, { FLAVOR_PATH, ROUTE_TO_TITLE } from 'src/experience/eventkit/Page'
import Section from 'src/experience/eventkit/Section'
import { NameSpaces, useTranslation } from 'src/i18n'
import { hashNav } from 'src/shared/menu-items'

const sections = [
  hashNav.eventsFlavor.overview,
  hashNav.eventsFlavor.codeOfConduct,
  hashNav.eventsFlavor.foster,
  hashNav.eventsFlavor.uniqueGifts,
  hashNav.eventsFlavor.rituals,
  hashNav.eventsFlavor.tenets,
].map((id) => {
  return {
    id,
    children: <Section content={require(`src/experience/eventkit/content/flavor/${id}.md`)} />,
  }
})
export default function Flavor() {
  const { t } = useTranslation(NameSpaces.eventskit)
  return (
    <Page
      title="Home"
      path={ROUTE_TO_TITLE[FLAVOR_PATH]}
      metaDescription={t('flavor.introduction')}
      sections={sections}
    />
  )
}
