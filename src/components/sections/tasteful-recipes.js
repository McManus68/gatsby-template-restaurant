import React from 'react'

import SectionImage from '../ui/section-image'
import { Container } from 'react-bootstrap'
import Content from '../ui/content'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/tasteful-recipes.jpg'

const TastefulRecipes = () => (
  <SectionImage image={image} height={65}>
    <Container>
      <Content>
        <Fade bottom delay={300}>
          <h2>Tasteful</h2>
        </Fade>
        <Fade top delay={600}>
          <h1>Recipes</h1>
        </Fade>
      </Content>
    </Container>
  </SectionImage>
)

export default TastefulRecipes
