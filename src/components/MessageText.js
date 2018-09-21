/* jshint ignore: start */

import React from 'react';
import { Message } from 'reactbulma';
import '../smde-editor.css';

class MessageText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="fit pad-bottom">
          <Message className="change-body body-styles">
            <Message.Body>
              <h2>
                Hey!
                <span role="img" aria-label="wave-emoji-brown">
                  👋🏾
                </span>
              </h2>
              <p>
                This is Check Yo Self, an app to check the{' '}
                <span className="highlight">grammar and spelling</span> of your{' '}
                <span className="highlight">markdown blog posts</span>.
              </p>
            </Message.Body>
          </Message>
        </div>
        <div className="fit">
          <Message className="change-danger body-styles change-text">
            <Message.Body>
              <div className="content">
                FAQ:
                <ol>
                  <li>
                    Is my data on your server somewhere?<br />
                    In an upcoming release, I am going to be using Firebase to
                    sync and store your texts so that in case you come back and
                    want to have your data persisted, it will be there. See the
                    Privacy Policy for more.
                  </li>
                  <li>
                    Does this cost anything?<br />
                    Nope. It is free. If you like it you can buy me a{' '}
                    <a href="https://www.paypal.me/codenewb/5">coffee</a>.
                  </li>
                  <li>
                    How can I delete no longer needed texts?<br />
                    Selecting and hitting backspace!
                  </li>
                </ol>
              </div>
            </Message.Body>
          </Message>
        </div>
      </React.Fragment>
    );
  }
}

export default MessageText;
