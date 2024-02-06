# 常见问题

1. [Tiptap](https://tiptap.dev) 可是 React/Vue/Svelte 通吃的，什么时候出 Vue 版？

    因为我们选择了使用 React 来渲染 Tiptap 的 [node view](https://tiptap.dev/guide/node-views/react)，所以暂时只支持 React。

2. 为什么不用 [Slate.js](https://www.slatejs.org/)？

    之前在调研时发现 Slate 存在一些问题，包括中文输入法支持、光标、浏览器兼容性等，并且仍处于 beta 版本，相比之下，选择了更为稳定的 ProseMirror。

3. 能增加同时在线编辑吗，新时代的编辑器在线协同是基本了。

    Tiptap 已经提供了开箱即用的[协同编辑方案](https://tiptap.dev/hocuspocus)，直接集成即可
