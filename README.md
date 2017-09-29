# Angular Redux PoC

In this example, we have a simple UI which fires different stream events:
- User clicks button (click$)
- Timer tick (second$)
- Person clicked (person$)
- Person reset button clicked (resetPerson$)

The component creates each of these streams as Observables/Subjects and maps them into actions:
- click$ -> HourIncreased
- person$ -> PersonIncreased
- resetPerson$ -> PersonReset

All streams are merged and the component subscribes to them so that when an event occurs we dispatch an action to the store.
