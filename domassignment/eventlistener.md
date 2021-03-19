# Assignment
what are event listeners with examples.
in your explanation of event listeners, give me all the different types of event listeners.


**Event** listeners are program used to effect changes on DOM elements and objects, they are also applied on the browser object.

Event listeners are divided into two, which are Bubbling and Capturing event listeners. the default settings is bubbling event listeners.

* What is Bubbling event listeners? this happens when inside or child element of a parent tag event listener application is executed first. for example, in <Div> that houses a <p>, the event listener action is performed first on the p tag, before the Div tag.

* What is Capturing event listeners ? this happens when  event listener on a parent tag is executed first, ahead of the child or inner element. for example, in <Div> that houses a <p>, the event listener action is performed first on the Div tag, before the p tag.

Below are the types of event listeners, the lists are  not exhausted:
- mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
- touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel
- keyboard events (KeyboardEvent): keydown, keypress, keyup
- form events: focus, blur, change, submit
window events: scroll, resize, hashchange, load, unload

The **Syntax** for adding event listener to a DOM is element.addEventListener(event, function, useCapture);

event : depending on the action you want to perform, we have various types such as resize, click, mousedown,keypress and so on.

function : these are the event handlers, they are event listener actuator, they respond to every invocation or call action initiated by the event listener.

useCapture : this is optional,it is used to initiate whether an event listener is a bubbling or capturing type, though the default is set to bubbling with a boolean value of false. sometimes, events happened that that the parent and the child element both share almost the same event handlers and event listeners, as such, it will be better to be more specific with the useCapture.

Note : An event listener can only be used by an addEventListener() method function syntax, the reasons for this are listed below,
The event listener can also be removed using this syntax : target.removeEventListener(type, listener[, options]);

- Add event listeners works on any DOM element, not just HTML elements.
- add event listener gives a finer grained control of the phase when the listener is activated,i.e choosing between bubbling or capturing.
- it also allows adding more than a single handler for an event. such can be found in javascript modules and any other kind of code.

**Sources:** (W3School)[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]

**Other sources of information :** (Khanacademy)[https://www.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-events/a/dom-event-types] (MDN)[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]
