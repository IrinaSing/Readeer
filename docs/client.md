<!-- BEGIN title -->

# CLIENT

<!-- END title -->

<!-- BEGIN TREE -->

![dependency graph](./client.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- data
  - [app.js](#clientdataappjs)
  - [app.schema.js](#clientdataappschemajs)
- lib
  - navigo
    - middlewares
      - [callHandler.js](#clientlibnavigomiddlewarescallHandlerjs)
      - [checkForAfterHook.js](#clientlibnavigomiddlewarescheckForAfterHookjs)
      - [checkForAlreadyHook.js](#clientlibnavigomiddlewarescheckForAlreadyHookjs)
      - [checkForBeforeHook.js](#clientlibnavigomiddlewarescheckForBeforeHookjs)
      - [checkForDeprecationMethods.js](#clientlibnavigomiddlewarescheckForDeprecationMethodsjs)
      - [checkForForceOp.js](#clientlibnavigomiddlewarescheckForForceOpjs)
      - [checkForLeaveHook.js](#clientlibnavigomiddlewarescheckForLeaveHookjs)
      - [checkForNotFoundHandler.js](#clientlibnavigomiddlewarescheckForNotFoundHandlerjs)
      - [errorOut.js](#clientlibnavigomiddlewareserrorOutjs)
      - [flushCurrent.js](#clientlibnavigomiddlewaresflushCurrentjs)
      - [matchPathToRegisteredRoutes.js](#clientlibnavigomiddlewaresmatchPathToRegisteredRoutesjs)
      - [processMatches.js](#clientlibnavigomiddlewaresprocessMatchesjs)
      - [setLocationPath.js](#clientlibnavigomiddlewaressetLocationPathjs)
      - [updateBrowserURL.js](#clientlibnavigomiddlewaresupdateBrowserURLjs)
      - [waitingList.js](#clientlibnavigomiddlewareswaitingListjs)
    - [Q.js](#clientlibnavigoQjs)
    - [constants.js](#clientlibnavigoconstantsjs)
    - [index.js](#clientlibnavigoindexjs)
    - [lifecycles.js](#clientlibnavigolifecyclesjs)
    - [utils.js](#clientlibnavigoutilsjs)
  - [ajv7.bundle.js](#clientlibajv7bundlejs)
  - [append-component.js](#clientlibappend-componentjs)
  - [is-jsonable.js](#clientlibis-jsonablejs)
  - [is-plain-object.js](#clientlibis-plain-objectjs)
  - [render.js](#clientlibrenderjs)
  - [validate.js](#clientlibvalidatejs)
- public
  - icons
- src
  - components
    - layout
      - [footer.js](#clientsrccomponentslayoutfooterjs)
      - [navbar.js](#clientsrccomponentslayoutnavbarjs)
      - [page.js](#clientsrccomponentslayoutpagejs)
    - pages
      - aboutUs
        - [index.js](#clientsrccomponentspagesaboutUsindexjs)
      - home
        - [index.js](#clientsrccomponentspageshomeindexjs)
        - [searchbar.js](#clientsrccomponentspageshomesearchbarjs)
      - login
        - [index.js](#clientsrccomponentspagesloginindexjs)
        - [login-form.js](#clientsrccomponentspagesloginlogin-formjs)
      - register
        - [error-alert.js](#clientsrccomponentspagesregistererror-alertjs)
        - [index.js](#clientsrccomponentspagesregisterindexjs)
        - [register-form.js](#clientsrccomponentspagesregisterregister-formjs)
        - [user-registered.js](#clientsrccomponentspagesregisteruser-registeredjs)
      - searchList
        - [book.js](#clientsrccomponentspagessearchListbookjs)
        - [index.js](#clientsrccomponentspagessearchListindexjs)
    - shared
      - [bookPreview.js](#clientsrccomponentssharedbookPreviewjs)
      - [button.js](#clientsrccomponentssharedbuttonjs)
      - [div.js](#clientsrccomponentsshareddivjs)
  - data-access
    - api-calls
      - [calls.js](#clientsrcdata-accessapi-callscallsjs)
  - handlers
    - [login.js](#clientsrchandlersloginjs)
    - [navigate-to-homepage.js](#clientsrchandlersnavigate-to-homepagejs)
    - [navigate-to-login.js](#clientsrchandlersnavigate-to-loginjs)
    - [register-user.js](#clientsrchandlersregister-userjs)
    - [set-book.js](#clientsrchandlersset-bookjs)
    - [unset-book.js](#clientsrchandlersunset-bookjs)
  - init
    - [index.js](#clientsrcinitindexjs)
    - [router.js](#clientsrcinitrouterjs)
    - [state.js](#clientsrcinitstatejs)
  - logic
  - [index.js](#clientsrcindexjs)
  - [routes.js](#clientsrcroutesjs)
- styles
- [config.js](#clientconfigjs)

---

<!-- END TOC -->

---

<!-- BEGIN DOCS -->

# /data

<details><summary><a href="../../client/data/app.js" id="clientdataappjs">../client/data/app.js</a></summary>

</details>

<details><summary><a href="../../client/data/app.schema.js" id="clientdataappschemajs">../client/data/app.schema.js</a></summary>

</details>

---

# /lib

## /navigo

### /middlewares

<details><summary><a href="../../client/lib/navigo/middlewares/callHandler.js" id="clientlibnavigomiddlewarescallHandlerjs">../client/lib/navigo/middlewares/callHandler.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForAfterHook.js" id="clientlibnavigomiddlewarescheckForAfterHookjs">../client/lib/navigo/middlewares/checkForAfterHook.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForAlreadyHook.js" id="clientlibnavigomiddlewarescheckForAlreadyHookjs">../client/lib/navigo/middlewares/checkForAlreadyHook.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForBeforeHook.js" id="clientlibnavigomiddlewarescheckForBeforeHookjs">../client/lib/navigo/middlewares/checkForBeforeHook.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForDeprecationMethods.js" id="clientlibnavigomiddlewarescheckForDeprecationMethodsjs">../client/lib/navigo/middlewares/checkForDeprecationMethods.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForForceOp.js" id="clientlibnavigomiddlewarescheckForForceOpjs">../client/lib/navigo/middlewares/checkForForceOp.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForLeaveHook.js" id="clientlibnavigomiddlewarescheckForLeaveHookjs">../client/lib/navigo/middlewares/checkForLeaveHook.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/checkForNotFoundHandler.js" id="clientlibnavigomiddlewarescheckForNotFoundHandlerjs">../client/lib/navigo/middlewares/checkForNotFoundHandler.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/errorOut.js" id="clientlibnavigomiddlewareserrorOutjs">../client/lib/navigo/middlewares/errorOut.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/flushCurrent.js" id="clientlibnavigomiddlewaresflushCurrentjs">../client/lib/navigo/middlewares/flushCurrent.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/matchPathToRegisteredRoutes.js" id="clientlibnavigomiddlewaresmatchPathToRegisteredRoutesjs">../client/lib/navigo/middlewares/matchPathToRegisteredRoutes.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/processMatches.js" id="clientlibnavigomiddlewaresprocessMatchesjs">../client/lib/navigo/middlewares/processMatches.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/setLocationPath.js" id="clientlibnavigomiddlewaressetLocationPathjs">../client/lib/navigo/middlewares/setLocationPath.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/updateBrowserURL.js" id="clientlibnavigomiddlewaresupdateBrowserURLjs">../client/lib/navigo/middlewares/updateBrowserURL.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/middlewares/waitingList.js" id="clientlibnavigomiddlewareswaitingListjs">../client/lib/navigo/middlewares/waitingList.js</a></summary>

</details>

---

<details><summary><a href="../../client/lib/navigo/Q.js" id="clientlibnavigoQjs">../client/lib/navigo/Q.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/constants.js" id="clientlibnavigoconstantsjs">../client/lib/navigo/constants.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/index.js" id="clientlibnavigoindexjs">../client/lib/navigo/index.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/lifecycles.js" id="clientlibnavigolifecyclesjs">../client/lib/navigo/lifecycles.js</a></summary>

</details>

<details><summary><a href="../../client/lib/navigo/utils.js" id="clientlibnavigoutilsjs">../client/lib/navigo/utils.js</a></summary>

</details>

---

<details><summary><a href="../../client/lib/ajv7.bundle.js" id="clientlibajv7bundlejs">../client/lib/ajv7.bundle.js</a></summary>

</details>

<details><summary><a href="../../client/lib/append-component.js" id="clientlibappend-componentjs">../client/lib/append-component.js</a></summary>

</details>

<details><summary><a href="../../client/lib/is-jsonable.js" id="clientlibis-jsonablejs">../client/lib/is-jsonable.js</a></summary>

</details>

<details><summary><a href="../../client/lib/is-plain-object.js" id="clientlibis-plain-objectjs">../client/lib/is-plain-object.js</a></summary>

</details>

<details><summary><a href="../../client/lib/render.js" id="clientlibrenderjs">../client/lib/render.js</a></summary>

<a name="render"></a>

## render

Renders a string of HTML.

</details>

<details><summary><a href="../../client/lib/validate.js" id="clientlibvalidatejs">../client/lib/validate.js</a></summary>

</details>

---

# /public

## /icons

---

---

# /src

## /components

### /layout

<details><summary><a href="../../client/src/components/layout/footer.js" id="clientsrccomponentslayoutfooterjs">../client/src/components/layout/footer.js</a></summary>

<a name="footer"></a>

## footer ⇒ <code>HTMLDivElement</code>

The shared footer.

**Returns**: <code>HTMLDivElement</code> - A rendered footer element.

</details>

<details><summary><a href="../../client/src/components/layout/navbar.js" id="clientsrccomponentslayoutnavbarjs">../client/src/components/layout/navbar.js</a></summary>

<a name="navbar"></a>

## navbar ⇒ <code>HTMLDivElement</code>

The shared navbar.

**Returns**: <code>HTMLDivElement</code> - A rendered nav bar element.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| routes | <code>object</code> | A routes object, see /src/routes.js. |

</details>

<details><summary><a href="../../client/src/components/layout/page.js" id="clientsrccomponentslayoutpagejs">../client/src/components/layout/page.js</a></summary>

<a name="page"></a>

## page ⇒ <code>HTMLDivElement</code>

The page layout component.

**Returns**: <code>HTMLDivElement</code> - A rendered page element.  
**Throws**:

- <code>TypeError</code> When the bodyComponent is not a function or DOM element.

| Param         | Type                                              | Description                               |
| ------------- | ------------------------------------------------- | ----------------------------------------- |
| bodyComponent | <code>function</code> \| <code>HTMLElement</code> | The body for the newly rendered page.     |
| routes        | <code>object</code>                               | The application's routes, for the navbar. |

</details>

---

### /pages

#### /aboutUs

<details><summary><a href="../../client/src/components/pages/aboutUs/index.js" id="clientsrccomponentspagesaboutUsindexjs">../client/src/components/pages/aboutUs/index.js</a></summary>

<a name="about"></a>

## about ⇒ <code>HTMLDivElement</code>

The register page. Loads when the register page is requested.

**Returns**: <code>HTMLDivElement</code> - A rendered register page.

</details>

---

#### /home

<details><summary><a href="../../client/src/components/pages/home/index.js" id="clientsrccomponentspageshomeindexjs">../client/src/components/pages/home/index.js</a></summary>

<a name="home"></a>

## home ⇒ <code>HTMLDivElement</code>

The home page.

**Returns**: <code>HTMLDivElement</code> - A rendered home page.

</details>

<details><summary><a href="../../client/src/components/pages/home/searchbar.js" id="clientsrccomponentspageshomesearchbarjs">../client/src/components/pages/home/searchbar.js</a></summary>

</details>

---

#### /login

<details><summary><a href="../../client/src/components/pages/login/index.js" id="clientsrccomponentspagesloginindexjs">../client/src/components/pages/login/index.js</a></summary>

<a name="login"></a>

## login ⇒ <code>HTMLDivElement</code>

The login page.

**Returns**: <code>HTMLDivElement</code> - A rendered login page.

</details>

<details><summary><a href="../../client/src/components/pages/login/login-form.js" id="clientsrccomponentspagesloginlogin-formjs">../client/src/components/pages/login/login-form.js</a></summary>

<a name="loginForm"></a>

## loginForm ⇒ <code>object</code>

This component creates a login form inside a div.

**Returns**: <code>object</code> - - A div element.

</details>

---

#### /register

<details><summary><a href="../../client/src/components/pages/register/error-alert.js" id="clientsrccomponentspagesregistererror-alertjs">../client/src/components/pages/register/error-alert.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/pages/register/index.js" id="clientsrccomponentspagesregisterindexjs">../client/src/components/pages/register/index.js</a></summary>

<a name="register"></a>

## register ⇒ <code>HTMLDivElement</code>

The register page. Loads when the register page is requested.

**Returns**: <code>HTMLDivElement</code> - A rendered register page.

</details>

<details><summary><a href="../../client/src/components/pages/register/register-form.js" id="clientsrccomponentspagesregisterregister-formjs">../client/src/components/pages/register/register-form.js</a></summary>

<a name="registerForm"></a>

## registerForm ⇒ <code>object</code>

This component creates a registration form inside a div.

**Returns**: <code>object</code> - - A div element.

</details>

<details><summary><a href="../../client/src/components/pages/register/user-registered.js" id="clientsrccomponentspagesregisteruser-registeredjs">../client/src/components/pages/register/user-registered.js</a></summary>

</details>

---

#### /searchList

<details><summary><a href="../../client/src/components/pages/searchList/book.js" id="clientsrccomponentspagessearchListbookjs">../client/src/components/pages/searchList/book.js</a></summary>

<a name="bookDetail"></a>

## bookDetail ⇒ <code>HTMLDivElement</code>

The login page.

**Returns**: <code>HTMLDivElement</code> - A rendered login page.

</details>

<details><summary><a href="../../client/src/components/pages/searchList/index.js" id="clientsrccomponentspagessearchListindexjs">../client/src/components/pages/searchList/index.js</a></summary>

<a name="searchList"></a>

## searchList ⇒ <code>HTMLDivElement</code>

The login page.

**Returns**: <code>HTMLDivElement</code> - A rendered login page.

</details>

---

---

### /shared

<details><summary><a href="../../client/src/components/shared/bookPreview.js" id="clientsrccomponentssharedbookPreviewjs">../client/src/components/shared/bookPreview.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/shared/button.js" id="clientsrccomponentssharedbuttonjs">../client/src/components/shared/button.js</a></summary>

</details>

<details><summary><a href="../../client/src/components/shared/div.js" id="clientsrccomponentsshareddivjs">../client/src/components/shared/div.js</a></summary>

<a name="divElement"></a>

## divElement ⇒ <code>object</code>

This component creates a div element and returns it.

**Returns**: <code>object</code> - - A div element.

| Param      | Type                | Description                         |
| ---------- | ------------------- | ----------------------------------- |
| classNames | <code>string</code> | The class names of the div element. |
| id         | <code>string</code> | The unique id of the div element.   |

</details>

---

---

## /data-access

### /api-calls

<details><summary><a href="../../client/src/data-access/api-calls/calls.js" id="clientsrcdata-accessapi-callscallsjs">../client/src/data-access/api-calls/calls.js</a></summary>

</details>

---

---

## /handlers

<details><summary><a href="../../client/src/handlers/login.js" id="clientsrchandlersloginjs">../client/src/handlers/login.js</a></summary>

<a name="logIn"></a>

## logIn

This function validated user input and submits the data to the database.

| Param | Type               | Description                     |
| ----- | ------------------ | ------------------------------- |
| event | <code>event</code> | Click on the button "register". |

</details>

<details><summary><a href="../../client/src/handlers/navigate-to-homepage.js" id="clientsrchandlersnavigate-to-homepagejs">../client/src/handlers/navigate-to-homepage.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/navigate-to-login.js" id="clientsrchandlersnavigate-to-loginjs">../client/src/handlers/navigate-to-login.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/register-user.js" id="clientsrchandlersregister-userjs">../client/src/handlers/register-user.js</a></summary>

<a name="registerUser"></a>

## registerUser

This function validated user input and submits the data to the database.

| Param | Type               | Description                     |
| ----- | ------------------ | ------------------------------- |
| event | <code>event</code> | Click on the button "register". |

</details>

<details><summary><a href="../../client/src/handlers/set-book.js" id="clientsrchandlersset-bookjs">../client/src/handlers/set-book.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/unset-book.js" id="clientsrchandlersunset-bookjs">../client/src/handlers/unset-book.js</a></summary>

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/router.js" id="clientsrcinitrouterjs">../client/src/init/router.js</a></summary>

</details>

<details><summary><a href="../../client/src/init/state.js" id="clientsrcinitstatejs">../client/src/init/state.js</a></summary>

</details>

---

## /logic

---

<details><summary><a href="../../client/src/index.js" id="clientsrcindexjs">../client/src/index.js</a></summary>

</details>

<details><summary><a href="../../client/src/routes.js" id="clientsrcroutesjs">../client/src/routes.js</a></summary>

<a name="module_routes"></a>

## routes

Defines the route URLs, names and callbacks.

</details>

---

# /styles

---

<details><summary><a href="../../client/config.js" id="clientconfigjs">../client/config.js</a></summary>

</details>

<!-- END DOCS -->
