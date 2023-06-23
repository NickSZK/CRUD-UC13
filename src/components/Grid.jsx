import { styled } from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa"

export const Table = styled.table`
   width: 100%;
   background-color: #C1C7E0;
   padding: 20px;
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 5px;
   max-width: 1120px;
   margin: 20px auto;
   font-family: Arial, Helvetica, sans-serif;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
   text-align: start;
   border-bottom: inset;
   padding-bottom: 5px;
`

export const Td = styled.td`
   padding-top: 15px;
   text-align: center;
   width: 30%;
`

export const Grid = () => {
   return(
      <Table>
         <Thead>
            <Tr>
               <Th> Nome </Th>
               <Th> Email </Th>
               <Th> Telefone </Th>
               <Th></Th>
            </Tr>
         </Thead>

         <Tbody>
            <Tr>
               <Td></Td>
               <Td></Td>
               <Td>
                  <FaEdit />
                  <FaTrash />
               </Td>
            </Tr>
         </Tbody>
      </Table>
   )
}