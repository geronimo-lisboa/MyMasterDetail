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
        });
    }
    
    deleteMaster=(masterToDie)=>{
        //timers.filter(t => t.id !== timerId),
        client.deleteMaster(masterToDie,(deletedMaster)=>{
            const updatedList = this.state.masters.filter((m)=>(
                    m.id !== deletedMaster.id
                    ));
            this.setState({masters:updatedList});
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
                        deleteMaster={this.deleteMaster}
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
    state={
        ordering:'id',
    };
    orderByName=()=>{
        this.setState({ordering:'name'});
    };
    orderByQtd=()=>{
        this.setState({ordering:'qtd'});
    };
    orderById=()=>{
        this.setState({ordering:'id'});
    };
    render(){
        const orderedMasterList = this.props.masters.sort(
                (a,b)=>{
                    //Ordena por id
                    if(this.state.ordering==='id'){
                        return a.id-b.id;
                    }else 
                    //Ordena por nome
                    if(this.state.ordering==='name'){
                        return a.nome.localeCompare(b.nome);
                    }else{//Ordena por quantidade
                        return (a.detailList.length - a.detailList.length);
                    }
                })
                //Depois de ordenar, mapeia para a lista de componentes
                .map((current)=>(
                    <Master 
                        key={current.id}
                        master={current} 
                        deleteMaster={this.props.deleteMaster}
                    />
                ));
        return(
            <div className="ui grid">
                <MasterHeader
                  orderByName = {this.orderByName}
                  orderById = {this.orderById}
                  orderByQtd = {this.orderByQtd}/>
                {orderedMasterList}
            </div>
        );
    }
}
//O cabeçalho de ordenação dos masters
class MasterHeader extends React.Component{
    render(){
        return(
            <div className="row grid">
                <div className="four wide column" onClick={this.props.orderById}><a>Id</a></div>
                <div className="four wide column" onClick={this.props.orderByName}><a>Nome</a></div>                
                <div className="four wide column" onClick={this.props.orderByQtd}><a>Quantidade</a></div>                                
                <div className="two wide column"></div>
                <div className="two wide column"></div>
            </div>);
    }
}

class Master extends React.Component{
    state={
        areDetailsVisible : false,
    };
    handleDeleteMaster = ()=>{
        this.props.deleteMaster(this.props.master);
    }
    handleAbrirClick = ()=>{
        this.setState({areDetailsVisible:true});
    }
    handleFecharClick=()=>{
        this.setState({areDetailsVisible:false});
    }
    render(){
        if(this.state.areDetailsVisible === true)
        {
        return(
            <div className="row">
                <div className="four wide column">{this.props.master.id}</div>
                <div className="four wide column">{this.props.master.nome}</div>                
                <div className="four wide column">{this.props.master.detailList.length}</div>                                
                <div className="two wide column">
                    <button className="ui basic green button" onClick={this.handleFecharClick}>Fechar</button></div>
                <div className="two wide column">
                    <button className="ui basic red button"onClick={this.handleDeleteMaster}>Excluir</button></div>
                <div className="sixteen wide column">
                    <DetailTable 
                    details={this.props.master.detailList}/>
                </div>
            </div>
        );
        }else{
            return(<div className="row">
                <div className="four wide column">{this.props.master.id}</div>
                <div className="four wide column">{this.props.master.nome}</div>                
                <div className="four wide column">{this.props.master.detailList.length}</div>                                
                <div className="two wide column">
                    <button className="ui basic green button" onClick={this.handleAbrirClick}>Abrir</button></div>
                <div className="two wide column">
                    <button className="ui basic red button"onClick={this.handleDeleteMaster}>Excluir</button></div>
            </div>  
            );
        }
    }
}

class DetailTable extends React.Component{
    state={
        details:[],
    };
    
    componentDidMount(){
        if(this.props.details===undefined)
            this.setState({details:[]});
        else
            this.setState({details:this.props.details});
    }
    
    render(){
        //Se isExpanded = false, esconde, senão exibe
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
