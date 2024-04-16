import { Container, Profile, Logout } from './styles'
import { RiShutDownLine} from 'react-icons/ri'

export function Header() {
  return (
    <Container>
        <Profile to="/profile">
            <img src="https://github.com/danielapassos.png"/>
            <div>
                <span>Welcome,</span>
                <strong>Daniela Passos</strong>
            </div>            
        </Profile>  
        <Logout>
            <RiShutDownLine/>
        </Logout>
    </Container>
  )
}