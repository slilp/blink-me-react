import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Logo, Link } from "./styles";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-dark mt-5">
        <Container className="p-3">
          <div className="row">
            <div className="col-md-4  text-center text-md-left">
              <Logo src="https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png"></Logo>
            </div>
            <div className="col-md-4 order-md-0 order-2 d-flex align-items-end justify-content-center pt-2">
              <p className="text-white">Copyright © 2021 Blink.React</p>
            </div>
            <div className="col-md-4 order-md-0 order-1 text-white">
              <div className="row d-flex align-items-center h-100">
                <div className="col-6 col-md-12 text-center text-md-right">
                  <Link
                    href="https://www.facebook.com/blink.slil"
                    target="_blank"
                  >
                    <h5>
                      <FaFacebook></FaFacebook> Facebook
                    </h5>
                  </Link>
                </div>
                <div className="col-6 col-md-12 text-center text-md-right">
                  <Link href="https://github.com/slilp" target="_blank">
                    <h5>
                      <FaGithub></FaGithub> GitHub
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
