import React, { Component } from "react";
import Markdown from 'react-markdown';
import CodeBox from './CodeBox';

export class DemoCard extends Component {

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
    const enUs = 'en-US: '
    return (
      <div className="code-box">
        <section className="code-box-demo">
          {this.props.children}
        </section>
        <section className="code-box-description">
          <Markdown
            source={markdown}
            renderers={
              {
                heading: h => (
                  <h4>
                    {h.children[0].props.value.includes(enUs)? h.children[0].props.value.replace(enUs, '') : ''}
                  </h4>
                ),
                thematicBreak : () => (
                  <React.Fragment></React.Fragment>
                ),
                paragraph: p => (
                  <React.Fragment>
                    {p.children[0].props.value.match(/[\u4e00-\u9faf]/)? '' :<p className="mb-0">{p.children}</p>}
                  </React.Fragment>
                ),
                code : CodeBox
              }
            }
          />
        </section>
      </div>
    );
  }
}

export default DemoCard;
