import React, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

class RequestRow extends Component{

    state={
        loading: false,
        disabled:false
    }

    onApprove=async ()=>{
        this.setState({loading:true, errorMsg:'',disabled:true});
        try{
        const campaign=Campaign(this.props.address);
        const accounts=await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send({from:accounts[0]});
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
        }
        catch(err){
            console.log(err);
        }
        this.setState({loading:false, disabled: false});
    };
    onFinalize=async ()=>{
        this.setState({loading:true, errorMsg:'',disabled:true});
        try{
        const campaign=Campaign(this.props.address);
        const accounts=await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(this.props.id).send({from:accounts[0]});
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
        }
        catch(err){
            console.log(err);
        }
        this.setState({loading:false, disabled: false});

    }
   render(){
       const {Row,Cell}=Table;
       return(
           <Row>
             <Cell>{this.props.id}</Cell>  
             <Cell>{this.props.request.description}</Cell>
             <Cell>{web3.utils.fromWei(this.props.request.value)}</Cell>
             <Cell>{this.props.request.recipient}</Cell>
             <Cell>{this.props.request.approvalCount}/{this.props.approversCount}</Cell>
             <Cell><Button disabled={this.state.disabled} loading={this.state.loading} onClick={this.onApprove} color="green" basic>Approve</Button></Cell>
             <Cell><Button disabled={this.state.disabled} loading={this.state.loading} onClick={this.onFinalize} color="red" basic>Finalize</Button></Cell>

           </Row>
       )
   }
}
export default RequestRow;