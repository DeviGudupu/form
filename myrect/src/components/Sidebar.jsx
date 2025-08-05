import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className='sidebar'>
            <li> <link to="/"> About </link></li>
            <li><Link to="\login">Login</Link></li>
            <Li><Link to="\profile">Profile</Link></Li>
            <Li><Link to="\register">Register</Link></Li>
            <Li><Link to="\contactus">Contactus</Link></Li>
        </ul>
      </div>
    )
  }
}
