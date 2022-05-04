import React from 'react'
import { useQuery } from 'react-apollo'
import GET_BENEFITS from '../../graphQL/getBenefits.graphql'
import { useProduct } from 'vtex.product-context'

const PromotionBlock = () => {
  const { selectedItem } = useProduct()
  const { data, loading } = useQuery(GET_BENEFITS, {
    variables: {
      id: selectedItem.itemId,
      seller: selectedItem?.sellers[0]?.sellerId,
      quantity: 1
    }
  })

  const promotions = loading ?
    null :
    data.benefits.map((benefit:any) => {
      return (
        <div>{benefit.name}</div>
      )
    })

  return (
    <div>{promotions}</div>
  )
}

export { PromotionBlock }
