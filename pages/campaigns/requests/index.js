// will show list of request to users and add user functionality
import React, { Component } from 'react';
import Layout from '../../../Component/Layout';
import {Link} from '../../../routes';
import {Button,Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../Component/RequestRow';
import campaign from '../../../ethereum/campaign';
class requestIndex extends Component{
  
    static async getInitialProps(props){
        const address=props.query.address||0xf2f4f4163749b5d564402363421D8FbD8D9a2c89;
        const campaign=Campaign(address);
        const requestCount=await campaign.methods.gerRequestCount().call();
        const approversCount=await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element,index)=>{   // this will give array of index upto request count
                return campaign.methods.requests(index).call();
            })
        );
        
        return {address,requests,requestCount,approversCount};     // returning these to requestIndex Components
    }
    renderRow(){// this will return data at each request
        return this.props.requests.map((request,index)=>{
            return <RequestRow  // calling requestRow which will make up our Table
            key={index}
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}
            />
        })
    }
    render(){
        //pulling out all table properties
        const {Header,Row,HeaderCell,Body}=Table;
        return(
            <Layout>
                    <h3>Campaign Requests</h3>
                    <Link route={`/campaigns/${this.props.address}/requests/new`}>
                        <a>
                            <Button primary>Add Request</Button>
                        </a>
                    </Link>
                    <Table>
                        <Header>
                            <Row>
                                <HeaderCell>ID</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell>Amount</HeaderCell>
                                <HeaderCell>Recipient</HeaderCell>
                                <HeaderCell>Approval Count</HeaderCell>
                                <HeaderCell>Approve</HeaderCell>
                                <HeaderCell>Finalize</HeaderCell>
                            </Row>
                        </Header>
                        <Body>{this.renderRow()}</Body>
                    </Table>
            </Layout>
        );
    }
}
export default requestIndex;