import React, {useState} from 'react';
import {Container, Row, Col, Collapse} from "react-bootstrap";
import styled from '@emotion/styled'
import {CheckboxToggle, InputGroup, Label, SimpleSelect} from "book";
import InvoicePreview from "./components/InvoicePreview/InvoicePreview";
import './App.css';

const App = () => {

  const [style, setStyle] = useState('1');
  const [color, setColor] = useState('#000000');
  const [lang, setLang] = useState('1');
  const [link, setLink] = useState(false);
  const [numeracion, setNumeracion] = useState(true);
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState(false);

  const FloatingCard = styled(Row)`
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #fff;
  `;

  return (
    <Container>
      <Row>
        <Col md={12} lg={{span: 8, offset: 2}}>
          <FloatingCard>
            <Col xs={12}>
              <h1 className={'text-center'} style={{marginBottom: '50px'}}>🔥🔥🔥 Facturator 🔥🔥🔥</h1>
            </Col>
            <Col sm={6}>
              <div className="mb-3">
                <Label theme={'primary'}>Estilo</Label>
                <SimpleSelect
                    id='nana'
                    value={style}
                    options={[
                      {
                        value: '1',
                        label: 'Tradicional'
                      },
                      {
                        value: '2',
                        label: 'Moderna'
                      }
                    ]}
                    onChange={(value) => setStyle(value)}
                />
              </div>
              <div className="mb-3">
                <Label theme={'primary'}>Estilo</Label>
                <SimpleSelect
                    id='nana'
                    value={lang}
                    options={[
                      {
                        value: '1',
                        label: 'Castellano'
                      },
                      {
                        value: '2',
                        label: 'Valenciano'
                      }
                    ]}
                    onChange={(value) => setLang(value)}
                />
              </div>
              <div className={'d-flex align-items-center justify-content-between mb-3'}>
                <Label theme={'primary'}>Color</Label>
                <input type="color" id="factcolor" name="factcolor" value={color} onChange={e => setColor(e.target.value)} />
              </div>
              <div className="mb-3">
                <CheckboxToggle
                    id={'radioToggle_brownie'}
                    onChange={() => setLogo(!logo)}
                    checked={logo}
                    name={'dessert_brownie'}
                    value={'brownie'}
                    label={'Brownie'}>
                  Logo
                </CheckboxToggle>
              </div>
              <div className="mb-3">
                <CheckboxToggle
                    id={'radioToggle_brownie'}
                    onChange={() => setLink(!link)}
                    checked={link}
                    name={'dessert_brownie'}
                    value={'brownie'}
                    label={'Brownie'}>
                  Enlace de pago
                </CheckboxToggle>
              </div>
              <div className="mb-3">
                <CheckboxToggle
                    id={'radioToggle_brownie'}
                    onChange={() => setNumeracion(!numeracion)}
                    checked={numeracion}
                    name={'dessert_brownie'}
                    value={'brownie'}
                    label={'Brownie'}>
                  Numeracion
                </CheckboxToggle>
              </div>
              <div className="mb-3">
                <InputGroup
                    name={'name'}
                    theme={'primary'}
                    type={'email'}
                    disabled={false}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'placeholder'}
                    message={''}
                    label={'Correo'}/>
              </div>
            </Col>
            <Col sm={6}>
              <InvoicePreview
                  style={style}
                  theme={color}
                  hasLogo={logo}/>
            </Col>
          </FloatingCard>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
