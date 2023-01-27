import * as React from 'react'

interface iProps{
  name :String;
  job :String;
}

export default class test extends React.Component<iProps>{

  render() {
    const { name, job } = this.props;

    return (
      <div>
        <h1>프로필</h1>
        <div>
          <b>이름 :</b>
          {name}
        </div>
        <div>
          <b>직업 :</b>
          {job}
        </div>
      </div>
    )
  }
}
