import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

export default class ProjectShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary['0'],
      contractBalance: summary['1'],
      requestCount: summary['2'],
      approversCount: summary['3'],
      manager: summary['4'],
      address: props.query.address,
    };
  }

  renderCards() {
    const {
      minimumContribution,
      contractBalance,
      requestCount,
      approversCount,
      manager,
    } = this.props;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created the project and can request contributors for money.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute atleast this must wei to fund this project.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: requestCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract.Request must be approved by approvers.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'The no of times people donated to this project.',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: web3.utils.fromWei(contractBalance, 'ether'),
        meta: 'Project Balance Fund(ether)',
        description:
          'The balance is how much money this project has left to spend.',
        style: { overflowWrap: 'break-word' },
      },
    ];

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <>
        <Layout>
          <h1>Project Details</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
              <Grid.Column width={6}>
                <ContributeForm
                  address={this.props.address}
                  minValue={this.props.minimumContribution}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Link route={`/projects/${this.props.address}/requests`}>
                  <a>
                    <Button color="instagram">Requests</Button>
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
      </>
    );
  }
}
