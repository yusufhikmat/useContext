import React, {useContext} from 'react'
import { UserContext } from '../App'
import { ChannelContext } from '../App'

const ComponentF = () => {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} {channel}
    </div>
  )
}

export default ComponentF