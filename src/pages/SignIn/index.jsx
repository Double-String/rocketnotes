import { Container, Form, Background } from "./style"
import { Input } from "../../components/input"
import { FiLock, FiLogIn, FiMail } from "react-icons/fi"
import { Button } from "../../components/button"
import { Link } from "react-router-dom"

export default function SignIn(){
    return(
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Save and manage your URLs.</p>
                <h2>Login</h2>
                <Input placeholder="Email" type="text" icon={FiMail} />
                <Input placeholder="Password" type="password" icon={FiLock} />

                <Button title="Login" />
                <Link to="/register">Create account</Link>
            </Form>
            <Background/>
        </Container>
    )
}