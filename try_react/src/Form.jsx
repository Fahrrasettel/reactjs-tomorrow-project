import React, {Component} from 'react'
class Form extends Component  {
    initialState ={
        nome: '',
        turma: '',
    }


    state = this.initialState

  handleChange = (event)=> {
    const{name, value} = event.target
  
    this.setState({
        [name]:value,
    })
}
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState (this.initialState)
    }

    render(){
        const{nome, turma} = this.state;
        return (
            <form>
            <label htmlFor="none">none</label>
            <input type="text"
                  name="nome"
                  id="nome"
                  value={nome}
                  onChange={this.handleChange} />
                  <label htmlFor="turma">turma</label>
                  <input type="text"
                         name="turma"
                         id="turma"
                         value={turma}
                         onChange={this.handleChange} />

 <input type='button' value= 'enviar' onClick={this.submitForm}/>
                         
 </form>
        )
    }
  }
   export default Form
