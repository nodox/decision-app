import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import axios from 'axios'

import { CoreLayout } from '../components/CoreLayout'
import { Navbar } from '../components/Navbar'
import { NavbarItem } from '../components/NavbarItem'
import { Grid } from '../components/Grid'
import { Cell } from '../components/Cell'

const DecisionsGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2rem;

  text-align: center;
  text-transform: capitalize;

  margin-top: 40px;

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

`

const DecisionsGridCell = styled(Cell)`
  div {
    display: block;

    background: green;
    
    color: white;
  }
`

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://local.wrydit.com:3000/v1/decisions')
    .then(response => {
      this.setState({ data: response.data })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {

    return (
      <CoreLayout>
      <Grid>
        <Cell>
          <Navbar>
            <NavbarItem>Wrydit</NavbarItem>
            <NavbarItem>Github</NavbarItem>
          </Navbar>
        </Cell>
      </Grid>
      <Grid>
        <Cell>

          <Link to="decisions/new">
            Create Decision
          </Link>

          <DecisionsGrid>
            {this.state.data.map((obj, idx) => {
              console.log(obj)
              return (
                <DecisionsGridCell key={idx}>
                  <div>{obj.decisionMaker}</div>
                  <div>{obj.description}</div>
                  <div>{obj.email}</div>
                  <div>{obj.endDate}</div>
                  <div>{obj.name}</div>
                  <div>{obj.outcome}</div>
                  <div>{obj.startDate}</div>
                </DecisionsGridCell>
              )
            })}
          </DecisionsGrid>
        </Cell>
      </Grid>
  
      
    </CoreLayout>
    )
  }
}
