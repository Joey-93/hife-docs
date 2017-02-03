# HiUI

> PC端UI组件库。Powered by Vue.js.

<br><br>

## 组件

<br>
*************************************************************************************************************
<br>
 
### Popover

弹出框组件，提供配套的`popover-handler`与`popover-body`组件。

<p class="tip">
    配套的`popover-handler`与`popover-body`组件非必需，可根据自身需求选取。
</p>

``` html
<popover :trigger="'click'" :direction="'bottom'" :offset="'right'" :expand="false" :disable="true">
  <popover-handler slot="handler">Popover组件测试</popover-handler>
  <popover-body slot="body">
    这里是自定义内容。
  </popover-body>
</popover>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:trigger    | `String` | `hover` | 共有`hover`、`click`、`custom`三种触发类型，分别是鼠标悬浮,点击，自定义。自定义类型下，需要手动设置expand来打开关闭弹出框。
:direction    | `String` | `bottom` | 弹出框的方向，共有`bottom`、`top`两种类型。`bottom`表示弹出框在下方，top表示弹出框在上方。
:offset    | `String` | `left` | 弹出框的偏移位置，共有`left`、`center`、`right`三种类型。`left`表示弹出框在左侧显示，`center`为居中，`right`为右侧显示。
:expand    | `Boolean` | `false` | `true`表示打开弹出框，`false`则关闭弹出框。
:disable    | `Boolean` | `false` | `true`表示禁用弹出框，`false`表示启用弹出框

#### Popover handler

> 提供基础样式，带有右侧箭头，并根据弹出框的展开、禁用状态，自行处理箭头、自身禁用的样式。

``` html
<popover-handler>Popover组件测试</popover-handler>
```

#### Popover body

> 提供基础样式，边缘带有箭头，可隐藏。

``` html
<popover-body :show_arrow="false">这里是自定义内容。</popover-body>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:show_arrow    | `Boolean` | `true` | `true`则展示箭头，`false`则隐藏

<br>

### Dropdown

下拉框组件，提供配套的`dropdown-handler`、`dropdown-body`、`dropdown-option`。

<p class="tip">
  以上配套组件非必需，可根据需求自行选取。
</p>

``` html
<dropdown :trigger="click" :offset="'left'" :expand="false" :disable="true">
  <dropdown-handler slot="handler">下拉菜单组件测试</dropdown-handler>
  <dropdown-body slot="body">
    <dropdown-option v-for="n in 3">
        {{n}}
    </dropdown-option>
  </dropdown-body>
</dropdown>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:trigger    | `String` | `hover` | 共有`hover`、`click`、`custom`三种触发类型，分别是鼠标悬浮,点击，自定义。自定义类型下，需要手动设置expand来打开关闭下拉框。
:offset    | `String` | `center` | 下拉框的偏移位置，共有`left`、`center`、`right`三种类型。`left`表示下拉框在左侧显示，`center`为居中，`right`为右侧显示。
:expand    | `Boolean` | `false` | `true`表示打开下拉框，`false`则关闭下拉框。
:disable    | `Boolean` | `false` | `true`表示禁用下拉框，`false`表示启用下拉框

#### Dropdown handler

> 提供基础样式，带有右侧箭头，并根据下拉框的展开、禁用状态，自行处理箭头、自身禁用的样式。

``` html
<dropdown-handler>下拉菜单组件测试</dropdown-handler>
```

#### Dropdown body

> 提供基础样式

``` html
<dropdown-body>这里是自定义内容。</dropdown-body>
```

#### Dropdown option

> 提供基础样式及一些基础行为（点击关闭下拉框）

``` html
<dropdown-option :active='true' :closable="false">选项</dropdown-option>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:active    | `Boolean` | `false` | `true`则应用选中状态下的样式，`false`则为普通样式
:closable    | `Boolean` | `true` | `true`表示点击当前选项，下拉框会关闭，`false`则反之。

<br> 

### Modal

下拉框组件，提供配套的`modal-header`、`modal-body`、`modal-footer`。

<p class="tip">
  以上配套组件非必需，可根据需求自行选取。
</p>

``` html
<modal v-show="modal_switch" 
       :closable="false"
       :mask_closable="false"
       @close="modal_switch = false;" 
       @submit="modal_switch = false">

  <modal-header>这里是模态框的标题</modal-header>
  <modal-body>这里是自定义内容</modal-body>
  <modal-footer></modal-footer>

</modal>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:closable    | `Boolean` | `true` | `true`则模态框是可关闭的，右上角也存在关闭按钮，`false`则禁止关闭，且隐藏关闭按钮。
:mask_closable    | `Boolean` | `true` | `true`表示点击半透明背景关闭模态框，`false`则反之。

#### Modal header

> 提供基础样式

``` html
<modal-header>模态框头部</modal-header>
```

#### Modal body

> 提供基础样式

``` html
<modal-body>这里是自定义内容</modal-body>
```

#### Modal footer

> 提供基础样式，并且提供确认、取消两种按钮，按需显示。

``` html
<modal-footer :only="'cancel'"></modal-footer>
```

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:only    | `String` | `''` | 共有`''`，`cancel`，`submit`三种类型，分别表示展示确认、取消两种按钮，只展示取消按钮，只展示确认按钮。

