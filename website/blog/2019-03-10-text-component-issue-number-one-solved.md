---
title: "Text Component Issue 1: Solved"
author: Tiffany White
authorURL: http://twitter.com/TiffanyW_412
authorImageURL: https://res.cloudinary.com/twhiteblog/image/upload/v1536475999/Profile%20Photos/profile3.png
---

Draft.js editor and its plugins was way too complex for me. I could have gotten it working but, out of the box, it just wasn't what I needed.

I'd have had to work in some markdown plugins and a couple Decorators for some styling functionality that I didn't need out of the box with SimpleMDE.

So I went back to SimpleMDE. And struggled.

But then, after looking over the `writeGood` component, I realized that, I could basically just pass that function as a `prop` to the SimpleMDE component like so:

```jsx
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Check your markdown here.',
      text: {}
    };
    this.handleWriteGood = this.handleWriteGood.bind(this);
  }
  // some more logic

  handleWriteGood = text => {
    writeGood(text).map(({ suggestion }) => suggestion);
  }

  // more logic

  <SimpleMDEReact
    className="smde-editor-styles"
    editorStyle={editorStyle}
    // suggested={this.editorState}
    label="Markdown Editor"
    onChange={this.handleChange1}
    options={{
      autofocus: true,
      spellChecker: true
      // etc.
    }}
    value={this.state.textValue}
    markup={this.state.text}
    text={writeGood}
  />
  ```

  This implementation is the correct one, but I will need to get it working with a popover, etc.

  ## Next stop

  Busy but will be working some more on it this coming weekend.