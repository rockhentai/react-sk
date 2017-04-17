import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-component">
        <h1>我的名字叫 {this.props.name} </h1>
        <h2>我今年 {this.props.age}岁</h2>
      </div>
    )
  }
}

export default Profile
