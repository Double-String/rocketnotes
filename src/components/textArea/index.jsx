import { Container } from "./style"

export default function TextArea({value, ...rest}){
    return(
        <Container placeholder={value} {...rest}/>
    )
}