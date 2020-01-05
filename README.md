# vue2-click-outside

Vue directive to react on clicks outside an element without stopping the event propagation.

## Install

```bash
$ npm install --save vue2-click-outside
```

```bash
$ yarn add vue2-click-outside
```

## Use

```js
import Vue from 'vue'
import Vue2ClickOutside from 'vue2-click-outside'

Vue.use(Vue2ClickOutside)
```

```js
<script>
  export default {
    data () {
      clickOutsideConfig: {
        handler: this.handler,
        middleware: this.middleware,
        events: ['dblclick', 'click'],
        active: true
      }
    },
    methods: {
      onClickOutside (event, el) {
        console.log('Clicked outside. Event: ', event)
      },

      handler (event, el) {
        console.log('Clicked outside (Using config), middleware returned true :)')
      },
      middleware (event, el) {
        return event.target.className !== 'modal'
      }
    }
  };
</script>

<template>
  <div click-outside="onClickOutside"></div>
  <div click-outside="clickOutsideConfig"></div>
</template>
```

Or use it as a directive

```js
import Vue2ClickOutside from 'vue2-click-outside'

<script>
  export default {
    directives: {
      clickOutside: Vue2ClickOutside.directive
    },
    methods: {
      onClickOutside (event) {
        console.log('Clicked outside. Event: ', event)
      }
    }
  };
</script>

<template>
  <div click-outside="onClickOutside"></div>
</template>
```

## License

MIT