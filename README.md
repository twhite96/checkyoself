# Check Yo Self

>  A site to check the grammar of your markdown blog posts/texts.

[![Shields](https://img.shields.io/badge/Status-WIP-%2306d7d9?style=for-the-badge&logo=appveyor)](https://img.shields.io/badge/Status-WIP-%2306d7d9)

[![Travis](https://img.shields.io/travis/twhite96/checkyoself.svg?style=for-the-badge&logo=appveyor)](https://travis-ci.org/twhite96/checkyoself)
[![MIT Licence](https://img.shields.io/github/license/twhite96/checkyoself?style=for-the-badge)](https://opensource.org/licenses/mit-license.php)
[![GitHub commits](https://img.shields.io/github/commits-since/twhite96/checkyoself/0.7?style=for-the-badge)](https://github.com/twhite96/checkyoself/releases/tag/0.7)
[![Twitter Follow](https://img.shields.io/twitter/follow/tiffanywhitedev.svg?style=social&label=Follow)](https://twitter.com/tiffanywhitedev)


[Live Demo](https://checkyoself.tiffstuff.dev)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/twhite96/checkyoself)

---

How to use:

1. 🌀 Clone the repo at `https://github.com/twhite96/checkyoself.git`
2. 🏃 Run: `npm i` to install dependencies.
3. 🎊 Have fun with it.

---

## 💪🏽 Motivation for this app
Frustrated by Grammarly and Hemingway apps' inability to process markdown blog posts, I decided to make my own site to process markdown blog posts or other texts. I settled on React Bulma for the UI because it is lightweight and flexible, like Bulma.

## 🥞 Stack
I am currently using React-Bulma, create-react-app, write-good, and SimpleMDE markdown editor. Eventually I'd like to use Firebase for data persistence.

## 👊🏽 Wins
The components are written for the most part; there are some breaking changes with SimpleMDE editor and so I am not upgrading to the latest version.

I've also become more cognizant of React patterns and concepts.

For instance,

## 😐 Difficulties

Getting the styling was easy. At first, getting the navigation together with the `react-transition-group` library was difficult as I didn't have much experience with React when I started this project for instance, this hamburger button:

```jsx

export default ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);
```

I didn't know what it was doing. What was this line: `{open ? "burger-menu open" : "burger-menu"}` and what did it do?


## 🚶‍♂️Next steps


## ⚡ Refactor ⚡


###  📘 Further reading


## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/twhite96/checkyoself](https://github.com/twhite96/checkyoself)
