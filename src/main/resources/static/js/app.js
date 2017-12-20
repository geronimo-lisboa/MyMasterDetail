class MastersDashboard extends React.Component{
    render(){
        return(<div className="ui container">
                <div className="ui dividing header">Master & Details</div>
                <div className="ui grid">
                    <div className="ui row centered"> AAA</div>
                    <div className="ui row centered"> BBB</div>
                </div>
               </div>                
        );
    }
}


/*
class MastersDashboard extends React.Component{
    render(){
        return(<div class="ui four column grid">
                 <NewMasterForm />
                 <div>
                    <MasterList />
                 </div>
               </div>                
        );
    }
}

class NewMasterForm extends React.Component{
    render(){
        return(<div class="column">
                    <label >Nome</label>
                    <input type="text"/>
                <div class="column">
                  <button >Criar</button>
                  <button >Cancelar</button>
                </div>
               </div>);
    }
}

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
