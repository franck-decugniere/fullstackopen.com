# JSX
JSX compiled by Babel into JS
```js
<div className="sidebar"/>
// React.createElement('div',{className:"sidebar"})      
```
***
```js
<MyButton color="blue">Click Me</MyButton>
// React.createElement(MyButton, {color:"blue"}, 'Click Me')
```

## Dynamic React element type
```js
    import {PhotoStory, VideoStory} from "./stories"

    const components = {
        photo: PhotoStory,
        video: VideoStory
    }

    const StoryWrong = (props) => {
        // WRONG ! JSX type can't be an expression
        return <components[props.storyType] story={props.story}>;
    }

    const Story = (props) => {
        const SpecificStory = components[props.storyType];
        return <SpecificStory story={props.story}>
    }
```