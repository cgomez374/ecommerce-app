import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

export default function NotFound(){
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }, [navigate])
  return (
    <h1>Page Not Found</h1>
  )
}