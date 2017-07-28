
[![Issues](https://img.shields.io/github/issues/agutoli/react-styled-select.svg)](https://github.com/agutoli/react-styled-select/issues) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/react-styled-select)
[![Build Status](https://travis-ci.org/agutoli/react-styled-select.svg?branch=master)](https://travis-ci.org/agutoli/react-styled-select)
[![NPM](https://img.shields.io/npm/v/react-styled-select.svg)](https://www.npmjs.com/package/react-styled-select)



react-styled-select
============
### ATTENTION: Work in Progress (sorry about that!)

This project was built with [styled-components](https://github.com/styled-components/styled-components) and is a "rethink" of the awesome project [react-select](https://raw.githubusercontent.com/JedWatson/react-select). But what the differences between [react-select](https://raw.githubusercontent.com/JedWatson/react-select) and this project?

* Lightweight!
* It don`t force you to load any external css.
* Works with css-modules concept and not with global class names. Here has a good discussion about this problem ([here](https://github.com/oliviertassinari/a-journey-toward-better-style)).
* [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables): Very easy to customize for your need.
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM): If you has or had problems with input fields globally stylized you can "encapsulate" your component using this awesome feature.

## Installation

`npm install react-styled-select --save`

## Demo

[http://agutoli.github.io/](http://agutoli.github.io/)

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
          <Select
            options={options}
            onOpen={myOpenFunc}
            onChange={myChangeFunc}
            classes={{
              selectValue: 'my-custom-value',
              selectArrow: 'my-custom-arrow'
            }}
          />
        )
      }
    }



## Opptions

| Property | Type | Description
:---|:---|:---
| `classes` | object | You can specify `className` for each element. Possible values: `selectArrow`, `selectArrowZone`, `selectClear`, `selectClearZone`, `selectControl`, `selectInput`, `selectInputField`, `selectMenu`, `selectMenuOuter`, `selectMultiValueWrapper`, `selectOption`, `selectPlaceholder`, `selectValue`, `selectValueLabel`
|`placeholder`|string| The short hint is displayed in the input field before the user enters a value
| `className` | string | Root element className
| `value` | any | If you want to specify a pre selected value
| `options` | array | List of values. Ex. <br> `[{"label": "Foo", value: "foo"}]`
|`onOpen`| function | It calls when open outer menu
|`onChange`| function | It calls when change selected value
|`onValueClick`| function | It calls when click over a option value
|`onInputClear`|function| It calls when input is cleared

## Custom appearance with CSS Variebles

#### Default
![](https://image.ibb.co/bC4i7k/Captura_de_Tela_2017_06_27_a_s_03_18_09.png)

#### Customized
![](https://image.ibb.co/bSei7k/Captura_de_Tela_2017_06_27_a_s_03_17_59.png)

* Your react file ex. `MyForm.jsx`

```javascript
class MyForm extends React.Component {
  render() {
    return(){
      <Select className="dark-theme" options={[...]} />
    }
  }
}
```

* Your project CSS file ex. `mysite.css`

```css
.dark-theme {
  --styled-select-placeholder-color: #999;
  --styled-select-color: white;
  --styled-select-background-color: #555;
  --styled-select-border-color: black;
  --styled-select-border-width: 3px;
  --styled-select-border-radius: 5px;

  --styled-select-menu-outer-margin: 10px 0 0 0;
  --styled-select-menu-outer-padding: 0;
  --styled-select-menu-outer-background-color: #555;
  --styled-select-menu-outer-border-color: black;
  --styled-select-menu-outer-border-style: solid;
  --styled-select-menu-outer-border-width: 3px;

  --styled-select-option-background-color: #444;

  --styled-select-option-focused-color: #eee;
  --styled-select-option-focused-background-color: #333;

  --styled-select-option-selected-color: #eee;
  --styled-select-option-selected-background-color: #444;
}
```


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
