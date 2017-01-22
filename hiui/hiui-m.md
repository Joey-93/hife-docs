# HiUI Mobile

> WEB移动端UI组件库。Powered by Vue.js.

<br><br>

## 组件

<br>
*************************************************************************************************************
<br>

### Page

一个页面的容器, 抽象了页面公用的样式和逻辑。

``` html
<page class="my-page" :use_nav="true"></page>
```

``` javascript
// 需要在获得所需的数据之后执行页面初始化
this.$root.$emit('init-page', {
  title: '标题',
  desc: '描述「可选」',
  icon: '图标「可选」',
  share_link: '分享链接「可选, 默认当页面Url」'
});
```

> `Page`组件内部处理了`is_loading`状态, 页面加载遮罩会在`init-page`初始化后关闭。

属性 | 数据类型 | 默认值 | 说明
----        | ---       | ---     | ---
:use_nav    | `Boolean` | `false` | 设置为`true`时, 页面窗口底部出现全站的导航条, 反之则不出现。

<br><br>

#### Page header

`page`内唯一的头部顶栏。

``` html
<page class="my-page">
  <page-header :slot="page-header"></page-header>
</page>
```

属性 | 数据类型 | 默认值 | 说明
----         | ---      | ---    | ---
:logo_mode   | `String` | `dark` | 设置为`dark`时, logo字为黑色; 设置为'light'时, logo字色为白色。
:_background | `String` | `#fff` | 与css中`background`属性用法相同, 可以设置透明。
:_color      | `String` | `#111` | 与css中`color`属性用法相同, 设置头部内文字和前景元素颜色。

<br><br>

#### Top title

`page`内占一整行空间的大号字体标题「可多次出现」。

``` html
<top-title>下一次旅行</br>想去哪里？</top-title>
```

<br><br>
*************************************************************************************************************
<br>

### List row

一行标准的列表项组件, 内部由「左侧图表」、「右侧图标」、「左侧内容区」和「右侧内容区」组成。

``` html
<list-row :left_icon="{ name: 'i-order', color: '#f02f45' }"
          :right_icon="{ name: 'i-arrow-right', color: '#ccc' }"
          :_padding="'15px 0'"
          @click.native="$router.push({ name: 'orders' })">
  <row-inner slot="row-left">我的订单</row-inner>
</list-row>

```

属性 | 数据类型 | 默认值 | 说明
----         | ---      | ---      | ---
:left_icon   | `Object` | `null`   | 用于设置列表行左侧的图标。<br>使用icon: `{ name: 'i-user', color: '#ccc' }`<br>使用图片: `{ image_url: './my_image.png' }`
:right_icon  | `Object` | `null`   | 用于设置列表行右侧的图标, 图标经常为右箭头, 用法同上。
:_padding    | `String` | `15px 0` | 与css中`padding`属性用法相同, 设置列表行的内边距, 直接使用css样式控制同样可以。

<br><br>

#### Row inner

列表行内的内容区。

``` html
<!-- 左侧内容区 -->
<row-inner slot="row-left" :span="'2/3'">我的优惠券</row-inner>
<!-- 右侧内容区 -->
<row-inner slot="row-right" :span="'1/3'"><tag>9</tag></row-inner>
```

属性 | 数据类型 | 默认值 | 说明
----  | ---      | ---   | ---
:span | `String` | `1/2` | 用于设置左右两侧内容区的宽度占比。

<br><br>
*************************************************************************************************************
<br>

### Su image

移动端 响应式 自适应 按比例 剪裁图片组件。






## TODO

<br><br>
*************************************************************************************************************
<br>

### 颜色
### 过渡动效
### 尺寸
### 字体