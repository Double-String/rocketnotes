import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Background, Container, Form } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export default function SignUp(){
    return (
        <Container>
            <Background/>
            <Form>
            <h1>Rocketnotes</h1>
                <p>Save and manage your URLs.</p>
                <h2>Create your account</h2>
                <Input placeholder="Name" type="text" icon={FiUser} />
                <Input placeholder="Email" type="text" icon={FiMail} />
                <Input placeholder="Password" type="password" icon={FiLock} />

                <Button title="Login" />
                <Link to="/">Login</Link>
            </Form>
        </Container>
    )
}