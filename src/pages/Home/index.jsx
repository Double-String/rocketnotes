import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'
import { Note } from '../../components/note'
import { Section } from '../../components/section'

export default function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>
            
            <Header/>

            <Menu>
                <li><ButtonText title="All" isactive /></li>
                <li><ButtonText title="Product" /></li>
                <li><ButtonText title="Branding" /></li>
            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Search by title" />
            </Search>

            <Content>
                <Section title={"Notes"} >
                <Note data={{
                    title: "Framer Motion",
                    tags: [
                        {id: '1', name: 'ux'},
                        {id: '2', name: 'flow'}
                    ]
                }}
                />
                <Note data={{
                    title: "ThreeJS",
                    tags: [
                        {id: '1', name: 'interaction'},
                        {id: '2', name: 'ui'}
                    ]
                }}
                />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Create note
            </NewNote>
        </Container>
    )
}