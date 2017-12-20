class MastersDashboard extends React.Component{
    render(){
        return(<div className="ui container">
                <div className="ui dividing header">Master & Details</div>
                <div className="ui grid">
                    <div className="ui row"> <NewMasterForm /></div>
                    <div className="ui row"> Lista de masters aqui</div>
                </div>
               </div>                
        );
    }
}
class NewMasterForm extends React.Component{
    render(){
        return(<div className="ui content">
                <div>
                    <button className="ui bottom attached green basic button">Novo</button>
                </div>
                <div>
                    <div>
                        <label className="ui right pointing label">Nome</label>
                        <input className="ui input focus" type="text" />                
                    </div>
                    <div className='ui two bottom attached buttons'>
                        <button className='ui basic blue button'>Salvar</button>
                        <button className='ui basic red button'>Cancelar</button>
                    </div>
                </div>
               </div>);
    }
}


/*

class MasterList extends React.Component{
    render(){
        return(<div>
                <Master class="column" />
                <Master class="column"/>
                <Master class="column"/>
                </div>);
    }
}

class Master extends React.Component{
    render(){
        return(<div >
                A master
                <NewDetailForm />
                <Detail />
                <Detail />
                </div>);
    }
}

class NewDetailForm extends React.Component{
    render(){
        return(<div>
                New Detail Form
                </div>)
    }
}

class Detail extends React.Component{
    render(){
        return(<div>
                A detail
                </div>)
    }
}
*/
//Responsável pela renderização do dashboard na div de id = content
ReactDOM.render(
  <MastersDashboard />,
  document.getElementById('content')
);
