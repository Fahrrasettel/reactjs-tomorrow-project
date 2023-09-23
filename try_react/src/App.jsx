import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component {
  removerAluno = (index) => {
    const{alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno,i) => {
    return i !== index
    })
  }     
    )
  }
  state = {
    alunos: []
/*{nome: 'dudu teste',
turma: 'programaçao web',
},import Form from './Form'
{nome: 'paty',
turma: 'analise de algoritmos'
},
{
  nome: 'joaozinho',
  turma: 'programaçao 00'
},
{
  nome:'ju',
  turma: 'engenharia de requisitos',
},
    ]
  }*/

}
handleSubmit = (alunoDisc) =>{
  this.setState(
    {
      alunos: [...this.state.alunos, alunoDisc]
    }
  )
}

render(){
    const {alunos} = this.state
    return (
      <div className="container">
        <h1 className='text-center'>TURMA</h1>
        <Table alunos = {alunos}
        removerAluno = {this.removerAluno}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }  
} 

export default App;