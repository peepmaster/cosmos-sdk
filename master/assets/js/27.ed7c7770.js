(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{525:function(e,l,c){e.exports=c.p+"assets/img/transaction_flow.1ee1ce97.svg"},836:function(e,l,c){"use strict";c.r(l);var Z=c(1),d=Object(Z.a)({},(function(){var e=this,l=e.$createElement,Z=e._self._c||l;return Z("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[Z("h1",{attrs:{id:"msg-services"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#msg-services"}},[e._v("#")]),e._v(" "),Z("code",[e._v("Msg")]),e._v(" Services")]),e._v(" "),Z("p",{attrs:{synopsis:""}},[e._v("A Protobuf "),Z("code",[e._v("Msg")]),e._v(" service processes "),Z("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("messages")]),e._v(". Protobuf "),Z("code",[e._v("Msg")]),e._v(" services are specific to the module in which they are defined, and only process messages defined within the said module. They are called from "),Z("code",[e._v("BaseApp")]),e._v(" during "),Z("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[Z("code",[e._v("DeliverTx")])]),e._v(".")],1),e._v(" "),Z("h2",{attrs:{id:"pre-requisite-readings"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),Z("ul",[Z("li",{attrs:{prereq:""}},[Z("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),Z("li",{attrs:{prereq:""}},[Z("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("Messages and Queries")])],1)]),e._v(" "),Z("h2",{attrs:{id:"implementation-of-a-module-msg-service"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-a-module-msg-service"}},[e._v("#")]),e._v(" Implementation of a module "),Z("code",[e._v("Msg")]),e._v(" service")]),e._v(" "),Z("p",[e._v("Each module should define a Protobuf "),Z("code",[e._v("Msg")]),e._v(" service, which will be responsible for processing requests (implementing "),Z("code",[e._v("sdk.Msg")]),e._v(") and returning responses.")]),e._v(" "),Z("p",[e._v("As further described in "),Z("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")]),e._v(", this approach has the advantage of clearly specifying return types and generating server and client code.")],1),e._v(" "),Z("p",[e._v("Protobuf generates a "),Z("code",[e._v("MsgServer")]),e._v(" interface based on a definition of "),Z("code",[e._v("Msg")]),e._v(" service. It is the role of the module developer to implement this interface, by implementing the state transition logic that should happen upon receival of each "),Z("code",[e._v("sdk.Msg")]),e._v(". As an example, here is the generated "),Z("code",[e._v("MsgServer")]),e._v(" interface for "),Z("code",[e._v("x/bank")]),e._v(", which exposes two "),Z("code",[e._v("sdk.Msg")]),e._v("s:")]),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTXNnU2VydmVyIGlzIHRoZSBzZXJ2ZXIgQVBJIGZvciBNc2cgc2VydmljZS4KdHlwZSBNc2dTZXJ2ZXIgaW50ZXJmYWNlIHsKCS8vIFNlbmQgZGVmaW5lcyBhIG1ldGhvZCBmb3Igc2VuZGluZyBjb2lucyBmcm9tIG9uZSBhY2NvdW50IHRvIGFub3RoZXIgYWNjb3VudC4KCVNlbmQoY29udGV4dC5Db250ZXh0LCAqTXNnU2VuZCkgKCpNc2dTZW5kUmVzcG9uc2UsIGVycm9yKQoJLy8gTXVsdGlTZW5kIGRlZmluZXMgYSBtZXRob2QgZm9yIHNlbmRpbmcgY29pbnMgZnJvbSBzb21lIGFjY291bnRzIHRvIG90aGVyIGFjY291bnRzLgoJTXVsdGlTZW5kKGNvbnRleHQuQ29udGV4dCwgKk1zZ011bHRpU2VuZCkgKCpNc2dNdWx0aVNlbmRSZXNwb25zZSwgZXJyb3IpCn0="}})],1),e._v(" "),Z("p",[e._v("When possible, the existing module's "),Z("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[Z("code",[e._v("Keeper")])]),e._v(" should implement "),Z("code",[e._v("MsgServer")]),e._v(", otherwise a "),Z("code",[e._v("msgServer")]),e._v(" struct that embeds the "),Z("code",[e._v("Keeper")]),e._v(" can be created, typically in "),Z("code",[e._v("./keeper/msg_server.go")]),e._v(":")],1),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBtc2dTZXJ2ZXIgc3RydWN0IHsKCUtlZXBlcgp9"}})],1),e._v(" "),Z("p",[Z("code",[e._v("msgServer")]),e._v(" methods can retrieve the "),Z("code",[e._v("sdk.Context")]),e._v(" from the "),Z("code",[e._v("context.Context")]),e._v(" parameter method using the "),Z("code",[e._v("sdk.UnwrapSDKContext")]),e._v(":")]),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCk="}})],1),e._v(" "),Z("p",[Z("code",[e._v("sdk.Msg")]),e._v(" processing usually follows these 3 steps:")]),e._v(" "),Z("h3",{attrs:{id:"validation"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),Z("p",[e._v("Before a "),Z("code",[e._v("msgServer")]),e._v(" method is executed, the message's "),Z("RouterLink",{attrs:{to:"/basics/tx-lifecycle.html#ValidateBasic"}},[Z("code",[e._v("ValidateBasic()")])]),e._v(" method has already been called. Since "),Z("code",[e._v("msg.ValidateBasic()")]),e._v(" performs only the most basic checks, this stage must perform all other validation (both "),Z("em",[e._v("stateful")]),e._v(" and "),Z("em",[e._v("stateless")]),e._v(") to make sure the "),Z("code",[e._v("message")]),e._v(" is valid. Checks performed in the "),Z("code",[e._v("msgServer")]),e._v(" method can be more expensive and the signer is charged gas for these operations.\nFor example, a "),Z("code",[e._v("msgServer")]),e._v(" method for a "),Z("code",[e._v("transfer")]),e._v(" message might check that the sending account has enough funds to actually perform the transfer.")],1),e._v(" "),Z("p",[e._v("It is recommended to implement all validation checks in a separate function that passes state values as arguments. This implementation simplifies testing. As expected, expensive validation functions charge additional gas. Example:")]),e._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"VmFsaWRhdGVNc2dBKG1zZyBNc2dBLCBub3cgVGltZSwgZ20gR2FzTWV0ZXIpIGVycm9yIHsKCWlmIG5vdy5CZWZvcmUobXNnLkV4cGlyZSkgewoJCXJldHVybiBzZGtlcnJyb3JzLkVyckludmFsaWRSZXF1ZXN0LldyYXAoJnF1b3Q7bXNnIGV4cGlyZWQmcXVvdDspCgl9CglnbS5Db25zdW1lR2FzKDEwMDAsICZxdW90O3NpZ25hdHVyZSB2ZXJpZmljYXRpb24mcXVvdDspCglyZXR1cm4gc2lnbmF0dXJlVmVyaWZpY2F0b24obXNnLlByb3ZlciwgbXNnLkRhdGEpCn0K"}}),e._v(" "),Z("h3",{attrs:{id:"state-transition"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#state-transition"}},[e._v("#")]),e._v(" State Transition")]),e._v(" "),Z("p",[e._v("After the validation is successful, the "),Z("code",[e._v("msgServer")]),e._v(" method uses the "),Z("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[Z("code",[e._v("keeper")])]),e._v(" functions to access the state and perform a state transition.")],1),e._v(" "),Z("h3",{attrs:{id:"events"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),Z("p",[e._v("Before returning, "),Z("code",[e._v("msgServer")]),e._v(" methods generally emit one or more "),Z("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" by using the "),Z("code",[e._v("EventManager")]),e._v(" held in the "),Z("code",[e._v("ctx")]),e._v(". Use the new "),Z("code",[e._v("EmitTypedEvent")]),e._v(" function that uses protobuf-based event types:")],1),e._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRUeXBlZEV2ZW50KAoJJmFtcDtncm91cC5FdmVudEFCQ3tLZXkxOiBWYWx1ZTEsICBLZXkyLCBWYWx1ZTJ9KQo="}}),e._v(" "),Z("p",[e._v("or the older "),Z("code",[e._v("EmitEvent")]),e._v(" function:")]),e._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKCXNkay5OZXdFdmVudCgKCQlldmVudFR5cGUsICAvLyBlLmcuIHNkay5FdmVudFR5cGVNZXNzYWdlIGZvciBhIG1lc3NhZ2UsIHR5cGVzLkN1c3RvbUV2ZW50VHlwZSBmb3IgYSBjdXN0b20gZXZlbnQgZGVmaW5lZCBpbiB0aGUgbW9kdWxlCgkJc2RrLk5ld0F0dHJpYnV0ZShrZXkxLCB2YWx1ZTEpLAoJCXNkay5OZXdBdHRyaWJ1dGUoa2V5MiwgdmFsdWUyKSwKCSksCikK"}}),e._v(" "),Z("p",[e._v("These events are relayed back to the underlying consensus engine and can be used by service providers to implement services around the application. Click "),Z("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("here")]),e._v(" to learn more about events.")],1),e._v(" "),Z("p",[e._v("The invoked "),Z("code",[e._v("msgServer")]),e._v(" method returns a "),Z("code",[e._v("proto.Message")]),e._v(" response and an "),Z("code",[e._v("error")]),e._v(". These return values are then wrapped into an "),Z("code",[e._v("*sdk.Result")]),e._v(" or an "),Z("code",[e._v("error")]),e._v(" using "),Z("code",[e._v("sdk.WrapServiceResult(ctx sdk.Context, res proto.Message, err error)")]),e._v(":")]),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBiYXNlYXBwCgppbXBvcnQgKAoJJnF1b3Q7Y29udGV4dCZxdW90OwoJJnF1b3Q7Zm10JnF1b3Q7CgoJZ29nb2dycGMgJnF1b3Q7Z2l0aHViLmNvbS9nb2dvL3Byb3RvYnVmL2dycGMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vZ29nby9wcm90b2J1Zi9wcm90byZxdW90OwoJJnF1b3Q7Z29vZ2xlLmdvbGFuZy5vcmcvZ3JwYyZxdW90OwoKCWNvZGVjdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jb2RlYy90eXBlcyZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCXNka2Vycm9ycyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL2Vycm9ycyZxdW90OwopCgovLyBNc2dTZXJ2aWNlUm91dGVyIHJvdXRlcyBmdWxseS1xdWFsaWZpZWQgTXNnIHNlcnZpY2UgbWV0aG9kcyB0byB0aGVpciBoYW5kbGVyLgp0eXBlIE1zZ1NlcnZpY2VSb3V0ZXIgc3RydWN0IHsKCWludGVyZmFjZVJlZ2lzdHJ5IGNvZGVjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkKCXJvdXRlcyAgICAgICAgICAgIG1hcFtzdHJpbmddTXNnU2VydmljZUhhbmRsZXIKfQoKdmFyIF8gZ29nb2dycGMuU2VydmVyID0gJmFtcDtNc2dTZXJ2aWNlUm91dGVye30KCi8vIE5ld01zZ1NlcnZpY2VSb3V0ZXIgY3JlYXRlcyBhIG5ldyBNc2dTZXJ2aWNlUm91dGVyLgpmdW5jIE5ld01zZ1NlcnZpY2VSb3V0ZXIoKSAqTXNnU2VydmljZVJvdXRlciB7CglyZXR1cm4gJmFtcDtNc2dTZXJ2aWNlUm91dGVyewoJCXJvdXRlczogbWFwW3N0cmluZ11Nc2dTZXJ2aWNlSGFuZGxlcnt9LAoJfQp9CgovLyBNc2dTZXJ2aWNlSGFuZGxlciBkZWZpbmVzIGEgZnVuY3Rpb24gdHlwZSB3aGljaCBoYW5kbGVzIE1zZyBzZXJ2aWNlIG1lc3NhZ2UuCnR5cGUgTXNnU2VydmljZUhhbmRsZXIgPSBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcmVxIHNkay5Nc2cpICgqc2RrLlJlc3VsdCwgZXJyb3IpCgovLyBIYW5kbGVyIHJldHVybnMgdGhlIE1zZ1NlcnZpY2VIYW5kbGVyIGZvciBhIGdpdmVuIG1zZyBvciBuaWwgaWYgbm90IGZvdW5kLgpmdW5jIChtc3IgKk1zZ1NlcnZpY2VSb3V0ZXIpIEhhbmRsZXIobXNnIHNkay5Nc2cpIE1zZ1NlcnZpY2VIYW5kbGVyIHsKCXJldHVybiBtc3Iucm91dGVzW3Nkay5Nc2dUeXBlVVJMKG1zZyldCn0KCi8vIEhhbmRsZXJCeVR5cGVVUkwgcmV0dXJucyB0aGUgTXNnU2VydmljZUhhbmRsZXIgZm9yIGEgZ2l2ZW4gcXVlcnkgcm91dGUgcGF0aCBvciBuaWwKLy8gaWYgbm90IGZvdW5kLgpmdW5jIChtc3IgKk1zZ1NlcnZpY2VSb3V0ZXIpIEhhbmRsZXJCeVR5cGVVUkwodHlwZVVSTCBzdHJpbmcpIE1zZ1NlcnZpY2VIYW5kbGVyIHsKCXJldHVybiBtc3Iucm91dGVzW3R5cGVVUkxdCn0KCi8vIFJlZ2lzdGVyU2VydmljZSBpbXBsZW1lbnRzIHRoZSBnUlBDIFNlcnZlci5SZWdpc3RlclNlcnZpY2UgbWV0aG9kLiBzZCBpcyBhIGdSUEMKLy8gc2VydmljZSBkZXNjcmlwdGlvbiwgaGFuZGxlciBpcyBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0IGdSUEMgc2VydmljZS4KLy8KLy8gVGhpcyBmdW5jdGlvbiBQQU5JQ3M6Ci8vIC0gaWYgaXQgaXMgY2FsbGVkIGJlZm9yZSB0aGUgc2VydmljZSBgTXNnYHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgdXNpbmcKLy8gICBSZWdpc3RlckludGVyZmFjZXMsCi8vIC0gb3IgaWYgYSBzZXJ2aWNlIGlzIGJlaW5nIHJlZ2lzdGVyZWQgdHdpY2UuCmZ1bmMgKG1zciAqTXNnU2VydmljZVJvdXRlcikgUmVnaXN0ZXJTZXJ2aWNlKHNkICpncnBjLlNlcnZpY2VEZXNjLCBoYW5kbGVyIGludGVyZmFjZXt9KSB7CgkvLyBBZGRzIGEgdG9wLWxldmVsIHF1ZXJ5IGhhbmRsZXIgYmFzZWQgb24gdGhlIGdSUEMgc2VydmljZSBuYW1lLgoJZm9yIF8sIG1ldGhvZCA6PSByYW5nZSBzZC5NZXRob2RzIHsKCQlmcU1ldGhvZCA6PSBmbXQuU3ByaW50ZigmcXVvdDsvJXMvJXMmcXVvdDssIHNkLlNlcnZpY2VOYW1lLCBtZXRob2QuTWV0aG9kTmFtZSkKCQltZXRob2RIYW5kbGVyIDo9IG1ldGhvZC5IYW5kbGVyCgoJCXZhciByZXF1ZXN0VHlwZU5hbWUgc3RyaW5nCgoJCS8vIE5PVEU6IFRoaXMgaXMgaG93IHdlIHB1bGwgdGhlIGNvbmNyZXRlIHJlcXVlc3QgdHlwZSBmb3IgZWFjaCBoYW5kbGVyIGZvciByZWdpc3RlcmluZyBpbiB0aGUgSW50ZXJmYWNlUmVnaXN0cnkuCgkJLy8gVGhpcyBhcHByb2FjaCBpcyBtYXliZSBhIGJpdCBoYWNreSwgYnV0IGxlc3MgaGFja3kgdGhhbiByZWZsZWN0aW5nIG9uIHRoZSBoYW5kbGVyIG9iamVjdCBpdHNlbGYuCgkJLy8gV2UgdXNlIGEgbm8tb3AgaW50ZXJjZXB0b3IgdG8gYXZvaWQgYWN0dWFsbHkgY2FsbGluZyBpbnRvIHRoZSBoYW5kbGVyIGl0c2VsZi4KCQlfLCBfID0gbWV0aG9kSGFuZGxlcihuaWwsIGNvbnRleHQuQmFja2dyb3VuZCgpLCBmdW5jKGkgaW50ZXJmYWNle30pIGVycm9yIHsKCQkJbXNnLCBvayA6PSBpLihzZGsuTXNnKQoJCQlpZiAhb2sgewoJCQkJLy8gV2UgcGFuaWMgaGVyZSBiZWNhdXNlIHRoZXJlIGlzIG5vIG90aGVyIGFsdGVybmF0aXZlIGFuZCB0aGUgYXBwIGNhbm5vdCBiZSBpbml0aWFsaXplZCBjb3JyZWN0bHkKCQkJCS8vIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGNvZGUgZ2VuZXJhdGlvbiBpbiB3aGljaCBjYXNlIHRoZSBhcHAgd29uJ3QKCQkJCS8vIHdvcmsgY29ycmVjdGx5IGFueXdheS4KCQkJCXBhbmljKGZtdC5FcnJvcmYoJnF1b3Q7dW5hYmxlIHRvIHJlZ2lzdGVyIHNlcnZpY2UgbWV0aG9kICVzOiAlVCBkb2VzIG5vdCBpbXBsZW1lbnQgc2RrLk1zZyZxdW90OywgZnFNZXRob2QsIGkpKQoJCQl9CgoJCQlyZXF1ZXN0VHlwZU5hbWUgPSBzZGsuTXNnVHlwZVVSTChtc2cpCgkJCXJldHVybiBuaWwKCQl9LCBub29wSW50ZXJjZXB0b3IpCgoJCS8vIENoZWNrIHRoYXQgdGhlIHNlcnZpY2UgTXNnIGZ1bGx5LXF1YWxpZmllZCBtZXRob2QgbmFtZSBoYXMgYWxyZWFkeQoJCS8vIGJlZW4gcmVnaXN0ZXJlZCAodmlhIFJlZ2lzdGVySW50ZXJmYWNlcykuIElmIHRoZSB1c2VyIHJlZ2lzdGVycyBhCgkJLy8gc2VydmljZSB3aXRob3V0IHJlZ2lzdGVyaW5nIGFjY29yZGluZyBzZXJ2aWNlIE1zZyB0eXBlLCB0aGVyZSBtaWdodCBiZQoJCS8vIHNvbWUgdW5leHBlY3RlZCBiZWhhdmlvciBkb3duIHRoZSByb2FkLiBTaW5jZSB3ZSBjYW4ndCByZXR1cm4gYW4gZXJyb3IKCQkvLyAoYFNlcnZlci5SZWdpc3RlclNlcnZpY2VgIGludGVyZmFjZSByZXN0cmljdGlvbikgd2UgcGFuaWMgKGF0IHN0YXJ0dXApLgoJCXJlcVR5cGUsIGVyciA6PSBtc3IuaW50ZXJmYWNlUmVnaXN0cnkuUmVzb2x2ZShyZXF1ZXN0VHlwZU5hbWUpCgkJaWYgZXJyICE9IG5pbCB8fCByZXFUeXBlID09IG5pbCB7CgkJCXBhbmljKAoJCQkJZm10LkVycm9yZigKCQkJCQkmcXVvdDt0eXBlX3VybCAlcyBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB5ZXQuICZxdW90OysKCQkJCQkJJnF1b3Q7QmVmb3JlIGNhbGxpbmcgUmVnaXN0ZXJTZXJ2aWNlLCB5b3UgbXVzdCByZWdpc3RlciBhbGwgaW50ZXJmYWNlcyBieSBjYWxsaW5nIHRoZSBgUmVnaXN0ZXJJbnRlcmZhY2VzYCAmcXVvdDsrCgkJCQkJCSZxdW90O21ldGhvZCBvbiBtb2R1bGUuQmFzaWNNYW5hZ2VyLiBFYWNoIG1vZHVsZSBzaG91bGQgY2FsbCBgbXNnc2VydmljZS5SZWdpc3Rlck1zZ1NlcnZpY2VEZXNjYCBpbnNpZGUgaXRzICZxdW90OysKCQkJCQkJJnF1b3Q7YFJlZ2lzdGVySW50ZXJmYWNlc2AgbWV0aG9kIHdpdGggdGhlIGBfTXNnX3NlcnZpY2VEZXNjYCBnZW5lcmF0ZWQgYnkgcHJvdG8tZ2VuJnF1b3Q7LAoJCQkJCXJlcXVlc3RUeXBlTmFtZSwKCQkJCSksCgkJCSkKCQl9CgoJCS8vIENoZWNrIHRoYXQgZWFjaCBzZXJ2aWNlIGlzIG9ubHkgcmVnaXN0ZXJlZCBvbmNlLiBJZiBhIHNlcnZpY2UgaXMKCQkvLyByZWdpc3RlcmVkIG1vcmUgdGhhbiBvbmNlLCB0aGVuIHdlIHNob3VsZCBlcnJvci4gU2luY2Ugd2UgY2FuJ3QKCQkvLyByZXR1cm4gYW4gZXJyb3IgKGBTZXJ2ZXIuUmVnaXN0ZXJTZXJ2aWNlYCBpbnRlcmZhY2UgcmVzdHJpY3Rpb24pIHdlCgkJLy8gcGFuaWMgKGF0IHN0YXJ0dXApLgoJCV8sIGZvdW5kIDo9IG1zci5yb3V0ZXNbcmVxdWVzdFR5cGVOYW1lXQoJCWlmIGZvdW5kIHsKCQkJcGFuaWMoCgkJCQlmbXQuRXJyb3JmKAoJCQkJCSZxdW90O21zZyBzZXJ2aWNlICVzIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZC4gUGxlYXNlIG1ha2Ugc3VyZSB0byBvbmx5IHJlZ2lzdGVyIGVhY2ggc2VydmljZSBvbmNlLiAmcXVvdDsrCgkJCQkJCSZxdW90O1RoaXMgdXN1YWxseSBtZWFucyB0aGF0IHRoZXJlIGFyZSBjb25mbGljdGluZyBtb2R1bGVzIHJlZ2lzdGVyaW5nIHRoZSBzYW1lIG1zZyBzZXJ2aWNlJnF1b3Q7LAoJCQkJCWZxTWV0aG9kLAoJCQkJKSwKCQkJKQoJCX0KCgkJbXNyLnJvdXRlc1tyZXF1ZXN0VHlwZU5hbWVdID0gZnVuYyhjdHggc2RrLkNvbnRleHQsIHJlcSBzZGsuTXNnKSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CgkJCWN0eCA9IGN0eC5XaXRoRXZlbnRNYW5hZ2VyKHNkay5OZXdFdmVudE1hbmFnZXIoKSkKCQkJaW50ZXJjZXB0b3IgOj0gZnVuYyhnb0N0eCBjb250ZXh0LkNvbnRleHQsIF8gaW50ZXJmYWNle30sIF8gKmdycGMuVW5hcnlTZXJ2ZXJJbmZvLCBoYW5kbGVyIGdycGMuVW5hcnlIYW5kbGVyKSAoaW50ZXJmYWNle30sIGVycm9yKSB7CgkJCQlnb0N0eCA9IGNvbnRleHQuV2l0aFZhbHVlKGdvQ3R4LCBzZGsuU2RrQ29udGV4dEtleSwgY3R4KQoJCQkJcmV0dXJuIGhhbmRsZXIoZ29DdHgsIHJlcSkKCQkJfQoJCQkvLyBDYWxsIHRoZSBtZXRob2QgaGFuZGxlciBmcm9tIHRoZSBzZXJ2aWNlIGRlc2NyaXB0aW9uIHdpdGggdGhlIGhhbmRsZXIgb2JqZWN0LgoJCQkvLyBXZSBkb24ndCBkbyBhbnkgZGVjb2RpbmcgaGVyZSBiZWNhdXNlIHRoZSBkZWNvZGluZyB3YXMgYWxyZWFkeSBkb25lLgoJCQlyZXMsIGVyciA6PSBtZXRob2RIYW5kbGVyKGhhbmRsZXIsIHNkay5XcmFwU0RLQ29udGV4dChjdHgpLCBub29wRGVjb2RlciwgaW50ZXJjZXB0b3IpCgkJCWlmIGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIG5pbCwgZXJyCgkJCX0KCgkJCXJlc01zZywgb2sgOj0gcmVzLihwcm90by5NZXNzYWdlKQoJCQlpZiAhb2sgewoJCQkJcmV0dXJuIG5pbCwgc2RrZXJyb3JzLldyYXBmKHNka2Vycm9ycy5FcnJJbnZhbGlkVHlwZSwgJnF1b3Q7RXhwZWN0aW5nIHByb3RvLk1lc3NhZ2UsIGdvdCAlVCZxdW90OywgcmVzTXNnKQoJCQl9CgoJCQlyZXR1cm4gc2RrLldyYXBTZXJ2aWNlUmVzdWx0KGN0eCwgcmVzTXNnLCBlcnIpCgkJfQoJfQp9CgovLyBTZXRJbnRlcmZhY2VSZWdpc3RyeSBzZXRzIHRoZSBpbnRlcmZhY2UgcmVnaXN0cnkgZm9yIHRoZSByb3V0ZXIuCmZ1bmMgKG1zciAqTXNnU2VydmljZVJvdXRlcikgU2V0SW50ZXJmYWNlUmVnaXN0cnkoaW50ZXJmYWNlUmVnaXN0cnkgY29kZWN0eXBlcy5JbnRlcmZhY2VSZWdpc3RyeSkgewoJbXNyLmludGVyZmFjZVJlZ2lzdHJ5ID0gaW50ZXJmYWNlUmVnaXN0cnkKfQoKZnVuYyBub29wRGVjb2RlcihfIGludGVyZmFjZXt9KSBlcnJvciB7IHJldHVybiBuaWwgfQpmdW5jIG5vb3BJbnRlcmNlcHRvcihfIGNvbnRleHQuQ29udGV4dCwgXyBpbnRlcmZhY2V7fSwgXyAqZ3JwYy5VbmFyeVNlcnZlckluZm8sIF8gZ3JwYy5VbmFyeUhhbmRsZXIpIChpbnRlcmZhY2V7fSwgZXJyb3IpIHsKCXJldHVybiBuaWwsIG5pbAp9Cg=="}})],1),e._v(" "),Z("p",[e._v("This method takes care of marshaling the "),Z("code",[e._v("res")]),e._v(" parameter to protobuf and attaching any events on the "),Z("code",[e._v("ctx.EventManager()")]),e._v(" to the "),Z("code",[e._v("sdk.Result")]),e._v(".")]),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUmVzdWx0IGlzIHRoZSB1bmlvbiBvZiBSZXNwb25zZUZvcm1hdCBhbmQgUmVzcG9uc2VDaGVja1R4LgptZXNzYWdlIFJlc3VsdCB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICAvLyBEYXRhIGlzIGFueSBkYXRhIHJldHVybmVkIGZyb20gbWVzc2FnZSBvciBoYW5kbGVyIGV4ZWN1dGlvbi4gSXQgTVVTVCBiZQogIC8vIGxlbmd0aCBwcmVmaXhlZCBpbiBvcmRlciB0byBzZXBhcmF0ZSBkYXRhIGZyb20gbXVsdGlwbGUgbWVzc2FnZSBleGVjdXRpb25zLgogIC8vIERlcHJlY2F0ZWQuIFRoaXMgZmllbGQgaXMgc3RpbGwgcG9wdWxhdGVkLCBidXQgcHJlZmVyIG1zZ19yZXNwb25zZSBpbnN0ZWFkCiAgLy8gYmVjYXVzZSBpdCBhbHNvIGNvbnRhaW5zIHRoZSBNc2cgcmVzcG9uc2UgdHlwZVVSTC4KICBieXRlcyBkYXRhID0gMSBbZGVwcmVjYXRlZCA9IHRydWVdOwoKICAvLyBMb2cgY29udGFpbnMgdGhlIGxvZyBpbmZvcm1hdGlvbiBmcm9tIG1lc3NhZ2Ugb3IgaGFuZGxlciBleGVjdXRpb24uCiAgc3RyaW5nIGxvZyA9IDI7CgogIC8vIEV2ZW50cyBjb250YWlucyBhIHNsaWNlIG9mIEV2ZW50IG9iamVjdHMgdGhhdCB3ZXJlIGVtaXR0ZWQgZHVyaW5nIG1lc3NhZ2UKICAvLyBvciBoYW5kbGVyIGV4ZWN1dGlvbi4KICByZXBlYXRlZCB0ZW5kZXJtaW50LmFiY2kuRXZlbnQgZXZlbnRzID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CgogIC8vIG1zZ19yZXNwb25zZXMgY29udGFpbnMgdGhlIE1zZyBoYW5kbGVyIHJlc3BvbnNlcyB0eXBlIHBhY2tlZCBpbiBBbnlzLgogIC8vCiAgLy8gU2luY2U6IGNvc21vcy1zZGsgMC40NgogIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgbXNnX3Jlc3BvbnNlcyA9IDQ7Cn0="}})],1),e._v(" "),Z("p",[e._v("This diagram shows a typical structure of a Protobuf "),Z("code",[e._v("Msg")]),e._v(" service, and how the message propagates through the module.")]),e._v(" "),Z("p",[Z("img",{attrs:{src:c(525),alt:"Transaction flow"}})]),e._v(" "),Z("h2",{attrs:{id:"telemetry"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),Z("p",[e._v("New "),Z("RouterLink",{attrs:{to:"/core/telemetry.html"}},[e._v("telemetry metrics")]),e._v(" can be created from "),Z("code",[e._v("msgServer")]),e._v(" methods when handling messages.")],1),e._v(" "),Z("p",[e._v("This is an example from the "),Z("code",[e._v("x/auth/vesting")]),e._v(" module:")]),e._v(" "),Z("p",[Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWRlZmVyIGZ1bmMoKSB7CgkJdGVsZW1ldHJ5LkluY3JDb3VudGVyKDEsICZxdW90O25ldyZxdW90OywgJnF1b3Q7YWNjb3VudCZxdW90OykKCgkJZm9yIF8sIGEgOj0gcmFuZ2UgbXNnLkFtb3VudCB7CgkJCWlmIGEuQW1vdW50LklzSW50NjQoKSB7CgkJCQl0ZWxlbWV0cnkuU2V0R2F1Z2VXaXRoTGFiZWxzKAoJCQkJCVtdc3RyaW5neyZxdW90O3R4JnF1b3Q7LCAmcXVvdDttc2cmcXVvdDssICZxdW90O2NyZWF0ZV92ZXN0aW5nX2FjY291bnQmcXVvdDt9LAoJCQkJCWZsb2F0MzIoYS5BbW91bnQuSW50NjQoKSksCgkJCQkJW11tZXRyaWNzLkxhYmVse3RlbGVtZXRyeS5OZXdMYWJlbCgmcXVvdDtkZW5vbSZxdW90OywgYS5EZW5vbSl9LAoJCQkJKQoJCQl9CgkJfQoJfSgp"}})],1),e._v(" "),Z("h2",{attrs:{hide:"",id:"next"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),Z("p",{attrs:{hide:""}},[e._v("Learn about "),Z("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("query services")])],1)],1)}),[],!1,null,null,null);l.default=d.exports}}]);