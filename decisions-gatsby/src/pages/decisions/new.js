import React from 'react'
import { Link } from 'gatsby'
import SEO from '../../components/seo'
import styled from 'styled-components'
import axios from 'axios'

import { CoreLayout } from '../../components/CoreLayout'
import { Grid } from '../../components/Grid'
import { Cell } from '../../components/Cell'


export default class DecisionNewPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <CoreLayout>
        <Grid>
          <Cell>
            <form>
              <div>
                <label>
                  Is going:
                  <input
                    name="isGoing"
                    type="checkbox"
                    checked={true}
                    onChange={this.handleInputChange} />
                </label>
              </div>
              <div>
                <label>
                  Number of guests:
                  <input
                    name="numberOfGuests"
                    type="number"
                    value={2}
                    onChange={this.handleInputChange} />
                </label>
              </div>
            </form>
          </Cell>
        </Grid>
      </CoreLayout>
    )
  }
}
