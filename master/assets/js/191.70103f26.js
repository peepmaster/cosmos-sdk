(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{760:function(t,a,e){"use strict";e.r(a);var o=e(1),l=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[t._v("#")]),t._v(" State")]),t._v(" "),e("h2",{attrs:{id:"feepool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feepool"}},[t._v("#")]),t._v(" FeePool")]),t._v(" "),e("p",[t._v("All globally tracked parameters for distribution are stored within\n"),e("code",[t._v("FeePool")]),t._v(". Rewards are collected and added to the reward pool and\ndistributed to validators/delegators from here.")]),t._v(" "),e("p",[t._v("Note that the reward pool holds decimal coins ("),e("code",[t._v("DecCoins")]),t._v(") to allow\nfor fractions of coins to be received from operations like inflation.\nWhen coins are distributed from the pool they are truncated back to\n"),e("code",[t._v("sdk.Coins")]),t._v(" which are non-decimal.")]),t._v(" "),e("ul",[e("li",[t._v("FeePool: "),e("code",[t._v("0x00 -> ProtocolBuffer(FeePool)")])])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gY29pbnMgd2l0aCBkZWNpbWFsCnR5cGUgRGVjQ29pbnMgW11EZWNDb2luCgp0eXBlIERlY0NvaW4gc3RydWN0IHsKICAgIEFtb3VudCBzZGsuRGVjCiAgICBEZW5vbSAgc3RyaW5nCn0K"}}),t._v(" "),e("p",[e("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRmVlUG9vbCBpcyB0aGUgZ2xvYmFsIGZlZSBwb29sIGZvciBkaXN0cmlidXRpb24uCm1lc3NhZ2UgRmVlUG9vbCB7CiAgcmVwZWF0ZWQgY29zbW9zLmJhc2UudjFiZXRhMS5EZWNDb2luIGNvbW11bml0eV9wb29sID0gMQogICAgICBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZSwgKGdvZ29wcm90by5jYXN0cmVwZWF0ZWQpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWNDb2lucyZxdW90O107Cn0="}})],1),t._v(" "),e("h2",{attrs:{id:"validator-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validator-distribution"}},[t._v("#")]),t._v(" Validator Distribution")]),t._v(" "),e("p",[t._v("Validator distribution information for the relevant validator is updated each time:")]),t._v(" "),e("ol",[e("li",[t._v("delegation amount to a validator is updated,")]),t._v(" "),e("li",[t._v("a validator successfully proposes a block and receives a reward,")]),t._v(" "),e("li",[t._v("any delegator withdraws from a validator, or")]),t._v(" "),e("li",[t._v("the validator withdraws its commission.")])]),t._v(" "),e("ul",[e("li",[t._v("ValidatorDistInfo: "),e("code",[t._v("0x02 | ValOperatorAddrLen (1 byte) | ValOperatorAddr -> ProtocolBuffer(validatorDistribution)")])])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWYWxpZGF0b3JEaXN0SW5mbyBzdHJ1Y3QgewogICAgT3BlcmF0b3JBZGRyZXNzICAgICBzZGsuQWNjQWRkcmVzcwogICAgU2VsZkJvbmRSZXdhcmRzICAgICBzZGsuRGVjQ29pbnMKICAgIFZhbGlkYXRvckNvbW1pc3Npb24gdHlwZXMuVmFsaWRhdG9yQWNjdW11bGF0ZWRDb21taXNzaW9uCn0K"}}),t._v(" "),e("h2",{attrs:{id:"delegation-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delegation-distribution"}},[t._v("#")]),t._v(" Delegation Distribution")]),t._v(" "),e("p",[t._v("Each delegation distribution only needs to record the height at which it last\nwithdrew fees. Because a delegation must withdraw fees each time it's\nproperties change (aka bonded tokens etc.) its properties will remain constant\nand the delegator's "),e("em",[t._v("accumulation")]),t._v(" factor can be calculated passively knowing\nonly the height of the last withdrawal and its current properties.")]),t._v(" "),e("ul",[e("li",[t._v("DelegationDistInfo: "),e("code",[t._v("0x02 | DelegatorAddrLen (1 byte) | DelegatorAddr | ValOperatorAddrLen (1 byte) | ValOperatorAddr -> ProtocolBuffer(delegatorDist)")])])]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEZWxlZ2F0aW9uRGlzdEluZm8gc3RydWN0IHsKICAgIFdpdGhkcmF3YWxIZWlnaHQgaW50NjQgICAgLy8gbGFzdCB0aW1lIHRoaXMgZGVsZWdhdGlvbiB3aXRoZHJldyByZXdhcmRzCn0K"}}),t._v(" "),e("h2",{attrs:{id:"params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("p",[t._v("distribution module stores it's params in state with the prefix of "),e("code",[t._v("0x09")]),t._v(",\nit can only updated with governance.")]),t._v(" "),e("ul",[e("li",[t._v("Params: "),e("code",[t._v("0x09 | ProtocolBuffer(Params)")])])]),t._v(" "),e("p",[e("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUGFyYW1zIGRlZmluZXMgdGhlIHNldCBvZiBwYXJhbXMgZm9yIHRoZSBkaXN0cmlidXRpb24gbW9kdWxlLgptZXNzYWdlIFBhcmFtcyB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19zdHJpbmdlcikgPSBmYWxzZTsKICBzdHJpbmcgY29tbXVuaXR5X3RheCAgICAgICAgICAgICAgICA9IDEgWwogICAgKGNvc21vc19wcm90by5zY2FsYXIpICA9ICZxdW90O2Nvc21vcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgID0gZmFsc2UKICBdOwogIHN0cmluZyBiYXNlX3Byb3Bvc2VyX3Jld2FyZCA9IDIgWwogICAgKGNvc21vc19wcm90by5zY2FsYXIpICA9ICZxdW90O2Nvc21vcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLmN1c3RvbXR5cGUpID0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5EZWMmcXVvdDssCiAgICAoZ29nb3Byb3RvLm51bGxhYmxlKSAgID0gZmFsc2UKICBdOwogIHN0cmluZyBib251c19wcm9wb3Nlcl9yZXdhcmQgPSAzIFsKICAgIChjb3Ntb3NfcHJvdG8uc2NhbGFyKSAgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5jdXN0b210eXBlKSA9ICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuRGVjJnF1b3Q7LAogICAgKGdvZ29wcm90by5udWxsYWJsZSkgICA9IGZhbHNlCiAgXTsKICBib29sIHdpdGhkcmF3X2FkZHJfZW5hYmxlZCA9IDQ7Cn0="}})],1)],1)}),[],!1,null,null,null);a.default=l.exports}}]);