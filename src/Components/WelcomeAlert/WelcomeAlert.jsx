import React from "react";
import './WelcomeAlert.css'

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function WelcomeAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
        <div id="WelcomeAlert">
      <Alert show={show}>
        <Alert.Heading>Welcome to Epibook</Alert.Heading>
        <p>
        From literature to great essays: every month you can find many new eBooks on offer. Choose from a selection of titles at heavily discounted prices until March 31, 2024.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-light">
            Close me
          </Button>
        </div>
      </Alert>
      </div>

    </>
  );
}

