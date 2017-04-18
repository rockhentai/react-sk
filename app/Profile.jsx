import React, {PropTypes} from 'react'
import Hobby from './hobby';

//需要验证的属性
const propTypes = {
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked:0,
      hobbies:['rock music','play games']
    }
    this.likedCallback = this.likedCallback.bind(this);
    this.addHobbyCallback = this.addHobbyCallback.bind(this);
  }

  likedCallback() {
    let liked = this.state.liked;
    liked++;
    this.setState({
      liked
    });
  }

  addHobbyCallback() {
    let hobbyInput = this.refs.hobby;
    let val = hobbyInput.value;
    if(val) {
      let hobbies = this.state.hobbies;
      hobbies = [...hobbies,val];
      this.setState({
        hobbies
      },() => {
        hobbyInput.value = '';
      })
    }
  }

  render() {
    return (
      <div className="profile-component">
        <h1>我的名字叫 {this.props.name} </h1>
        <h2>我今年 {this.props.age}岁</h2>
        <button onClick={this.likedCallback}>给我点赞</button>
        <h2>总点赞数：{this.state.liked}</h2>
        <h2>我的爱好：</h2>
        <ul>
          {this.state.hobbies.map((hobby,i) => <Hobby hobby={hobby} key={i} />)}
        </ul>
        <input type="text" ref="hobby" />
        <button onClick={this.addHobbyCallback}>添加爱好</button>
      </div>
    )
  }
}

Profile.propTypes = propTypes;

export default Profile
