import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4">
            <Container>
                <Row>
                    <Col md="4" className="mb-3">
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                            Praesent libero. Sed cursus ante dapibus diam.
                        </p>
                    </Col>
                    <Col md="4" className="mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md="4" className="mb-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="#" className="text-white mr-3">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white mr-3">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white mr-3">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
