---
title: Fixing Components
author: Tiffany White
authorURL: http://twitter.com/TiffanyW_412
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1536475999/Profile%20Photos/profile3.png
---

I watched [this talk by Dan Abramov](https://www.youtube.com/watch?v=nLF0n9SACd4) at JSConf 2018 and a lot of things about React became clearer to me.

I have sat down and worked on understanding my components and fixing them.

## Fix 1:

I would like to have the text I need to check for grammar and spelling errors to have its own state. This way, when someone adds text to the editor, that data does not remain fixed; it is able to be changed. If I had just passed it as a `prop` to the editor, I wouldn't be able to mutate the data, as props are read-only.

I created `state` in the `constructor` method:

```jsx
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Check your markdown here.',
      text: {}
    };
  }
```

So far, text is just an empty object to store the text.

I am able to handle the text change and set its state with the `handleTextChange` method where I assign a prop of `markup`:

```jsx
  handleTextChange = markup => {
    this.setState({
      text: markup
    });
  };
```

So far, so good.

## Problem:

I needed a way to check the text in the editor. I created the state for `text` and added it to the editor. And now that I am writing this I can see some obvious flaws.

What I really want to do, ultimately, is pass props down from the `WriteGood` component into the markdown editor. I tried to accomplish this by placing the component inside the editor with no luck. This is when I decided to try creating state for the text input. I am not sure that helps at all, actually.

## Searching For Passing Props from One Component to Another

In React 16 we have `this.props.children`. I am not certain I know how to use it or if I'd even want to. I know that I want that `WriteGood` component's props to be passed into the `SimpleMDEReact` component.

## Codesandbox 

Here is the project on Codesandbox.

<iframe src="https://codesandbox.io/embed/7m427yrqxj" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
