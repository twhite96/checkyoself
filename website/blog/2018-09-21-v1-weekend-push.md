---
title: Pushing for a Monday v1 Release
author: Tiffany White
authorURL: http://twitter.com/TiffanyW_412
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1536475999/Profile%20Photos/profile3.png
---

# Updates on Progress

I have rewritten the `MessageText` component. I have added some more body text and wrapped the FAQ and Introductions in `Message` and `Message.Body` components from the React Bulma library.

```jsx
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
```

## The WriteGood Component

I found that, in [my last post](https://checkyoself-docs.netlify.com/blog/2018/09/04/fixing-components.html) about fixing components, I was overthinking the component.

I went spelunking into documentation and library code, as well as asking around on Slack, and I realized that:

a. I just need a functional component that I can add to the `SimpleMDE` component in the `Text.js` component and,

b. Getting the suggestions to show up in a popover is going to be a bit difficult, so a dev in Slack is going to help me get the suggestions to show up *under* the text editor. I am not sure how this is going to work and it's definitely not ideal but it is good enough for v.1.

```jsx
const WriteGood = ({ text }) => (
  <div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>
);
```

## Pushing for a Monday Release

I am probably going to be working on this all day today and over the weekend. Hopefully, when the dev that has offered his help has time, we'll get the suggestions up and running. After that, there is some styling fixes and then v.1 should be done.
