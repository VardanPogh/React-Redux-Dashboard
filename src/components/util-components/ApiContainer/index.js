import React, { Component } from "react";
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import syntaxTheme from "./HLTheme";
export class ApiContainer extends Component {

	constructor() {
    super();
    this.state = { 
      markdown: ''
    };
  }

  componentDidMount() {
    fetch(this.props.code).then(
      res => res.text()
    ).then(
      md => {
        this.setState({ 
          markdown: md
        })
      }
    );
  }

  render() {
		const { markdown } = this.state;
    return (
			<div className="api-container">
        <Markdown 
          source={markdown} 
          renderers={
            {
              heading: h => (
                <div className={`api-title h${h.level} ${h.children[0].props.value.includes('title: ')? '':h.children[0].props.value.split('').join('').replace(/\s/g, '-').toLowerCase()}`}>
                  {h.children[0].props.value.includes('title: ')? h.children[0].props.value.replace('title: ', '') : h.children}
                </div>
              ),
              paragraph: p => (
                <React.Fragment>
                  {p.children[0].props.nodeKey === 'text-2-1-0'? '' :<p>{p.children}</p>}
                </React.Fragment>
              ),
              code: c => (
                <div className="api-code-highligher">
                  <SyntaxHighlighter style={syntaxTheme}>
                    {c.value}
                  </SyntaxHighlighter>
                </div>
              )
            }
          }
        />
			</div>
		);
  }
}

export default ApiContainer;
