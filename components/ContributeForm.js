import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default class ContributeForm extends Component {
  state = { value: '', loading: false, errorMessage: '' };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    const campaign = Campaign(this.props.address);
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether'),
      });

      Router.replaceRoute(`/projects/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label style={{ fontSize: '1.2rem' }}>Amount to Contribute</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.value}
              type="number"
              onChange={(event) => this.setState({ value: event.target.value })}
              step="1"
              placeholder={`Minimum contribution is ${this.props.minValue} wei.`}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            type="submit"
            color="instagram"
            disabled={!this.state.value}
            loading={this.state.loading}
          >
            Contribute!
          </Button>
        </Form>
      </>
    );
  }
}
