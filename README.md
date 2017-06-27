react-styled-select
============

This project was built with [styled-components](https://github.com/styled-components/styled-components) and is a "rethink" of the awesome project [react-select](https://raw.githubusercontent.com/JedWatson/react-select). But what the differences between [react-select](https://raw.githubusercontent.com/JedWatson/react-select) and this project?

* Lightweight!
* It don`t force you to load any external css.
* Works with css-modules concept and not with global class names. Here has a good discussion about this problem ([here](https://github.com/oliviertassinari/a-journey-toward-better-style)).
* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables): Very easy to customize for your need.
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM): If you has or had problems with input fields globally stylized you can "encapsulate" your component using this awesome feature.

## Installation

`npm install react-styled-select --save`

## Example Usage

    import React from 'react'
    import Select from 'react-styled-select'

    class MyComp extends React.Component {
      render() {
        const options = [
          { label: "One", value: 1},
          { label: "Two", value: 2},
        ]
        return (
          <Select options={options} />
        )
      }
    }

## Inspiration
This project was based on [react-select](https://raw.githubusercontent.com/JedWatson/react-select).

## License

The MIT License (MIT)

Copyright (c) 2017 Bruno Agutoli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
