import React, {Component} from 'react'

const TableHeader = () =>{
    return(
        <thead>
                <tr>
                    <th>Nome</th>
                    <th>Turma</th>
                </tr>
            </thead>
    )
}
const TableBody = (props) =>{
    const rows = props.alunos.map( (row,index) => {
        return (
            <tr key={index}>
                <td>{row.nome}</td>
                <td>{row.turma}</td>
                <td>
                    <button onClick={() => props.removerAluno(index)}

                    >apagar</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}       
        </tbody>
    )
}
class Table extends Component{
    render(){ 
        const {alunos, removerAluno} = this.props
        return(
            <table>
                <TableHeader />
                <TableBody alunos={alunos} 
                   removerAluno={removerAluno} />            
            </table>)

            
            
    } 
} 
export default Table
