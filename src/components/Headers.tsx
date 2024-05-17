import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap'

interface IAppProps {
}

const Headers: React.FC<IAppProps> = (props) => {
    return (
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        React TypeScript Bootstrap Tutorial
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
};

export default Headers;
