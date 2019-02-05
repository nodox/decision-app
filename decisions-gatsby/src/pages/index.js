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

  padding-left: 8.5rem;  
  padding-right: 8.5rem;  
  

  text-align: center;
  text-transform: capitalize;

  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

`

const DecisionsGridCell = styled(Cell)`
  div {
    display: block;
    width: 100%;
    background: #06aa06;
    border-radius: 9px;
    color: white;
    box-shadow: 0.165rem 0.165rem 0.375rem #000;
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
                  <div>
                    {obj.decisionMaker}<br></br>
                    {obj.description}<br></br>
                    {obj.email}<br></br>
                    {obj.endDate}<br></br>
                    {obj.name}<br></br>
                    {obj.outcome}<br></br>
                    {obj.startDate}<br></br>
                  </div>
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
