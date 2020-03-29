import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import InvoicePreview from "./components/InvoicePreview/InvoicePreview";

const App = () => {

  const [style, setStyle] = useState('tradicional');
  const [color, setColor] = useState('black');
  const [lang, setLang] = useState('esp');
  const [link, setLink] = useState(false);
  const [numeracion, setNumeracion] = useState(true);
  const [email, setEmail] = useState('');


  return (
    <Container fluid className={'mt-5'}>
      <Row>
        <Col sm={6}>
          estilo
          color
          idioma
          logo
          enlace pago
          numeracion
          email
        </Col>
        <Col sm={6}>
          <InvoicePreview theme={'cornflowerblue'}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
