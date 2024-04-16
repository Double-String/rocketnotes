import { Button } from "../../components/button"
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Container, Links, Content } from "./styles"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttonText"

export default function Details(){
  return(
    <Container>

      <Header/>
      <main>
        <Content>
        <ButtonText title="Delete note"/>

        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui reiciendis quae sit dolor voluptatum odit sequi quas ut voluptatibus necessitatibus beatae dolore odio, ducimus neque, distinctio explicabo ipsum? Debitis!</p>

        <Section title="Resources">
          <Links>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>Link 2</li>
            <li>Link 3</li>
          </Links>
        </Section>

        <Section title="Tags">
          <Tag title="Express" />
          <Tag title="Nodejs" />
        </Section>

        <Button  title="Go back" />
      </Content>
      </main>

      <Header/>
        
    </Container>
  )
}