import React, { Component } from 'react'
import Display from './Display'
import Thumbnail from './Thumbnail'
import Button from './common/Button'


export class Imager extends Component {
    state = {
        imagePaths: [`images/cloudheart.jpg`, `images/cloudrainbowheart.jpg`, `images/flowerheart.avif`, `images/galaxy.jpg`, `images/glassheart.avif`, `images/heartfire.jpg`, `images/heartfire2.jpg`, `images/heartlightning.jpg`, `images/hearttree.avif`, `images/leafheart.avif`, `images/outerspace.jpg`, `images/tinyheartclouds.jpg`],
        imageNumber: 0,
        
        
    }

    componentDidMount(){
      this.setState({
        displayImage: this.state.imagePaths[this.state.imageNumber]
      })
    }

    displayRandomImage=()=>{
       this.setState({
        imageNumber: Math.floor(Math.random() * 12),
        displayImage: this.state.imagePaths[this.state.imageNumber]
       })
    }
    displayNextImage=()=>{
      this.setState({
        imageNumber: this.state.imageNumber+1
      })
    }
    displayLastImage=()=>{
      this.setState({
        imageNumber: this.state.imageNumber-1
      })
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.imageNumber !== this.state.imageNumber){
        this.setState({
          displayImage: this.state.imagePaths[this.state.imageNumber]
        })
      }
      if(this.state.imageNumber > 11){
        this.setState({
          imageNumber: 0
        })
      }
      if(this.state.imageNumber < 0){
        this.setState({
          imageNumber: 11
        })
      }
    }
    displayImageClicked=(path, index)=>{
      this.setState({
        displayImage: this.state.imagePaths[index],
        imageNumber: index
      })
      
    }
  render() {
    return (
      <div>
        <Display path={this.state.displayImage} />
        <div style={{display: 'flex', justifyContent: "space-around"}} className="buttons">
          <Button clickFunc={this.displayRandomImage} text={'Random'} />
          <div className="arrows">
            <Button clickFunc={this.displayLastImage} text={'<'} />
            <Button clickFunc={this.displayNextImage} text={'>'} />
          </div>
          
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '80vw', justifyContent: 'center'}} className="images">
        {this.state.imagePaths.map((path, i)=>{
            return (
                <Thumbnail imageNum={i} clickFunc={this.displayImageClicked} path={path} />
            )
        })}
        </div>
      </div>
    )
  }
}

export default Imager