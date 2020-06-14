import React from 'react'
import { Col } from 'react-bootstrap'
import { Block, BlockType, AnimationType } from '../../types/types'
import { reduceParams } from '../../utils/params-utils'
import BlockImageGallery from '@bit/mcmanus68.ui-react.block-image-gallery'
import BlockSimpleContent from '@bit/mcmanus68.ui-react.block-simple-content'
import AnimationFactory from './animation-factory'
import FooterSimpleContent from '@bit/mcmanus68.ui-react.footer-simple-content'
import FooterSocial from '@bit/mcmanus68.ui-react.footer-social'
import FooterNewsletter from '@bit/mcmanus68.ui-react.footer-newsletter'

interface Props {
  block: Block
}

const BlockFactory: React.FC<Props> = ({ block }) => {
  const params = reduceParams(block.params)
  var content = (() => {
    switch (block.type) {
      case BlockType.BlockSimpleContent:
        return <BlockSimpleContent {...params} />
      case BlockType.BlockGallery:
        return <BlockImageGallery {...params} />
      case BlockType.FooterSimpleContent:
        return <FooterSimpleContent {...params} />
      case BlockType.FooterSocial:
        return <FooterSocial {...params} />
      case BlockType.FooterNewsletter:
        return <FooterNewsletter {...params} />
      default:
        return null
    }
  })()

  if (block.animation.type !== AnimationType.None) {
    content = (
      <AnimationFactory animation={block.animation}>{content}</AnimationFactory>
    )
  }
  return (
    <Col className={`${block.classes} my-auto`} {...block.responsive}>
      {content}
    </Col>
  )
}

export default BlockFactory
