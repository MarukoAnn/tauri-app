import { To, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Redirect = (props: { to: To }) => {
  let navigation = useNavigate()
  useEffect(() => {
    navigation(props.to)
  }, [])
  return null
}

export default Redirect
