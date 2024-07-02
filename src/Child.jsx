import React from 'react'
import Child2 from './Child2'

const Child = ({data}) => {
  return (
    <div><Child2 name={data}/></div>
  )
}

export default Child