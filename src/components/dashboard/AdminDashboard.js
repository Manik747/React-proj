import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { push } from 'react-router-redux';
import {
  Card,
  Button,
  Icon,
  Image,
  Dropdown,
} from "semantic-ui-react";

import { api } from '../../api/init';


// local Imports
import FlashMessage from "../forms/Messages/FlashMessage";
import { fetchEventsList, loadEventsList } from '../../redux/actions/eventsListAction';
import PaginateEventsList from "./PaginateEventsList";
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log('ComponentDidMount')    
      api.get("/dashboard?pageNum=1&limit=10")
      .then(response => {
          console.log('data: response.data.data', response.data.data)
          this.setState({ data: response.data.data })
    });
  }
  handleSeeShortlist = event =>{
    event.preventDefault()
      api.get('/dashboard/shortlist?pageNum=1&limit=10', { headers: 'Bearer ' + 'foo' })
        .then((response) =>
        this.setState({data: response.data.data}))
  }
  handleSeeAll = event => {
        event.preventDefault()
      api.get('/dashboard?pageNum=1&limit=10', { headers: 'Bearer ' + 'foo' })
            .then((response) => this.setState({ data: response.data.data }))
  }

  handlePaginationChange = (page) => {
    const { loadEventsList, history, eventLoadError } = this.props;
    if (eventLoadError) return;
    loadEventsList(page);
    history.push(`?page=${page.activePage}`);
  };

  render() {
    console.log("This.props", this.props);
    console.log("This.props.page", this.props.page);
    const { events } = this.props;
    // Pagination
    const per_page = 5; //FOR TESTING PURPOSES ONLY & IS TO BE REPLACED
    const pages = Math.ceil(events.length / per_page);
    const current_page = this.props.page;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;

    const buildcards2 = this.state.data.map((Data) =>
     <React.Fragment>
       <Card.Group centered>
         <Card color="red" fluid > 
           <Card.Content color="red"  >
              <input  type="hidden" value={Data._id}></input>
              <Card.Header key={Data.first_name} >{Data.host.first_name}</Card.Header>
              <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
              <Card.Description key={Data.organisation}>{Data.host.organisation}</Card.Description>
              <Button animated inverted color="red">
              <Button.Content visible>VIEW</Button.Content>
              <Button.Content hidden>
                  <Icon name='arrow right' />
              </Button.Content>
              </Button>
              <div>
              {Data.criteria.shortlisted ? (<Image floated='right' size='mini' src='/Assets/WBGS-logo.png' />):
              (<Image floated='right' size='mini' src='/Assets/WBGS-logo dulled.png' />)}
              </div>
          </Card.Content>
         </Card>
       </Card.Group>
     </React.Fragment>)

    
    // Render
    const buildCards = events.map((Data, index) => {
      if (index >= start_offset && start_count < per_page) {
        start_count++;
        return (
          <Card.Group key={index} centered>
            <Card color="red" fluid>
              <Card.Content color="red">
                <input type="hidden" value={Data.id} />
                <Card.Header key={index}>{Data["title"]}</Card.Header>
                <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
                <Card.Description>
                  {Data["body"].slice(0, 70) + "..."}
                </Card.Description>
                <Button
                  style={{ marginTop: "15px" }}
                  animated
                  inverted
                  color="red"
                >
                  <Button.Content visible>VIEW</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
                <div>
                  {Data.shortlisted ? (
                    <Image
                      floated="right"
                      size="mini"
                      src="/Assets/WBGS-logo.png"
                    />
                  ) : (
                    <Image
                      floated="right"
                      size="mini"
                      src="/Assets/WBGS-logo dulled.png"
                    />
                  )}
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        );
      } else return null;
    });
    return (
      <React.Fragment>
        <div className="filter">
          <Dropdown
            color="red"
            text="Filter By"
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="tags" content="Filter by tag" />
              <Dropdown.Item onClick={this.handleSeeShortlist}>
                Shortlisted
              </Dropdown.Item>
              <Dropdown.Item onClick={this.handleSeeAll}>See All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <FlashMessage
            color="teal"
            message={"You have successfully logged in...   "}
          />
        </div>
        <div>
          <PaginateEventsList
            activePage={current_page}
            onPageChange={this.handlePaginationChange}
            totalPages={pages}
          />
        </div>
        {/* <div className="cardContainer">{buildcards2}</div> */}
        <div className="cardContainer">{buildCards}</div>
        <div>
          <PaginateEventsList
            activePage={current_page}
            onPageChange={this.handlePaginationChange}
            totalPages={pages}
          />
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  events: state.events.eventsList,
  page: Number(ownProps.location.search.split('=')[1]) || 1,
  eventLoadError: state.events.eventError,
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchEventsList, loadEventsList, }
  )(AdminDashboard)
);