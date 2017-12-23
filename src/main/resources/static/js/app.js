class MastersDashboard extends React.Component{
    state = {
        masters:[],
    };
    
    componentDidMount(){
        client.getAllMasters(this.updateMasters);
    };
    
    updateMasters=(masterList)=>{
        this.setState({masters:masterList});
    };
    
    createNewMaster=(masterName)=>{
        const newMaster={nome:masterName,};
        client.createMaster(newMaster,(createdMaster)=>{
            let newList = this.state.masters.map((m)=>(m));
            newList.push(createdMaster);
            this.setState({masters:newList});
            //client.getAllMasters(this.updateMasters)
            //console.log(createdMaster);
        });
    }
    
    render(){
        return(
                <div className="ui container">
                    <div className="ui dividing header">Master & Details</div>
                    <NewMasterForm 
                        createNewMaster={this.createNewMaster}/>
                    <MasterList 
                        masters={this.state.masters}
                    />
                </div>);
    }
}

class NewMasterForm extends React.Component{
    state={
        isOpen:false,
        nomeInformado:"",
    }
    handleOpenFormClick = ()=>{this.setState({isOpen:true})};
    handleCloseFormClick = ()=>{this.setState({isOpen:false})}  ;
    handleChangeNome = (e)=>{
        this.setState({nomeInformado:e.target.value});
    }
    handleOnCriarNovoClick = ()=>{
        this.props.createNewMaster(this.state.nomeInformado);
        this.handleCloseFormClick();
    }
    render(){
        if(this.state.isOpen===false){
            return(<div className="ui grid">
                    <div className="sixteen wide column">
                        <i onClick={this.handleOpenFormClick} className="add circle icon"></i>
                    </div>
                   </div>);            
        }
        else{
            return(<div className="ui grid">
                    <div className="sixteen wide column">
                        <i onClick={this.handleCloseFormClick} className="minus circle icon"></i>
                    </div>
                    <div>
                        <label className="ui right pointing label">Nome</label>
                        <input className="ui input focus" type="text" onChange={this.handleChangeNome}/>
                        <button className="ui basic green button" onClick={this.handleOnCriarNovoClick}>Criar</button>
                    </div>
                   </div>);                        
        }
    }
}

class MasterList extends React.Component{
    render(){
        const masterList = this.props.masters.map(
           (currentMaster)=>(
               <Master 
                    key={currentMaster.id}
                    master={currentMaster} />
           ));

        return(
            <div className="ui grid">
                <MasterHeader/>
                {masterList}
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

class Master extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="four wide column">{this.props.master.id}</div>
                <div className="four wide column">{this.props.master.nome}</div>                
                <div className="four wide column">{this.props.master.detailList.length}</div>                                
                <div className="two wide column"><button className="ui basic green button">Abrir</button></div>
                <div className="two wide column"><button className="ui basic red button">Excluir</button></div>
                <div className="sixteen wide column">
                    <DetailTable 
                    details={this.props.master.detailList}/>
                </div>
            </div>
        );
    }
}

class DetailTable extends React.Component{
    state={
        details:[]
    };
    
    componentDidMount(){
        if(this.props.details===undefined)
            this.setState({details:[]});
        else
            this.setState({details:this.props.details});
    }
    
    render(){
        const details = this.state.details.map((currentDetail)=>(
                <Detail 
                    detail={currentDetail}
                    key={currentDetail.id}/>
                ));
        return(<div className="ui grid">
                    <DetailHeader/>
                    {details}
                </div>)
    }
}

class DetailHeader extends React.Component{
    render(){
        return(
            <div className="row grid">
                <div className="one wide column"></div>
                <div className="three wide column"><a>Id</a></div>
                <div className="four wide column"><a>Nome</a></div>                
                <div className="four wide column"><a>Data de Alteração</a></div>                                
                <div className="two wide column"></div>
                <div className="two wide column"></div>
            </div>);
    }
}

class Detail extends React.Component{
    render(){
        return(<div className="row">
                <div className="one wide column"></div>
                <div className="three wide column">{this.props.detail.id}</div>
                <div className="four wide column">{this.props.detail.nome}</div>                
                <div className="four wide column">{this.props.detail.dataAlteracao}</div>                                
                <div className="two wide column"><button className="ui basic green button">Abrir</button></div>
                <div className="two wide column"><button className="ui basic red button">Excluir</button></div>
               </div>)
    }
}


//Responsável pela renderização do dashboard na div de id = content
ReactDOM.render(
  <MastersDashboard />,
  document.getElementById('content')
);
