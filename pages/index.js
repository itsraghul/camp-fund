import React from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

class HomePage extends React.Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {
      campaigns,
    };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/projects/${address}`}>
            <a>View Project</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <>
        <Layout>
          <h3>Open Project Funds</h3>
          <Link route="/projects/new">
            <a>
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="instagram"
              >
                <Icon name="plus" />
                Add CampFund
              </Button>
            </a>
          </Link>
          {this.renderCampaigns()}
        </Layout>
      </>
    );
  }
}

export default HomePage;
