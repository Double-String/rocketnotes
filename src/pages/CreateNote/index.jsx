import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import NoteItem from "../../components/noteItem";
import { Section } from "../../components/section";
import TextArea from "../../components/textArea";
import { Container, Form } from "./style";
import { Link } from "react-router-dom";

export default function CreateNote(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Create note</h1>
                        <Link to="/">Return</Link>
                    </header>
                <Input placeholder="Title" type="text"/>
                <TextArea placeholder="Observations" type="text"/>

                <Section title="Useful links">
                    <NoteItem value="https://rocketseat.com.br" />
                    <NoteItem isNew placeholder="New link" />
                </Section>

                <Section title="Tags">
                    <div className="tags">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="New link" />
                    </div>
                </Section>

                <Button title="Save" />
                </Form>
            </main>

        </Container>
    )
}