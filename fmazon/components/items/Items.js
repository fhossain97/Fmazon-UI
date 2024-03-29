import React from 'react'
import Item from './Item'
import axios from 'axios'

const Items = ({items}) => {
  return (


    <div>
        {items?.map(item => {
            return <Item key={item.id} item={item}  />
        })}




    </div>

  )
}

export default Items