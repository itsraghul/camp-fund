import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: '',
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address: address };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;
    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });

      Router.pushRoute(`/projects/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({
      loading: false,
      value: '',
      description: '',
      recipient: '',
    });
  };
  render() {
    return (
      <>
        <Layout>
          <Link route={`/projects/${this.props.address}/requests`}>
            <a style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>
              {' '}
              {`< Back `}
            </a>
          </Link>
          <h2>Create a new Request</h2>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label style={{ fontSize: '1.2rem' }}>Description</label>
              <Input
                type="text"
                placeholder="Describe the request"
                value={this.state.description}
                onChange={(event) =>
                  this.setState({ description: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: '1.2rem' }}>Value</label>
              <Input
                type="number"
                placeholder="value in Ether"
                value={this.state.value}
                onChange={(event) =>
                  this.setState({ value: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: '1.2rem' }}>Recipient </label>
              <Input
                type="text"
                placeholder="Address of recipient"
                value={this.state.recipient}
                onChange={(event) =>
                  this.setState({ recipient: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button
              type="submit"
              color="instagram"
              disabled={
                !this.state.recipient &&
                !this.state.value &&
                !this.state.description
              }
              loading={this.state.loading}
            >
              Create!
            </Button>
          </Form>
        </Layout>
      </>
    );
  }
}

export default RequestNew;
