import { useParams } from "react-router-dom"

function ContactPage() {
  const {id} = useParams()
  return (
    <div className="text-3xl font-semibold">Estas viendo el catálogo: {id}</div>
  )
}

export default ContactPage