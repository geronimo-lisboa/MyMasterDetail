class MastersDashboard extends React.Component{
    render(){
        return(<div className="ui three column centered grid">
                <h2 class="ui dividing centered header">Master Dashboard</h2>
                 <NewMasterForm />
                 <div  className="column">
                    <MasterList />
                 </div>
               </div>                
        );
    }
}

class NewMasterForm extends React.Component{
    render(){
        return(<div className='ui centered card'>
                <div className='content' >
                    <label className='ui right pointing label'>Nome</label>
                    <input class="ui input focus" type="text"/>
                </div>
                <div className='ui two bottom attached buttons'>
                <button className='ui basic blue button'>Criar</button>
                <button className='ui basic red button'>Cancelar</button>
                </div>
               </div>);
    }
}

class MasterList extends React.Component{
    render(){
        return(<div>
                <Master />
                <Master />
                <Master />
                </div>);
    }
}

class Master extends React.Component{
    render(){
        return(<div>
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
//Responsável pela renderização do dashboard na div de id = content
ReactDOM.render(
  <MastersDashboard />,
  document.getElementById('content')
);
