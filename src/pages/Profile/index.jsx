import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Container, Form, Avatar } from "./style"
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/danielapassos.png" alt="User photo"/>
                
                <label htmlFor="Avatar">
                    <FiCamera/>
                    <input
                        id="avatar"
                        type="file"
                    />
                </label>
                </Avatar>
                <Input placeholder="Name" type="text" icon={FiUser} />
                <Input placeholder="Email" type="text" icon={FiMail} />
                <Input placeholder="Current password" type="password" icon={FiLock} />
                <Input placeholder="New password" type="password" icon={FiLock} />
                <Button title="Save" />
            </Form>
        </Container>
    )
}