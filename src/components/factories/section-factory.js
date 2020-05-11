import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from 'react-bootstrap'

import Section from '@bit/mcmanus68.ui-react.section'
import SectionHeadline from '@bit/mcmanus68.ui-react.section-headline'
import SectionHero from '@bit/mcmanus68.ui-react.section-hero'

import BlockFactory from './block-factory'

const SectionFactory = ({ section }) => {
  switch (section.type) {
    case 'section-hero':
      return <SectionHero {...section.params} />

    case 'section-headline':
      return <SectionHeadline {...section.params} />

    case 'section-custom':
      return (
        <Section>
          <Container>
            {section.rows.map((row, i) => {
              return (
                <Row key={i}>
                  {row.blocs.map((bloc, j) => {
                    return <BlockFactory key={j} bloc={bloc} />
                  })}
                </Row>
              )
            })}
          </Container>
        </Section>
      )

    default:
      return ''
  }
}

export default SectionFactory

SectionFactory.propTypes = {
  section: PropTypes.object.isRequired,
}
