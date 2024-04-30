import { AlertHeading, Container } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"
const Welcome = () => {
  return (
    <Container className="mt-2">
      <Alert variant="info">
        <AlertHeading>Hey benvenuto su EPICBOOKS!!</AlertHeading>
        <p>
          se sei capitato qua vuol dire che ti piacciono i libri e la tua sete
          di conoscenza non finisce mai
        </p>
      </Alert>
    </Container>
  )
}
export default Welcome
