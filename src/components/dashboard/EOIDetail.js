import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    Grid,
    List,
    Segment,
    Header,
    Form,
    Checkbox,
    Button,
    Dropdown,
    Label,
    Input
} from 'semantic-ui-react';
import { api } from '../../api/init'

var view_card = (_id) => {
    api.get(`/dashboard/${_id}`)
}

export default class EOIDetails extends Component {

    constructor(props) {
        super(props);
     this.state = {
            firstName: "Matt",
            lastName: "Martin",
            email: "ouhefohOHF@gmail.com",
            organization: "organizee",
            description: "iuhefuhwohgfowjroisiogjoijgvoiaj0jjer0gjapijgpiajivjgapivjpjvisdjvlhjslbdgj;sdjbpjapijb;pdsmpobjaepoi",
            volunteers: 6,
            datePicker: "around spring",
            suburb: "yo town",
            zipCode: 9000,
            country: "straya",
            council: "council",
            localCouncil: "concil tie",
            keyPeople: "my mum",
            val_council: false,
            val_bel:false,
            val_org: false,
            val_place: false,
            val_date: false,
            val_social: false,
            val_scope: false,
            val_vols: false,
            val_people:false,
            shortlist: false
        }
    }
    handleAcptShort = () => {
        if( this.state.val_council &&
            this.state.val_bel &&
            this.state.val_org &&
            this.state.val_place &&
            this.state.val_date &&
            this.state.val_social &&
            this.state.val_scope &&
            this.state.val_vols &&
            this.state.val_people == true) {
        this.setState({shortlist: !this.state.shortlist})
            }
    }

    handleToggle = (evt) => {
        let newState = {}
        switch (evt.target.id) {
            case 'chk_council':
                newState = { val_council: !this.state.val_council }
                break;
            case 'chk_social':
                newState = { val_social: !this.state.val_social }
                break;
            case 'chk_bel':
                newState = { val_bel: !this.state.val_bel }
                break;
            case 'chk_org':
                newState = { val_org: !this.state.val_org }
                break;
            case 'chk_scope':
                newState = { val_scope: !this.state.val_scope }
                break;
            case 'chk_vols':
                newState = { val_vols: !this.state.val_vols }
                break;
            case 'chk_date':
                newState = { val_date: !this.state.val_date }
                break;
            case 'chk_place':
                newState = { val_place: !this.state.val_place }
                break;
            case 'chk_council':
                newState = { val_council: !this.state.val_council }
                break;
            case 'chk_people':
                newState = { val_people: !this.state.val_people }
                break;
        }
        this.setState(newState)
    }

        render() {
            console.log('Hello from Confirm Form', this.props)
            const { handleSubmit, prevStep } = this.props;
            const { values } = this.state;

            if (!this.state) return null;
            const { firstName,
                lastName,
                email,
                organization,
                description,
                volunteers,
                datePicker,
                suburb,
                zipCode,
                country,
                council,
                localCouncil,
                keyPeople } = this.state;
            return (
                <div className="form-grid">
                    <Grid textAlign='center' className="form-grid1">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify" }}>
                            <Form>
                                <List divided inverted relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                First Name
                                                </List.Header>
                                            {firstName}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Last Name
                                            </List.Header>
                                            {lastName}
                                        </List.Content>
                                        
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Email Address
                                            </List.Header>
                                            {email}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Organization Name
                                            </List.Header>
                                            {organization}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Description of Event
                                            </List.Header>
                                            {description}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do you have 6-10 Volunteers?
                                            </List.Header>
                                            {volunteers && <div>Yes</div>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                When Would You like to hold Your Event?
                                            </List.Header>
                                            {datePicker}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Suburb
                                            </List.Header>
                                            {suburb}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Postal/Zip Code
                                            </List.Header>
                                            {zipCode}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Country
                                            </List.Header>
                                            {country}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do You have a relationship with your local Counci?
                                            </List.Header>
                                            {localCouncil && <div>Yes</div>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538l" }}>
                                                Details of Your Local Council
                                            </List.Header>
                                            {council}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Key People Within Your Organization
                                            </List.Header>
                                            {keyPeople}
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid textAlign='center' className="form-grid2">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify", background:"grey"}}>
                            <Form>
                                <List divided inverted relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Does the individual meet and match the key WBGS values and believes.
                                                </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_social"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Does the organization meet and match the key WBGS values and believes.
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_bel"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Has the organization been reviewed?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_org"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Is the scope and aim of the described event achievable?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_scope"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Does the organization have 6-10 volunteers to chair a committee?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_vols"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Is the requested date a reasonable to hold a WBGS?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_date"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                            Is the loaction is feasable to hold a WBGS?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_place"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                The potential hosts relationship with local Council will allow them to arrange an event?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_council"/>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Are Key people within the organization are able to help WBGS staff arrange the event and are authorized to make decisions?
                                            </List.Header>
                                            Check if yes - <Checkbox onChange={this.handleToggle} id="chk_people"/>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid className="form-grid3">
                    <Grid.Column>
                        <Segment inverted style={{ textAlign: "justify", background:"#FFFFFF"}}>
                            <img src={ this.state.shortlist ? "./Assets/WBGS-logo.png":"./Assets/WBGS-logo dulled.png" } className= "wbgs-logo"/>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Grid className="form-grid4">
                    <Grid.Column>
                        <Segment floated='right' inverted style={{ textAlign: "justify", background:"#cb3538"}}>
                            <Button.Group>
                                <Button onClick={ this.handleAcptShort } color={"black"} size={"massive"} >Shortlist Candidate</Button>
                                <Button inverted color="white" size={"massive"}>Reject Candidate</Button>
                            </Button.Group>
                        </Segment>
                    </Grid.Column>
                </Grid>
                </div>
               
            )
        }
    }