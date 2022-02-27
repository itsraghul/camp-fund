import React from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Card, Button, Icon, Grid } from 'semantic-ui-react';
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
          <Grid>
            <Grid.Column width={12}>
              <Link route="/projects/new">
                <a>
                  <Button
                    floated="left"
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
            </Grid.Column>
            <Grid.Column width={4}>
              {/* <h3>Use this botfor doubts!</h3> */}
              <iframe
                src="https://webchat.botframework.com/embed/campfundqnamaker-bot?s=ABJi-j4ZSR0.BXr4LRvtUTc8ON_QEBjdTONPv7aSSHrYO1taeP3kdww"
                style={{
                  height: '462px',
                  maxHeight: '502px',

                  border: '1px solid grey',
                  borderRadius: '5px',
                }}
              ></iframe>
            </Grid.Column>
          </Grid>
        </Layout>
      </>
    );
  }
}

export default HomePage;
