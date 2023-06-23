import { styled } from "styled-components";

const FormContainer = styled.form`
   display: flex;
   align-items: flex-end;
   gap: 10px;
   flex-wrap: wrap;
   background-color: #C1C7E0;
   padding: 20px;
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 5px;
   margin: auto;
`

const InputArea = styled.div`
   display: flex;
   flex-direction: column;
`

const Input = styled.input`
   width: 120px;
   padding: 0 10px;
   border: 1px solid #BBB;
   border-radius: 5px;
   height: 40px;
`

const Label = styled.label`
   font-family: Arial, Helvetica, sans-serif;
`

const Button = styled.button`
   padding: 10px;
   border: none;
   border-radius: 5px;
   background-color: #2C73D2;
   color: #C1C7E0;
   height: 42px;
`

export const Form = () => {
   return(
      <FormContainer>

         <InputArea>
            <Label>Nome:</Label>
            <Input type="text" />
         </InputArea>

         <InputArea>
            <Label>Email:</Label>
            <Input type="email" />
         </InputArea>

         <InputArea>
            <Label>Telefone:</Label>
            <Input type="text" />
         </InputArea>

         <InputArea>
            <Label>Nascimento:</Label>
            <Input type="date" />
         </InputArea>

         <Button type="submit">Salvar</Button>

      </FormContainer>
   )
}