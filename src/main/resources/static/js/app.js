//O componente-mestre da aplicação
class MastersDashboard extends React.Component{
    render(){
        return(<div className="ui container">
                <div className="ui dividing header">Master & Details</div>
                <div className="ui grid">
                    <div className="ui row"> <NewMasterForm /></div>
                    <div className="ui row">
                        <MasterTable />
                    </div>
                </div>
               </div>                
        );
    }
}
//A tabela dos masters: contém a lista de masters e o cabeçalho de ordenação.
class MasterTable extends React.Component{
    render(){
        return(
            <div className="ui grid">
                <MasterHeader/>
                <Master/>
                <Master/>
            </div>
        );
    }
}
//O cabeçalho de ordenação dos masters
class MasterHeader extends React.Component{
    render(){
        return(
            <div className="row grid">
                <div className="four wide column"><a>Id</a></div>
                <div className="four wide column"><a>Nome</a></div>                
                <div className="four wide column"><a>Quantidade</a></div>                                
                <div className="two wide column"></div>
                <div className="two wide column"></div>
            </div>);
    }
}
//O master. Contém o form de alteração de master e a lista de details
class Master extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="four wide column">1</div>
                <div className="four wide column">Foo</div>                
                <div className="four wide column">2</div>                                
                <div className="two wide column"><button className="ui basic green button">Abrir</button></div>
                <div className="two wide column"><button className="ui basic red button">Excluir</button></div>
                <EditMasterForm />
            </div>
        );
    }
}

class EditMasterForm extends React.Component{
    render(){
        return(
                <div className="sixteen wide column">
                    <label className="ui right pointing label">Nome</label>
                    <input className="ui input focus" type="text"/>
                    <button className='ui basic red button'>Fechar</button>                
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


//Responsável pela renderização do dashboard na div de id = content
ReactDOM.render(
  <MastersDashboard />,
  document.getElementById('content')
);
