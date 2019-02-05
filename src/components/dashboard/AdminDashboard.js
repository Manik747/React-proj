import React, { Component } from 'react';
import { Card, Button, Icon, Image, Dropdown, Input } from 'semantic-ui-react'
import { api } from '../../api/init';
import { Link } from 'react-router-dom';


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
        api.get('/dashboard?pageNum=x&limit=y').then((response) => {
            this.setState({ data: response.data.data })

        })
    }

    handleSeeShortlist = event => {
        event.preventDefault()
        api.get('/dashboard/shortlist?pageNum=x&limit=y').then((response) => {
            this.setState({ data: response.data.data })
        })
    }

    handleSeeAll = event => {
        event.preventDefault()
        api.get('/dashboard?pageNum=x&limit=y').then((response) => {
            this.setState({ data: response.data.data })
        })
    }

    render() {
        const buildcards = this.state.data.map((Data) =>

            <React.Fragment>
                <Card.Group centered>
                    <Card color="red" fluid >
                        <Card.Content color="red"  >
                            <input type="hidden" value={Data._id}></input>
                            <Card.Header key={Data.first_name} >{Data.host.first_name}</Card.Header>
                            <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
                            <Card.Description key={Data.organisation}>{Data.host.organisation}</Card.Description>
                            <Button as={Link} animated inverted color="red" to={`/dashboard/${Data._id}`} id={Data._id}>
                                <Button.Content visible >VIEW</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                            <div>
                                {Data.criteria.shortlisted ? (<Image floated='right' size='mini' src='/Assets/WBGS-logo.png' />) :
                                    (<Image floated='right' size='mini' src='/Assets/WBGS-logo dulled.png' />)}
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </React.Fragment>)

        return (
            <React.Fragment>
                <div className="filter">
                    <Dropdown color="red" text='Filter By' icon='filter' floating labeled button className='icon'>
                        <Dropdown.Menu >
                            <Dropdown.Header icon='tags' content='Filter by tag' />
                            <Dropdown.Item onClick={this.handleSeeShortlist}>Shortlisted</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleSeeAll}>See All</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="cardContainer">
                    {buildcards}
                </div>
            </React.Fragment>);

    }

}

export default AdminDashboard;
