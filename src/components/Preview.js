import React, { Component } from 'react';
import marked from 'marked';

export default class Preview extends Component{
    formatMarkdownText(text){
        //need to create unsafeHTML output and do my own authentication       
        return marked(text);

    }

    render(){
        return (
            <div className="preview col-md-6">
                <h3>Markdown Preview</h3>                
                <div id="preview-window" dangerouslySetInnerHTML={{__html: this.formatMarkdownText(this.props.text)}}>                    
                </div>                  
            </div>
        );
    }
}
