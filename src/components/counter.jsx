import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count : 1,
        imageUrl: 'https://picsum.photos/200',
        tags:[]
    };
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;
        return   <ul>
                     {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                  </ul>;
    }
    render() { 
       
        return (
        <React.Fragment>
            {this.state.tags.length ===0 && 'Please create new Tag' }
                {this.renderTags()}

        </React.Fragment>
        );
    }
 
}
 
export default Counter;