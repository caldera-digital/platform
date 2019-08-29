import { Card, Col, Row } from 'antd'
import { truncate } from 'lodash/fp'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { Product, ProductShort } from '../types'

type ProductListProps = {
  products: Product[] | ProductShort[]
  renderActions?: (product: Product | ProductShort) => ReactNode[]
  emptyText?: string
}
type ProductListItemProps = {
  product: Product | ProductShort
  renderActions?: (product: Product | ProductShort) => ReactNode[]
}

const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const ProductListItem: FC<ProductListItemProps> = ({
  product,
  renderActions,
}) => {
  return (
    <Col span={8} md={12} xs={24}>
      <Card
        hoverable
        cover={<StyledImage alt={product.title} src={product.cover} />}
        style={{ marginBottom: '1rem' }}
        actions={renderActions ? renderActions(product) : []}
      >
        <Card.Meta
          title={product.title}
          description={truncate(
            { length: 250, separator: ' ' },
            product.description,
          )}
          style={{ minHeight: '150px' }}
        />
      </Card>
    </Col>
  )
}

export const ProductList: FC<ProductListProps> = ({
  products = [],
  renderActions,
  emptyText = 'No products to display.',
}) => {
  if (products.length === 0) return <div>{emptyText}</div>

  return (
    <Row gutter={16}>
      {products.map(product => (
        <ProductListItem
          product={product}
          key={product.id}
          renderActions={renderActions}
        />
      ))}
    </Row>
  )
}
