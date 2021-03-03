(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{355:function(t,s,a){t.exports=a.p+"assets/img/RBAC.c092a010.png"},356:function(t,s,a){t.exports=a.p+"assets/img/DATARUAC.6c431649.png"},357:function(t,s,a){t.exports=a.p+"assets/img/project.84eaf88a.png"},358:function(t,s,a){t.exports=a.p+"assets/img/oauth.be9415dd.png"},359:function(t,s,a){t.exports=a.p+"assets/img/grantType.e2325cc3.png"},360:function(t,s,a){t.exports=a.p+"assets/img/jwt.1e3b5788.png"},361:function(t,s,a){t.exports=a.p+"assets/img/user.57017a48.png"},362:function(t,s,a){t.exports=a.p+"assets/img/oauth2.64d8b3b0.png"},363:function(t,s,a){t.exports=a.p+"assets/img/appLogin.8068e074.png"},364:function(t,s,a){t.exports=a.p+"assets/img/loginMethod.b8d471d5.png"},365:function(t,s,a){t.exports=a.p+"assets/img/passwordLogin.a2724561.png"},366:function(t,s,a){t.exports=a.p+"assets/img/loginSuccess.18d3a4e0.png"},367:function(t,s,a){t.exports=a.p+"assets/img/wx.f08431e8.png"},368:function(t,s,a){t.exports=a.p+"assets/img/wxForm.4cebf496.png"},369:function(t,s,a){t.exports=a.p+"assets/img/wxLogin.ae674589.png"},370:function(t,s,a){t.exports=a.p+"assets/img/wxLoginDetail.7e54e179.png"},371:function(t,s,a){t.exports=a.p+"assets/img/threeLogin.6472132e.png"},372:function(t,s,a){t.exports=a.p+"assets/img/threeLoginDetail.341b834e.png"},373:function(t,s,a){t.exports=a.p+"assets/img/threeLoginEnd.c0938cc3.png"},374:function(t,s,a){t.exports=a.p+"assets/img/smsLogin.987e1a31.png"},375:function(t,s,a){t.exports=a.p+"assets/img/sms.c3f4266d.png"},389:function(t,s,a){"use strict";a.r(s);var r=a(45),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"技术分享"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术分享"}},[t._v("#")]),t._v(" 技术分享")]),t._v(" "),r("h2",{attrs:{id:"系统授权思想设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统授权思想设计"}},[t._v("#")]),t._v(" 系统授权思想设计")]),t._v(" "),r("h3",{attrs:{id:"_1-说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[t._v("#")]),t._v(" 1. 说明")]),t._v(" "),r("p",[t._v("现目前认证授权模块在分布式系统中已经作为系统的基础设施,广泛应用于项目中。主要介绍两种常见的授权思想,供大家参考。")]),t._v(" "),r("h3",{attrs:{id:"_1-1-基于角色的访问控制-rbac"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基于角色的访问控制-rbac"}},[t._v("#")]),t._v(" 1.1 基于角色的访问控制(RBAC)")]),t._v(" "),r("h3",{attrs:{id:"_1-1-1-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-介绍"}},[t._v("#")]),t._v(" 1.1.1 介绍")]),t._v(" "),r("p",[t._v("基于角色的访问控制（RBAC）是实施面向企业安全策略的一种有效的访问控制方式。在RBAC模型里面,有3个基础组成部分,分别是:用户、角色和权限。\n*1. 用户: 即登录系统的用户,他被授予不同的角色\n*2. 角色: 系统中定义的角色 (超级管理员、管理员、普通角色...)\n*3. 权限: 每个角色访问资源的权限,在具体分析有菜单权限、按钮权限...")]),t._v(" "),r("h3",{attrs:{id:"_1-1-2-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-适用场景"}},[t._v("#")]),t._v(" 1.1.2 适用场景")]),t._v(" "),r("p",[t._v("在常见的管理系统中,如果不需要对数据、权限进行特殊的处理,基本上都可以使用该授权思想。")]),t._v(" "),r("h3",{attrs:{id:"_1-1-3-实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-实现"}},[t._v("#")]),t._v(" 1.1.3 实现")]),t._v(" "),r("ol",[r("li",[t._v("示例图")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(355),alt:"RBAC"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("数据库设计")])]),t._v(" "),r("p",[t._v("用户表(system_user) 关键字段  id、username、password")]),t._v(" "),r("p",[t._v("角色表(system_role) 关键字段  id、roleName")]),t._v(" "),r("p",[t._v("权限表(system_permission) 关键字段 id、pid、type、url")]),t._v(" "),r("p",[t._v("用户角色关联表(system_user_role_relation) id user_id role_id")]),t._v(" "),r("p",[t._v("角色权限关联表(system_role_permission_relation) id role_id permission_id")]),t._v(" "),r("h3",{attrs:{id:"_1-2-数据查看权限设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据查看权限设计"}},[t._v("#")]),t._v(" 1.2 数据查看权限设计")]),t._v(" "),r("h3",{attrs:{id:"_1-2-1-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-介绍"}},[t._v("#")]),t._v(" 1.2.1 介绍")]),t._v(" "),r("p",[t._v("数据查看权限在RBAC模型的基础上进行设计,有4个基础组成部分,分别是:用户、角色、权限和授权。")]),t._v(" "),r("ol",[r("li",[t._v("用户: 即登录系统的用户,他被授予不同的角色")]),t._v(" "),r("li",[t._v("角色: 系统中定义的角色 (超级管理员、管理员、普通角色...)")]),t._v(" "),r("li",[t._v("权限: 每个角色访问资源的权限,在具体分析有菜单权限、按钮权限...")]),t._v(" "),r("li",[t._v("授权: 系统赋予用户的某些资源的某些角色,这一过程称为授权。在使用Oracle、MySQL等数据库时,要创建用户,创建成功后,在对用户授权,进行一系列的grant\n操作,例如用户A拥有数据A的超级管理员权限,拥有数据库B的普通角色权限。")])]),t._v(" "),r("h3",{attrs:{id:"_1-2-2-适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-适用场景"}},[t._v("#")]),t._v(" 1.2.2 适用场景")]),t._v(" "),r("p",[t._v("如果系统涉及到数据查看的控制,则需要做数据查看权限处理。例如在一个系统中,一个用户是商户A的员工,则只能看到商户A的数据,不能看到商户B的数据。")]),t._v(" "),r("h3",{attrs:{id:"_1-2-3-实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-实现"}},[t._v("#")]),t._v(" 1.2.3 实现")]),t._v(" "),r("ol",[r("li",[t._v("示例图")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(356),alt:"RBAC"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("数据库设计")])]),t._v(" "),r("p",[t._v("用户表(system_user) 关键字段  id、username、password")]),t._v(" "),r("p",[t._v("授权表(system_grant) 关键字段  id、role_id、user_id、resource_id(数据id,例如商品id、工会id)")]),t._v(" "),r("p",[t._v("角色表(system_role) 关键字段  id、roleName")]),t._v(" "),r("p",[t._v("权限表(system_permission) 关键字段 id、pid、type、url")]),t._v(" "),r("p",[t._v("用户角色关联表(system_user_role_relation) id user_id role_id")]),t._v(" "),r("p",[t._v("角色权限关联表(system_role_permission_relation) id role_id permission_id")]),t._v(" "),r("h3",{attrs:{id:"_1-3-技术参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-技术参考"}},[t._v("#")]),t._v(" 1.3 技术参考")]),t._v(" "),r("p",[t._v("了解MySQL数据库对于权限的设计。具体技术实现建议采用Spring Security 、Oauth2")]),t._v(" "),r("h2",{attrs:{id:"目前系统权限管理实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目前系统权限管理实现"}},[t._v("#")]),t._v(" 目前系统权限管理实现")]),t._v(" "),r("h3",{attrs:{id:"_2-说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-说明"}},[t._v("#")]),t._v(" 2. 说明")]),t._v(" "),r("p",[t._v("现目前网上工作平台项目采用的认证授权技术是Spring Security Oauth2 + JWT 实现认证授权,将他们三者整合，就可以得到一个完整的安全认证体系，\nSpring Security提供用户的权限访问控制，Oauth2提供更完整多样化的登录方式。项目截图如下")]),t._v(" "),r("p",[r("img",{attrs:{src:a(357),alt:"project"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(358),alt:"oauth"}})]),t._v(" "),r("h3",{attrs:{id:"_2-1-概念知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概念知识"}},[t._v("#")]),t._v(" 2.1 概念知识")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Spring Security : 基于Spring实现的Web系统的认证和授权模块, 将路径拦截,登录加密,身份认证,资源控制等常见登录问题整合成框架")])]),t._v(" "),r("li",[r("p",[t._v("OAuth2 : 一个关于授权（authorization）的开放网络标准,下面主要介绍两种常用的模式:")])])]),t._v(" "),r("p",[t._v("授权码（authorization code）方式: 指的是第三方应用先申请一个授权码，然后再用该码获取令牌。")]),t._v(" "),r("p",[t._v("密码（password） 方式: 用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌。网上工作平台使用的就是这种方式。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(359),alt:"grantType"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("jwt : Java Web Token 用于作为JSON对象在不同系统之间进行安全地信息传输。由头部 header 算法 , payload 中存放用户名、生成时间、过期时间\n随后生成签名：如下图就是一个jwt:")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(360),alt:"jwt"}})]),t._v(" "),r("h3",{attrs:{id:"_2-2-数据库相关设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-数据库相关设计"}},[t._v("#")]),t._v(" 2.2 数据库相关设计")]),t._v(" "),r("ol",[r("li",[t._v("基于用户的访问权限控制 :")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(361),alt:"user"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("基于oauth2的数据库设计：")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(362),alt:"oauth2"}})]),t._v(" "),r("h3",{attrs:{id:"_2-3-app端账号密码登录流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-app端账号密码登录流程"}},[t._v("#")]),t._v(" 2.3 APP端账号密码登录流程")]),t._v(" "),r("ol",[r("li",[t._v("设置Oauth2登录参数：如下图所示")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(363),alt:"appLogin"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("请求到后台oauth服务器, 采用策略模式进行客户端匹配, 如下图所示")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(364),alt:"loginMethod"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("在次采用策略模式 , 判断是否是账号密码登录")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(365),alt:"passwordLogin"}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("请求达到数据库，从数据库中数据判断用户是否登录成功")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(366),alt:"loginSuccess"}})]),t._v(" "),r("h3",{attrs:{id:"_2-4-第三方登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-第三方登录"}},[t._v("#")]),t._v(" 2.4 第三方登录")]),t._v(" "),r("h4",{attrs:{id:"微信登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微信登录"}},[t._v("#")]),t._v(" 微信登录")]),t._v(" "),r("p",[t._v("微信登录是基于Oauth2 的授权码方式进行的登录认证，这样对于第三方应用而言安全度更高，\n简要分为三步： 1. 请求CODE 2. 通过 code 获取 access_token 3. 通过access_token调用接口  如下图所示 :")]),t._v(" "),r("p",[r("img",{attrs:{src:a(367),alt:"wx"}})]),t._v(" "),r("h4",{attrs:{id:"具体实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),r("ol",[r("li",[t._v("前端APP在获取微信到微信允许操作后，构造请求参数到后台，如下图所示:")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(368),alt:"wxForm"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("到达后台对微信登录信息进行判断，如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(369),alt:"wxLogin"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("到达数据库判断后，有则直接显示，没有账号信息则创建，如下图所示:")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(370),alt:"wxLoginDetail"}})]),t._v(" "),r("h3",{attrs:{id:"_2-4-扫码登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-扫码登录"}},[t._v("#")]),t._v(" 2.4 扫码登录")]),t._v(" "),r("h4",{attrs:{id:"扫码登录实现思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录实现思路"}},[t._v("#")]),t._v(" 扫码登录实现思路")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("扫码成功携带id跳转到确认页面")])]),t._v(" "),r("li",[r("p",[t._v("确认时卸载id到后台，实现登录操作")])]),t._v(" "),r("li",[r("p",[t._v("后台返回登录状态，进行页面跳转等操作")])])]),t._v(" "),r("h4",{attrs:{id:"具体实现-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具体实现-2"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),r("ol",[r("li",[t._v("扫码跳转页面：如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(371),alt:"threeLogin"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("携带用户信息向后台发出请求: 如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(372),alt:"threeLoginDetail"}})]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("服务器端对请求进行处理， 如下图所示:")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(373),alt:"threeLoginEnd"}})]),t._v(" "),r("h3",{attrs:{id:"_2-4-短信验证码登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-短信验证码登录"}},[t._v("#")]),t._v(" 2.4 短信验证码登录")]),t._v(" "),r("h4",{attrs:{id:"登录流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登录流程"}},[t._v("#")]),t._v(" 登录流程")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("获取验证码")])]),t._v(" "),r("li",[r("p",[t._v("输入验证码校验")])]),t._v(" "),r("li",[r("p",[t._v("返回结果")])])]),t._v(" "),r("h3",{attrs:{id:"具体实现-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#具体实现-3"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),r("ol",[r("li",[t._v("登录成功后的后台处理")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(374),alt:"smsLogin"}})]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("获取验证码")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(375),alt:"sms"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);