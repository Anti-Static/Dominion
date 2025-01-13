// Anti-Static Dominion
// v 1.0.0
// by James Zelasko
// This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
// http://creativecommons.org/licenses/by-sa/4.0/

var panelGlobal = this;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select):
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Anti-Static Dominion","preferredSize":[200,0],"margins":10,"orientation":"column","spacing":0,"alignChildren":["left","top"],"varName":null,"windowType":"Palette","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-37":{"id":37,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[10,0,0,0],"alignment":null,"selection":38}},"item-38":{"id":38,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"WINDOWS","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-55":{"id":55,"type":"Group","parentId":38,"style":{"enabled":true,"varName":"ButtonGroup1","preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":"fill"}},"item-451":{"id":451,"type":"Button","parentId":667,"style":{"enabled":true,"varName":"YouTubeButton","text":"youtube.com/@Anti-StaticTV","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-452":{"id":452,"type":"Image","parentId":667,"style":{"enabled":true,"varName":null,"image":["data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA5LjEtYzAwMiA3OS5hNmE2Mzk2OGEsIDIwMjQvMDMvMDYtMTE6NTI6MDUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS45IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5Mzg1QTc5MkQ3MzExRUZBMjMzQTBFQjFGNkFFRTgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5Mzg1QTdBMkQ3MzExRUZBMjMzQTBFQjFGNkFFRTgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkzODVBNzcyRDczMTFFRkEyMzNBMEVCMUY2QUVFODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzkzODVBNzgyRDczMTFFRkEyMzNBMEVCMUY2QUVFODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRy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"],"alignment":null,"helpTip":null}},"item-453":{"id":453,"type":"StaticText","parentId":667,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"This work is provided \"as is,\" without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script.","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-454":{"id":454,"type":"Image","parentId":667,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,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"],"alignment":null,"helpTip":null}},"item-455":{"id":455,"type":"StaticText","parentId":667,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-456":{"id":456,"type":"StaticText","parentId":667,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":"Anti-Static name and logo ©2025 James Zelasko. All rights reserved.","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-546":{"id":546,"type":"Group","parentId":941,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-547":{"id":547,"type":"StaticText","parentId":546,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Padding","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-551":{"id":551,"type":"EditText","parentId":546,"style":{"enabled":true,"varName":"PaddingTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-667":{"id":667,"type":"Group","parentId":817,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-817":{"id":817,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"ABOUT","orientation":"column","spacing":10,"alignChildren":["left","top"]},"collapsed":true},"item-823":{"id":823,"type":"Group","parentId":941,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-824":{"id":824,"type":"StaticText","parentId":823,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Orientation","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-825":{"id":825,"type":"DropDownList","parentId":823,"style":{"enabled":true,"varName":"OrientationDropDown","text":"DropDownList","listItems":"Row, Col","preferredSize":[131,0],"alignment":null,"selection":0,"helpTip":null}},"item-827":{"id":827,"type":"Button","parentId":55,"style":{"enabled":true,"varName":"CreateWindowButton","text":"Create Window","justify":"center","preferredSize":[0,35],"alignment":"fill","helpTip":null}},"item-830":{"id":830,"type":"Checkbox","parentId":940,"style":{"enabled":true,"varName":"AutoSizeChildrenCheckbox","text":"Auto-Size Children","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-832":{"id":832,"type":"Panel","parentId":896,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"NULLS","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":2,"alignChildren":["fill","top"],"alignment":"fill"}},"item-850":{"id":850,"type":"Group","parentId":897,"style":{"enabled":true,"varName":"NullButtonGroup","preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"column","spacing":0,"alignChildren":["center","center"],"alignment":"fill"},"collapsed":true},"item-854":{"id":854,"type":"Panel","parentId":896,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"TEXTURE","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":2,"alignChildren":["left","top"],"alignment":"fill"}},"item-856":{"id":856,"type":"Button","parentId":854,"style":{"enabled":true,"varName":"textureFitToWindowButton","text":"Fit to Window","justify":"center","preferredSize":[0,35],"alignment":"fill","helpTip":null}},"item-857":{"id":857,"type":"Group","parentId":850,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-875":{"id":875,"type":"Group","parentId":897,"style":{"enabled":true,"varName":"NullButtonGroup","preferredSize":[0,0],"margins":[0,0,0,0],"orientation":"column","spacing":5,"alignChildren":["center","center"],"alignment":"fill"}},"item-877":{"id":877,"type":"Image","parentId":857,"style":{"enabled":true,"varName":"TLNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOJJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1jCqAhZCCKaKS2mqs7Hz41Nz6/fNTzuvnVyn2GcgiRVZWPrr4DATu//79ye3Zg+OjCWTUshGUqUEZlm6WEVMyjMbZqGXUs4yTk5OVlpZISUmBqqgPoKR/wMbGxggk+P37d6q3G0EeMTc3VwMyl4IaqQJAxnogdqCh5w4AcSBAgAEAXH5INuVLe8cAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-878":{"id":878,"type":"Image","parentId":857,"style":{"enabled":true,"varName":"TCNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAM5JREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1jCqAhZACSw4uvkYhMW18am79/vkp5/Xzq0PLZ8d/fPvk9uzB8dEEMmrZqGWjlo1aNlws4+TkZKWlJVJSUnxA6gOoijlgY2NjBBL8/v071duNII+Ym5urAZlLQY1UASBjPRA70NBzB4A4ECDAAB2cQMYBaW/aAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-879":{"id":879,"type":"Image","parentId":857,"style":{"enabled":true,"varName":"TRNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPdJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1jCqAhZACSw4uvkYhMW1C6urfvbp6/Me3TxRZRghwMzGxKrCw8gkyMbNS7DOQa92ePTiOS96Li1d4tpiU5WhqHLVshFn2/t/f31d//XwLoinOZ5Tmw9E4G7WMNMs4OTlZaWmJlJQUH5D6AEr6B2xsbIxAgt+/f6d6uxHkEXNzczUgcymokSoAZKwHYgcaeu4AEAcCBBgAKM1UobEAXc0AAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-880":{"id":880,"type":"Group","parentId":850,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-881":{"id":881,"type":"Image","parentId":880,"style":{"enabled":true,"varName":"CLNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMNJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bBhatktKwRKER4Nx1LJRy8gGLIQU3Pr98xPdLMt5/fzqaJyNWkY/yzg5OVlpaYmUlBQfkPoASvoHbGxsjECC379/p3q7EeQRc3NzNSBzKaiRKgBkrAdiBxp67gAQBwIEGAD70Tt5JiyUvwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-882":{"id":882,"type":"Image","parentId":880,"style":{"enabled":true,"varName":"CNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQlJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bARY1i4srvZUQd1nNBiRAQshBeqs7FwJfAIyML4xO6cwLDhhYo///P4+7eO7xxRbpszKxhnHK6CGLo4sdvXXz7dUsWzbt89vpR/c3IKcQEAWIYuNJhCSLQMlBlAc0SQ1ogNQQiAmMYzG2ahl5FnGycnJSktLpKSk+IDUB1DSP2BjY2MEEvz+/TvV240gj5ibm4PK0aWgRqoAkLEeiB1o6LkDQBwIEGAAXm5enGUVSS8AAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-883":{"id":883,"type":"Image","parentId":880,"style":{"enabled":true,"varName":"CRNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bARa5sXFK/xUQd0HRI8G46hlo5bRxrL3//7+vvrr51sQTUgtC6WWHf/x7ZPbswfHR+Ns1DLqWMbJyclKS0ukpKT4gNQHUNI/YGNjYwQS/P79O9XbjSCPmJubqwGZS0GNVAEgYz0QO9DQcweAOBAgwADdj0aj6h5J1gAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-884":{"id":884,"type":"Group","parentId":850,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":5,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-885":{"id":885,"type":"Image","parentId":884,"style":{"enabled":true,"varName":"BLNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOJJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bBhatktKwRKER4Nx1LJRy8gGLMQo0mZjF36qoO6DS/7qr59v3Z49OE6xZRu+fnpy9ifrW3xqHv/5/Z0qPpv28d3j0QQywi3j5ORkpaUlUlJSfEDqAyg1HrCxsTECCX7//p3q7UaQR8zNzdWAzKWgRqoAkLEeiB1o6LkDQBwIEGAAxAhKT8MwcZEAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-886":{"id":886,"type":"Image","parentId":884,"style":{"enabled":true,"varName":"BCNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOBJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bNSyUctGLRu1DBOwEFLgxcUrPFtMyhKfmqu/fr51e/bgOMWW3f396/uizx9u4VPz+M/v71Tx2c3fP79Vvn15azSBjGDLODk5WWlpiZSUFB+Q+gBKjQdsbGyMQILfv3+nersR5BFzc3M1IHMpqJEqAGSsB2IHGnruABAHAgQYABRxTDO8YYbOAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-887":{"id":887,"type":"Image","parentId":884,"style":{"enabled":true,"varName":"BRNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANhJREFUeNpiZACCBiAAUvYMtAMHQXYwAnH/r1+/sm/evPnkx48fv6ltCwcHB6uurq4ikNnIAiQKDh48ePHo0aOPaeUtkCdMTU3jmUCcd+/efaNhEDLcu3fvLZBSYGKgIxi1bARa5sXFK/xUQd0HRI8G46hlo5ZhBSzE5KPZYlKWdLHs7u9f3xd9/nCLGHUUW3bz989vlW9f3hpNICPYMk5OTlZaWiIlJcUHpD6AUuMBGxsbI5Dg9+/fqd5uBHnE3NxcDchcCmqkCgAZ64HYgYaeOwDEgQABBgB/r0gDv/vKfAAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-888":{"id":888,"type":"Image","parentId":875,"style":{"enabled":true,"varName":"CornerNullButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAYAAADj79JYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgJJREFUeNrs3bFLAlEcwHEtKyqrwwMFUbjpGpwa2xykKdC1f6Ghf8HzL2jrT3C+OdwcGiuk5ZYEK1IoLumKsqH3o9stutN38v3CQwwJ34fX6xyel06pHMex1ENTjYYaRoqizFfDVaOlnPvpEPvS87zXTqfjjUajN4yiK5/Pb9RqNVuVVU/3lqvV6qnCLrXb7asgCCYQRZuY9nq9R9M0twqFgrUk24isbGjirdvt3oq1gBtsI/EXGhtLUMw2wAEHnAAHnAAHnAAHHHACHHACHHD6KRPlLzveyZUbm9ulaa87eOhf6DD586K1P+01bjC+O3t5Hmi5wsuZlfXK6pq5KKtR5iJz0naF67aC//s+763dQ/Zw/mkS4IAT4IAD/ucGX5P3m8+Pp0XBkbnInLS9DpdPZFF+KtP9Op0thT2cAAcccAIccAIccAIccMAJcMAJcMAJcMABJ8ABJ8ABJ8ABB5wAB5wAB5wAX1RwOYn8m9O9SUnmInPSFpyTyGwp7OGAE+CAE+BJLZbvS5l2LZ6kbwTSeoVzEnnGKzxpJ5Hn8ZfGHg444AQ44AQ44AQ44IAT4IAT4IAT4HMD9+VW4FDEW2jsC7gr912HJN5CY1fua39tmuZJsVjMDYfDMfe2j35l1+v1im3bWfX0KC0/dBzHUg9NNRpqGDBFmi8rW42Wcu5/CzAA2+yfTHYedGYAAAAASUVORK5CYII="],"alignment":null,"helpTip":null}},"item-890":{"id":890,"type":"Checkbox","parentId":940,"style":{"enabled":true,"varName":"InheritRoundnessCheckbox","text":"Inherit Roundness","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-892":{"id":892,"type":"Checkbox","parentId":940,"style":{"enabled":true,"varName":"PrioritizeCenterCheckbox","text":"Prioritize Center","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false}},"item-893":{"id":893,"type":"Tab","parentId":37,"style":{"enabled":true,"varName":null,"text":"EXTRAS","orientation":"column","spacing":10,"alignChildren":["fill","top"]}},"item-894":{"id":894,"type":"Group","parentId":905,"style":{"enabled":true,"varName":"XOffsetGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-895":{"id":895,"type":"StaticText","parentId":906,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Inset","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-896":{"id":896,"type":"Group","parentId":893,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","center"],"alignment":null}},"item-897":{"id":897,"type":"Group","parentId":832,"style":{"enabled":true,"varName":"NullButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-898":{"id":898,"type":"EditText","parentId":910,"style":{"enabled":true,"varName":"insetTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[38,0],"alignment":null,"helpTip":null}},"item-900":{"id":900,"type":"Slider","parentId":908,"style":{"enabled":true,"varName":"insetSlider","preferredSize":[101,0],"alignment":null,"helpTip":null}},"item-905":{"id":905,"type":"Group","parentId":832,"style":{"enabled":true,"varName":"OffestGroup","preferredSize":[0,0],"margins":0,"orientation":"column","spacing":0,"alignChildren":["fill","center"],"alignment":null}},"item-906":{"id":906,"type":"Group","parentId":894,"style":{"enabled":true,"varName":null,"preferredSize":[60,0],"margins":0,"orientation":"column","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-908":{"id":908,"type":"Group","parentId":894,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-910":{"id":910,"type":"Group","parentId":894,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":5,"alignChildren":["left","center"],"alignment":null}},"item-914":{"id":914,"type":"Panel","parentId":896,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"GRADIENT","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":2,"alignChildren":["left","top"],"alignment":"fill"}},"item-915":{"id":915,"type":"Group","parentId":941,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":[0,0,5,0],"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-916":{"id":916,"type":"StaticText","parentId":915,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Count","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-918":{"id":918,"type":"EditText","parentId":915,"style":{"enabled":true,"varName":"ChildrenTextbox","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1","justify":"left","preferredSize":[131,0],"alignment":null,"helpTip":null}},"item-921":{"id":921,"type":"Panel","parentId":896,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"MATTE","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":2,"alignChildren":["left","top"],"alignment":"fill"}},"item-922":{"id":922,"type":"Button","parentId":921,"style":{"enabled":true,"varName":"CreateMatteButton","text":"Create Matte","justify":"center","preferredSize":[0,35],"alignment":"fill","helpTip":null}},"item-923":{"id":923,"type":"Group","parentId":914,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":8,"alignChildren":["left","center"],"alignment":null}},"item-924":{"id":924,"type":"Image","parentId":923,"style":{"enabled":true,"varName":"CreateGradientVButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWRJREFUeNpiZACCBiAAUvFArMAwsOADEE8EuYcRRPz69atq/fr1Z65fv/52IF2lqakpHBgYaMLGxtbG7ODgsH7NmjWXBtpRIPDmzZvvQPxBR0fHhgnIFxgMjoIBqFsUmKhloBcXrzAIU8s8FmoZ1CYsZgCit337vJca5lElxCoERRRFmVk4QRjEHhQOE2FmZk3mE1SD8UFskNiAO0yYiYV1zZdP91///fMdhEFskNiAp7Gbv39+q3z78pYxOyc44YPYgyaN0QKMOmzUYaMOG3XYqMNGHTbqsFGHjTps1GEjzGHqrOxc7cLiamLMzFwgDGKDxAbcYW///fkdwsMH71eC2CCxAXfYm79/f8/99B7eMwKxQWKDIo11vH8D71eC2INq7KLq7asL1Ez8VHPYtm+f31I7Vz4AjeQNlmIC6pYPIIctBA0vDgbHwYY6gcyJjCAB6OBwPhALDLDbHoACCuQegAADAJ8niYRnB+B2AAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-925":{"id":925,"type":"Image","parentId":923,"style":{"enabled":true,"varName":"CreateGradientHButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXBJREFUeNpiZACCBiAAUvFArMAwsOADEE8EuYcRRPz69atq/fr1Z65fv/52IF2lqakpHBgYaMLGxtbG7ODgsH7NmjWXBtpRIPDmzZvvQPxBR0fHhgnIFxgMjoIBqFsUmBgGKRh12KjDRh026rBRh406bCg4TISZmVWdlZ2L2paCzASZTZbDKgRFFI/LKDkl8AnIUNthIDNBZoPswKWGBV3Ai4tXuE1YzECUmYUTxPfk4pE1ZucUpqbDxJiZubgYmVhz+YW1I3j4larevrqw7dvnt0MijWGEGMjlQLwXFMzJfIJq2799eVz59uUtalraLiyuFsLDpzj30/tbHe/f3CfKYTAA0jDn0/snwkwsrNQOjQWfPjzp/fDm/pu/f38THWIobXCgRnyayQU3f//8NlrAjjps1GGjDht12KjDRh1GucMegEbyBouDoG75AHLYQtDw4mBwHGyoE8icyAgSgA4O5wOxwAC77QEooEDuAQgwALENfRmHGft5AAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-926":{"id":926,"type":"Image","parentId":923,"style":{"enabled":true,"varName":"CreateGradientD1Button","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWdJREFUeNpiZACCBiAAUvFArMAwsOADEE8EuYcRRPz69atq/fr1Z65fv/52IF2lqakpHBgYaMLGxtbG7ODgsH7NmjWXBtpRIPDmzZvvQPxBR0fHhgnIFxgMjoIBqFsUmBgGKRh12KjDyAVeXLzCIExIHQs9HFMhKKLoxMkjoc3GDnZQ6qtnxwdFiGmysfPDHAUC2759fjvoovLqr59ElZk0j8qF4tIGLpw8Mnu+f3kCLkB//fw44A5DdlT8y6cXBkWupMRRNHMYpY6iicOo4SiqO4xajqKqw6jpKKo5jNqOoorDaOEoih1GK0dR5DBaOopsh9HaUWQ5jB6OIrquBLWnQE0XEJsejiLaYciNPHo4iuioRG7kDZo2P3L7HNTII7Y9RZeoBLXRiWkO09Vh9HbQaL9y1GH0dNgD0EjeYHEQ1C0fQA5bCBpeHAyOgw11ApkTGUEC0MHhfCAWGGC3PQAFFMg9AAEGAK4R0Evii49HAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-927":{"id":927,"type":"Image","parentId":923,"style":{"enabled":true,"varName":"CreateGradientD2Button","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAX1JREFUeNpiZACCBiAAUvFArMAwsOADEE8EuYcRRPz69atq/fr1Z65fv/52IF2lqakpHBgYaMLGxtbG7ODgsH7NmjWXBtpRIPDmzZvvQPxBR0fHhgnIFxgMjoIBqFsUmBgGKRh12MhxmBcXrzAI09thLMQomi0mZQmir/76+Xbf9y8vOt6/uT/gDtv27TO8KNFmYxd+/vf390GTxkAhNSijEhR9sJBy4eSRWSguzRD/8umFAXcYcpoCOYoejiO5uAA5Zs/3L0+gjjMYVOUYPRxHdgFLa8dRVPLT0nEUV0m0chxV6kpaOI5qlTi1HUfV1gU1HUf1Zg+1HEeT9hg1HEezhiKljmNhoCEAOQ65bgX3gn79/EhMe47mTWvkkANhJ04eiUHZ5gc1NgeNw0DRh9zYJKYPwUIPh4HSFCxdEduxYaF3VCL3IUY7vKMOG2iHPQCN5A0WB0Hd8gHksIWg4cXB4DjYUCeQOZERJAAdHM4HYoEBdtsDUECB3AMQYAA7auNgmUDLMwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-928":{"id":928,"type":"Image","parentId":923,"style":{"enabled":true,"varName":"CreateGradientRButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAk9JREFUeNpiZACCBiAAUvFArMAwsOADEE8EuYcRRPz69atq/fr1Z65fv/52IF2lqakpHBgYaMLGxtbG7ODgsH7NmjWXBtpRIPDmzZvvQPxBR0fHhgnIFxgMjoIBqFsUmBgGKRh12LBxGAslmi05uPj8uHkljNk5hZHFz/78/nbT188vjv/49omuDlNnZeeaLCqpr83GLoxNHiQexyugdvXXz7dRLx+fefP372+aR2UUL7/EFik5W1yOQnfgHikFOxFmZlaaOgwUUt3CEiZcjEwYFj348/sTCKOLizKzcPaKSGjTNCpv/v75bc/3L09cOHlkQPxv///9XvPl0/3eD2/uw6IL5Ph2YXEtcw5OCZg+qPoLNI3K+JdPL4AcBwodn2ePDle+fXkLOQ2BHB/04tGZ13//fEfW58XFK0zzxA9yHCjd4EvUr/7+/QaKRrqXY4RymhgzM9egK2AXiksboIfWtm+f39I8KpEBKErN2Ln4QGxbTi5hTy4eWXRHrf/66T5dS34QADlqtpiUJS55UCZpePfq1qCqK0Eh5f/84XFySn6KQ+zUT9T6EFQN7fv+5cX6L59fgoqOAanEseXO3NfPL1LiIKpGJXJVRA1HUSXEQKDkzYsLgkykV9Q0dxgl7S6aOSyLX0hWloUVXm49/vP7+7SP7x4PuMMCuPlkkNtmoFxJDYeNdkboHpW3fv/8hI8/YA7Lef386miHd9RhQ9VhD0AjeYPFQVC3fAA5bCFoeHEwOA421AlkTmQECUAHh/OBWGCA3fYAFFAg9wAEGAA7xAh1uXc3MgAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-936":{"id":936,"type":"Group","parentId":832,"style":{"enabled":true,"varName":"NullLabelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-937":{"id":937,"type":"StaticText","parentId":952,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Label Color","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}},"item-938":{"id":938,"type":"DropDownList","parentId":936,"style":{"enabled":true,"varName":"nullLabelDropDown","text":"DropDownList","listItems":"None, Red, Yellow, Aqua, Pink, Lavender, Peach, Sea Foam, Blue, Green, Purple, Orange, Brown, Fuchsia, Cyan, Sandstone, Dark Green","preferredSize":[124,0],"alignment":null,"selection":9,"helpTip":null}},"item-939":{"id":939,"type":"Checkbox","parentId":854,"style":{"enabled":true,"varName":"AspectCheckbox","text":"Maintain Aspect Ratio","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-940":{"id":940,"type":"Panel","parentId":38,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"CHILDREN","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-941":{"id":941,"type":"Panel","parentId":38,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"OPTIONS","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":0,"alignChildren":["fill","top"],"alignment":"fill"}},"item-942":{"id":942,"type":"Group","parentId":921,"style":{"enabled":true,"varName":"MatteLabelGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null},"collapsed":true},"item-944":{"id":944,"type":"DropDownList","parentId":942,"style":{"enabled":true,"varName":"matteLabelDropDown","text":"DropDownList","listItems":"None, Red, Yellow, Aqua, Pink, Lavender, Peach, Sea Foam, Blue, Green, Purple, Orange, Brown, Fuchsia, Cyan, Sandstone, Dark Green","preferredSize":[124,0],"alignment":null,"selection":2,"helpTip":null}},"item-946":{"id":946,"type":"Image","parentId":951,"style":{"enabled":true,"varName":"GetParentButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKlJREFUeNrkWl9oE0kYTzdNk41pmma1f0hTTx8qWhUfRKmHIOeDPvjk4RHxQTnEB0HwDoV7M74Jin8QfBAUfbIgvvlwPiiinCKKFL0oV1Br09g0dWNM292mufRufuqU6bKbnXYn2sQPJrs7zJ/fb+abb+b7JnXxeDzkcrnOkLTPVZ1yhaTf6snPsWw2u7O3t/dOJpPRqolBS0uLPxaL7QyHwzmJfB8mJJ5UGwkIMAM7OEg0o0rVaga75KoRqTfLXCP7gweUlm68X1Qziee6ljfmQwaLhfzJkeEE/T7a2t7d6fEG6Xcl6rL5tkQaJbdHliTPZXU0kZwq6DQf79c+qP30e2y6VGTr/Zn/mERdtrzIur8qS7rZMrZE0Mk/BV19MDGmsvm5UqlozGPFbKRE1v0xEFCNA0BFsmqUnfa94cXLljZ4/d9C96FWP4fCUbwDkxXhep7GNgeC0V+ale5c6V+9T9fSz3RNvZX/mK4E8JDb7dna2NS2WpaVtT5/q4+o+N3x/Jt5LXajQM3aPZ5gyF0vbwkElyHtCin5/YOv74kkgVk/HencDPBsPgbOrq5k1SCdTrOGhovF/JHU24eiZ+PtVEGLp1MPJ6enZ62DRxPjn/oHJisVNyUS8TRg5DuMDc1YEWI6sQAroVqwUB9KJZ0dNNoXMAEbNxEzq4EGkQ4mB+5Eib0/1h5ZV4n1cSqytAcD9ce75D3MDNSapy73zn49p/ZDnTD9eIomw5I4Ppzqg3WCmmF/mTeRVHFKJ5ZiiM2DlaJTjCfIdHl9iggyRhLsNsCaW2ACNm4iGPUbuWzSTt1OjAw/BhmnewzMLZ7nMulEuXLABGzzNr/lduM9A69uO50RALQbOGFrpCpPv5sWNSq7m5WuQ0MDc9orUG+d36/wlO3TNLXc2ctMznf80IPDo1k9oTMCEiu9si0RlOEl7GhGnMhLYvcvjI70lytzcElrl+h+a3uNvJjU8hfVUmKhgYV3yDpctkSwR+R0rbjQiJRzvmpGtSSrIwM8s4UGFpiAjZvIKt/siMdCEWACtu/PajkRbHZ2+wTKvOT0M74JERw7eDdN3rKOiOAsQ9KcffIv9dRKqU+5s19tm9+5eHY4kTp1rLYFm9qceppc4aBy7un7UlG38tp4BVEanhiA43AQ9TXsfOz5Co0BGMkYN2bH4SAIIuHoRDQJKzK0n+3BpqiwNYJGETLd4A90XOpc/pNoEmZk0A/6XMHhqHGHgzYuCsw0hrgsOrI68ziVaINXbna7ZRr//Rxz/tyX43DQWnm2W4rGMe2iSWAhx9siPcYgNh1Ix+EgOr0IYT6b1Eb+1nX19pj4awWA/D01eH9LoLF1FRm81T65jQ6k3TUGF5Gn+kT6/uhYXznHRiSZq9kC7kPe0D0mINmrsWR17sflJP1GMOFrkDATzARVc2Cy8pMsL0OhTtg74L/TmC8WHesP4D6PJYhO2MtK0XWB6S9pPM1NBJ3oZD0gSIcgBPXfYVGQR8vhipmAmQlSwObPvmIWWxeYrC5D6+Lx+H8k3azmAyPBv6O2Tr/4l021EqDYQeRsLBZbX41kvvzNaT041NXAH8/OknT8fwEGAKgNLBakSqsHAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-947":{"id":947,"type":"Image","parentId":951,"style":{"enabled":true,"varName":"GetChildrenButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7dJREFUeNrsms9PE0EUx8u2a9ml1LYb+sPaIJhgDCjENCR6MnrwXi8lXowHDxoTTTDqwVBvHkzECwcPxIsJF/8CowcOoqQHiBITogYs1VKyTSntlmUpcb+ExaZp6aw7tT/CS4aW7WT3fWbevPfmzbZFIhGHyWR6rrbrpuaUV2q7Z1H/jKVSqdDU1NT7ZDIpNROB2+3mw+FwyOVypRn1/7sqRLTZICDQGbqDgdEuNKlZ7evOmFpELOUunuF4+03B3d+ICr8Ukwuf81KGCKSTMbMcw7CT4tpCI0HcELr6oRvxjEDyOzvKh9yG2EggI05BqfRb1TXSfcTK3/f46mZmeP6Yzz9UrV9VkPXCtnLKygkkN6MtDrOZfez1B0n6VgVJFwrKaHx5JsBa7aUwGC3ao18M8czffT6myJknv+NzhkEqweBz1O0bpAkyEThx6arDFdALceBirwSDB7w+cfKyw2zhaEJc6OgU9jzTYMjh7FuUN0VSCN0BETAYpWIITQGjMsTzwl+zsnBf8nldHlMXCMxpmLcdr6SAETmtOpSSmDEIMzMU2SvJ20wmJqnxBV7Mx7L2cgr8q/Rarfv3+SHLYlTKJlTzWq8JCAKkFiThYYJ8hzDcYfMYhUBKNCtlVz7msolPuawIE6aSa5HI8pYsob1Jp2JGQZA7qW3OyD1aO/s14kK1xb+qKPnS2cLi9bDsrsebkySRZi5HdUYAQbL40YeWt6vJjEC+ynlxYm11sdxv2gzd6vL0NbRpwVxo9qsbCKnN12Kf0zJe6xCkpUEQR0iyYdJ+dY0jJPGBtF9d4wiCHeLEQZEdfRBvmj6OAIJ2LKEeRw6KETQy5UOvVUlQ6bhiP+qlUe/CxgpFQCOezKL3gec4XgjyNq+2NcW2lMbG6umxQM9Fm71nU91Kf9uSxdlcdjUq5URs3qiDhBzO3tLiAy3vgwHB4LQzDDvQznnR1MvzpCC6TAt1Juyta5HJlg7IpLg2r8c5MHrXBaqN6cJ2nnYmWzwguP8Ap686w+iB0MqY15a+v8PM0FgfpQOCmbgdW5o+28579DgSRg8Evr9IJhY0M8PpEU0X+vBXbBrmhHJQJBGf0QNDBPLI698tVqP2W1xzKncEZtR7FX/XYEgqjkQHPeUg/odoMCRFwKruF+7vQfxntF4RGzAkz68IgsNQ2nsGowKddIFs7BQUHIaOOIW+RgKBTtCNGATTeWdlaeZwz14vELxl06wAmu4AGQ+Hw8FmhNl7zQnH1+NtLfDi2TgSjT8CDACZ0e6FK6KUFAAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-948":{"id":948,"type":"Image","parentId":951,"style":{"enabled":true,"varName":"GetSiblingsButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA41JREFUeNrsWk1oE0EUTvPTNGkb0yxNrW2qVqhoED0UsULFo1BPFSTiRUQ8CIIePHloPXiyaFX0oCJ6shcv0oIeFPFgQXpokRwM9Mc22HTTTTfbdkMaU5yvOjIsyXZjG7IT82CyL/MG5n078703b9iq/v5+r8ViuUfaBQuf8oK063by05dIJHqHhoY+iKKo8oTA7/e7Q6FQr8/nk63k/zUCYow3EBD4DN+BwUo7ON1Wf323WspE7Lk6D7ncnsuCP2hGh59IYvhrSlUMAam32hwuq9XxXIqHzQTiotAYhG+GVwSSWl/PfF5dlswE5FyDkMlnKxuOlDfZ/zUAXI3OjOL5sHVP18cVJfpaTsxBp7YzXl/gZJ2nlR03m0krdxbmwzeamoNtDqcHZIYNc+Uj9paAbBYAbu7c1UX1dqdTGBBXJ6C/WpIitH9MXZUIYQ+z46jjb5XkHOaYW0un8B9z5SP2loAUEgB6Jr8NU50d/30trbI2Vte++UuzU59KzpHjtfWCEZveOGxlr834ihQFCLvN9Gx648CRgzVuTyVqbYfQvX+lsaljXFUllif5OJIvApqCIwecLgHbp6+55cjuaqebG47AMTQ4jydCKPqPuuta77a0dWOFisWRbd1a5CzUweoNNpuL/q8hoHo83g4uOKLd18jcSHrQp9JpaUCcn0Au4Y4jEDn7M/UgHhuDYwDBZR4ZVpamz89Mvn+nJGNc5xEWANd5ZDOb6TlSNoXVyL79p43Y9MYh4ukFg8pZqxC5HfsxasRGdWT8WpIwny6KETmbzdBrH1pklQyIXvHF2lidlMB7j5GjzJvkUuRlYnHaaIlbFCB4sxvRiBxFRhQ5kjNqMTaq43BJjzFnG4Rgd50n4LJWOR7FxXGjV1J2M+539oxWkhV5HF/YeNPaGoQV1kZ1rCQ9k31RV6L3xVg4UO10cckRHCrZ6x85pWa4yyMjSTmKTM4SnMs8wh7tuc4juYTbPKKVQvNIQVsLNTity7VNywP2soHa0aflCAooWkhhHIoptGdt7ScK4YjhFVlez2ZwZcrW5awg6rB6p7tWwN6n48nbH0Wfdtwpz44AefthPH9fYmc37oIxF+bcdiBYaqM1AjuO1XE7j5bLhhv5Sj3yXxzjKbHN5Cy98DMMZDNil0r0AoB9q8SucKQYQPCVDa8AqO8AMhgKhTp5BPPnM6dOYKgqgw/PBkm79UuAAQCVjDGctUOh1gAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-949":{"id":949,"type":"Image","parentId":951,"style":{"enabled":true,"varName":"GetMatteButton","image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBJREFUeNrsmk1oE0EUx6ebXZNNmjQfbZo2LYofFfwAkVx6EzxWEOol6MVTD4Jgb96a3gQFC4IHBfFiyaWCYG9WPKkHD8VSwYJRm2hI2iSbTbLpdpvgvNUNm5g2H+ySnbIPXpKZZNj5zfu/2beb7YtEIm6E0EPsNxGZ9hz7LI1f5rLZ7HQ0Gn2bTqcFkgj8fr89HA5Pe71ejsLtOxjiE2kQYDBnmDswUEoHobKqzZ1Ch8ToZp3nWbtrxuc/q/fBNyWRv59KrusG4qQsDEtRzLPM1rpeEKesVlfI3h/QNSJg5WpVel8qZPSMiJYgLXPk0dixSZCa0XOkJci7Ip+IBIKGh2kJssRl44u5zBejw7S1/e4H47ZYGKJAFJjPO0JKgQGIB8GjhokS3cmP55O/VudGghcABto2vEVfZO2+tbLAExMRxV5yuRgAgEP7DAYhSlrKGV+JhmInj1jJA+Erlb2VIv89KUk1KUFkjJAnHeXIz11ReLyV2sAfNyDZLzsHAudY1jfKMPa1MuKJAVEbV6lIsJMtcSgO7Wtu7/ilftdYu+OhlvNYLCxUDloUmbRWKzLMMOxxa+f50s0YTXYtos/sJogJYoKYIB0ZLi5lb7SYKMr9pWqVDJC7v+Oyvynka32pPQn3bcr9MXGHLGk92U7XVv+p6jNxOQITf5HdluX0oVTsba11kIFc0pKkKkNsyEFRyqUABqmgV/kc+oghoH/S4ayTmzqPHJQFypjuQaAGWj5x+ko3ICsFXl5xxe6NjssAis0OjaDbiR8y8Myg/z9pQb6oroHk8V2BwI25qW9fX3cy+VtDwxNTLveEfHAbi254B2vf+RmmcZHQ1QEPiu2K8vtirv4+YN1Ymu6dtGAV1RFoZjDZlEp+arvu8ZGR7H+1T7Wl/Z4m+0FRaCYVRYqNEjQsyH6SaUeKZq1lgpggJogJYkjT7DyynOcSq4Kg65+nhWpF0h0E7guDm9LSAgSesiEVQJk7gCyEw+EQiTD/HnMKAUPfIXjwbAH7/B8BBgCariKZ1MYn5wAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-951":{"id":951,"type":"Panel","parentId":38,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"SELECT","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":8,"alignChildren":["left","top"],"alignment":"fill"}},"item-952":{"id":952,"type":"Group","parentId":936,"style":{"enabled":true,"varName":null,"preferredSize":[85,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-953":{"id":953,"type":"Group","parentId":942,"style":{"enabled":true,"varName":null,"preferredSize":[85,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-954":{"id":954,"type":"StaticText","parentId":953,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Label Color","justify":"left","preferredSize":[80,0],"alignment":null,"helpTip":null}}},"order":[0,37,38,941,915,916,918,546,547,551,823,824,825,940,830,892,890,55,827,951,946,947,948,949,893,896,832,897,850,857,877,878,879,880,881,882,883,884,885,886,887,875,888,905,894,906,895,908,900,910,898,936,952,937,938,854,939,856,921,942,953,954,944,922,914,923,924,925,926,927,928,817,667,452,451,453,454,455,456],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":false,"afterEffectsDockable":true,"itemReferenceList":"None"},"activeId":38}
*/

// PALETTE
// =======
var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette");
if (!(panelGlobal instanceof Panel)) palette.text = "Anti-Static Dominion";
palette.preferredSize.width = 200;
palette.orientation = "column";
palette.alignChildren = ["left", "top"];
palette.spacing = 0;
palette.margins = 10;

// TPANEL1
// =======
var tpanel1 = palette.add("tabbedpanel", undefined, undefined, {
	name: "tpanel1"
});
tpanel1.alignChildren = "fill";
tpanel1.preferredSize.width = 256;
tpanel1.margins = 0;

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {
	name: "tab1"
});
tab1.text = "WINDOWS";
tab1.orientation = "column";
tab1.alignChildren = ["left", "top"];
tab1.spacing = 10;
tab1.margins = [0, 10, 0, 0];

// PANEL1
// ======
var panel1 = tab1.add("panel", undefined, undefined, {
	name: "panel1"
});
panel1.text = "OPTIONS";
panel1.orientation = "column";
panel1.alignChildren = ["fill", "top"];
panel1.spacing = 0;
panel1.margins = 10;
panel1.alignment = ["fill", "top"];

// GROUP1
// ======
var group1 = panel1.add("group", undefined, {
	name: "group1"
});
group1.orientation = "row";
group1.alignChildren = ["left", "center"];
group1.spacing = 10;
group1.margins = [0, 0, 0, 5];

var statictext1 = group1.add("statictext", undefined, undefined, {
	name: "statictext1"
});
statictext1.text = "Count";
statictext1.preferredSize.width = 80;

var ChildrenTextbox = group1.add('edittext {properties: {name: "ChildrenTextbox"}}');
ChildrenTextbox.text = "1";
ChildrenTextbox.preferredSize.width = 131;

// GROUP2
// ======
var group2 = panel1.add("group", undefined, {
	name: "group2"
});
group2.orientation = "row";
group2.alignChildren = ["left", "center"];
group2.spacing = 10;
group2.margins = [0, 0, 0, 5];

var statictext2 = group2.add("statictext", undefined, undefined, {
	name: "statictext2"
});
statictext2.text = "Padding";
statictext2.preferredSize.width = 80;

var PaddingTextbox = group2.add('edittext {properties: {name: "PaddingTextbox"}}');
PaddingTextbox.text = "10";
PaddingTextbox.preferredSize.width = 131;

// GROUP3
// ======
var group3 = panel1.add("group", undefined, {
	name: "group3"
});
group3.orientation = "row";
group3.alignChildren = ["left", "center"];
group3.spacing = 10;
group3.margins = [0, 0, 0, 5];

var statictext3 = group3.add("statictext", undefined, undefined, {
	name: "statictext3"
});
statictext3.text = "Orientation";
statictext3.preferredSize.width = 80;

var OrientationDropDown_array = ["Row", "Col"];
var OrientationDropDown = group3.add("dropdownlist", undefined, undefined, {
	name: "OrientationDropDown",
	items: OrientationDropDown_array
});
OrientationDropDown.selection = 0;
OrientationDropDown.preferredSize.width = 131;

// PANEL2
// ======
var panel2 = tab1.add("panel", undefined, undefined, {
	name: "panel2"
});
panel2.text = "CHILDREN";
panel2.orientation = "column";
panel2.alignChildren = ["left", "top"];
panel2.spacing = 10;
panel2.margins = 10;
panel2.alignment = ["fill", "top"];

var AutoSizeChildrenCheckbox = panel2.add("checkbox", undefined, undefined, {
	name: "AutoSizeChildrenCheckbox"
});
AutoSizeChildrenCheckbox.text = "Auto-Size Children";

var PrioritizeCenterCheckbox = panel2.add("checkbox", undefined, undefined, {
	name: "PrioritizeCenterCheckbox"
});
PrioritizeCenterCheckbox.text = "Prioritize Center";

var InheritRoundnessCheckbox = panel2.add("checkbox", undefined, undefined, {
	name: "InheritRoundnessCheckbox"
});
InheritRoundnessCheckbox.text = "Inherit Roundness";
InheritRoundnessCheckbox.value = true;

// BUTTONGROUP1
// ============
var ButtonGroup1 = tab1.add("group", undefined, {
	name: "ButtonGroup1"
});
ButtonGroup1.orientation = "column";
ButtonGroup1.alignChildren = ["center", "center"];
ButtonGroup1.spacing = 10;
ButtonGroup1.margins = [0, 0, 0, 0];
ButtonGroup1.alignment = ["fill", "top"];

var CreateWindowButton = ButtonGroup1.add("button", undefined, undefined, {
	name: "CreateWindowButton"
});
CreateWindowButton.text = "Create Window";
CreateWindowButton.preferredSize.height = 35;
CreateWindowButton.alignment = ["fill", "center"];

// PANEL3
// ======
var panel3 = tab1.add("panel", undefined, undefined, {
	name: "panel3"
});
panel3.text = "SELECT";
panel3.orientation = "row";
panel3.alignChildren = ["left", "top"];
panel3.spacing = 8;
panel3.margins = 10;
panel3.alignment = ["fill", "top"];

var GetParentButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%002%08%06%00%00%00%1E%3F%C2%88%C2%B1%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%04%C2%A9IDATx%C3%9A%C3%A4Z_h%13I%18O7M%C2%93%C2%8Di%C2%9Af%C2%B5%7FHSO%1F*Z%15%1FD%C2%A9%C2%87%20%C3%A7%C2%83%3E%C3%B8%C3%A4%C3%A1%11%C3%B1A9%C3%84%07A%C3%B0%0E%C2%85%7B3%C2%BE%09%C2%8A%7F%10%7C%10%14%7D%C2%B2%20%C2%BE%C3%B9p%3E(%C2%A2%C2%9C%22%C2%8A%14%C2%BD(WPk%C3%93%C3%984ucL%C3%9B%C3%9D%C2%A6%C2%B9%C3%B4n~%C3%AA%C2%94%C3%A9%C2%B2%C2%9B%C2%9Dv'%C3%9A%C3%84%0F%26%C2%BB%3B%C3%8C%C2%9F%C3%9Fo%C3%A6%C2%9Bo%C3%A6%C3%BB%26u%C3%B1x%3C%C3%A4r%C2%B9%C3%8E%C2%90%C2%B4%C3%8FU%C2%9Dr%C2%85%C2%A4%C3%9F%C3%AA%C3%89%C3%8F%C2%B1l6%C2%BB%C2%B3%C2%B7%C2%B7%C3%B7N%26%C2%93%C3%91%C2%AA%C2%89AKK%C2%8B%3F%16%C2%8B%C3%AD%0C%C2%87%C3%839%C2%89%7C%1F%26%24%C2%9ET%1B%09%080%03%3B8H4%C2%A3J%C3%95j%06%C2%BB%C3%A4%C2%AA%11%C2%A97%C3%8B%5C%23%C3%BB%C2%83%07%C2%94%C2%96n%C2%BC_T3%C2%89%C3%A7%C2%BA%C2%967%C3%A6C%06%C2%8B%C2%85%C3%BC%C3%89%C2%91%C3%A1%04%C3%BD%3E%C3%9A%C3%9A%C3%9E%C3%9D%C3%A9%C3%B1%06%C3%A9w%25%C3%AA%C2%B2%C3%B9%C2%B6D%1A%25%C2%B7G%C2%96%24%C3%8Feu4%C2%91%C2%9C*%C3%A84%1F%C3%AF%C3%97%3E%C2%A8%C3%BD%C3%B4%7Bl%C2%BATd%C3%AB%C3%BD%C2%99%C3%BF%C2%98D%5D%C2%B6%C2%BC%C3%88%C2%BA%C2%BF*K%C2%BA%C3%992%C2%B6D%C3%90%C3%89%3F%05%5D%7D01%C2%A6%C2%B2%C3%B9%C2%B9R%C2%A9h%C3%8Cc%C3%85l%C2%A4D%C3%96%C3%BD1%10P%C2%8D%03%40E%C2%B2j%C2%94%C2%9D%C3%B6%C2%BD%C3%A1%C3%85%C3%8B%C2%966x%C3%BD%C3%9FB%C3%B7%C2%A1V%3F%C2%87%C3%82Q%C2%BC%03%C2%93%15%C3%A1z%C2%9E%C3%866%07%C2%82%C3%91_%C2%9A%C2%95%C3%AE%5C%C3%A9_%C2%BDO%C3%97%C3%92%C3%8FtM%C2%BD%C2%95%C3%BF%C2%98%C2%AE%04%C3%B0%C2%90%C3%9B%C3%AD%C3%99%C3%9A%C3%98%C3%94%C2%B6Z%C2%96%C2%95%C2%B5%3E%7F%C2%AB%C2%8F%C2%A8%C3%B8%C3%9D%C3%B1%C3%BC%C2%9By-v%C2%A3%40%C3%8D%C3%9A%3D%C2%9E%60%C3%88%5D%2Fo%09%04%C2%97!%C3%AD%0A)%C3%B9%C3%BD%C2%83%C2%AF%C3%AF%C2%89%24%C2%81Y%3F%1D%C3%A9%C3%9C%0C%C3%B0l%3E%06%C3%8E%C2%AE%C2%AEd%C3%95%20%C2%9DN%C2%B3%C2%86%C2%86%C2%8B%C3%85%C3%BC%C2%91%C3%94%C3%9B%C2%87%C2%A2g%C3%A3%C3%ADTA%C2%8B%C2%A7S%0F'%C2%A7%C2%A7g%C2%AD%C2%83G%13%C3%A3%C2%9F%C3%BA%07%26%2B%157%25%12%C3%B14%60%C3%A4%3B%C2%8C%0D%C3%8DX%11b%3A%C2%B1%00%2B%C2%A1Z%C2%B0P%1FJ%25%C2%9D%1D4%C3%9A%170%01%1B7%113%C2%AB%C2%81%06%C2%91%0E%26%07%C3%AED%C2%89%C2%BD%3F%C3%96%1EYW%C2%89%C3%B5q*%C2%B2%C2%B4%07%03%C3%B5%C3%87%C2%BB%C3%A4%3D%C3%8C%0C%C3%94%C2%9A%C2%A7.%C3%B7%C3%8E~%3D%C2%A7%C3%B6C%C2%9D0%C3%BDx%C2%8A%26%C3%83%C2%928%3E%C2%9C%C3%AA%C2%83u%C2%82%C2%9Aa%7F%C2%997%C2%91TqJ'%C2%96b%C2%88%C3%8D%C2%83%C2%95%C2%A2S%C2%8C'%C3%88ty%7D%C2%8A%082F%12%C3%AC6%C3%80%C2%9A%5B%60%026n%22%18%C3%B5%1B%C2%B9l%C3%92N%C3%9DN%C2%8C%0C%3F%06%19%C2%A7%7B%0C%C3%8C-%C2%9E%C3%A72%C3%A9D%C2%B9r%C3%80%04l%C3%B36%C2%BF%C3%A5v%C3%A3%3D%03%C2%AFn%3B%C2%9D%11%00%C2%B4%1B8ak%C2%A4*O%C2%BF%C2%9B%165*%C2%BB%C2%9B%C2%95%C2%AECC%03s%C3%9A%2BPo%C2%9D%C3%9F%C2%AF%C3%B0%C2%94%C3%AD%C3%934%C2%B5%C3%9C%C3%99%C3%8BL%C3%8Ew%C3%BC%C3%90%C2%83%C3%83%C2%A3Y%3D%C2%A13%02%12%2B%C2%BD%C2%B2-%11%C2%94%C3%A1%25%C3%AChF%C2%9C%C3%88Kb%C3%B7%2F%C2%8C%C2%8E%C3%B4%C2%97%2BspIk%C2%97%C3%A8~k%7B%C2%8D%C2%BC%C2%98%C3%94%C3%B2%17%C3%95Rb%C2%A1%C2%81%C2%85w%C3%88%3A%5C%C2%B6D%C2%B0G%C3%A4t%C2%AD%C2%B8%C3%90%C2%88%C2%94s%C2%BEjF%C2%B5%24%C2%AB%23%03%3C%C2%B3%C2%85%06%16%C2%98%C2%80%C2%8D%C2%9B%C3%88*%C3%9F%C3%AC%C2%88%C3%87B%11%60%02%C2%B6%C3%AF%C3%8Fj9%11lvv%C3%BB%04%C3%8A%C2%BC%C3%A4%C3%B43%C2%BE%09%11%1C%3Bx7M%C3%9E%C2%B2%C2%8E%C2%88%C3%A0%2CC%C3%92%C2%9C%7D%C3%B2%2F%C3%B5%C3%94J%C2%A9O%C2%B9%C2%B3_m%C2%9B%C3%9F%C2%B9xv8%C2%91%3Au%C2%AC%C2%B6%05%C2%9B%C3%9A%C2%9Cz%C2%9A%5C%C3%A1%C2%A0r%C3%AE%C3%A9%C3%BBRQ%C2%B7%C3%B2%C3%9Ax%05Q%1A%C2%9E%18%C2%80%C3%A3p%10%C3%B55%C3%AC%7C%C3%AC%C3%B9%0A%C2%8D%01%18%C3%89%187f%C3%87%C3%A1%20%08%22%C3%A1%C3%A8D4%09%2B2%C2%B4%C2%9F%C3%AD%C3%81%C2%A6%C2%A8%C2%B05%C2%82F%112%C3%9D%C3%A0%0Ft%5C%C3%AA%5C%C3%BE%C2%93h%12fd%C3%90%0F%C3%BA%5C%C3%81%C3%A1%C2%A8q%C2%87%C2%836.%0A%C3%8C4%C2%86%C2%B8%2C%3A%C2%B2%3A%C3%B38%C2%95h%C2%83Wnv%C2%BBe%1A%C3%BF%C3%BD%1Cs%C3%BE%C3%9C%C2%97%C3%A3p%C3%90Zy%C2%B6%5B%C2%8A%C3%861%C3%AD%C2%A2I%60!%C3%87%C3%9B%22%3D%C3%86%206%1DH%C3%87%C3%A1%20%3A%C2%BD%08a%3E%C2%9B%C3%94F%C3%BE%C3%96u%C3%B5%C3%B6%C2%98%C3%B8k%05%C2%80%C3%BC%3D5x%7FK%C2%A0%C2%B1u%15%19%C2%BC%C3%95%3E%C2%B9%C2%8D%0E%C2%A4%C3%9D5%06%17%C2%91%C2%A7%C3%BAD%C3%BA%C3%BE%C3%A8X_9%C3%87F%24%C2%99%C2%AB%C3%99%02%C3%AEC%C3%9E%C3%90%3D%26%20%C3%99%C2%AB%C2%B1du%C3%AE%C3%87%C3%A5%24%C3%BDF0%C3%A1k%C2%900%13%C3%8C%04Us%60%C2%B2%C3%B2%C2%93%2C%2FC%C2%A1N%C3%98%3B%C3%A0%C2%BF%C3%93%C2%98%2F%16%1D%C3%AB%0F%C3%A0%3E%C2%8F%25%C2%88N%C3%98%C3%8BJ%C3%91u%C2%81%C3%A9%2Fi%3C%C3%8DM%04%C2%9D%C3%A8d%3D%20H%C2%87%20%04%C3%B5%C3%9FaQ%C2%90G%C3%8B%C3%A1%C2%8A%C2%99%C2%80%C2%99%09R%C3%80%C3%A6%C3%8F%C2%BEb%16%5B%17%C2%98%C2%AC.C%C3%AB%C3%A2%C3%B1%C3%B8%7F%24%C3%9D%C2%AC%C3%A6%03%23%C3%81%C2%BF%C2%A3%C2%B6N%C2%BF%C3%B8%C2%97M%C2%B5%12%C2%A0%C3%98A%C3%A4l%2C%16%5B_%C2%8Dd%C2%BE%C3%BC%C3%8Di%3D8%C3%94%C3%95%C3%80%1F%C3%8F%C3%8E%C2%92t%C3%BC%7F%01%06%00%C2%A8%0D%2C%16%C2%A4J%C2%AB%07%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetParentButton = panel3.add("image", undefined, File.decode(GetParentButton_imgString), {
	name: "GetParentButton"
});

var GetChildrenButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%002%08%06%00%00%00%1E%3F%C2%88%C2%B1%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%B7IDATx%C3%9A%C3%AC%C2%9A%C3%8FO%13A%14%C3%87%C3%8B%C2%B6k%C3%99%C2%A5%C3%94%C2%B6%1B%C3%BA%C3%83%C3%9A%20%C2%98%60%0C(%C3%844%24z2z%C3%B0%5E%2F%25%5E%C2%8C%07%0F%1A%13M0%C3%AA%C3%81Po%1EL%C3%84%0B%07%0F%C3%84%C2%8B%09%17%C3%BF%02%C2%A3%07%0E%C2%A2%C2%A4%07%C2%88%12%13%C2%A2%06%2C%C3%95R%C2%B2M)%C3%AD%C2%96e)q%C2%BF%C2%84%C3%85%C2%A6i%C3%A9%C2%AC%3B%C2%B5%3F%C3%82K%C2%86%C2%96%C3%ADd%C3%B7%7Df%C3%9E%C2%BC%C3%B7%C3%A6%C3%8D%C2%B6E%22%11%C2%87%C3%89dz%C2%AE%C2%B6%C3%AB%C2%A6%C3%A6%C2%94Wj%C2%BBgQ%C3%BF%C2%8C%C2%A5R%C2%A9%C3%90%C3%94%C3%94%C3%94%C3%BBd2)5%13%C2%81%C3%9B%C3%AD%C3%A6%C3%83%C3%A1p%C3%88%C3%A5r%C2%A5%19%C3%B5%C3%BF%C2%BB*D%C2%B4%C3%99%20%20%C3%90%19%C2%BA%C2%83%C2%81%C3%91.4%C2%A9Y%C3%AD%C3%AB%C3%8E%C2%98ZD%2C%C3%A5.%C2%9E%C3%A1x%C3%BBM%C3%81%C3%9D%C3%9F%C2%88%0A%C2%BF%14%C2%93%0B%C2%9F%C3%B3R%C2%86%08%C2%A4%C2%931%C2%B3%1C%C3%83%C2%B0%C2%93%C3%A2%C3%9AB%23A%C3%9C%10%C2%BA%C3%BA%C2%A1%1B%C3%B1%C2%8C%40%C3%B2%3B%3B%C3%8A%C2%87%C3%9C%C2%86%C3%98H%20%23NA%C2%A9%C3%B4%5B%C3%955%C3%92%7D%C3%84%C3%8A%C3%9F%C3%B7%C3%B8%C3%AAffx%C3%BE%C2%98%C3%8F%3FT%C2%AD_U%C2%90%C3%B5%C3%82%C2%B6r%C3%8A%C3%8A%09%247%C2%A3-%0E%C2%B3%C2%99%7D%C3%AC%C3%B5%07I%C3%BAV%05I%17%0A%C3%8Ah%7Cy%26%C3%80Z%C3%AD%C2%A50%18-%C3%9A%C2%A3_%0C%C3%B1%C3%8C%C3%9F%7D%3E%C2%A6%C3%88%C2%99'%C2%BF%C3%A3s%C2%86A*%C3%81%C3%A0s%C3%94%C3%AD%1B%C2%A4%092%118q%C3%A9%C2%AA%C3%83%15%C3%90%0Bq%C3%A0b%C2%AF%04%C2%83%07%C2%BC%3Eq%C3%B2%C2%B2%C3%83l%C3%A1hB%5C%C3%A8%C3%A8%14%C3%B6%3C%C3%93%60%C3%88%C3%A1%C3%AC%5B%C2%947ER%08%C3%9D%01%110%18%C2%A5b%08M%01%C2%A32%C3%84%C3%B3%C3%82_%C2%B3%C2%B2p_%C3%B2y%5D%1ES%17%08%C3%8Ci%C2%98%C2%B7%1D%C2%AF%C2%A4%C2%80%119%C2%AD%3A%C2%94%C2%92%C2%981%0833%14%C3%99%2B%C3%89%C3%9BL%26%26%C2%A9%C3%B1%05%5E%C3%8C%C3%87%C2%B2%C3%B6r%0A%C3%BC%C2%AB%C3%B4Z%C2%AD%C3%BB%C3%B7%C3%B9!%C3%8BbT%C3%8A%26T%C3%B3Z%C2%AF%09%08%02%C2%A4%16%24%C3%A1a%C2%82%7C%C2%870%C3%9Ca%C3%B3%18%C2%85%40J4%2BeW%3E%C3%A6%C2%B2%C2%89O%C2%B9%C2%AC%08%13%C2%A6%C2%92k%C2%91%C3%88%C3%B2%C2%96%2C%C2%A1%C2%BDI%C2%A7bFA%C2%90%3B%C2%A9m%C3%8E%C3%88%3DZ%3B%C3%BB5%C3%A2B%C2%B5%C3%85%C2%BF%C2%AA(%C3%B9%C3%92%C3%99%C3%82%C3%A2%C3%B5%C2%B0%C3%AC%C2%AE%C3%87%C2%9B%C2%93%24%C2%91f.GuF%00A%C2%B2%C3%B8%C3%91%C2%87%C2%96%C2%B7%C2%AB%C3%89%C2%8C%40%C2%BE%C3%8Ayqbmu%C2%B1%C3%9Co%C3%9A%0C%C3%9D%C3%AA%C3%B2%C3%B45%C2%B4i%C3%81%5Ch%C3%B6%C2%AB%1B%08%C2%A9%C3%8D%C3%97b%C2%9F%C3%932%5E%C3%AB%10%C2%A4%C2%A5A%10GH%C2%B2a%C3%92~u%C2%8D%23%24%C3%B1%C2%81%C2%B4_%5D%C3%A3%08%C2%82%1D%C3%A2%C3%84A%C2%91%1D%7D%10o%C2%9A%3E%C2%8E%00%C2%82v%2C%C2%A1%1EG%0E%C2%8A%1142%C3%A5C%C2%AFUIP%C3%A9%C2%B8b%3F%C3%AA%C2%A5Q%C3%AF%C3%82%C3%86%0AE%40%23%C2%9E%C3%8C%C2%A2%C3%B7%C2%81%C3%A78%5E%08%C3%B26%C2%AF%C2%B65%C3%85%C2%B6%C2%94%C3%86%C3%86%C3%AA%C3%A9%C2%B1%40%C3%8FE%C2%9B%C2%BDgS%C3%9DJ%7F%C3%9B%C2%92%C3%85%C3%99%5Cv5*%C3%A5Dl%C3%9E%C2%A8%C2%83%C2%84%1C%C3%8E%C3%9E%C3%92%C3%A2%03-%C3%AF%C2%83%01%C3%81%C3%A0%C2%B43%0C%3B%C3%90%C3%8Ey%C3%91%C3%94%C3%8B%C3%B3%C2%A4%20%C2%BAL%0Bu%26%C3%AC%C2%ADk%C2%91%C3%89%C2%96%0E%C3%88%C2%A4%C2%B86%C2%AF%C3%8790z%C3%97%05%C2%AA%C2%8D%C3%A9%C3%82v%C2%9Ev%26%5B%3C%20%C2%B8%C3%BF%00%C2%A7%C2%AF%3A%C3%83%C3%A8%C2%81%C3%90%C3%8A%C2%98%C3%97%C2%96%C2%BE%C2%BF%C3%83%C3%8C%C3%90X%1F%C2%A5%03%C2%82%C2%99%C2%B8%1D%5B%C2%9A%3E%C3%9B%C3%8E%7B%C3%B48%12F%0F%04%C2%BE%C2%BFH%26%1643%C3%83%C3%A9%11M%17%C3%BA%C3%B0Wl%1A%C3%A6%C2%84rP%24%11%C2%9F%C3%91%03C%04%C3%B2%C3%88%C3%AB%C3%9F-V%C2%A3%C3%B6%5B%5Cs*w%04f%C3%94%7B%15%7F%C3%97%60H*%C2%8ED%07%3D%C3%A5%20%C3%BE%C2%87h0%24E%C3%80%C2%AA%C3%AE%17%C3%AE%C3%AFA%C3%BCg%C2%B4%5E%11%1B0%24%C3%8F%C2%AF%08%C2%82%C3%83P%C3%9A%7B%06%C2%A3%02%C2%9Dt%C2%81l%C3%AC%14%14%1C%C2%86%C2%8E8%C2%85%C2%BEF%02%C2%81N%C3%90%C2%8D%18%04%C3%93ygei%C3%A6p%C3%8F%5E%2F%10%C2%BCe%C3%93%C2%AC%00%C2%9A%C3%AE%00%19%0F%C2%87%C3%83%C3%81f%C2%84%C3%99%7B%C3%8D%09%C3%87%C3%97%C3%A3m-%C3%B0%C3%A2%C3%998%12%C2%8D%3F%02%0C%00%C2%99%C3%91%C3%AE%C2%85%2B%C2%A2%C2%94%14%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetChildrenButton = panel3.add("image", undefined, File.decode(GetChildrenButton_imgString), {
	name: "GetChildrenButton"
});

var GetSiblingsButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%002%08%06%00%00%00%1E%3F%C2%88%C2%B1%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%C2%8DIDATx%C3%9A%C3%ACZMh%13A%14N%C3%B3%C3%934i%1B%C3%93%2CM%C2%ADm%C2%AAV%C2%A8h%10%3D%14%C2%B1B%C3%85%C2%A3PO%15%24%C3%A2ED%3C%08%C2%82%1E%3Cyh%3Dx%C2%B2hU%C3%B4%C2%A0%22z%C2%B2%17%2F%C3%92%C2%82%1E%14%C3%B1%60Azh%C2%91%1C%0C%C3%B4%C3%876%C3%98t%C3%93M7%C3%9BvC%1AS%C2%9C%C2%AF%3A2%2C%C3%89vc%1B%C2%B2%13%C3%B3%60%C2%B2%2F%C3%B3%06%C3%A6%7D%3B%C3%B3%C2%BD7o%C3%98%C2%AA%C3%BE%C3%BE~%C2%AF%C3%85b%C2%B9G%C3%9A%05%0B%C2%9F%C3%B2%C2%82%C2%B4%C3%ABv%C3%B2%C3%93%C2%97H%24z%C2%87%C2%86%C2%86%3E%C2%88%C2%A2%C2%A8%C3%B2%C2%84%C3%80%C3%AF%C3%B7%C2%BBC%C2%A1P%C2%AF%C3%8F%C3%A7%C2%93%C2%AD%C3%A4%C3%BF5%02b%C2%8C7%10%10%C3%B8%0C%C3%9F%C2%81%C3%81J%3B8%C3%9DV%7F%7D%C2%B7Z%C3%8AD%C3%AC%C2%B9%3A%0F%C2%B9%C3%9C%C2%9E%C3%8B%C2%82%3FhF%C2%87%C2%9FHb%C3%B8kJU%0C%01%C2%A9%C2%B7%C3%9A%1C.%C2%AB%C3%95%C3%B1%5C%C2%8A%C2%87%C3%8D%04%C3%A2%C2%A2%C3%90%18%C2%84o%C2%86W%04%C2%92Z_%C3%8F%7C%5E%5D%C2%96%C3%8C%04%C3%A4%5C%C2%83%C2%90%C3%89g%2B%1B%C2%8E%C2%947%C3%99%C3%BF5%00%5C%C2%8D%C3%8E%C2%8C%C3%A2%C3%B9%C2%B0uO%C3%97%C3%87%15%25%C3%BAZN%C3%8CA%C2%A7%C2%B63%5E_%C3%A0d%C2%9D%C2%A7%C2%95%1D7%C2%9BI%2Bw%16%C3%A6%C3%837%C2%9A%C2%9A%C2%83m%0E%C2%A7%07d%C2%86%0Ds%C3%A5%23%C3%B6%C2%96%C2%80l%16%00n%C3%AE%C3%9C%C3%95E%C3%B5v%C2%A7S%18%10W'%C2%A0%C2%BFZ%C2%92%22%C2%B4%7FL%5D%C2%95%08a%0F%C2%B3%C3%A3%C2%A8%C3%A3o%C2%95%C3%A4%1C%C3%A6%C2%98%5BK%C2%A7%C3%B0%1Fs%C3%A5%23%C3%B6%C2%96%C2%80%14%12%00z%26%C2%BF%0DS%C2%9D%1D%C3%BF%7D-%C2%AD%C2%B26V%C3%97%C2%BE%C3%B9K%C2%B3S%C2%9FJ%C3%8E%C2%91%C3%A3%C2%B5%C3%B5%C2%82%11%C2%9B%C3%9E8le%C2%AF%C3%8D%C3%B8%C2%8A%14%05%08%C2%BB%C3%8D%C3%B4lz%C3%A3%C3%80%C2%91%C2%835nO%25jm%C2%87%C3%90%C2%BD%7F%C2%A5%C2%B1%C2%A9c%5CU%25%C2%96'%C3%B98%C2%92%2F%02%C2%9A%C2%82%23%07%C2%9C.%01%C3%9B%C2%A7%C2%AF%C2%B9%C3%A5%C3%88%C3%AEj%C2%A7%C2%9B%1B%C2%8E%C3%80148%C2%8F'B(%C3%BA%C2%8F%C2%BA%C3%ABZ%C3%AF%C2%B6%C2%B4uc%C2%85%C2%8A%C3%85%C2%91m%C3%9DZ%C3%A4%2C%C3%94%C3%81%C3%AA%0D6%C2%9B%C2%8B%C3%BE%C2%AF!%C2%A0z%3C%C3%9E%0E.8%C2%A2%C3%9D%C3%97%C3%88%C3%9CHz%C3%90%C2%A7%C3%92ii%40%C2%9C%C2%9F%40.%C3%A1%C2%8E%23%109%C3%BB3%C3%B5%20%1E%1B%C2%83c%00%C3%81e%1E%19V%C2%96%C2%A6%C3%8F%C3%8FL%C2%BE%7F%C2%A7%24c%5C%C3%A7%11%16%00%C3%97yd3%C2%9B%C3%A99R6%C2%85%C3%95%C3%88%C2%BE%C3%BD%C2%A7%C2%8D%C3%98%C3%B4%C3%86!%C3%A2%C3%A9%05%C2%83%C3%8AY%C2%AB%10%C2%B9%1D%C3%BB1j%C3%84Fud%C3%BCZ%C2%920%C2%9F.%C2%8A%119%C2%9B%C3%8D%C3%90k%1FZd%C2%95%0C%C2%88%5E%C3%B1%C3%85%C3%9AX%C2%9D%C2%94%C3%80%7B%C2%8F%C2%91%C2%A3%C3%8C%C2%9B%C3%A4R%C3%A4ebq%C3%9Ah%C2%89%5B%14%20x%C2%B3%1B%C3%91%C2%88%1CEF%149%C2%923j16%C2%AA%C3%A3pI%C2%8F1g%1B%C2%84%60w%C2%9D'%C3%A0%C2%B2V9%1E%C3%85%C3%85q%C2%A3WRv3%C3%AEw%C3%B6%C2%8CV%C2%92%15y%1C_%C3%98x%C3%93%C3%9A%1A%C2%84%15%C3%96Fu%C2%AC%24%3D%C2%93%7DQW%C2%A2%C3%B7%C3%85X8P%C3%ADtq%C3%89%11%1C*%C3%99%C3%AB%1F9%C2%A5f%C2%B8%C3%8B%23%23I9%C2%8AL%C3%8E%12%C2%9C%C3%8B%3C%C3%82%1E%C3%AD%C2%B9%C3%8E%23%C2%B9%C2%84%C3%9B%3C%C2%A2%C2%95B%C3%B3HA%5B%0B58%C2%AD%C3%8B%C2%B5M%C3%8B%03%C3%B6%C2%B2%C2%81%C3%9A%C3%91%C2%A7%C3%A5%08%0A(ZHa%1C%C2%8A)%C2%B4gm%C3%AD'%0A%C3%A1%C2%88%C3%A1%15Y%5E%C3%8Ffpe%C3%8A%C3%96%C3%A5%C2%AC%20%C3%AA%C2%B0z%C2%A7%C2%BBV%C3%80%C3%9E%C2%A7%C3%A3%C3%89%C3%9B%1FE%C2%9Fv%C3%9C)%C3%8F%C2%8E%00y%C3%BBa%3C%7F_bg7%C3%AE%C2%821%17%C3%A6%C3%9Cv%20Xj%C2%A35%02%3B%C2%8E%C3%95q%3B%C2%8F%C2%96%C3%8B%C2%86%1B%C3%B9J%3D%C3%B2_%1C%C3%A3)%C2%B1%C3%8D%C3%A4%2C%C2%BD%C3%B03%0Cd3b%C2%97J%C3%B4%02%C2%80%7D%C2%AB%C3%84%C2%AEp%C2%A4%18%40%C3%B0%C2%95%0D%C2%AF%00%C2%A8%C3%AF%002%18%0A%C2%85%3Ay%04%C3%B3%C3%A73%C2%A7N%60%C2%A8*%C2%83%0F%C3%8F%06I%C2%BB%C3%B5K%C2%80%01%00%C2%95%C2%8C1%C2%9C%C2%B5C%C2%A1%C3%96%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetSiblingsButton = panel3.add("image", undefined, File.decode(GetSiblingsButton_imgString), {
	name: "GetSiblingsButton"
});

var GetMatteButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%002%00%00%002%08%06%00%00%00%1E%3F%C2%88%C2%B1%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03%00IDATx%C3%9A%C3%AC%C2%9AMh%13A%14%C3%87%C2%A7%C2%9B%5D%C2%93M%C2%9A4%1Fm%C2%9A6-%C2%8A%1F%15%C3%BC%00%C2%91%5Cz%13%3CV%10%C3%AA%25%C3%A8%C3%85S%0F%C2%82%60o%C3%9E%C2%9A%C3%9E%04%05%0B%C2%82%07%05%C3%B1b%C3%89%C2%A5%C2%82%60oV%3C%C2%A9%07%0F%C3%85R%C3%81%C2%82Q%C2%9BhH%C3%9A%24%C2%9BM%C2%B2%C3%A9v%C2%9B%C3%A0%C2%BC%C3%95%0D%C2%9B%C2%986%1F%C3%AC%C2%92%C2%9D%C2%B2%0F%5E%C2%92%C2%99d%C3%98%C3%B9%C3%8D%C3%BB%C2%BF%C3%99%C2%B7%C2%9B%C3%AD%C2%8BD%22n%C2%84%C3%90C%C3%AC7%11%C2%99%C3%B6%1C%C3%BB%2C%C2%8D_%C3%A6%C2%B2%C3%99%C3%ACt4%1A%7D%C2%9BN%C2%A7%05%C2%92%08%C3%BC~%C2%BF%3D%1C%0EO%7B%C2%BD%5E%C2%8E%C3%82%C3%AD%3B%18%C3%A2%13i%10%600g%C2%98%3B0PJ%07%C2%A1%C2%B2%C2%AA%C3%8D%C2%9DB%C2%87%C3%84%C3%A8f%C2%9D%C3%A7Y%C2%BBk%C3%86%C3%A7%3F%C2%AB%C3%B7%C3%817%25%C2%91%C2%BF%C2%9FJ%C2%AE%C3%AB%06%C3%A2%C2%A4%2C%0CKQ%C3%8C%C2%B3%C3%8C%C3%96%C2%BA%5E%10%C2%A7%C2%ACVW%C3%88%C3%9E%1F%C3%905%22%60%C3%A5jUz_*d%C3%B4%C2%8C%C2%88%C2%96%20-s%C3%A4%C3%91%C3%98%C2%B1I%C2%90%C2%9A%C3%91s%C2%A4%25%C3%88%C2%BB%22%C2%9F%C2%88%04%C2%82%C2%86%C2%87i%09%C2%B2%C3%84e%C3%A3%C2%8B%C2%B9%C3%8C%17%C2%A3%C3%83%C2%B4%C2%B5%C3%BD%C3%AE%07%C3%A3%C2%B6X%18%C2%A2%40%14%C2%98%C3%8F%3BBJ%C2%81%01%C2%88%07%C3%81%C2%A3%C2%86%C2%89%12%C3%9D%C3%89%C2%8F%C3%A7%C2%93%C2%BFV%C3%A7F%C2%82%17%00%06%C3%9A6%C2%BCE_d%C3%AD%C2%BE%C2%B5%C2%B2%C3%80%13%13%11%C3%85%5Er%C2%B9%18%00%C2%80C%C3%BB%0C%06!JZ%C3%8A%19_%C2%89%C2%86b'%C2%8FX%C3%89%03%C3%A1%2B%C2%95%C2%BD%C2%95%22%C3%BF%3D)I5)Ad%C2%8C%C2%90'%1D%C3%A5%C3%88%C3%8F%5DQx%C2%BC%C2%95%C3%9A%C3%80%1F7%20%C3%99%2F%3B%07%02%C3%A7X%C3%967%C3%8A0%C3%B6%C2%B52%C3%A2%C2%89%01Q%1BW%C2%A9H%C2%B0%C2%93-q(%0E%C3%ADkn%C3%AF%C3%B8%C2%A5~%C3%97X%C2%BB%C3%A3%C2%A1%C2%96%C3%B3X%2C%2CT%0EZ%14%C2%99%C2%B4V%2B2%C3%8C0%C3%ACqk%C3%A7%C3%B9%C3%92%C3%8D%18Mv-%C2%A2%C3%8F%C3%AC%26%C2%88%09b%C2%82%C2%98%20%1D%19..eo%C2%B4%C2%98(%C3%8A%C3%BD%C2%A5j%C2%95%0C%C2%90%C2%BB%C2%BF%C3%A3%C2%B2%C2%BF)%C3%A4k%7D%C2%A9%3D%09%C3%B7m%C3%8A%C3%BD1q%C2%87%2Ci%3D%C3%99N%C3%97V%C3%BF%C2%A9%C3%AA3q9%02%13%7F%C2%91%C3%9D%C2%96%C3%A5%C3%B4%C2%A1T%C3%ACm%C2%ADu%C2%90%C2%81%5C%C3%92%C2%92%C2%A4*Cl%C3%88AQ%C3%8A%C2%A5%00%06%C2%A9%C2%A0W%C3%B9%1C%C3%BA%C2%88!%C2%A0%7F%C3%92%C3%A1%C2%AC%C2%93%C2%9B%3A%C2%8F%1C%C2%94%05%C3%8A%C2%98%C3%AEA%C2%A0%06Z%3Eq%C3%BAJ7%20%2B%05%5E%5Eq%C3%85%C3%AE%C2%8D%C2%8E%C3%8B%00%C2%8A%C3%8D%0E%C2%8D%C2%A0%C3%9B%C2%89%1F2%C3%B0%C3%8C%C2%A0%C3%BF%3FiA%C2%BE%C2%A8%C2%AE%C2%81%C3%A4%C3%B1%5D%C2%81%C3%80%C2%8D%C2%B9%C2%A9o__w2%C3%B9%5BC%C3%83%13S.%C3%B7%C2%84%7Cp%1B%C2%8Bnx%07k%C3%9F%C3%B9%19%C2%A6q%C2%91%C3%90%C3%95%01%0F%C2%8A%C3%AD%C2%8A%C3%B2%C3%BBb%C2%AE%C3%BE%3E%60%C3%9DX%C2%9A%C3%AE%C2%9D%C2%B4%60%15%C3%95%11hf0%C3%99%C2%94J~j%C2%BB%C3%AE%C3%B1%C2%91%C2%91%C3%AC%7F%C2%B5O%C2%B5%C2%A5%C3%BD%C2%9E%26%C3%BBAQh%26%15E%C2%8A%C2%8D%124%2C%C3%88~%C2%92iG%C2%8Af%C2%ADe%C2%82%C2%98%20%26%C2%88%09bH%C3%93%C3%AC%3C%C2%B2%C2%9C%C3%A7%12%C2%AB%C2%82%C2%A0%C3%AB%C2%9F%C2%A7%C2%85jE%C3%92%1D%04%C3%AE%0B%C2%83%C2%9B%C3%92%C3%92%02%04%C2%9E%C2%B2!%15%40%C2%99%3B%C2%80%2C%C2%84%C3%83%C3%A1%10%C2%890%C3%BF%1Es%0A%01C%C3%9F!x%C3%B0l%01%C3%BB%C3%BC%1F%01%06%00%C2%9A%C2%AE%22%C2%99%C3%94%C3%86'%C3%A7%00%00%00%00IEND%C2%AEB%60%C2%82";
var GetMatteButton = panel3.add("image", undefined, File.decode(GetMatteButton_imgString), {
	name: "GetMatteButton"
});

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {
	name: "tab2"
});
tab2.text = "EXTRAS";
tab2.orientation = "column";
tab2.alignChildren = ["fill", "top"];
tab2.spacing = 10;
tab2.margins = [0, 10, 0, 0];

// GROUP4
// ======
var group4 = tab2.add("group", undefined, {
	name: "group4"
});
group4.orientation = "column";
group4.alignChildren = ["fill", "center"];
group4.spacing = 10;
group4.margins = 0;

// PANEL4
// ======
var panel4 = group4.add("panel", undefined, undefined, {
	name: "panel4"
});
panel4.text = "NULLS";
panel4.orientation = "column";
panel4.alignChildren = ["fill", "top"];
panel4.spacing = 2;
panel4.margins = 10;
panel4.alignment = ["fill", "center"];

// NULLBUTTONGROUP
// ===============
var NullButtonGroup = panel4.add("group", undefined, {
	name: "NullButtonGroup"
});
NullButtonGroup.orientation = "row";
NullButtonGroup.alignChildren = ["center", "center"];
NullButtonGroup.spacing = 10;
NullButtonGroup.margins = 0;

// NULLBUTTONGROUP1
// ================
var NullButtonGroup1 = NullButtonGroup.add("group", undefined, {
	name: "NullButtonGroup1"
});
NullButtonGroup1.orientation = "column";
NullButtonGroup1.alignChildren = ["center", "center"];
NullButtonGroup1.spacing = 0;
NullButtonGroup1.margins = [0, 0, 0, 0];
NullButtonGroup1.alignment = ["center", "fill"];

// GROUP5
// ======
var group5 = NullButtonGroup1.add("group", undefined, {
	name: "group5"
});
group5.orientation = "row";
group5.alignChildren = ["left", "center"];
group5.spacing = 5;
group5.margins = 0;

var TLNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%A2IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5%C2%8C*%C2%80%C2%85%C2%90%C2%82)%C2%A2%C2%92%C3%9Aj%C2%AC%C3%AC%7C%C3%B8%C3%94%C3%9C%C3%BA%C3%BD%C3%B3S%C3%8E%C3%AB%C3%A7W)%C3%B6%19%C3%88%22EVV%3E%C2%BA%C3%B8%0C%04%C3%AE%C3%BF%C3%BE%C3%BD%C3%89%C3%AD%C3%99%C2%83%C3%A3%C2%A3%09d%C3%94%C2%B2%11%C2%94%C2%A9A%19%C2%96n%C2%96%11S2%C2%8C%C3%86%C3%99%C2%A8e%C3%94%C2%B3%C2%8C%C2%93%C2%93%C2%93%C2%95%C2%96%C2%96HII%C2%81%C2%AA%C2%A8%0F%C2%A0%C2%A4%7F%C3%80%C3%86%C3%86%C3%86%08%24%C3%B8%C3%BD%C3%BBw%C2%AA%C2%B7%1BA%1E177W%032%C2%97%C2%82%1A%C2%A9%02%40%C3%86z%20v%C2%A0%C2%A1%C3%A7%0E%00q%20%40%C2%80%01%00%5C~H6%C3%A5K%7B%C3%87%00%00%00%00IEND%C2%AEB%60%C2%82";
var TLNullButton = group5.add("image", undefined, File.decode(TLNullButton_imgString), {
	name: "TLNullButton"
});

var TCNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%8EIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5%C2%8C*%C2%80%C2%85%C2%90%02K%0E.%C2%BEF!1m%7Cjn%C3%BD%C3%BE%C3%B9)%C3%A7%C3%B5%C3%B3%C2%ABC%C3%8Bg%C3%87%7F%7C%C3%BB%C3%A4%C3%B6%C3%AC%C3%81%C3%B1%C3%91%042j%C3%99%C2%A8e%C2%A3%C2%96%C2%8DZ6%5C%2C%C3%A3%C3%A4%C3%A4d%C2%A5%C2%A5%25RRR%7C%40%C3%AA%03%C2%A8%C2%8A9%60ccc%04%12%C3%BC%C3%BE%C3%BD%3B%C3%95%C3%9B%C2%8D%20%C2%8F%C2%98%C2%9B%C2%9B%C2%AB%01%C2%99KA%C2%8DT%01%20c%3D%10%3B%C3%90%C3%90s%07%C2%808%10%20%C3%80%00%1D%C2%9C%40%C3%86%01io%C3%9A%00%00%00%00IEND%C2%AEB%60%C2%82";
var TCNullButton = group5.add("image", undefined, File.decode(TCNullButton_imgString), {
	name: "TCNullButton"
});

var TRNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%B7IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5%C2%8C*%C2%80%C2%85%C2%90%02K%0E.%C2%BEF!1mB%C3%AA%C3%AA%C3%9F%C2%BD%C2%BAz%C3%BC%C3%87%C2%B7O%14YF%08p31%C2%B1*%C2%B0%C2%B0%C3%B2%0921%C2%B3R%C3%AC3%C2%90k%C3%9D%C2%9E%3D8%C2%8EK%C3%9E%C2%8B%C2%8BWx%C2%B6%C2%98%C2%94%C3%A5hj%1C%C2%B5l%C2%84Y%C3%B6%C3%BE%C3%9F%C3%9F%C3%9FW%7F%C3%BD%7C%0B%C2%A2)%C3%8Eg%C2%94%C3%A6%C3%83%C3%918%1B%C2%B5%C2%8C4%C3%8B899Yii%C2%89%C2%94%C2%94%14%1F%C2%90%C3%BA%00J%C3%BA%07lll%C2%8C%40%C2%82%C3%9F%C2%BF%7F%C2%A7z%C2%BB%11%C3%A4%11sss5%20s)%C2%A8%C2%91*%00d%C2%AC%07b%07%1Az%C3%AE%00%10%07%02%04%18%00(%C3%8DT%C2%A1%C2%B1%00%5D%C3%8D%00%00%00%00IEND%C2%AEB%60%C2%82";
var TRNullButton = group5.add("image", undefined, File.decode(TRNullButton_imgString), {
	name: "TRNullButton"
});

// GROUP6
// ======
var group6 = NullButtonGroup1.add("group", undefined, {
	name: "group6"
});
group6.orientation = "row";
group6.alignChildren = ["left", "center"];
group6.spacing = 5;
group6.margins = 0;

var CLNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%83IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%18Z%C2%B6KJ%C3%81%12%C2%84G%C2%83q%C3%94%C2%B2Q%C3%8B%C3%88%06%2C%C2%84%14%C3%9C%C3%BA%C3%BD%C3%B3%13%C3%9D%2C%C3%8By%C3%BD%C3%BC%C3%AAh%C2%9C%C2%8DZF%3F%C3%8B899Yii%C2%89%C2%94%C2%94%14%1F%C2%90%C3%BA%00J%C3%BA%07lll%C2%8C%40%C2%82%C3%9F%C2%BF%7F%C2%A7z%C2%BB%11%C3%A4%11sss5%20s)%C2%A8%C2%91*%00d%C2%AC%07b%07%1Az%C3%AE%00%10%07%02%04%18%00%C3%BB%C3%91%3By%26%2C%C2%94%C2%BF%00%00%00%00IEND%C2%AEB%60%C2%82";
var CLNullButton = group6.add("image", undefined, File.decode(CLNullButton_imgString), {
	name: "CLNullButton"
});

var CNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%09IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%04X%C3%96.%2C%C2%AE%C3%B6TA%C3%9Dg4%18%C2%91%01%0B!%05%C3%AA%C2%AC%C3%AC%5C%09%7C%0220%C2%BE1%3B%C2%A70%2C8ab%C2%8F%C3%BF%C3%BC%C3%BE%3E%C3%AD%C3%A3%C2%BB%C3%87%14%5B%C2%A6%C3%8C%C3%8A%C3%86%19%C3%87%2B%C2%A0%C2%86.%C2%8E%2Cv%C3%B5%C3%97%C3%8F%C2%B7T%C2%B1l%C3%9B%C2%B7%C3%8Fo%C2%A5%1F%C3%9C%C3%9C%C2%82%C2%9C%40%40%16!%C2%8B%C2%8D%26%10%C2%92-%03%25%06P%1C%C3%91%245%C2%A2%03PB%20%261%C2%8C%C3%86%C3%99%C2%A8e%C3%A4Y%C3%86%C3%89%C3%89%C3%89JKK%C2%A4%C2%A4%C2%A4%C3%B8%C2%80%C3%94%07P%C3%92%3F%60ccc%04%12%C3%BC%C3%BE%C3%BD%3B%C3%95%C3%9B%C2%8D%20%C2%8F%C2%98%C2%9B%C2%9B%C2%83%C3%8A%C3%91%C2%A5%C2%A0F%C2%AA%00%C2%90%C2%B1%1E%C2%88%1Dh%C3%A8%C2%B9%03%40%1C%08%10%60%00%5En%5E%C2%9Ce%15I%2F%00%00%00%00IEND%C2%AEB%60%C2%82";
var CNullButton = group6.add("image", undefined, File.decode(CNullButton_imgString), {
	name: "CNullButton"
});

var CRNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%92IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%04Z%C3%A6%C3%85%C3%85%2B%C3%BCTA%C3%9D%07D%C2%8F%06%C3%A3%C2%A8e%C2%A3%C2%96%C3%91%C3%86%C2%B2%C3%B7%C3%BF%C3%BE%C3%BE%C2%BE%C3%BA%C3%AB%C3%A7%5B%10MH-%0B%C2%A5%C2%96%1D%C3%BF%C3%B1%C3%AD%C2%93%C3%9B%C2%B3%07%C3%87G%C3%A3l%C3%942%C3%AAX%C3%86%C3%89%C3%89%C3%89JKK%C2%A4%C2%A4%C2%A4%C3%B8%C2%80%C3%94%07P%C3%92%3F%60ccc%04%12%C3%BC%C3%BE%C3%BD%3B%C3%95%C3%9B%C2%8D%20%C2%8F%C2%98%C2%9B%C2%9B%C2%AB%01%C2%99KA%C2%8DT%01%20c%3D%10%3B%C3%90%C3%90s%07%C2%808%10%20%C3%80%00%C3%9D%C2%8FF%C2%A3%C3%AA%1EI%C3%96%00%00%00%00IEND%C2%AEB%60%C2%82";
var CRNullButton = group6.add("image", undefined, File.decode(CRNullButton_imgString), {
	name: "CRNullButton"
});

// GROUP7
// ======
var group7 = NullButtonGroup1.add("group", undefined, {
	name: "group7"
});
group7.orientation = "row";
group7.alignChildren = ["left", "center"];
group7.spacing = 5;
group7.margins = 0;

var BLNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%A2IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%18Z%C2%B6KJ%C3%81%12%C2%84G%C2%83q%C3%94%C2%B2Q%C3%8B%C3%88%06%2C%C3%84(%C3%92fc%17~%C2%AA%C2%A0%C3%AE%C2%83K%C3%BE%C3%AA%C2%AF%C2%9Fo%C3%9D%C2%9E%3D8N%C2%B1e%1B%C2%BE~zr%C3%B6'%C3%AB%5B%7Cj%1E%C3%BF%C3%B9%C3%BD%C2%9D*%3E%C2%9B%C3%B6%C3%B1%C3%9D%C3%A3%C3%91%042%C3%82-%C3%A3%C3%A4%C3%A4d%C2%A5%C2%A5%25RRR%7C%40%C3%AA%03(5%1E%C2%B0%C2%B1%C2%B11%02%09~%C3%BF%C3%BE%C2%9D%C3%AA%C3%ADF%C2%90G%C3%8C%C3%8D%C3%8D%C3%95%C2%80%C3%8C%C2%A5%C2%A0F%C2%AA%00%C2%90%C2%B1%1E%C2%88%1Dh%C3%A8%C2%B9%03%40%1C%08%10%60%00%C3%84%08JO%C3%830q%C2%91%00%00%00%00IEND%C2%AEB%60%C2%82";
var BLNullButton = group7.add("image", undefined, File.decode(BLNullButton_imgString), {
	name: "BLNullButton"
});

var BCNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%A0IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%C3%94%C2%B2Q%C3%8BF-%1B%C2%B5%0C%13%C2%B0%10R%C3%A0%C3%85%C3%85%2B%3C%5BL%C3%8A%12%C2%9F%C2%9A%C2%AB%C2%BF~%C2%BEu%7B%C3%B6%C3%A08%C3%85%C2%96%C3%9D%C3%BD%C3%BD%C3%AB%C3%BB%C2%A2%C3%8F%1Fn%C3%A1S%C3%B3%C3%B8%C3%8F%C3%AF%C3%AFT%C3%B1%C3%99%C3%8D%C3%9F%3F%C2%BFU%C2%BE%7Dyk4%C2%81%C2%8C%60%C3%8B899Yii%C2%89%C2%94%C2%94%14%1F%C2%90%C3%BA%00J%C2%8D%07lll%C2%8C%40%C2%82%C3%9F%C2%BF%7F%C2%A7z%C2%BB%11%C3%A4%11sss5%20s)%C2%A8%C2%91*%00d%C2%AC%07b%07%1Az%C3%AE%00%10%07%02%04%18%00%14qL3%C2%BCa%C2%86%C3%8E%00%00%00%00IEND%C2%AEB%60%C2%82";
var BCNullButton = group7.add("image", undefined, File.decode(BCNullButton_imgString), {
	name: "BCNullButton"
});

var BRNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1B%00%00%00%1B%08%06%00%00%00%C2%8D%C3%94%C3%B4U%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%00%C3%98IDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B6%0C%C2%B4%03%07Av0%02q%C3%BF%C2%AF_%C2%BF%C2%B2o%C3%9E%C2%BC%C3%B9%C3%A4%C3%87%C2%8F%1F%C2%BF%C2%A9m%0B%07%07%07%C2%AB%C2%AE%C2%AE%C2%AE%22%C2%90%C3%99%C3%88%02%24%0A%0E%1E%3Cx%C3%B1%C3%A8%C3%91%C2%A3%C2%8Fi%C3%A5-%C2%90'LMM%C3%A3%C2%99%40%C2%9Cw%C3%AF%C3%9E%7D%C2%A3a%102%C3%9C%C2%BBw%C3%AF-%C2%90R%60b%C2%A0%23%18%C2%B5l%04Z%C3%A6%C3%85%C3%85%2B%C3%BCTA%C3%9D%07D%C2%8F%06%C3%A3%C2%A8e%C2%A3%C2%96a%05%2C%C3%84%C3%A4%C2%A3%C3%99bR%C2%96t%C2%B1%C3%AC%C3%AE%C3%AF_%C3%9F%17%7D%C3%BEp%C2%8B%18u%14%5Bv%C3%B3%C3%B7%C3%8Fo%C2%95o_%C3%9E%1AM%20%23%C3%982NNNVZZ%22%25%25%C3%85%07%C2%A4%3E%C2%80R%C3%A3%01%1B%1B%1B%23%C2%90%C3%A0%C3%B7%C3%AF%C3%9F%C2%A9%C3%9En%04y%C3%84%C3%9C%C3%9C%5C%0D%C3%88%5C%0Aj%C2%A4%0A%00%19%C3%AB%C2%81%C3%98%C2%81%C2%86%C2%9E%3B%00%C3%84%C2%81%00%01%06%00%7F%C2%AFH%03%C2%BF%C3%BB%C3%8A%7C%00%00%00%00IEND%C2%AEB%60%C2%82";
var BRNullButton = group7.add("image", undefined, File.decode(BRNullButton_imgString), {
	name: "BRNullButton"
});

// NULLBUTTONGROUP2
// ================
var NullButtonGroup2 = NullButtonGroup.add("group", undefined, {
	name: "NullButtonGroup2"
});
NullButtonGroup2.orientation = "column";
NullButtonGroup2.alignChildren = ["center", "center"];
NullButtonGroup2.spacing = 5;
NullButtonGroup2.margins = [0, 0, 0, 0];
NullButtonGroup2.alignment = ["center", "fill"];

var CornerNullButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%5C%00%00%00%5C%08%06%00%00%00%C3%A3%C3%AF%C3%92X%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02%02IDATx%C3%9A%C3%AC%C3%9D%C2%B1K%02Q%1C%C3%80q-%2B*%C2%AB%C3%83%03%05Q%C2%B8%C3%A9%1A%C2%9C%1A%C3%9B%1C%C2%A4)%C3%90%C2%B5%7F%C2%A1%C2%A1%7F%C3%81%C3%B3%2Fh%C3%ABOp%C2%BE9%C3%9C%1C%1A%2B%C2%A4%C3%A5%C2%96%04%2BR(.%C3%A9%C2%8A%C2%B2%C2%A1%C3%B7%C2%A3%C3%9B-%C2%BA%C3%93w%C3%B2%C3%BD%C3%82C%0C%09%C3%9F%C2%87%C3%97%C3%AB%1C%C2%9E%C2%97N%C2%A9%1C%C3%87%C2%B1%C3%94CS%C2%8D%C2%86%1AF%C2%8A%C2%A2%C3%8CW%C3%83U%C2%A3%C2%A5%C2%9C%C3%BB%C3%A9%10%C3%BB%C3%92%C3%B3%C2%BC%C3%97N%C2%A7%C3%A3%C2%8DF%C2%A37%C2%8C%C2%A2%2B%C2%9F%C3%8Fo%C3%94j5%5B%C2%95UO%C3%B7%C2%96%C2%AB%C3%95%C3%AA%C2%A9%C3%82.%C2%B5%C3%9B%C3%AD%C2%AB%20%08%26%10E%C2%9B%C2%98%C3%B6z%C2%BDG%C3%934%C2%B7%0A%C2%85%C2%82%C2%B5%24%C3%9B%C2%88%C2%AClh%C3%A2%C2%AD%C3%9B%C3%AD%C3%9E%C2%8A%C2%B5%C2%80%1Bl%23%C3%B1%17%1A%1BKP%C3%8C6%C3%80%01%07%C2%9C%00%07%C2%9C%00%07%C2%9C%00%07%1Cp%02%1Cp%02%1Cp%C3%BA)%13%C3%A5%2F%3B%C3%9E%C3%89%C2%95%1B%C2%9B%C3%9B%C2%A5i%C2%AF%3Bx%C3%A8_%C3%A80%C3%B9%C3%B3%C2%A2%C2%B5%3F%C3%AD5n0%C2%BE%3B%7By%1Eh%C2%B9%C3%82%C3%8B%C2%99%C2%95%C3%B5%C3%8A%C3%AA%C2%9A%C2%B9(%C2%ABQ%C3%A6%22s%C3%92v%C2%85%C3%AB%C2%B6%C2%82%C3%BF%C3%BB%3E%C3%AF%C2%AD%C3%9DC%C3%B6p%C3%BEi%12%C3%A0%C2%80%13%C3%A0%C2%80%03%C3%BE%C3%A7%06_%C2%93%C3%B7%C2%9B%C3%8F%C2%8F%C2%A7E%C3%81%C2%91%C2%B9%C3%88%C2%9C%C2%B4%C2%BD%0E%C2%97OdQ~*%C3%93%C3%BD%3A%C2%9D-%C2%85%3D%C2%9C%00%07%1Cp%02%1Cp%02%1Cp%02%1Cp%C3%80%09p%C3%80%09p%C3%80%09p%C3%80%01'%C3%80%01'%C3%80%01'%C3%80%01%07%C2%9C%00%07%C2%9C%00%07%C2%9C%00_Tp9%C2%89%C3%BC%C2%9B%C3%93%C2%BDII%C3%A6%22s%C3%92%16%C2%9C%C2%93%C3%88l)%C3%AC%C3%A1%C2%80%13%C3%A0%C2%80%13%C3%A0I-%C2%96%C3%AFK%C2%99v-%C2%9E%C2%A4o%04%C3%92z%C2%85s%12y%C3%86%2B%3Ci'%C2%91%C3%A7%C3%B1%C2%97%C3%86%1E%0E8%C3%A0%048%C3%A0%048%C3%A0%048%C3%A0%C2%80%13%C3%A0%C2%80%13%C3%A0%C2%80%13%C3%A0s%03%C3%B7%C3%A5V%C3%A0P%C3%84%5Bh%C3%AC%0B%C2%B8%2B%C3%B7%5D%C2%87%24%C3%9EBcW%C3%AEk%7Fm%C2%9A%C3%A6I%C2%B1X%C3%8C%0D%C2%87%C3%831%C3%B7%C2%B6%C2%8F~e%C3%97%C3%AB%C3%B5%C2%8Am%C3%9BY%C3%B5%C3%B4(-%3Ft%1C%C3%87R%0FM5%1Aj%180E%C2%9A%2F%2B%5B%C2%8D%C2%96r%C3%AE%7F%0B0%00%C3%9B%C3%AC%C2%9FLv%1Etf%00%00%00%00IEND%C2%AEB%60%C2%82";
var CornerNullButton = NullButtonGroup2.add("image", undefined, File.decode(CornerNullButton_imgString), {
	name: "CornerNullButton"
});

// OFFESTGROUP
// ===========
var OffestGroup = panel4.add("group", undefined, {
	name: "OffestGroup"
});
OffestGroup.orientation = "column";
OffestGroup.alignChildren = ["fill", "center"];
OffestGroup.spacing = 0;
OffestGroup.margins = 0;

// XOFFSETGROUP
// ============
var XOffsetGroup = OffestGroup.add("group", undefined, {
	name: "XOffsetGroup"
});
XOffsetGroup.orientation = "row";
XOffsetGroup.alignChildren = ["left", "center"];
XOffsetGroup.spacing = 10;
XOffsetGroup.margins = 0;

// GROUP8
// ======
var group8 = XOffsetGroup.add("group", undefined, {
	name: "group8"
});
group8.preferredSize.width = 60;
group8.orientation = "column";
group8.alignChildren = ["left", "center"];
group8.spacing = 5;
group8.margins = 0;

var statictext4 = group8.add("statictext", undefined, undefined, {
	name: "statictext4"
});
statictext4.text = "Inset";

// GROUP9
// ======
var group9 = XOffsetGroup.add("group", undefined, {
	name: "group9"
});
group9.orientation = "column";
group9.alignChildren = ["left", "center"];
group9.spacing = 5;
group9.margins = 0;

var insetSlider = group9.add("slider", undefined, undefined, undefined, undefined, {
	name: "insetSlider"
});
insetSlider.minvalue = 0;
insetSlider.maxvalue = 100;
insetSlider.value = 50;
insetSlider.preferredSize.width = 101;

// GROUP10
// =======
var group10 = XOffsetGroup.add("group", undefined, {
	name: "group10"
});
group10.orientation = "column";
group10.alignChildren = ["left", "center"];
group10.spacing = 5;
group10.margins = 0;

var insetTextbox = group10.add('edittext {properties: {name: "insetTextbox"}}');
insetTextbox.text = "0";
insetTextbox.preferredSize.width = 38;

// NULLLABELGROUP
// ==============
var NullLabelGroup = panel4.add("group", undefined, {
	name: "NullLabelGroup"
});
NullLabelGroup.orientation = "row";
NullLabelGroup.alignChildren = ["left", "center"];
NullLabelGroup.spacing = 10;
NullLabelGroup.margins = 0;

// GROUP11
// =======
var group11 = NullLabelGroup.add("group", undefined, {
	name: "group11"
});
group11.preferredSize.width = 85;
group11.orientation = "row";
group11.alignChildren = ["left", "center"];
group11.spacing = 10;
group11.margins = 0;

var statictext5 = group11.add("statictext", undefined, undefined, {
	name: "statictext5"
});
statictext5.text = "Label Color";
statictext5.preferredSize.width = 80;

// NULLLABELGROUP
// ==============
var nullLabelDropDown_array = ["None", "Red", "Yellow", "Aqua", "Pink", "Lavender", "Peach", "Sea Foam", "Blue", "Green", "Purple", "Orange", "Brown", "Fuchsia", "Cyan", "Sandstone", "Dark Green"];
var nullLabelDropDown = NullLabelGroup.add("dropdownlist", undefined, undefined, {
	name: "nullLabelDropDown",
	items: nullLabelDropDown_array
});
nullLabelDropDown.selection = 9;
nullLabelDropDown.preferredSize.width = 124;

// PANEL5
// ======
var panel5 = group4.add("panel", undefined, undefined, {
	name: "panel5"
});
panel5.text = "TEXTURE";
panel5.orientation = "column";
panel5.alignChildren = ["left", "top"];
panel5.spacing = 2;
panel5.margins = 10;
panel5.alignment = ["fill", "center"];

var AspectCheckbox = panel5.add("checkbox", undefined, undefined, {
	name: "AspectCheckbox"
});
AspectCheckbox.text = "Maintain Aspect Ratio";

var textureFitToWindowButton = panel5.add("button", undefined, undefined, {
	name: "textureFitToWindowButton"
});
textureFitToWindowButton.text = "Fit to Window";
textureFitToWindowButton.preferredSize.height = 35;
textureFitToWindowButton.alignment = ["fill", "top"];

// PANEL6
// ======
var panel6 = group4.add("panel", undefined, undefined, {
	name: "panel6"
});
panel6.text = "MATTE";
panel6.orientation = "column";
panel6.alignChildren = ["left", "top"];
panel6.spacing = 2;
panel6.margins = 10;
panel6.alignment = ["fill", "center"];

// MATTELABELGROUP
// ===============
var MatteLabelGroup = panel6.add("group", undefined, {
	name: "MatteLabelGroup"
});
MatteLabelGroup.orientation = "row";
MatteLabelGroup.alignChildren = ["left", "center"];
MatteLabelGroup.spacing = 10;
MatteLabelGroup.margins = 0;

// GROUP12
// =======
var group12 = MatteLabelGroup.add("group", undefined, {
	name: "group12"
});
group12.preferredSize.width = 85;
group12.orientation = "row";
group12.alignChildren = ["left", "center"];
group12.spacing = 10;
group12.margins = 0;

var statictext6 = group12.add("statictext", undefined, undefined, {
	name: "statictext6"
});
statictext6.text = "Label Color";
statictext6.preferredSize.width = 80;

// MATTELABELGROUP
// ===============
var matteLabelDropDown_array = ["None", "Red", "Yellow", "Aqua", "Pink", "Lavender", "Peach", "Sea Foam", "Blue", "Green", "Purple", "Orange", "Brown", "Fuchsia", "Cyan", "Sandstone", "Dark Green"];
var matteLabelDropDown = MatteLabelGroup.add("dropdownlist", undefined, undefined, {
	name: "matteLabelDropDown",
	items: matteLabelDropDown_array
});
matteLabelDropDown.selection = 2;
matteLabelDropDown.preferredSize.width = 124;

// PANEL6
// ======
var CreateMatteButton = panel6.add("button", undefined, undefined, {
	name: "CreateMatteButton"
});
CreateMatteButton.text = "Create Matte";
CreateMatteButton.preferredSize.height = 35;
CreateMatteButton.alignment = ["fill", "top"];

// PANEL7
// ======
var panel7 = group4.add("panel", undefined, undefined, {
	name: "panel7"
});
panel7.text = "GRADIENT";
panel7.orientation = "column";
panel7.alignChildren = ["left", "top"];
panel7.spacing = 2;
panel7.margins = 10;
panel7.alignment = ["fill", "center"];

// GROUP13
// =======
var group13 = panel7.add("group", undefined, {
	name: "group13"
});
group13.orientation = "row";
group13.alignChildren = ["left", "center"];
group13.spacing = 8;
group13.margins = 0;

var CreateGradientVButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%26%00%00%00%26%08%06%00%00%00%C2%A8%3D%C3%A9%C2%AE%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01dIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B1%40%C2%AC%C3%800%C2%B0%C3%A0%03%10O%04%C2%B9%C2%87%11D%C3%BC%C3%BA%C3%B5%C2%ABj%C3%BD%C3%BA%C3%B5g%C2%AE_%C2%BF%C3%BEv%20%5D%C2%A5%C2%A9%C2%A9)%1C%18%18h%C3%82%C3%86%C3%86%C3%96%C3%86%C3%AC%C3%A0%C3%A0%C2%B0~%C3%8D%C2%9A5%C2%97%06%C3%9AQ%20%C3%B0%C3%A6%C3%8D%C2%9B%C3%AF%40%C3%BCAGG%C3%87%C2%86%09%C3%88%17%18%0C%C2%8E%C2%82%01%C2%A8%5B%14%C2%98%C2%A8e%C2%A0%17%17%C2%AF0%08S%C3%8B%3C%16j%19%C3%94%26%2Cf%00%C2%A2%C2%B7%7D%C3%BB%C2%BC%C2%97%1A%C3%A6Q%25%C3%84*%04E%14E%C2%99Y8A%18%C3%84%1E%14%0E%13affM%C3%A6%13T%C2%83%C3%B1Al%C2%90%C3%98%C2%80%3BL%C2%98%C2%89%C2%85u%C3%8D%C2%97O%C3%B7_%C3%BF%C3%BD%C3%B3%1D%C2%84Al%C2%90%C3%98%C2%80%C2%A7%C2%B1%C2%9B%C2%BF%7F~%C2%AB%7C%C3%BB%C3%B2%C2%961%3B'8%C3%A1%C2%83%C3%98%C2%83%26%C2%8D%C3%91%02%C2%8C%3Al%C3%94a%C2%A3%0E%1Bu%C3%98%C2%A8%C3%83F%1D6%C3%AA%C2%B0Q%C2%87%C2%8D%3Al%C3%94a%23%C3%8Ca%C3%AA%C2%AC%C3%AC%5C%C3%AD%C3%82%C3%A2jb%C3%8C%C3%8C%5C%20%0Cb%C2%83%C3%84%06%C3%9Cao%C3%BF%C3%BD%C3%B9%1D%C3%82%C3%83%07%C3%AFW%C2%82%C3%98%20%C2%B1%01w%C3%98%C2%9B%C2%BF%7F%7F%C3%8F%C3%BD%C3%B4%1E%C3%9E3%02%C2%B1Ab%C2%83%22%C2%8Du%C2%BC%7F%03%C3%AFW%C2%82%C3%98%C2%83j%C3%AC%C2%A2%C3%AA%C3%AD%C2%AB%0B%C3%94L%C3%BCTs%C3%98%C2%B6o%C2%9F%C3%9FR%3BW%3E%00%C2%8D%C3%A4%0D%C2%96b%02%C3%AA%C2%96%0F%20%C2%87-%04%0D%2F%0E%06%C3%87%C3%81%C2%86%3A%C2%81%C3%8C%C2%89%C2%8C%20%01%C3%A8%C3%A0p%3E%10%0B%0C%C2%B0%C3%9B%1E%C2%80%02%0A%C3%A4%1E%C2%80%00%03%00%C2%9F'%C2%89%C2%84g%07%C3%A0v%00%00%00%00IEND%C2%AEB%60%C2%82";
var CreateGradientVButton = group13.add("image", undefined, File.decode(CreateGradientVButton_imgString), {
	name: "CreateGradientVButton"
});

var CreateGradientHButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%26%00%00%00%26%08%06%00%00%00%C2%A8%3D%C3%A9%C2%AE%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01pIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B1%40%C2%AC%C3%800%C2%B0%C3%A0%03%10O%04%C2%B9%C2%87%11D%C3%BC%C3%BA%C3%B5%C2%ABj%C3%BD%C3%BA%C3%B5g%C2%AE_%C2%BF%C3%BEv%20%5D%C2%A5%C2%A9%C2%A9)%1C%18%18h%C3%82%C3%86%C3%86%C3%96%C3%86%C3%AC%C3%A0%C3%A0%C2%B0~%C3%8D%C2%9A5%C2%97%06%C3%9AQ%20%C3%B0%C3%A6%C3%8D%C2%9B%C3%AF%40%C3%BCAGG%C3%87%C2%86%09%C3%88%17%18%0C%C2%8E%C2%82%01%C2%A8%5B%14%C2%98%18%06)%18u%C3%98%C2%A8%C3%83F%1D6%C3%AA%C2%B0Q%C2%87%C2%8D%3Al(8L%C2%84%C2%99%C2%99U%C2%9D%C2%95%C2%9D%C2%8B%C3%9A%C2%96%C2%82%C3%8C%04%C2%99M%C2%96%C3%83*%04E%14%C2%8F%C3%8B(9%25%C3%B0%09%C3%88P%C3%9Ba%203Af%C2%83%C3%AC%C3%80%C2%A5%C2%86%05%5D%C3%80%C2%8B%C2%8BW%C2%B8MX%C3%8C%40%C2%94%C2%99%C2%85%13%C3%84%C3%B7%C3%A4%C3%A2%C2%915f%C3%A7%14%C2%A6%C2%A6%C3%83%C3%84%C2%98%C2%99%C2%B9%C2%B8%18%C2%99Xs%C3%B9%C2%85%C2%B5%23x%C3%B8%C2%95%C2%AA%C3%9E%C2%BE%C2%BA%C2%B0%C3%AD%C3%9B%C3%A7%C2%B7C%22%C2%8Da%C2%84%18%C3%88%C3%A5%40%C2%BC%17%14%C3%8C%C3%89%7C%C2%82j%C3%9B%C2%BF%7Dy%5C%C3%B9%C3%B6%C3%A5-jZ%C3%9A.%2C%C2%AE%16%C3%82%C3%83%C2%A78%C3%B7%C3%93%C3%BB%5B%1D%C3%AF%C3%9F%C3%9C'%C3%8Aa0%00%C3%920%C3%A7%C3%93%C3%BB'%C3%82L%2C%C2%AC%C3%94%0E%C2%8D%05%C2%9F%3E%3C%C3%A9%C3%BD%C3%B0%C3%A6%C3%BE%C2%9B%C2%BF%7F%7F%13%1Db(mp%C2%A0F%7C%C2%9A%C3%89%057%7F%C3%BF%C3%BC6Z%C3%80%C2%8E%3Al%C3%94a%C2%A3%0E%1Bu%C3%98%C2%A8%C3%83F%1DF%C2%B9%C3%83%1E%C2%80F%C3%B2%06%C2%8B%C2%83%C2%A0n%C3%B9%00r%C3%98B%C3%90%C3%B0%C3%A2%60p%1Cl%C2%A8%13%C3%88%C2%9C%C3%88%08%12%C2%80%0E%0E%C3%A7%03%C2%B1%C3%80%00%C2%BB%C3%AD%01(%C2%A0%40%C3%AE%01%080%00%C2%B1%0D%7D%19%C2%87%19%C3%BBy%00%00%00%00IEND%C2%AEB%60%C2%82";
var CreateGradientHButton = group13.add("image", undefined, File.decode(CreateGradientHButton_imgString), {
	name: "CreateGradientHButton"
});

var CreateGradientD1Button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%26%00%00%00%26%08%06%00%00%00%C2%A8%3D%C3%A9%C2%AE%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01gIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B1%40%C2%AC%C3%800%C2%B0%C3%A0%03%10O%04%C2%B9%C2%87%11D%C3%BC%C3%BA%C3%B5%C2%ABj%C3%BD%C3%BA%C3%B5g%C2%AE_%C2%BF%C3%BEv%20%5D%C2%A5%C2%A9%C2%A9)%1C%18%18h%C3%82%C3%86%C3%86%C3%96%C3%86%C3%AC%C3%A0%C3%A0%C2%B0~%C3%8D%C2%9A5%C2%97%06%C3%9AQ%20%C3%B0%C3%A6%C3%8D%C2%9B%C3%AF%40%C3%BCAGG%C3%87%C2%86%09%C3%88%17%18%0C%C2%8E%C2%82%01%C2%A8%5B%14%C2%98%18%06)%18u%C3%98%C2%A8%C3%83%C3%88%05%5E%5C%C2%BC%C3%82%20LH%1D%0B%3D%1CS!(%C2%A2%C3%A8%C3%84%C3%89%23%C2%A1%C3%8D%C3%86%0EvP%C3%AA%C2%ABg%C3%87%07E%C2%88i%C2%B2%C2%B1%C3%B3%C3%83%1C%05%02%C3%9B%C2%BE%7D~%3B%C3%A8%C2%A2%C3%B2%C3%AA%C2%AF%C2%9FD%C2%95%C2%994%C2%8F%C3%8A%C2%85%C3%A2%C3%92%06.%C2%9C%3C2%7B%C2%BE%7Fy%02.%40%7F%C3%BD%C3%BC8%C3%A0%0ECvT%C3%BC%C3%8B%C2%A7%17%06E%C2%AE%C2%A4%C3%84Q4s%18%C2%A5%C2%8E%C2%A2%C2%89%C3%83%C2%A8%C3%A1(%C2%AA%3B%C2%8CZ%C2%8E%C2%A2%C2%AA%C3%83%C2%A8%C3%A9(%C2%AA9%C2%8C%C3%9A%C2%8E%C2%A2%C2%8A%C3%83h%C3%A1(%C2%8A%1DF%2BGQ%C3%A40Z%3A%C2%8Al%C2%87%C3%91%C3%9AQd9%C2%8C%1E%C2%8E%22%C2%BA%C2%AE%04%C2%B5%C2%A7%40M%17%10%C2%9B%1E%C2%8E%22%C3%9Aa%C3%88%C2%8D%3Cz8%C2%8A%C3%A8%C2%A8Dn%C3%A4%0D%C2%9A6%3Fr%C3%BB%1C%C3%94%C3%88%23%C2%B6%3DE%C2%97%C2%A8%04%C2%B5%C3%91%C2%89i%0E%C3%93%C3%95a%C3%B4v%C3%90h%C2%BFr%C3%94a%C3%B4t%C3%98%03%C3%90H%C3%9E%60q%10%C3%94-%1F%40%0E%5B%08%1A%5E%1C%0C%C2%8E%C2%83%0Du%02%C2%99%13%19A%02%C3%90%C3%81%C3%A1%7C%20%16%18%60%C2%B7%3D%00%05%14%C3%88%3D%00%01%06%00%C2%AE%11%C3%90K%C3%A2%C2%8B%C2%8FG%00%00%00%00IEND%C2%AEB%60%C2%82";
var CreateGradientD1Button = group13.add("image", undefined, File.decode(CreateGradientD1Button_imgString), {
	name: "CreateGradientD1Button"
});

var CreateGradientD2Button_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%26%00%00%00%26%08%06%00%00%00%C2%A8%3D%C3%A9%C2%AE%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%7DIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B1%40%C2%AC%C3%800%C2%B0%C3%A0%03%10O%04%C2%B9%C2%87%11D%C3%BC%C3%BA%C3%B5%C2%ABj%C3%BD%C3%BA%C3%B5g%C2%AE_%C2%BF%C3%BEv%20%5D%C2%A5%C2%A9%C2%A9)%1C%18%18h%C3%82%C3%86%C3%86%C3%96%C3%86%C3%AC%C3%A0%C3%A0%C2%B0~%C3%8D%C2%9A5%C2%97%06%C3%9AQ%20%C3%B0%C3%A6%C3%8D%C2%9B%C3%AF%40%C3%BCAGG%C3%87%C2%86%09%C3%88%17%18%0C%C2%8E%C2%82%01%C2%A8%5B%14%C2%98%18%06)%18u%C3%98%C3%88q%C2%98%17%17%C2%AF0%08%C3%93%C3%9Ba%2C%C3%84(%C2%9A-%26e%09%C2%A2%C2%AF%C3%BE%C3%BA%C3%B9v%C3%9F%C3%B7%2F%2F%3A%C3%9E%C2%BF%C2%B9%3F%C3%A0%0E%C3%9B%C3%B6%C3%AD3%C2%BC(%C3%91fc%17~%C3%BE%C3%B7%C3%B7%C3%B7A%C2%93%C3%86%40!5(%C2%A3%12%14%7D%C2%B0%C2%90r%C3%A1%C3%A4%C2%91Y(.%C3%8D%10%C3%BF%C3%B2%C3%A9%C2%85%01w%18r%C2%9A%029%C2%8A%1E%C2%8E%23%C2%B9%C2%B8%009f%C3%8F%C3%B7%2FO%C2%A0%C2%8E3%18T%C3%A5%18%3D%1CGv%01Kk%C3%87QT%C3%B2%C3%93%C3%92q%14WI%C2%B4r%1CU%C3%AAJZ8%C2%8Ej%C2%958%C2%B5%1DG%C3%95%C3%96%055%1DG%C3%B5f%0F%C2%B5%1CG%C2%93%C3%B6%185%1CG%C2%B3%C2%86%22%C2%A5%C2%8Eca%C2%A0!%009%0E%C2%B9n%05%C3%B7%C2%82~%C3%BD%C3%BCHL%7B%C2%8E%C3%A6Mk%C3%A4%C2%90%03a'N%1E%C2%89A%C3%99%C3%A6%0756%07%C2%8D%C3%83%40%C3%91%C2%87%C3%9C%C3%98%24%C2%A6%0F%C3%81B%0F%C2%87%C2%81%C3%92%14%2C%5D%11%C3%9B%C2%B1a%C2%A1wT%22%C3%B7!F%3B%C2%BC%C2%A3%0E%1Bh%C2%87%3D%00%C2%8D%C3%A4%0D%16%07A%C3%9D%C3%B2%01%C3%A4%C2%B0%C2%85%C2%A0%C3%A1%C3%85%C3%81%C3%A08%C3%98P'%C2%909%C2%91%11%24%00%1D%1C%C3%8E%07b%C2%81%01v%C3%9B%03P%40%C2%81%C3%9C%03%10%60%00%3Bj%C3%A3%60%C2%99%40%C3%8B3%00%00%00%00IEND%C2%AEB%60%C2%82";
var CreateGradientD2Button = group13.add("image", undefined, File.decode(CreateGradientD2Button_imgString), {
	name: "CreateGradientD2Button"
});

var CreateGradientRButton_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%26%00%00%00%26%08%06%00%00%00%C2%A8%3D%C3%A9%C2%AE%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%02OIDATx%C3%9Abd%00%C2%82%06%20%00R%C3%B1%40%C2%AC%C3%800%C2%B0%C3%A0%03%10O%04%C2%B9%C2%87%11D%C3%BC%C3%BA%C3%B5%C2%ABj%C3%BD%C3%BA%C3%B5g%C2%AE_%C2%BF%C3%BEv%20%5D%C2%A5%C2%A9%C2%A9)%1C%18%18h%C3%82%C3%86%C3%86%C3%96%C3%86%C3%AC%C3%A0%C3%A0%C2%B0~%C3%8D%C2%9A5%C2%97%06%C3%9AQ%20%C3%B0%C3%A6%C3%8D%C2%9B%C3%AF%40%C3%BCAGG%C3%87%C2%86%09%C3%88%17%18%0C%C2%8E%C2%82%01%C2%A8%5B%14%C2%98%18%06)%18u%C3%98%C2%B0q%18%0B%25%C2%9A-9%C2%B8%C3%B8%C3%BC%C2%B8y%25%C2%8C%C3%999%C2%85%C2%91%C3%85%C3%8F%C3%BE%C3%BC%C3%BEv%C3%93%C3%97%C3%8F%2F%C2%8E%C3%BF%C3%B8%C3%B6%C2%89%C2%AE%0ESge%C3%A7%C2%9A%2C*%C2%A9%C2%AF%C3%8D%C3%86.%C2%8CM%1E%24%1E%C3%87%2B%C2%A0v%C3%B5%C3%97%C3%8F%C2%B7Q%2F%1F%C2%9Fy%C3%B3%C3%B7%C3%AFo%C2%9AGe%14%2F%C2%BF%C3%84%16)9%5B%5C%C2%8EBw%C3%A0%1E)%05%3B%11ffV%C2%9A%3A%0C%14R%C3%9D%C3%82%12%26%5C%C2%8CL%18%16%3D%C3%B8%C3%B3%C3%BB%13%08%C2%A3%C2%8B%C2%8B2%C2%B3p%C3%B6%C2%8AHh%C3%934*o%C3%BE%C3%BE%C3%B9m%C3%8F%C3%B7%2FO%5C8yd%40%C3%BCo%C3%BF%C3%BF%C3%BD%5E%C3%B3%C3%A5%C3%93%C3%BD%C3%9E%0Fo%C3%AE%C3%83%C2%A2%0B%C3%A4%C3%B8vaq-s%0EN%09%C2%98%3E%C2%A8%C3%BA%0B4%C2%8D%C3%8A%C3%B8%C2%97O%2F%C2%80%1C%07%0A%1D%C2%9Fg%C2%8F%0EW%C2%BE%7Dy%0B9%0D%C2%81%1C%1F%C3%B4%C3%A2%C3%91%C2%99%C3%97%7F%C3%BF%7CG%C3%96%C3%A7%C3%85%C3%85%2BL%C3%B3%C3%84%0Fr%1C(%C3%9D%C3%A0K%C3%94%C2%AF%C3%BE%C3%BE%C3%BD%06%C2%8AF%C2%BA%C2%97c%C2%84r%C2%9A%1833%C3%97%C2%A0%2B%60%17%C2%8AK%1B%C2%A0%C2%87%C3%96%C2%B6o%C2%9F%C3%9F%C3%92%3C*%C2%91%01(J%C3%8D%C3%98%C2%B9%C3%B8%40l%5BN.aO.%1EYtG%C2%AD%C3%BF%C3%BA%C3%A9%3E%5DK~%10%009j%C2%B6%C2%98%C2%94%25.yP%26ix%C3%B7%C3%AA%C3%96%C2%A0%C2%AA%2BA!%C3%A5%C3%BF%C3%BC%C3%A1qrJ~%C2%8AC%C3%AC%C3%94O%C3%94%C3%BA%10T%0D%C3%AD%C3%BB%C3%BE%C3%A5%C3%85%C3%BA%2F%C2%9F_%C2%82%C2%8A%C2%8E%01%C2%A9%C3%84%C2%B1%C3%A5%C3%8E%C3%9C%C3%97%C3%8F%2FR%C3%A2%20%C2%AAF%25rUD%0DGQ%25%C3%84%40%C2%A0%C3%A4%C3%8D%C2%8B%0B%C2%82L%C2%A4W%C3%944w%18%25%C3%AD.%C2%9A9%2C%C2%8B_HV%C2%96%C2%85%15%5En%3D%C3%BE%C3%B3%C3%BB%C3%BB%C2%B4%C2%8F%C3%AF%1E%0F%C2%B8%C3%83%02%C2%B8%C3%B9d%C2%90%C3%9Bf%C2%A0%5CI%0D%C2%87%C2%8DvF%C3%A8%1E%C2%95%C2%B7~%C3%BF%C3%BC%C2%84%C2%8F%3F%60%0E%C3%8By%C3%BD%C3%BC%C3%AAh%C2%87w%C3%94aC%C3%95a%0F%40%23y%C2%83%C3%85AP%C2%B7%7C%009l!hxq08%0E6%C3%94%09dNd%04%09%40%07%C2%87%C3%B3%C2%81X%60%C2%80%C3%9D%C3%B6%00%14P%20%C3%B7%00%04%18%00%3B%C3%84%08u%C2%B9w72%00%00%00%00IEND%C2%AEB%60%C2%82";
var CreateGradientRButton = group13.add("image", undefined, File.decode(CreateGradientRButton_imgString), {
	name: "CreateGradientRButton"
});

// TAB3
// ====
var tab3 = tpanel1.add("tab", undefined, undefined, {
	name: "tab3"
});
tab3.text = "ABOUT";
tab3.orientation = "column";
tab3.alignChildren = ["left", "top"];
tab3.spacing = 10;
tab3.margins = [0, 10, 0, 0];

// TPANEL1
// =======
tpanel1.selection = tab1;

// GROUP14
// =======
var group14 = tab3.add("group", undefined, {
	name: "group14"
});
group14.orientation = "column";
group14.alignChildren = ["left", "center"];
group14.spacing = 10;
group14.margins = [0, 0, 0, 0];

var image1_imgString = "%C3%BF%C3%98%C3%BF%C3%A1%00%18Exif%00%00II*%00%08%00%00%00%00%00%00%00%00%00%00%00%C3%BF%C3%AC%00%11Ducky%00%01%00%04%00%00%00%3C%00%00%C3%BF%C3%A1%031http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%209.1-c002%2079.a6a63968a%2C%202024%2F03%2F06-11%3A52%3A05%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2025.9%20(Macintosh)%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A79385A792D7311EFA233A0EB1F6AEE82%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A79385A7A2D7311EFA233A0EB1F6AEE82%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A79385A772D7311EFA233A0EB1F6AEE82%22%20stRef%3AdocumentID%3D%22xmp.did%3A79385A782D7311EFA233A0EB1F6AEE82%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%C3%BF%C3%A2%0CXICC_PROFILE%00%01%01%00%00%0CHLino%02%10%00%00mntrRGB%20XYZ%20%07%C3%8E%00%02%00%09%00%06%001%00%00acspMSFT%00%00%00%00IEC%20sRGB%00%00%00%00%00%00%00%00%00%00%00%00%00%00%C3%B6%C3%96%00%01%00%00%00%00%C3%93-HP%20%20%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%11cprt%00%00%01P%00%00%003desc%00%00%01%C2%84%00%00%00lwtpt%00%00%01%C3%B0%00%00%00%14bkpt%00%00%02%04%00%00%00%14rXYZ%00%00%02%18%00%00%00%14gXYZ%00%00%02%2C%00%00%00%14bXYZ%00%00%02%40%00%00%00%14dmnd%00%00%02T%00%00%00pdmdd%00%00%02%C3%84%00%00%00%C2%88vued%00%00%03L%00%00%00%C2%86view%00%00%03%C3%94%00%00%00%24lumi%00%00%03%C3%B8%00%00%00%14meas%00%00%04%0C%00%00%00%24tech%00%00%040%00%00%00%0CrTRC%00%00%04%3C%00%00%08%0CgTRC%00%00%04%3C%00%00%08%0CbTRC%00%00%04%3C%00%00%08%0Ctext%00%00%00%00Copyright%20(c)%201998%20Hewlett-Packard%20Company%00%00desc%00%00%00%00%00%00%00%12sRGB%20IEC61966-2.1%00%00%00%00%00%00%00%00%00%00%00%12sRGB%20IEC61966-2.1%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00XYZ%20%00%00%00%00%00%00%C3%B3Q%00%01%00%00%00%01%16%C3%8CXYZ%20%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00XYZ%20%00%00%00%00%00%00o%C2%A2%00%008%C3%B5%00%00%03%C2%90XYZ%20%00%00%00%00%00%00b%C2%99%00%00%C2%B7%C2%85%00%00%18%C3%9AXYZ%20%00%00%00%00%00%00%24%C2%A0%00%00%0F%C2%84%00%00%C2%B6%C3%8Fdesc%00%00%00%00%00%00%00%16IEC%20http%3A%2F%2Fwww.iec.ch%00%00%00%00%00%00%00%00%00%00%00%16IEC%20http%3A%2F%2Fwww.iec.ch%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00desc%00%00%00%00%00%00%00.IEC%2061966-2.1%20Default%20RGB%20colour%20space%20-%20sRGB%00%00%00%00%00%00%00%00%00%00%00.IEC%2061966-2.1%20Default%20RGB%20colour%20space%20-%20sRGB%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00desc%00%00%00%00%00%00%00%2CReference%20Viewing%20Condition%20in%20IEC61966-2.1%00%00%00%00%00%00%00%00%00%00%00%2CReference%20Viewing%20Condition%20in%20IEC61966-2.1%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00view%00%00%00%00%00%13%C2%A4%C3%BE%00%14_.%00%10%C3%8F%14%00%03%C3%AD%C3%8C%00%04%13%0B%00%03%5C%C2%9E%00%00%00%01XYZ%20%00%00%00%00%00L%09V%00P%00%00%00W%1F%C3%A7meas%00%00%00%00%00%00%00%01%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%02%C2%8F%00%00%00%02sig%20%00%00%00%00CRT%20curv%00%00%00%00%00%00%04%00%00%00%00%05%00%0A%00%0F%00%14%00%19%00%1E%00%23%00(%00-%002%007%00%3B%00%40%00E%00J%00O%00T%00Y%00%5E%00c%00h%00m%00r%00w%00%7C%00%C2%81%00%C2%86%00%C2%8B%00%C2%90%00%C2%95%00%C2%9A%00%C2%9F%00%C2%A4%00%C2%A9%00%C2%AE%00%C2%B2%00%C2%B7%00%C2%BC%00%C3%81%00%C3%86%00%C3%8B%00%C3%90%00%C3%95%00%C3%9B%00%C3%A0%00%C3%A5%00%C3%AB%00%C3%B0%00%C3%B6%00%C3%BB%01%01%01%07%01%0D%01%13%01%19%01%1F%01%25%01%2B%012%018%01%3E%01E%01L%01R%01Y%01%60%01g%01n%01u%01%7C%01%C2%83%01%C2%8B%01%C2%92%01%C2%9A%01%C2%A1%01%C2%A9%01%C2%B1%01%C2%B9%01%C3%81%01%C3%89%01%C3%91%01%C3%99%01%C3%A1%01%C3%A9%01%C3%B2%01%C3%BA%02%03%02%0C%02%14%02%1D%02%26%02%2F%028%02A%02K%02T%02%5D%02g%02q%02z%02%C2%84%02%C2%8E%02%C2%98%02%C2%A2%02%C2%AC%02%C2%B6%02%C3%81%02%C3%8B%02%C3%95%02%C3%A0%02%C3%AB%02%C3%B5%03%00%03%0B%03%16%03!%03-%038%03C%03O%03Z%03f%03r%03~%03%C2%8A%03%C2%96%03%C2%A2%03%C2%AE%03%C2%BA%03%C3%87%03%C3%93%03%C3%A0%03%C3%AC%03%C3%B9%04%06%04%13%04%20%04-%04%3B%04H%04U%04c%04q%04~%04%C2%8C%04%C2%9A%04%C2%A8%04%C2%B6%04%C3%84%04%C3%93%04%C3%A1%04%C3%B0%04%C3%BE%05%0D%05%1C%05%2B%05%3A%05I%05X%05g%05w%05%C2%86%05%C2%96%05%C2%A6%05%C2%B5%05%C3%85%05%C3%95%05%C3%A5%05%C3%B6%06%06%06%16%06'%067%06H%06Y%06j%06%7B%06%C2%8C%06%C2%9D%06%C2%AF%06%C3%80%06%C3%91%06%C3%A3%06%C3%B5%07%07%07%19%07%2B%07%3D%07O%07a%07t%07%C2%86%07%C2%99%07%C2%AC%07%C2%BF%07%C3%92%07%C3%A5%07%C3%B8%08%0B%08%1F%082%08F%08Z%08n%08%C2%82%08%C2%96%08%C2%AA%08%C2%BE%08%C3%92%08%C3%A7%08%C3%BB%09%10%09%25%09%3A%09O%09d%09y%09%C2%8F%09%C2%A4%09%C2%BA%09%C3%8F%09%C3%A5%09%C3%BB%0A%11%0A'%0A%3D%0AT%0Aj%0A%C2%81%0A%C2%98%0A%C2%AE%0A%C3%85%0A%C3%9C%0A%C3%B3%0B%0B%0B%22%0B9%0BQ%0Bi%0B%C2%80%0B%C2%98%0B%C2%B0%0B%C3%88%0B%C3%A1%0B%C3%B9%0C%12%0C*%0CC%0C%5C%0Cu%0C%C2%8E%0C%C2%A7%0C%C3%80%0C%C3%99%0C%C3%B3%0D%0D%0D%26%0D%40%0DZ%0Dt%0D%C2%8E%0D%C2%A9%0D%C3%83%0D%C3%9E%0D%C3%B8%0E%13%0E.%0EI%0Ed%0E%7F%0E%C2%9B%0E%C2%B6%0E%C3%92%0E%C3%AE%0F%09%0F%25%0FA%0F%5E%0Fz%0F%C2%96%0F%C2%B3%0F%C3%8F%0F%C3%AC%10%09%10%26%10C%10a%10~%10%C2%9B%10%C2%B9%10%C3%97%10%C3%B5%11%13%111%11O%11m%11%C2%8C%11%C2%AA%11%C3%89%11%C3%A8%12%07%12%26%12E%12d%12%C2%84%12%C2%A3%12%C3%83%12%C3%A3%13%03%13%23%13C%13c%13%C2%83%13%C2%A4%13%C3%85%13%C3%A5%14%06%14'%14I%14j%14%C2%8B%14%C2%AD%14%C3%8E%14%C3%B0%15%12%154%15V%15x%15%C2%9B%15%C2%BD%15%C3%A0%16%03%16%26%16I%16l%16%C2%8F%16%C2%B2%16%C3%96%16%C3%BA%17%1D%17A%17e%17%C2%89%17%C2%AE%17%C3%92%17%C3%B7%18%1B%18%40%18e%18%C2%8A%18%C2%AF%18%C3%95%18%C3%BA%19%20%19E%19k%19%C2%91%19%C2%B7%19%C3%9D%1A%04%1A*%1AQ%1Aw%1A%C2%9E%1A%C3%85%1A%C3%AC%1B%14%1B%3B%1Bc%1B%C2%8A%1B%C2%B2%1B%C3%9A%1C%02%1C*%1CR%1C%7B%1C%C2%A3%1C%C3%8C%1C%C3%B5%1D%1E%1DG%1Dp%1D%C2%99%1D%C3%83%1D%C3%AC%1E%16%1E%40%1Ej%1E%C2%94%1E%C2%BE%1E%C3%A9%1F%13%1F%3E%1Fi%1F%C2%94%1F%C2%BF%1F%C3%AA%20%15%20A%20l%20%C2%98%20%C3%84%20%C3%B0!%1C!H!u!%C2%A1!%C3%8E!%C3%BB%22'%22U%22%C2%82%22%C2%AF%22%C3%9D%23%0A%238%23f%23%C2%94%23%C3%82%23%C3%B0%24%1F%24M%24%7C%24%C2%AB%24%C3%9A%25%09%258%25h%25%C2%97%25%C3%87%25%C3%B7%26'%26W%26%C2%87%26%C2%B7%26%C3%A8'%18'I'z'%C2%AB'%C3%9C(%0D(%3F(q(%C2%A2(%C3%94)%06)8)k)%C2%9D)%C3%90*%02*5*h*%C2%9B*%C3%8F%2B%02%2B6%2Bi%2B%C2%9D%2B%C3%91%2C%05%2C9%2Cn%2C%C2%A2%2C%C3%97-%0C-A-v-%C2%AB-%C3%A1.%16.L.%C2%82.%C2%B7.%C3%AE%2F%24%2FZ%2F%C2%91%2F%C3%87%2F%C3%BE050l0%C2%A40%C3%9B1%121J1%C2%821%C2%BA1%C3%B22*2c2%C2%9B2%C3%943%0D3F3%7F3%C2%B83%C3%B14%2B4e4%C2%9E4%C3%985%135M5%C2%875%C3%825%C3%BD676r6%C2%AE6%C3%A97%247%607%C2%9C7%C3%978%148P8%C2%8C8%C3%889%059B9%7F9%C2%BC9%C3%B9%3A6%3At%3A%C2%B2%3A%C3%AF%3B-%3Bk%3B%C2%AA%3B%C3%A8%3C'%3Ce%3C%C2%A4%3C%C3%A3%3D%22%3Da%3D%C2%A1%3D%C3%A0%3E%20%3E%60%3E%C2%A0%3E%C3%A0%3F!%3Fa%3F%C2%A2%3F%C3%A2%40%23%40d%40%C2%A6%40%C3%A7A)AjA%C2%ACA%C3%AEB0BrB%C2%B5B%C3%B7C%3AC%7DC%C3%80D%03DGD%C2%8AD%C3%8EE%12EUE%C2%9AE%C3%9EF%22FgF%C2%ABF%C3%B0G5G%7BG%C3%80H%05HKH%C2%91H%C3%97I%1DIcI%C2%A9I%C3%B0J7J%7DJ%C3%84K%0CKSK%C2%9AK%C3%A2L*LrL%C2%BAM%02MJM%C2%93M%C3%9CN%25NnN%C2%B7O%00OIO%C2%93O%C3%9DP'PqP%C2%BBQ%06QPQ%C2%9BQ%C3%A6R1R%7CR%C3%87S%13S_S%C2%AAS%C3%B6TBT%C2%8FT%C3%9BU(UuU%C3%82V%0FV%5CV%C2%A9V%C3%B7WDW%C2%92W%C3%A0X%2FX%7DX%C3%8BY%1AYiY%C2%B8Z%07ZVZ%C2%A6Z%C3%B5%5BE%5B%C2%95%5B%C3%A5%5C5%5C%C2%86%5C%C3%96%5D'%5Dx%5D%C3%89%5E%1A%5El%5E%C2%BD_%0F_a_%C2%B3%60%05%60W%60%C2%AA%60%C3%BCaOa%C2%A2a%C3%B5bIb%C2%9Cb%C3%B0cCc%C2%97c%C3%ABd%40d%C2%94d%C3%A9e%3De%C2%92e%C3%A7f%3Df%C2%92f%C3%A8g%3Dg%C2%93g%C3%A9h%3Fh%C2%96h%C3%ACiCi%C2%9Ai%C3%B1jHj%C2%9Fj%C3%B7kOk%C2%A7k%C3%BFlWl%C2%AFm%08m%60m%C2%B9n%12nkn%C3%84o%1Eoxo%C3%91p%2Bp%C2%86p%C3%A0q%3Aq%C2%95q%C3%B0rKr%C2%A6s%01s%5Ds%C2%B8t%14tpt%C3%8Cu(u%C2%85u%C3%A1v%3Ev%C2%9Bv%C3%B8wVw%C2%B3x%11xnx%C3%8Cy*y%C2%89y%C3%A7zFz%C2%A5%7B%04%7Bc%7B%C3%82%7C!%7C%C2%81%7C%C3%A1%7DA%7D%C2%A1~%01~b~%C3%82%7F%23%7F%C2%84%7F%C3%A5%C2%80G%C2%80%C2%A8%C2%81%0A%C2%81k%C2%81%C3%8D%C2%820%C2%82%C2%92%C2%82%C3%B4%C2%83W%C2%83%C2%BA%C2%84%1D%C2%84%C2%80%C2%84%C3%A3%C2%85G%C2%85%C2%AB%C2%86%0E%C2%86r%C2%86%C3%97%C2%87%3B%C2%87%C2%9F%C2%88%04%C2%88i%C2%88%C3%8E%C2%893%C2%89%C2%99%C2%89%C3%BE%C2%8Ad%C2%8A%C3%8A%C2%8B0%C2%8B%C2%96%C2%8B%C3%BC%C2%8Cc%C2%8C%C3%8A%C2%8D1%C2%8D%C2%98%C2%8D%C3%BF%C2%8Ef%C2%8E%C3%8E%C2%8F6%C2%8F%C2%9E%C2%90%06%C2%90n%C2%90%C3%96%C2%91%3F%C2%91%C2%A8%C2%92%11%C2%92z%C2%92%C3%A3%C2%93M%C2%93%C2%B6%C2%94%20%C2%94%C2%8A%C2%94%C3%B4%C2%95_%C2%95%C3%89%C2%964%C2%96%C2%9F%C2%97%0A%C2%97u%C2%97%C3%A0%C2%98L%C2%98%C2%B8%C2%99%24%C2%99%C2%90%C2%99%C3%BC%C2%9Ah%C2%9A%C3%95%C2%9BB%C2%9B%C2%AF%C2%9C%1C%C2%9C%C2%89%C2%9C%C3%B7%C2%9Dd%C2%9D%C3%92%C2%9E%40%C2%9E%C2%AE%C2%9F%1D%C2%9F%C2%8B%C2%9F%C3%BA%C2%A0i%C2%A0%C3%98%C2%A1G%C2%A1%C2%B6%C2%A2%26%C2%A2%C2%96%C2%A3%06%C2%A3v%C2%A3%C3%A6%C2%A4V%C2%A4%C3%87%C2%A58%C2%A5%C2%A9%C2%A6%1A%C2%A6%C2%8B%C2%A6%C3%BD%C2%A7n%C2%A7%C3%A0%C2%A8R%C2%A8%C3%84%C2%A97%C2%A9%C2%A9%C2%AA%1C%C2%AA%C2%8F%C2%AB%02%C2%ABu%C2%AB%C3%A9%C2%AC%5C%C2%AC%C3%90%C2%ADD%C2%AD%C2%B8%C2%AE-%C2%AE%C2%A1%C2%AF%16%C2%AF%C2%8B%C2%B0%00%C2%B0u%C2%B0%C3%AA%C2%B1%60%C2%B1%C3%96%C2%B2K%C2%B2%C3%82%C2%B38%C2%B3%C2%AE%C2%B4%25%C2%B4%C2%9C%C2%B5%13%C2%B5%C2%8A%C2%B6%01%C2%B6y%C2%B6%C3%B0%C2%B7h%C2%B7%C3%A0%C2%B8Y%C2%B8%C3%91%C2%B9J%C2%B9%C3%82%C2%BA%3B%C2%BA%C2%B5%C2%BB.%C2%BB%C2%A7%C2%BC!%C2%BC%C2%9B%C2%BD%15%C2%BD%C2%8F%C2%BE%0A%C2%BE%C2%84%C2%BE%C3%BF%C2%BFz%C2%BF%C3%B5%C3%80p%C3%80%C3%AC%C3%81g%C3%81%C3%A3%C3%82_%C3%82%C3%9B%C3%83X%C3%83%C3%94%C3%84Q%C3%84%C3%8E%C3%85K%C3%85%C3%88%C3%86F%C3%86%C3%83%C3%87A%C3%87%C2%BF%C3%88%3D%C3%88%C2%BC%C3%89%3A%C3%89%C2%B9%C3%8A8%C3%8A%C2%B7%C3%8B6%C3%8B%C2%B6%C3%8C5%C3%8C%C2%B5%C3%8D5%C3%8D%C2%B5%C3%8E6%C3%8E%C2%B6%C3%8F7%C3%8F%C2%B8%C3%909%C3%90%C2%BA%C3%91%3C%C3%91%C2%BE%C3%92%3F%C3%92%C3%81%C3%93D%C3%93%C3%86%C3%94I%C3%94%C3%8B%C3%95N%C3%95%C3%91%C3%96U%C3%96%C3%98%C3%97%5C%C3%97%C3%A0%C3%98d%C3%98%C3%A8%C3%99l%C3%99%C3%B1%C3%9Av%C3%9A%C3%BB%C3%9B%C2%80%C3%9C%05%C3%9C%C2%8A%C3%9D%10%C3%9D%C2%96%C3%9E%1C%C3%9E%C2%A2%C3%9F)%C3%9F%C2%AF%C3%A06%C3%A0%C2%BD%C3%A1D%C3%A1%C3%8C%C3%A2S%C3%A2%C3%9B%C3%A3c%C3%A3%C3%AB%C3%A4s%C3%A4%C3%BC%C3%A5%C2%84%C3%A6%0D%C3%A6%C2%96%C3%A7%1F%C3%A7%C2%A9%C3%A82%C3%A8%C2%BC%C3%A9F%C3%A9%C3%90%C3%AA%5B%C3%AA%C3%A5%C3%ABp%C3%AB%C3%BB%C3%AC%C2%86%C3%AD%11%C3%AD%C2%9C%C3%AE(%C3%AE%C2%B4%C3%AF%40%C3%AF%C3%8C%C3%B0X%C3%B0%C3%A5%C3%B1r%C3%B1%C3%BF%C3%B2%C2%8C%C3%B3%19%C3%B3%C2%A7%C3%B44%C3%B4%C3%82%C3%B5P%C3%B5%C3%9E%C3%B6m%C3%B6%C3%BB%C3%B7%C2%8A%C3%B8%19%C3%B8%C2%A8%C3%B98%C3%B9%C3%87%C3%BAW%C3%BA%C3%A7%C3%BBw%C3%BC%07%C3%BC%C2%98%C3%BD)%C3%BD%C2%BA%C3%BEK%C3%BE%C3%9C%C3%BFm%C3%BF%C3%BF%C3%BF%C3%AE%00%0EAdobe%00d%C3%80%00%00%00%01%C3%BF%C3%9B%00%C2%84%00%06%04%04%04%05%04%06%05%05%06%09%06%05%06%09%0B%08%06%06%08%0B%0C%0A%0A%0B%0A%0A%0C%10%0C%0C%0C%0C%0C%0C%10%0C%0E%0F%10%0F%0E%0C%13%13%14%14%13%13%1C%1B%1B%1B%1C%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%01%07%07%07%0D%0C%0D%18%10%10%18%1A%15%11%15%1A%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%1F%C3%BF%C3%80%00%11%08%00o%00%C3%9E%03%01%11%00%02%11%01%03%11%01%C3%BF%C3%84%00%C2%B1%00%01%00%03%01%01%01%01%01%00%00%00%00%00%00%00%00%00%05%06%07%04%03%08%02%01%01%01%00%02%03%01%01%00%00%00%00%00%00%00%00%00%00%00%04%05%01%03%06%07%02%10%00%00%05%03%02%03%01%0B%09%06%04%07%01%00%00%00%00%01%02%03%04%11%05%06%12%07!1%13AQa%C3%91%222%C2%B3%14%15u7%08q%C2%81B%C2%92%C2%93T6V%17%C2%91%C3%81R%C2%B2%23t%C2%B1r3%16bS%C2%84%C2%A4%C2%B4%C3%A4f%18%11%01%00%01%03%02%01%07%08%09%05%01%00%00%00%00%00%00%01%02%03%04%11%05!1Qaq%122%06%C3%B0A%C2%81%C2%B1%C3%81r34%C2%91%C3%91%C3%A1%22BR%C2%B2%13s%C2%A1%C2%82%C2%92%C3%82C%14%C3%BF%C3%9A%00%0C%03%01%00%02%11%03%11%00%3F%00%C3%B9%C3%AC%18%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00zE%C2%8C%C3%BC%C2%A9-E%C2%8E%C2%83rC%C3%ABKL%C2%B6%C2%9EjZ%C3%8FJR_)%C2%98%0Bo%C3%A8%C3%A6%C3%A7%C3%BE%5D%C2%97%C3%B5S%C3%A1%00%C3%BD%1C%C3%9C%C3%BF%00%C3%8B%C2%B2%C3%BE%C2%AA%7C%20%1F%C2%A3%C2%9B%C2%9F%C3%B9v_%C3%95O%C2%84%03%C3%B4ss%C3%BF%00.%C3%8B%C3%BA%C2%A9%C3%B0%C2%80~%C2%8En%7F%C3%A5%C3%99%7FU%3E%10%0F%C3%91%C3%8D%C3%8F%C3%BC%C2%BB%2F%C3%AA%C2%A7%C3%82%01%C3%BA9%C2%B9%C3%BF%00%C2%97e%C3%BDT%C3%B8%40%3FG7%3F%C3%B2%C3%AC%C2%BF%C2%AA%C2%9F%08%0A%C2%AD%C3%82%04%C3%8Bt%C3%97%C3%A0%C3%8DiLK%C2%8C%C2%B3i%C3%B6W%C3%A5!i%3A%1AO%C3%A4%01%C3%A0%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%02c%0B%C3%BCcb%C3%B6%C2%8CO%3E%C2%80%1BN%C3%BD%C3%AEVq%C2%8D%C3%A7%0D%C3%9B%C3%AC%C2%97W!C8L%C2%BAl%C2%A5%0D(%C2%B5%C2%A9n%11%C2%AA%C2%ABB%C2%8F%C3%A8%C2%902%C2%A4%C3%9A%C2%B7Ox%C2%AE)R%C3%9A%C3%88%1Cm%C2%A4%C3%B0%C3%AA-%C2%A6hg%C3%9C*6cE%C3%AC%C2%8Am%C3%B2%C3%B2%C2%AE6%C3%8D%C2%92%C3%B6dL%C3%93%C2%A54%C3%87%C2%9E%7D%C2%8F%7B%C2%86%C3%A6%C3%AE%C3%A4%08%C3%A6%C3%BB%C3%B9I%C2%91rJI%C2%B6%C2%B5(%C3%BB%C2%85%C3%BD!%C3%B1k*%2B%C2%9D%22%25'%3F%C3%83%C3%95%C3%A2%C3%9B%C3%AD%C3%9C%C2%AE%C2%8E%C2%88%C3%A3%C2%AC%C3%8F4pY6%C3%B6g%C3%84%06o%15%C3%A9%C3%90%C2%B2%1FB%C2%B7%C2%B4z%11.Sm%12%5DY%1F%14%C2%B6IeF%C2%AD%3D%C2%A7%C3%8B%C2%B0Js%C3%88l%C2%A7%3C%C3%9D%C3%AB%1EJX%C3%AC%7C%C2%B4%C2%AF7%3DIim%C3%80e%C2%B5%C2%92%5EQ%C3%90%C2%99%C3%B1%C2%99N%C2%A5%C3%B7I%3C%C2%B9s%C2%A8%0B%C2%95%C3%96%C3%99%C2%BE%C2%B6L%7Dw%C2%BB%C3%A6q%12%C3%9D%1D%C2%A6%C3%89%C3%87%C3%9Bq%09R%C3%92%C2%A5%17%06%C2%8BC%06K%5DxQ%26u%3E%403%C2%8BV%C3%ACo%0D%C3%89j%26r%07R%C2%84yN%C2%A9%C2%A64%C2%91%C3%B787%C3%8Ci%C2%BD~%C2%9B%7C%C2%ABM%C2%B3h%C2%BD%C2%99T%C3%85%1C)%C2%8EY%C2%9EN%C2%A5%C3%A7j3%C3%9D%C3%83%C2%9D%C2%B9v%C3%BB-%C3%B6%C3%B4%C2%A9%C3%90%C2%9Fa%C3%B7V%C3%8E%C2%86%C3%92%C2%93%C3%92%C3%92%C3%8D%3CR%C2%84%C2%AB%C2%82%C2%93Q%C2%9B7b%C3%A4k%0F%C2%8D%C3%8Fm%C2%AF%0E%C3%A4Q%5C%C3%84%C3%8C%C3%93%C2%AF%0E%C2%B9%C2%8Fc'%C3%9DOy%19%2F%C2%B4dy%C3%83%1BU%C2%AA%C2%B0%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%09%C2%8C%2F%C3%B1%C2%8D%C2%8B%C3%9A1%3C%C3%BA%00j_%10V%C3%B4O%C3%9D%C2%88%C3%B1%C3%9CQ%C2%A5%C2%BFW2%C2%A5%C3%93%C2%99%C2%92V%C3%AF%02%1Ao%C3%9D%C3%ACS%C2%AC-vl%0Ar%C2%B2%22%C3%9DS%C2%A5%3C%C2%B3%C3%A8B2%C3%8BL%C2%B4%C2%96%C2%9AI!%C2%B4%15%12%C2%92%C3%A4D)*%C2%AAfu%C2%97%C2%AC%C3%9A%C2%B5M%C2%BAb%C2%8A%23Jc%C2%92%138N%C3%8D%C3%9C%C3%B3%2C%C2%80%C2%AE7gT%C3%9E0%C3%81%C3%B14%C3%B8%C2%ABt%C3%88%C3%B8%C2%B2%C3%9Fp%C2%BF%C2%8D%7F%C2%B3%C2%8F%2Bl%3D%3B%1C!%C3%A6%C3%9E)%C2%A6%C2%B8%C3%8A%C3%BB%C3%95%C3%B6%C2%A3N%11%C3%B9c%C2%9BO-V%C3%BD%C3%96%C3%9Df%C3%AC%C2%AD%C2%B5%C2%80%60%0D%17%C2%AC%C3%A8%C2%98k%5C4%C3%97%C3%91%C2%AB%C3%A2%C2%93%0C%12y%C2%BC%7C%C2%8C%C3%8B%C3%89%C3%BF%007%C2%93-%C3%8D%C2%BB%C2%B6%C3%AFn%C3%AC%1Bc%60%7B%2F%C3%8B%C3%9Eo%C3%97%3D3S%C2%AE%C2%A8%C3%89e%18%C2%96_%C3%A8%C2%B3%C3%8F%5B%C2%AB%C2%AD%14%C2%A2%C3%A7%C3%88%C2%B8T%C3%8C2%1C%C3%A38%C2%BFne%C3%BBZ%C3%B5C%C3%87%C3%A1%C2%A8%C3%BD%12%25x%20%C2%B9k%5D8)%C3%95%17%C3%95%C3%A4%5D%C3%BD%17%C3%AF%C3%85%C2%B8%C3%A9%5B%C3%AD%1BEy%C2%95%C3%A9%1C-%C3%87z%C2%AFdt%C2%BDb%C3%85b%2B%09a%C2%84%C2%92%1BAp%2F%C3%9E%7D%C3%B1M%5DsT%C3%AB%2FS%C3%86%C3%86%C2%A2%C3%85%11E%11%C2%A50%C2%9D%C3%9A%C2%9F%7D6%C2%8F%C3%AC%C3%A4y%C2%B7E%C2%9E%0Frz%C3%9E%7F%C3%A2%C3%BF%00%C2%9A%C2%A7%C3%B8%C3%A3%C3%B5T%C3%8F%C3%B7S%C3%9EFK%C3%AD%19%1Ep%C3%84%C3%97(%C2%AB%00%C3%9Ap%C2%BF%C2%86%C2%B9%C2%99%16%2F%02%C3%B7*%C3%B7%C3%AA%C3%97'%C2%B7%C3%96n%19%C3%84%C3%AB%1A%5BQ%C2%9FMF%C2%BE%C2%B3~Zh%C2%AF'%C2%B4%19f0%C2%B1in%C3%A6%C2%91%C2%B1Y%C2%8A%C3%B4IN%C3%9C%5B%C2%B6%C2%BE%C3%A6%C2%9D%7D5%C2%AD%C3%A2d%C3%95%C2%A6%C2%A9%C3%95J%C3%97%C2%99T%18h%1B%C2%8B%C3%B0%C3%B3w%C3%84%C3%AC%0A%C2%BDA%C2%B8%C3%BA%C3%A6%3Cs%C2%AC%C3%A6%C3%93%1C%C3%98%5BM%C3%BF%00%C3%8D%22%C3%AA%3D%C2%A9%25%C3%B4%C2%B9S%C2%9F*%C3%90%C3%8B%C3%8D%C2%8D%C2%88%C3%AA%C3%AD%C2%A1%C3%A6%C3%BE%C2%BC%C3%93H%2B%C2%9D%C3%AA%C3%BF%00E%C2%AF%C2%90Fz%3A%C2%BDn%C3%9As%C3%91%C3%B3%00%C2%B6%C3%BF%00%C3%B9%2B%C3%BF%00%C2%AA%C3%BF%00%C2%B0%C3%BF%00%C3%99%01%17%C2%95%7C3%C3%BA%C2%87%1B%C2%B9%5E%C2%BF%C3%9C%C2%9E%C2%93%C3%AA%C3%A8%C3%AEH%C3%B4%7FB%C3%A9%C3%AB%C3%A9%C2%A7V%C2%9D~%C2%90%C2%BD5%C3%AE%C3%90%C3%80Cn~%C3%84%7F%C2%B1%C2%B1%C2%B4%C3%9E%C2%BDy%C3%AB%1DR%1B%C2%8F%C3%A8%C3%BE%C2%8B%C3%90%C3%BF%00Q*V%C2%AD%7Dgyh%C3%A5%40%19%400%00%00%00%00%00%00%00%00%00%C2%98%C3%82%C3%BF%00%18%C3%98%C2%BD%C2%A3%13%C3%8F%C2%A0%06%C2%BB%C2%BD%C3%BE%C3%B8%18%C3%B6%5B_%C3%8E%C3%A0%C2%89%C2%9B%C3%B0%C3%9D'%C2%85~r%3D%C3%99T%C3%A3%C2%91%C2%BB%C2%99%C3%A2%C3%B0Vg%C3%A8%C3%93%C3%A75%16R%08%C3%A9%C2%A9%C2%A7%C2%9Ei%0A.%1D%C2%B4W%03%11q-S%5CU%13%C3%90%C3%A8%C2%BCM%C2%B8%5D%C3%85%C2%AE%C3%95V%C3%A7I%C2%9E%C3%9FW%C3%A1m%3B%C2%81%C2%B96%C3%BB%5CW1%C2%8Ca%C3%84%25%C3%B8%C3%A5%C3%A8%C3%B2%C2%9E%C2%8EdE%18%C2%88%C2%A8m%20%C3%93%C3%89%C3%8E%C3%A9%C3%BD%1F%C3%B3r%C3%9F%C2%93%7F%C3%B6%C3%A3%C2%B3O%05%3E%C3%83%C2%B4%C3%86eS~%C3%B4%C3%B6%C2%A3%5EMx%C3%8C%C3%B4%C3%B9q%C3%AA%C3%A5%C2%A9%C3%AC%C3%B3%1Bs%C2%89%C3%84%C2%BA%C3%A4%C2%97yT%C2%BCE%25-%2B%C2%92Df%C3%9B%0A%C3%A1H%C3%A5%C3%84%C3%96%C3%A2%C3%8C%C3%B4%C2%A8%C3%BC%C2%AE%C3%8EFu%C3%9B%C2%8F%C2%91%15%C3%86%C2%93%C3%9E%40%C3%9E%C3%B6J%C2%B1*%C3%ADS%C3%86%C3%94%C3%B2O7D%C3%B9qP3%C2%8C%C3%A2%C3%BD%C2%B9%C2%97%C3%ADk%C3%95%0F%1F%C2%86%C2%A3%C3%B4H%C2%95%C3%A0%C2%82%C3%A5%C2%ADt%C3%A0%C2%A7T_W%C2%91w%C3%BE%C2%AF%C3%9F%C2%8Bq%C3%92%C3%91%C2%B4m%15%C3%A6W%C2%A4p%C2%B7%1D%C3%AA%C2%BD%C2%91%C3%92%C3%BC%C2%ADp-%10%3B%1Aa%C2%A2%C2%A2R%5C%C3%94%7F%C2%BC%C3%8CT%C3%84Uv%C2%AE%C2%97%C2%A4%C3%97%5E%3E%06%3F%C3%A5%C2%A2%C2%9F%C2%A6g%C3%9B2%C2%8B%C3%87%C3%AE%C3%92.7).9%C3%A2%C2%B6%C2%94%114%C3%91rIj%C3%BF%00%1E%C3%A9%C2%89%196b%C3%9D%11%10%C2%A3%C3%98%C2%B7K%C2%99%C2%997*%C2%AB%C2%851O%08%C3%A6%C3%A3%C3%AB%C3%A7%C2%95%C3%A3j%7D%C3%B4%C3%9A%3F%C2%B3%C2%91%C3%A6%C3%9D%120%7B%C2%93%C3%96%C2%A5%C3%B1%7F%C3%8DS%C3%BCq%C3%BA%C2%AAg%C3%BB%C2%A9%C3%AF%23%25%C3%B6%C2%8C%C2%8F8bk%C2%94s%C3%AD%C3%BE*%C3%AEU%C2%98%5B%2C%C2%88%C2%A95%25%C3%929K%2F%C2%A2%C3%83~%3B%C2%AA%C3%B9t%24%C3%A9%C3%9F%06_hLU%C3%AA%25%C3%92%C3%8D%0E%C3%97%05%0A%C2%B2Q%C3%94%5C%C2%9D%25!%1D%06%C3%90%C3%9D%18Kh3%232%C3%95%C3%8E%C2%9C%C2%88%C2%80c%1B%C2%AF%C2%87z%C2%BBz0%C3%BC%C2%8E2)%16%C3%B1s%C2%82%C2%894.%05%25%C2%99%0D%C2%95O%C3%BC%C3%AD%C3%A9%C3%B9%C3%88%C3%80m7l%C2%86%C3%8D%06%C3%A7n%C2%B3%C3%9CVHv%C3%B5%C3%96j!8Dm%C2%B8%C2%B6%C2%89%26%C2%A6%C2%95%5E%C3%95%C2%A5%7C%0B%C2%B7%C2%97%3AT%2B%C3%B9%C3%A5%C2%A2%05%C2%9Fio%C3%96%C3%9B%7B%7D(Q%C2%AD%C2%B2R%C3%83U%C2%A9%25%26%C2%95%2BIw%C2%8A%C2%BC%00d%3F%0B%C3%B7%5B%C2%9C%C3%8C%C2%BA%C3%AA%C2%89s%1F%C2%90%C2%84%C3%9B%C3%8DIK%C2%AE-dG%C3%96l%C2%AAD%C2%A30%15m%C3%BD%C2%BA%C3%9C%C3%91%C2%BAW%C3%A8%C2%88%C2%98%C3%BAb%19EI%C3%87'%16M%C3%91P%C3%993-%15%C3%93%C3%86%C2%A07%C2%8D%C3%B0%C2%8Bg%C2%97%C2%8E%C3%99%C3%A3%5E%5D%26m%2F%5Eb%22s%C2%A6%C2%BE%C2%99%25%C2%93K%C2%84%C2%B3%C3%97%C3%B4xv%C2%80%C3%8C%C2%B2%C3%9C%2B%60%22c7I6k%C3%8BO%5D%C2%99%C2%8C%C3%A2%C3%A0%C2%B4S%C2%89%C3%83S%C3%84%C2%934%16%C2%8F%C2%A5%C3%87%C2%B0%06%10%0C%00%00%00%00%00%00%00%00%260%C2%BF%C3%866%2Fh%C3%84%C3%B3%C3%A8%01%C2%AE%C3%AF%7F%C2%BE%06%3D%C2%96%C3%97%C3%B3%C2%B8%22f%C3%BC7I%C3%A1_%C2%9C%C2%8FvY%C3%A6K%C3%AB%03%C2%B9Y%C3%BD%5B%C3%94%C3%B5%C2%8FX%C3%BD%0B%C2%A1%5E%C2%AF_S%7D%3E%C2%9E%C2%9E%3A%C2%B5%C3%93M%3BF%C2%9D%C2%BF%C3%B1z%3D%C2%AB_%19%C3%BF%00%C3%8B%C3%BB%C3%BF%00%C3%95%C2%B0%C3%A3%C3%9B%3F%C2%8C%C3%A1%C3%98-%C3%82%C3%B1%C2%9B%C3%8B%C3%A8%C3%9C%C3%A44Ky%C3%B4%C2%A8%C3%94Q%C2%8E%C2%B5CM%C2%A4%C2%8E%C2%8E%C2%BA%C2%A5y%5D%C3%9EI%C3%AE%C2%9C%C3%8B%C2%B6%C2%A2%C2%B8%C3%92%5C%C2%B6%C3%9D%C2%B8%C3%9C%C3%84%C2%B9%C3%9B%C2%A3%C3%93%1Ei%C2%86g%1AT%0B%C2%A45)%C2%BF%C3%AAG%5DR%C2%B4%2C%C2%A8e%C3%9EQ%11%C2%9D%0F%C3%A7%14%C3%B5%C3%91U%C2%BA%C2%BA%5E%C2%A3%C2%8B%C2%93g%3A%C3%86%C2%B1%C3%86%C2%8A%C2%B8LO%C2%AA%7C%C2%BA_%C3%85%C2%AA%0D%C2%A6%05i%C3%93%C2%8E%C3%91pIq33%C3%BF%00%130%C2%88%C2%AA%C3%A5%5D2%C3%8DuX%C3%80%C3%87%C3%97%C2%BBn%C2%9F%2FL%C3%8B%C2%A7n%C2%B6%C3%AA%C3%B5%C2%B9W%C2%AFJ%C2%95%C2%AE%1E5%0Dt%C2%91%20%C2%BB%7Bz%2C%C3%97%C2%82%C2%9CQyJ%C3%BA%3F%C2%B0%C2%8E%C3%9E%C3%8D%C2%98%C2%B7%1AC%C3%8CwM%C3%92%C3%A6e%C3%8E%C3%95%5C)%C2%8EH%C3%A6%C3%BBy%C3%A5%C3%A7x%C2%B6%40%C2%B5n%3EGn%C2%B7%C2%B2%C2%96!Dp%C2%9Aa%C2%94%C3%B2JRDT%C2%A9%C3%94%C3%8F%C2%BEf%23g%C3%B7a%7D%C3%A0%C3%AF%C2%8Bs%C3%9D%C2%8FZ%7Bj%7D%C3%B4%C3%9A%3F%C2%B3%C2%91%C3%A6%C3%9D%1FX%3D%C3%89%C3%ABh%C3%B1%7F%C3%8DS%C3%BCq%C3%BA%C2%AAg%C3%BB%C2%A9%C3%AF%23%25%C3%B6%C2%8C%C2%8F8bk%C2%94vm~%C3%A4%23%03%C2%B8%C3%8C%C2%B8%C2%A2%C3%94%C2%8B%C2%8C%C2%B9-%13%0D%C2%ADn%C2%9B%5D6%C3%B5jY%15%10%C2%BA%C3%AA4%C2%A7%C3%B6%03.%C3%AC%C2%8B%7D%C2%B7%0A%C3%A9x%C2%91%3A%15%C3%89%C3%ABTGM%3D%18%0C(%C2%94%C3%9Bd%C2%94%C2%92hJ4%C3%94%C3%AAe%C2%A8%C3%8F%C2%BA%60%2CW%C3%8F%C2%88%C3%A9%17%C2%A8v%C3%B6gc%C3%8C%C2%A9%C3%AB%7C%C3%88%C2%97%06%C2%9FL%C2%85%17%C3%B5%C3%A2%3A%C2%97*I6%C3%8E%C2%84%C2%B2%25%24%C3%B8%C3%B0%25%00%C2%AFnv%C3%B1%C3%8D%C3%8E%C2%91l%23%C2%B7%C2%95%C2%AD%C3%8B%5B%C2%8E%3A%C3%93%C2%AD%3C%C2%A5%C2%A8%C3%94%C2%BD42%3D(%C3%92i%C3%91R2%015q%C3%B8%C2%8C%C2%BD%C3%9C%C3%B0%C2%B98%C3%AD%C3%86%C3%98%C3%93%C3%B2e%C3%84%5CG%C3%AEd%C3%A9%C2%A1J5%24%C3%93%C3%946%C2%89%14%C3%95N%7Cy%C3%B7%00T%C3%B6%C2%BFr%1F%C3%80%C2%AE%C3%B2%C3%AE%2C%C3%80L%C3%B5J%C2%8F%C3%A8%C3%A6%C3%9A%C3%9C6%C2%89%25%C2%AD%2B%C3%95RJ%C3%BF%00%C2%84%04fy%C2%969%C2%96%C3%A5s%C2%B2%17%23%14E%C3%8D%C3%A9V%3AVn%12zL%C2%A1%C2%9F(%C3%895%C2%AFN%C2%BC%C2%81%C2%85%C3%8Br%C2%B7%C3%92%5Eq%C2%8E%C2%A6%C3%8A%C3%AD%C2%A1%C2%B8)L%C2%84H%C3%AB%25%C3%B3p%C3%AA%C2%84%C2%A9%3At%C2%9A%13%C3%8F_t%19e%C3%80%C3%80%00%00%00%00%00%00%00%00%02c%0B%C3%BCcb%C3%B6%C2%8CO%3E%C2%80%1A%C3%AE%C3%B7%C3%BB%C3%A0c%C3%99m%7F%3B%C2%82%26o%C3%83t%C2%9E%15%C3%B9%C3%88%C3%B7eJ%C2%91r%C2%8Bk%C3%8Bq%7B%C2%9C%C2%B34%C3%85%C2%83%3D%C2%A92%14%C2%92%C3%94d%C3%9B%2F4%C2%B5%C2%99%11s%3D)%1Av%C3%BF%00%C3%85%C3%A8%C3%B6%C2%AD%7Cg%C3%BF%00%2F%C3%AF%C3%BF%00W%C2%BEq%C2%9C_%C2%B72%C3%BD%C2%ADz%C2%A1%C3%A3%C3%B0%C3%94~%C2%89%12%C2%BC%10%5C%C2%B5%C2%AE%C2%9C%14%C3%AA%C2%8B%C3%AA%C3%B2.%C3%BC%C2%AB%C3%B7%C3%A2%C3%9Ct%C2%B9%C3%AD%C2%A3h%C2%AF2%C2%BD%23%C2%85%C2%B8%C3%AFU%C3%AC%C2%8E%C2%97%C3%A5k%C2%81h%C2%81%C3%98%C3%93%0D%15%12%C2%92%C3%A6%C2%A3%C3%BD%C3%A6b%C2%A6%22%C2%AB%C2%B5t%C2%BD%26%C2%BA%C3%B1%C3%B01%C3%BF%00-%14%C3%BD3%3E%C3%99%C2%97%C3%AE3%C3%91%C2%AEv%C3%A2%7BA%C2%AA3%C3%95B%C2%92%C2%B2%C3%A1R%C2%A6%C2%A4%C3%BC%C2%A5%5E%C3%80%C2%AE%C2%8A%C2%AD%C3%95%C3%92b%C3%A5X%C3%8E%C2%B1%C2%AC%7D%C3%AAj%C3%A11%3En%C2%89_.%C3%BB%C3%88%C3%BD%C2%97%01%C2%81a%C3%85%C2%ADG%0E%C3%AC%C2%B2%C3%B448%C3%8254%C3%91p%22%5BI%C3%B1%C2%94%C2%A7%5D5p%C3%95%C3%B4%C2%AA%7C%7Bm1%C3%B2%22%C2%B8%C3%92%7B%C3%8F%3D%C3%9E%C3%B6J%C2%B1*%C3%ADS%C3%86%C3%94%C3%B2O7D%C3%B9qe%C2%B6%5Bu%C3%92%C3%9D%C2%90%5C%C3%A1%C3%9D%C2%92%C2%A4%C3%9C%C2%9B%C2%A1%C3%8BK%C2%8A%C3%96%C2%B2qG%C2%A9Z%C3%95S%C2%AA%C2%BCn%3Cy%C2%8D9%C3%BD%C3%98Y%C3%B8%3B%C3%A2%C3%9C%C3%B7c%C3%96%C2%BB%C3%ADO%C2%BE%C2%9BG%C3%B6r%3C%C3%9B%C2%A3%C3%AB%07%C2%B9%3Dm%1E%2F%C3%B9%C2%AA%7F%C2%8E%3FUL%C3%BF%00u%3D%C3%A4d%C2%BE%C3%91%C2%91%C3%A7%0CMr%C2%8FM%C2%B3%C3%9B%C3%89%C3%B9%C3%96C%C3%AA%C2%B8%C3%AF%26%2Cv%5B7%C3%A6%C3%8BQj%C3%A9%C2%B6FI%C3%B1SR%C3%94%C2%A5%1A%C2%88%C2%88%C2%AA%0C%C2%B6g%3E%1A%C2%B6%C3%ADn%C2%9D%C2%B1%C2%8C%C2%8EQ%5E%C2%90%C2%927%19S%C2%B1%C2%96%C2%A2%C2%AAu%11%C2%9CrB%5C%22%C2%A7%1F%2B%C2%90%08LC%C3%A1%C3%BB%0E%C2%BA3pL%C3%9C%C2%8Do%3F%06%7B%C2%B0%C2%92%C3%AC3i%0D%C2%AC%C2%9BJ%0E%C2%BA%5DJ%C2%95%C2%A8%C2%94%C2%B3I%C3%90%C3%8C%C2%AA%5C%0C%C3%80X%C2%9D%C3%B8%5C%C3%82%19I)%C3%AB%C3%9C%C3%A6%C3%92gB5%C2%AA%3AJ%C2%BF%3B%603%C3%8C_f%60%C3%9Fw6%C3%B5%C2%8D%C2%B7-%C3%B2%C2%B1Y%C2%89F%C3%AC%C3%B4h7%15Z%13I%C2%AD4UFf%7C%C2%B9%24%C3%80~7%C2%9Ff%C3%A3%60%C2%B1m%C3%93%C3%AD%C2%92_%C2%99o%C2%94%C2%B5%C2%B1!r4U%C2%B7%C2%88%C2%B56UA%24%C2%A8%C2%B4%C2%92%C2%BE%C2%A8%0D%11%C2%AF%C2%85%C3%BC%15%C3%A5%1AY%C2%BE%C3%8DqDU2B%C3%A3%C2%A8%C3%A9%C3%B3%20%04%3Eg%C3%B0%C3%B5%C2%86Xq%C2%9B%C2%B5%C3%8D%C2%8B%C3%8C%C2%B7%26%40%C2%8C%C3%A3%C3%ADGulQJBu%25*%22A%2B%C2%88%08%C2%9D%C3%98%C3%98%C2%AB%26%1F%C2%8C%C2%B3s%C2%B5L%C2%996c%C3%93%1A%C2%88%C2%88%C3%AE%C3%B4%C3%8C%C2%95%C3%95%25%1F%02B%12%C2%A3URT%017%C2%8B%7C.%C3%81%C3%B5cr%C3%B2%C3%AB%C2%AB%C3%91%C3%A4%C2%AD%24%C2%A7%22%C3%836%C2%90%C2%96k%C3%89*y%C3%84%C2%B8JW%1E4M%3B%C2%86%7C%C3%80U7obU%C2%86%5BJ%C3%B7k%C2%9EsmD%C3%A2Zy%C2%99%1AQ!%C2%B3_%04%C2%99%1Ah%C2%97%0A%C2%BC%C3%A8De%C3%9C%C2%A5L%C2%83%25%06%00%00%00%00%00%00%13%18_%C3%A3%1B%17%C2%B4by%C3%B4%00%C3%97w%C2%BF%C3%9F%03%1E%C3%8Bk%C3%B9%C3%9C%113~%1B%C2%A4%C3%B0%C2%AF%C3%8EG%C2%BB*%1D%C3%BA%C3%90%C3%AD%C3%8AL4%24%C3%B4%C2%B2%C3%9FP%C3%9Es%C2%B8G%C2%A6%C2%84%5D%C3%B3%C2%A0%C2%85%C2%8D~-%C3%85%5C%C3%BC%1D%5E%C3%B9%C2%B4%C3%97%C2%99r%C3%951%C3%82%C2%8A%7B%5D%C2%A9%C3%BF%00%1F%C3%AB.%C3%85%C2%AE%05%C2%A2%07cL4TJK%C2%9A%C2%8F%C3%B7%C2%99%C2%8DQ%15%5D%C2%AB%C2%A5e%5Dx%C3%B8%18%C3%BF%00%C2%96%C2%8A~%C2%99%C2%9Fl%C3%8B%C2%ABn%C2%B6%C3%AA%C3%B5%C2%B9W%C2%AFJ%C2%95%C2%AE%1E5%0Dt%C2%91%20%C2%BB%7Bz%2C%C3%97%C2%82%C2%9CQyJ%C3%BA%3F%C2%B0%C2%8E%C3%9E%C3%8D%C2%98%C2%B7%1AC%C3%8C%C2%B7M%C3%92%C3%A6e%C3%8E%C3%95%5C)%C2%8EH%C3%A6%C3%BBy%C3%A5%C2%A0o6c%C2%89Xmp%C2%B0%3Cv%C3%9A%C3%94%C2%BB%C2%8Ce6%C2%96%C2%99h%C2%8C%C3%8A!%19%C2%97%C2%88F%C2%9F%19O%3B%5E%25%C3%87%C2%9DUS%C2%A0%C3%BA%C2%BBj%2B%C2%8D%25%C2%AFn%C3%9Cnb%5C%C3%AD%C3%91%C3%A9%C2%8F4%C3%82%C3%99%C2%80%60%C3%901%C2%9BQd%C2%B9)%25%C2%89%C3%89l%C2%9D%C3%A9%3BC(%C2%A92%C3%A5%C3%82%C2%B5w%C2%B3%C2%87%C3%88B5%C2%9Cx%C2%B5%C3%B7%C2%AA%5En%C2%9B%C3%95%C3%8C%C3%B9%C2%8B%16)%C2%9E%C3%8DZp%C3%B3%C3%8C%C3%BDQ%C3%B6%C2%B1%7B%C3%AB%C2%85%3B%3B%C2%BD%C3%9E%C3%99I%C2%94%3B%C2%93%C2%9DF5P%C2%94ER*(%C2%8A%C2%BCxTF%C3%89%C3%88%C2%8B%C2%91%1As%C2%AF%C2%B6-%C2%9A%C3%AE%1D%C3%9A%C2%A6%C2%A9%C2%89%C2%8A%C2%A9%C2%8E1%C3%8F%C3%A7%C2%84%C2%B6%C3%94%C3%BB%C3%A9%C2%B4%7Fg%23%C3%8D%C2%BA%24%C3%A0%C3%B7'%C2%ADA%C3%A2%C3%BF%00%C2%9A%C2%A7%C3%B8%C3%A3%C3%B5T%C3%8F%C3%B7S%C3%9EFK%C3%AD%19%1Ep%C3%84%C3%97(%C2%B1%C3%AC%15%C3%8F%2F%C2%83%C2%98%C2%BAx%C3%AD%C2%B8%C2%AE%C2%89r2%C2%8A%C3%A3%15n%13)%C3%A9%24%C3%89IQ%3A%C2%AF%15%0B%C3%96DI%C2%AF%3A%C3%93%C2%BEF_AE%2C_2%C2%B8-%C2%9B%C3%9E%1D2%0D%C3%91%C2%94k9%C2%93%C3%A1t%C3%8C%C2%8D%06I%C2%A33%C3%995q%2F%C2%A3%C2%A5%C3%82%3E%1C9%00%C3%B9%C3%A3%3F%C3%83-%C2%B8%C2%8E%C3%AC%C3%84%C2%B5%5B%1CR%C3%A1-%C3%B8%C2%92Ymj%C3%96%C2%B6%C2%89%C3%97%0A%C2%AD%C2%A9%5D%C2%B42%C3%A1%5E4%C2%A5x%C2%80%C3%95%C2%BE*%C2%BF%07Z%3D%C2%A2%5Ea%C3%80%13%C2%BB%0D%C2%87%C2%BF%C2%8E%C3%AD%C3%92%25%13I%2B%C2%BD%C3%A4%C2%8Ej%C2%89%C3%934%C2%96%C2%95%26%C2%91%C2%90%C2%B3%223%24%C3%A8%C2%A2%C2%8F%C2%85KQ%C2%80%C2%99%C3%88p%C3%AB%C3%8EK%C2%B6%0E%C3%A3%C3%B7%C3%B5%C2%B0%C3%B5%C3%BDQJ%C2%B2%1836%C2%95-%C2%9E-8JRZ2%C3%96i-%5E)s2%C3%A4%03%1A%C3%B8Zi%C3%86%C2%B3%5B%C3%8BN%C2%A4%C3%90%C3%A3p%14%C2%95%C2%A1ECJ%C2%92%C3%BBddd%7D%C2%A4%02%C2%A7%C3%B1%01%C3%AFr%C3%BD%C3%BF%00I%C3%BF%00%C2%84%C3%88%0F%C2%A47Rl%081q%C2%B9s%C3%8D)%C2%88%C3%8D%C3%BE%0A%C2%9CZ%C2%8E%C2%89G%07(%C2%B3%3E%C3%A2%15E%7C%C3%80%2B%1F%11x~a%C2%92Y%C3%AD)%C3%87%C3%99rdx%C2%AF%3A%C2%A9%C3%90%C2%9AQ%12%C2%94kJ%09%C2%974%C2%99%C2%96%C2%AD%14Yw%C2%B5%7C%C2%A02%5C%C2%B3h%C3%B7q%C2%B8Ve%5D%C2%96%C2%AB%C2%84u%C2%94xQ%C2%9B9%3DB%C2%86%C2%B7%C3%9CK-0%C2%B2Y%C2%91'%C3%87ZS%C2%A95O%7C%05W2%C3%9Bl%C2%B7%0Ej%2B%C2%B7%C3%A8%C2%A8%C2%8E%C2%89%C2%8AZc%C2%9A%1Dm%C3%9A%C2%9BdF%C2%AF%20%C3%95O(%C2%80V%01%C2%80%00%00%00%00%04%C3%86%17%C3%B8%C3%86%C3%85%C3%AD%18%C2%9E%7D%005%C3%9D%C3%AF%C3%B7%C3%80%C3%87%C2%B2%C3%9A%C3%BEw%04L%C3%9F%C2%86%C3%A9%3C%2B%C3%B3%C2%91%C3%AE%C3%8A%C2%A96lxQ%C3%94%C3%BB%C3%AA%C3%92%C2%84%C3%B2.%C3%93%3E%C3%82%22%C3%AE%C2%8A%C2%BBv%C3%A6%C2%B9%C3%92%1E%C2%89%C2%99%C2%99o%1A%C3%9C%C3%9C%C2%B9%3AD%7F%5E%C2%88z%C3%AD%C3%96%C3%9D%5E%C2%B7*%C3%B5%C3%A9R%C2%B5%C3%83%C3%86%C2%A1%C2%AE%C2%92%24%17ooE%C2%9A%C3%B0S%C2%8A%2F)_G%C3%B6%11%C3%9C%C3%99%C2%B3%16%C3%A3Hy%5E%C3%A9%C2%BA%5C%C3%8C%C2%B9%C3%9A%C2%AB%C2%851%C3%89%1C%C3%9Fo%3C%C2%B4%C3%BD%C3%90%C3%9D%0Bn%11mg%07%C3%81%C3%99A%5E%09%09%C2%8E%C2%94%C3%87N%C2%B2%C2%88K%C3%A0DDU5%C2%BE%C2%B3%3A%C2%91%1DN%C2%A7S%C3%A3%C3%8Fr%C2%B0%C3%9A%C3%BD%C2%AF%C2%B6%C3%A1%16%C3%97%C2%B3%C2%8C%C3%A1%C3%A4%15%C3%A0%C2%90%C2%A9%0AT%C2%85k(%C2%84%C2%BE%26fgS%5B%C3%AB3%C2%A1%C2%99T%C3%AAt.%3C%C3%83%3A%C3%8C%C3%B7W!%C3%8E%C3%B2D%C2%A2%C3%9F%C2%AA%269%0DG%C3%91%C2%8A%C2%BEK.%5DW%C2%A9%C3%8D%C3%85%17%C2%92_G%C3%B6%C2%99%C3%85%C3%8B%C2%9A%7B%1AT%C3%A8%3C7k%22rb%C2%AB%5C%C2%91%C3%9E%C2%99%C3%A4%C3%93%C2%9B%C2%AF%C2%9B%C3%AAq%C3%88%C2%90%C3%8CfT%C3%B3%C3%8A%246%C2%82%C2%AA%C2%94b%C2%A6%C2%9Af%C2%A9%C3%92%1E%C2%97%C2%91%C2%91E%C2%9A%26%C2%BA%C3%A7Ja%C3%99%C2%B2%173%C2%B8%C3%AF%1D%C2%B9%C3%BD%3A%10%C2%96%24%C2%A1%C2%B2%C3%AD%C3%92L%C2%AC%C3%B8%C3%B7%C3%B8%C2%8B%C2%AB%16%C2%BFn%C2%9D%1EQ%C2%BCn_%C3%BB%2F%C3%BE%C3%A6%C2%9AS%11%C2%A4uq%C3%A5%C3%BAT%C3%BD%C3%94%C3%B7%C2%91%C2%92%C3%BBFG%C2%9C1%C2%B9T%C3%A7%C3%83s%C3%9C%C2%A7%0F%C2%98%C2%B9V)%C2%86%C3%87%5BII%C2%8E%C2%A2%25%C2%B2%C3%A9%26%C2%BAu%C2%A1%5C8T%C3%A8e%C3%84%C2%BB%C2%A0%C3%8BCw%C3%A2%C2%97%3D%5CCi%10-%C2%AD%C3%882%C2%A1%C3%88Ko%1D%3B%C3%A4%C2%85%3Ae_%C2%96%C2%A5%C3%9E%01%C2%97M%C3%89%2F%13%C3%B2%03%C2%BF%C3%9C%1F9%C2%975%3C%C2%89%0E%3A%C3%AF%25-%C2%B3%23I%19'M%12ZH%C2%88%C2%93J%17%02%06%16%C2%AC%C3%AFy%C2%B2%5C%C3%9A%0CHW%C2%88P%11%1E%1C%C2%82%C2%92%C2%84%C3%87C%C3%A85%C2%A8%C2%92i%C3%92%C2%B3S%C3%8B%C3%B1L%C2%95%C3%99C%C3%AF%C2%83.%C3%8C%C2%9F%7F%C3%B3%C2%BB%C3%BD%C2%9C%C2%ADT%C2%8Bj%60%C2%96%C2%85um%C2%89%7D%C2%87t%C2%B6GF%C3%89F%C3%B2%C3%A8%C2%8E%C3%B1%17%60%0El7%7Cs%C2%BCY%C2%B9M%C2%B2%C3%BA.%C2%89%C2%94hQ%C3%BA%C3%8C%C3%9F%C2%90m%C2%9A%08%C3%8B%C3%BAfN%C2%B6e%C2%AA%C2%BC~%40%1C%C3%B6%0D%C3%9E%C3%88%2CYm%C3%97(%C2%B7%C3%81%C2%80%C2%99%C2%B7%C2%82QJ%C2%8E%C2%A6%C3%9E8%C3%A95%C2%AD.-M%C2%A4%C2%9D%25%C2%91%C2%A9i%C2%A9%C3%95G%C3%8C%C3%80%40f%19U%C3%83%2B%C3%88%C3%A5%C3%9F%C3%AE-%C2%B2%C3%94%C3%89%C2%BD%3E%C2%ABq%C3%89Ih%C2%BAM%25%C2%A4%C3%A9%25%C2%A9%C3%85y-%C2%95%7Cn%60%C3%82%C3%91%C2%9D%C3%AFvW%C2%9A%C3%99%13g%C2%BA%C3%84%C2%80%C3%8Cd%C2%BC%C2%89%04%C2%B8%C2%AD%C2%BC%C2%875%20%C2%94DUq%C3%97%0A%C2%9E%3Fp%19v%C3%A2%7F%10%C3%99%C3%AE%3Dnj%C3%9C%C2%AFG%C2%BAEa%24%C2%86%0EbVn%C2%A1%04TJI%C3%84-%06d_%C3%B1T%04vE%C2%BDy%C2%BD%C3%BE%C3%B1l%C2%B8%C3%8Dq%C2%84%C2%B5i%C2%94%C3%94%C3%98%C2%96%C3%A6%C2%90%C2%A4E7%C2%99Y-*q%3A%C3%8D%C3%85%C3%B94%C3%A2%C2%BE%05ZR%C2%A09%C3%B7%0Bvr%3C%C3%AD%C2%98M%5D%C3%A3Ca0%14%C3%A2%C3%998%C2%88u%06f%C3%A9%24%C2%95%C2%AB%C2%A8%C3%A3%C2%BF%C3%81%C3%82%C2%80)%40%C3%80%00%00%00%00%02c%0B%C3%BCcb%C3%B6%C2%8CO%3E%C2%80%1FE%C3%AE%C2%BE%C3%8Ff%C2%99Nf%C2%8B%C3%B5%C2%8At%08%C2%AD%22%23q%C2%A9)n%C2%93%C2%9A%C2%92%C2%A5%C2%9A%C2%BCT%C2%B2%C3%AAi%C3%A3%17h%C3%B8%C2%AE%C2%88%C2%AA4%C2%94%C2%AC%5C%C2%BB%C2%98%C3%B5%C3%B6%C3%AD%C3%8Ff%C2%AFD%C3%BA%C3%94%C2%99%C2%BF%0D%5B%C2%9F9IT%C2%AB%C2%AD%C2%A9%C3%83AQ%25%C3%95%C2%90D_2c%11%0C%5B%C2%B5M%1D%C3%98l%C3%8C%C3%9C%2F%C3%A4%C3%8CM%C3%9A%C2%BBZrrG%C2%ABE%C2%B2%C3%99%C2%B7%C3%BF%00%11V%C2%BBS6%C2%ABvMg%C2%89%01%C2%84t%C2%99a%C2%A6%C3%92%C2%9D)%C3%AD%C2%A2%C2%8A%0E%C2%ADG%C3%8C%C3%95Z%C3%97%C2%8Dj6!%2B%C2%B6O%C2%87%C3%BD%C3%9C%C2%B2%5EJ%C3%B5o%C2%BCZ%11tI%C2%A9I%C2%94%C3%B2%C2%9C%C2%90%C2%A2R%C3%BC%C2%A5%C3%BF%00%5E%23%C2%85%C2%AC%C3%BF%00%C2%8A%C2%95%01'%C2%95m%1E%C3%BC%C3%A5q%C2%99%C2%8B%7F%C3%89-%C2%93%230%C2%A3q%C2%B6IN2%C2%8DfT%C3%94%C2%A4%C2%B3%11%C2%B2Q%C2%91r%C3%95Zv%00%C2%87%C2%89%C3%B0%C3%A9%C2%BA%C2%91%19%26c%C3%9D%C2%AD%0D%C2%B6GZ%12%C3%9E%3E'%C3%9AfqjcMx%C3%B4U%3A%C3%8C-1w%C2%9C%C2%ACz%3B%16%C3%AA%C3%AC%C3%93%C3%AE%C3%93%C3%B5%3C%C3%A6%C3%BC7n%C2%8C%C3%A4%C2%A52%C2%AE%C3%96%C2%A7%12%C2%83%C2%AAS%C3%95%7D%25%5E%C3%AD%13%18%C2%86m%C3%99%C2%A6%C2%8EHj%C3%8C%C3%9D22b%22%C3%AD%5D%C2%A8%C2%8E%C2%A8%C3%B5D%2C%C2%9BS%C2%B0%C3%B9~%23%C2%9A%C3%84%C2%BE%C3%9C%C2%A6%5B%C3%9E%C2%89%1D%0F!h%C2%8C%C3%A3%C3%8Ap%C3%8D%C3%86%C2%94%C2%82%C2%A1-%C2%96%C3%93%C3%8C%C3%BB%C2%A3j%03%16%C3%9DOy%19%2F%C2%B4dy%C3%83%06%15%60%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%04%C2%A9IQ)%26d%C2%A2%3A%C2%91%C2%97%03%23%20%1D%1E%C2%B1%C2%B8%7D%C3%A9%C3%AF%C2%B4W%C2%84%03%C3%967%0F%C2%BD%3D%C3%B6%C2%8A%C3%B0%C2%80z%C3%86%C3%A1%C3%B7%C2%A7%C2%BE%C3%91%5E%10%0FX%C3%9C%3E%C3%B4%C3%B7%C3%9A%2B%C3%82%01%C3%AB%1B%C2%87%C3%9E%C2%9E%C3%BBEx%40%3Dcp%C3%BB%C3%93%C3%9Fh%C2%AF%08%07%C2%ACn%1Fz%7B%C3%AD%15%C3%A1%00%C3%B5%C2%8D%C3%83%C3%AFO%7D%C2%A2%C2%BC%20%3C%16%C2%B5%C2%ADF%C2%A5%C2%A8%C3%94%C2%A5%1DT%C2%A3%3A%C2%99%C2%9F%C3%8A%03%C3%B8%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%03%C3%BF%C3%99";
var image1 = group14.add("image", undefined, File.decode(image1_imgString), {
	name: "image1"
});

var YouTubeButton = group14.add("button", undefined, undefined, {
	name: "YouTubeButton"
});
YouTubeButton.text = "youtube.com/@Anti-StaticTV";

var statictext7 = group14.add("statictext", undefined, undefined, {
	name: "statictext7",
	multiline: true
});
statictext7.text = "This work is provided \u0022as is,\u0022 without warranty of any kind, expressed or implied. In no event shall the author be held liable for any damages arising in any way from the use of this script.";

var image2_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00X%00%00%00%1F%08%06%00%00%00c%C3%88%0A%C3%A0%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%0C%0CIDATx%C3%9A%C3%ACZ%09TTW%12%C2%ADn%1A1%C2%82%C3%8A%C3%A6%C2%92%C3%91%11%1DQAQP%C2%8C%C3%8Ab%04%C2%97%C2%A8%C3%A7hD%C3%B1DQ%C2%A3%C2%A2%C2%93%C3%91%0C%C2%A0f%C3%82%C2%B8%C2%84%18%C3%B4%C2%A8%07%C3%97%C2%A8q%143%C3%AE%11u%C3%86%13%12%0C%C2%9C%00%11D%05%11%C3%B7%26%C3%AEk%C3%9CW%24%C3%8E%00n%C3%90%C3%BD%C2%A7%C2%AA%C3%BE%C3%82%C3%AFf%C3%ADFs%C3%8E8S%C3%A6%C3%B1%C3%9F%C3%BF%C3%AF%C2%BD%C3%BA%C3%BD%C3%AF%C2%ABw%C2%AB%C3%AA%C2%BDh%00E%10%04%7B%C2%8DF%C2%93%02%C3%BF%C2%97W.%3A%C3%BAS%C2%AF%5E%C2%BD4%C2%BC%04.Y%1E%07%C2%A0%C3%91%C2%82%C2%8DV%C2%83%17-h56%5C%07-%3D%C3%93%02N%02%C2%B7k%C3%B1J%C2%8F%C3%B1FR%23%C2%80Q%C2%A0%C2%8B%11%C2%AF%02M%18%18%C2%8DF%C2%BC5%C2%82%C3%81Hm%06%C2%AC%0BX7%C2%8A%7D%C3%B8%C2%99%C2%91%C3%BB%C3%91%3Fq0%5E%C3%A8Nxs%C3%80%C2%9D%173%C2%AF%1C!%02%C2%B7%C2%8B%C2%8F7%02i%03Z%1B-_ml%C3%8A%C2%8B%C2%96%40%C3%86%C2%ABF%02X%23%15i%05(%C2%85%C2%803%18%08D%03%5E%C2%A5%22%C3%95%C2%8D%06%23%C3%97E%C3%A0%C2%8D%12%C3%88%12%C3%90%0C%C2%BA%C2%A0%C3%A8%7B%13%C3%A4%C3%AC%C2%99s%C3%A5%00%C2%A7f%C3%BC%C2%A8%C2%80%C2%AA%C3%85%C2%A2%C2%93%C2%80%C3%95%C3%99%C3%A8%40%C2%A7%C3%931%C3%A8%C2%87s%C3%B2%40%C2%9F%C2%AF%C2%87%C2%8B%17.BIq%C2%89%C3%9A%C2%80%C3%81%C3%9E%C3%81%1E%3Axt%00%1F%1F%1F%C3%B0%0B%C3%B0C0%0DPf(c%60K%C2%B1%08eex_%0E%C2%B8%08%C2%B2A%C2%B4j%C2%B2%5C%C2%83h%C3%8D%C3%B2%0A%C2%A8L._%C2%B8%0C9%07s%C3%A0%C3%86%C2%8D%C2%9B%26%C3%8F%C3%9D%C3%9CZA%C3%A0%C2%BB%C2%81%C3%90%C3%8E%C2%A3%5D%C2%9D%00y%1D%C3%BA%15%C2%88%C3%92%C3%B7%C2%A51%C2%982%C2%B8%04%C2%AA-%16%1B%C2%9D-%C3%BC%C2%AC%C3%8F%C2%87%5D%3B%C3%BF%C3%81%C3%80%3Ey%C3%B2%04%C2%8A%C2%8A%C2%8A%C2%A0%0C%013%C3%A1%1A%C3%AC%C3%9B%C2%B0aCptr%C2%84%0E%1D%3A%40%C3%98%C3%980%C3%A8%C3%A2%C3%9D%05%0C%0Cl%19%C3%B77H%20%C3%93%3DQ%08%5B%C2%B5%C3%9A%C2%92%C2%AB%C2%B0%C3%A2%C3%82%C3%87%C2%BFBRb%12Z%C3%84Y(xT%C3%80%C3%BA%C3%9B%C2%BA%C2%BBs%C3%9B%C3%95%2BW%C3%A0%C3%A2%C3%85%C2%8B%C3%A0%C3%9A%C3%84%15%3Ayu%C2%82%C2%90%C3%90%10pvq%C2%B2%08%C2%84%C3%97%C2%A9_'W%C2%88c%C3%89J%C3%8B%C3%81%C2%B5%05%C2%9D%C2%AD-l%C3%9D%C2%B2%0DR~H%C2%86%5B7o%C3%81%C2%8B%17%2F%18%C3%84%C3%BE%C3%BD%C3%BBC%C3%B3%C3%A6%C3%8D%C3%81%C3%87%C3%9B%C2%9B%C3%87%C3%AA%C3%B3%C3%B3%C3%A1%C3%BE%C3%BD%C3%BBp%C3%A8%C3%90!%C3%B8%C3%A5%C3%9A%2Fp%C3%B7%C3%8E%5D%C2%B8%C2%82%3Fl%C3%88%C3%BBC%C3%A1%C2%83%0FF%C2%82%C2%9D%5D%3D%C3%99%C3%90A%C2%8B%7Fm%04%C2%9Br%10%C2%99%C2%875%C3%8A%5C%13%C2%B7%1BU%C3%A0%3E%2By%06%C3%B1k%C3%96%C3%83%25%C3%BCH%C3%9Fn%C3%9D%60%C3%A9%C2%92%25%C3%A0%C3%A1%C3%A1%C2%89%2B%C3%86%C2%81%C3%9BK%C2%8A%C2%8B%C3%A1%C3%82%C2%85%C3%B3%C2%B0%C3%B6ok%C3%A1%40%C3%96%01%C2%B8w%C3%B7%3E%7C%1C5%C2%B5%C3%96%20%C2%BCn%C3%BD%C2%8A%05%C3%AF%C3%8B%C3%8ET%C3%A8%C2%A0%C2%9E-%C2%81%5B%C2%8F%C3%81M%C3%B8f%3B%C3%8F*%01%1B%1A%1A%0A%C2%A3G%C2%8F%C3%86%25%C3%A3%06%C3%B5%C3%AB%C3%97%07GGG%1ELV%C3%BD%C3%BC%C3%B9sx%C3%BC%C3%B81%24''%C3%83%C2%BAu%C3%AB%C3%98%C3%8Ai%C3%96%03%02%03%60%C3%B6%C2%9C%C2%99%60%C2%8B%C3%BAJ%C3%8BJ%C2%B9%C2%B05%1Bd%5E60g%1B%C3%88%11%C2%AA%C2%ACX%C2%B6%C3%A0%0D%C3%AB6%C3%82%C2%BE%C3%8C%7D%3C%C2%A9%C3%8B%C2%97-c%C3%8B%C2%A2w%07%07%07s%7BVV%16%C2%BF%C2%9B%2Cm%7BB%02%C2%ACX%C2%B1%02%C3%BA%04%C3%B7%C2%81%C2%A9%C2%91Sj%05%40e%C3%BA%C3%A9%C2%B7%17%3Cz%C3%84%C3%AD%C2%AEM%C2%9A%C3%B0%C2%B7%5B%C2%AB_e%C3%81%C3%A5%C2%9CK%C2%B4%C2%A0%06%C3%97%C3%9D%C2%BD-%2C%5E%C2%BC%04%7C%7D%7D%C2%A1e%C3%8B%C2%96%3C%09j%C2%91%C2%81%26i%C3%9B%C2%B6-%7F%7Cdd%04Z%C3%B1U%C3%98%C2%9B%C2%BE%17Z%C2%B5r%C2%83I%7F%0Cg*%C3%A0%C3%A8B%2B9E%C2%A2%07v%C2%968%C3%93%02%C3%BE%C3%81%C3%82Q%05%C3%8D%3C%3E%C2%BCt%C3%BE%12%C3%A4d%C3%A7%C2%80_%C2%AF%5E%C3%B0%C3%89'3p%C2%89z)%C3%AF%C3%99%C2%BF%7F%C2%BFR'%C3%80%C2%A9m%C3%86%C2%8C%19%C2%90%C2%8B%C2%AB%C3%A8%C3%B0%C2%A1%C3%83%C3%90%C2%AF%7F%C3%9F%1A9%C2%939%C3%97L%C3%BF%C3%9E%C3%B4tX%C2%BF~%3D%C2%BC%C3%84%C3%95%C3%8A%11%C2%96%C2%9D%1D%C3%8C%C2%89%C2%89%C2%81%C3%AE%C3%9D%C2%BB%5B%C2%AC%C2%9Fq%C2%95%23%C2%8A%C3%89%1FM%12%C2%A9%01%C2%AD%C3%B7t%C3%BEiX%C2%BEt%C2%99%02%C3%AE%C3%86%0D%1B!%C2%B8o_puu%C3%A5h%C2%A2%3Aq%C3%80%C2%A5%C3%95%C2%BAuk%C3%A8%C2%8A%C3%8E.%C3%A7P%0E%3Cx%C3%B0%10%C2%AE%5D%C2%BB%C3%8A%C3%8E%C3%AF%C3%AD%C3%A6o%C2%B3%C2%95%C2%82%14%C2%9E)%C3%91%07%C2%91%04%C2%81%C2%AB12%C2%8F%C3%88%20'l%C3%9B%C2%81%C2%96s%156o%C3%9E%04%01%01%C2%81%C3%BC%C3%9Bd%09%0A%0A%C2%82%C2%89%13'%C3%B2%C2%BB%C3%94%C3%AFn%C2%85%0Ei%C3%93%C2%A6%C3%8D%C3%B0%C3%B2e)%C3%B4%C3%B4%C3%AFY%C3%ADo%C3%9D%C2%B1m%C2%A7%C2%89%C3%BE%2B%C2%97%2F%C3%83gs%C3%A6%40%C3%A1%C3%83%02prv%01%17gg%C3%88%C3%8B%C3%8B%C2%83%C2%9F%C2%91%02%1B%C2%BC%C3%B5%16%C2%BC%C3%93%C2%A3%C2%87E%C3%BA%C2%99%C3%B2%C2%94%0A%C2%87b%C2%A2%15%C3%87%C2%AF%C2%8DWha%C3%81%C2%82%C2%85%C2%B8%C3%8C%03%C3%99JjM%C3%AC8Q4%C2%86%26%C2%86t%C2%90.%C3%92%C2%A9%C2%84%7CT4Z1%C3%A4%23%C3%AE%076a%C2%91%C2%B1%C2%B4%C3%80a%20%C3%89%C2%89%C3%A3'%C2%A0k%C3%97%C2%AE%C3%BC%C3%B1%0D%1A4P%C3%B4%2FA%C2%9E%C2%9C%3F%7F%3E%17%C2%AA%C2%AB%C2%85%C3%BA%C3%92%18%1A%5B%C2%93%C2%A8%C3%B5%C2%93%C2%9C%3E%C2%A1%C2%87%C3%AB%C3%97%C2%AFC%C2%BF%C2%BE%C3%BDa%C3%91%C3%A28%C2%88%C3%B9b.%C2%8C%1B%3F%C2%9E%C3%B9y%C3%A3%C2%86%0D%16%C3%AB7%01%C3%98F%C2%8Ass%C3%91%C3%BCO%C2%9D%3A%C3%85%C3%8FF%C2%8D%1A%05C%C2%86%0C%C2%A9%40%09%C2%96%C2%80%3Cm%C3%BAt%C2%BE%3Fu%C3%B2%14%C3%A4%C3%A6%C3%A6%C2%8Aq%C2%B6V%02%C2%96%13%16-%C3%B1%01%C3%88%C3%BF%C3%94%C3%B2%C3%B4%C3%A9S%C3%B0%C3%85%C2%A5i%3E%C2%B9%C2%ABV%C2%ADb%C2%8A%C2%A0Bu%C2%B5P_%1ACck%12%C2%B5~%C3%B2%07%7F%C3%9F%C2%B2%C2%89%C2%9F%1F%3Eq%C2%84C%C3%8E%3F%20%C3%9D%C2%8D%1C9R%C2%8C%26%C2%AE%5E%C2%85'%C2%BF%16Z%C2%A4%C3%9F%C2%84%C2%839C%C3%83%C2%8F%C3%8F%C3%8C%C3%88T%C2%A2%C2%85%19%08%C2%8E%C2%83%C3%A4M%C3%B3%C3%B5zHLL%C2%84%C3%A2%C2%92%12%C2%BE%C3%B7%C3%86%08b%C3%82%C2%84%09%C2%95%C2%B6%C3%B9%C3%BB%C3%BB%C3%B3%0F%23%C2%90%23%23%22%C3%A0%C2%AB%C3%95%C2%AB%C3%99qd%C3%AE%C3%8D%04%3F%7F%3F%C3%90%C2%96I%C2%89%0A%C2%87%0CR%C3%82%C3%82%05%C3%BF3%C2%96%C3%B3%C2%B0%C2%BC%C3%AC%C3%8D%C2%85%22%C2%96%C3%8A%C3%AA%C3%95%C2%8D%C2%A9%C2%8E%C3%92Hh%C2%85%C2%BC%1F%12%02_%7F%C2%BD%1EF%C2%87%C2%85)%C3%ADNH%13%24%C3%A4%C2%98%C2%8B%C2%8AJ0%0Cu%C2%B6H%C2%BF%020%5B%13~0q%0EI%C2%9F%3E%7Dp%16%3D%14%00'%C2%86%C2%87%C3%83%C3%AD%C3%9B%C2%B7%C2%95%C3%B8%C2%97%1C%5B%3Er%C3%93%C2%88%11%C2%A1%10%15%15i%C3%92F%C2%91%04%C3%8D%C3%B8%C2%ACY%C2%B38%C2%9C%23%5D)))%C2%AC%C2%9B%C3%ADTJ%C2%BB%C3%A5LP%23%C2%81%C2%AB%C2%AC)C%C3%B9%0F%24%C3%AFm.%C2%83%06%0D%C2%82%C2%B4%C2%B44%C2%A5n.%C2%95%C2%8D%C2%A9J%C3%A4%C2%BE%C2%B4z%3D%C3%90j%C3%87!%C2%B8%C2%9D%3BwV%C3%9A%2F%C2%9C%3F%C2%AF%C3%94%C2%9B4mb%C2%B1~%15E%C2%88K%C3%B4%C3%BE%3D%C3%91%22z%C3%B6%C3%AC%C2%A9P%C3%83%C3%82E%0BA%C2%8F%20%C3%ABt6%C3%A8a%C3%A3a%5El%2C%C2%86F%C3%8F%C2%A0i%C2%B3f%18%C2%B6%2C%C3%A36G%C3%87%C3%86%C3%9C%C3%B6%C3%A9%C2%A7%C3%91P%5C%5C%C2%84%C2%B1%C2%AF%C2%9D%C3%B2%C2%92~%C3%BD%C3%BA%C2%89%C3%96%C2%86%C2%BA5L%0B%22%C2%B8%C3%84%C2%BD%12%C3%86%5C%C3%97%C2%82%C3%96%2C%C2%83r%C2%83%C3%AC%C3%AClt%C2%94%C2%A6V%C2%BAr%C3%A5%C3%8AJ%C3%AB%24%C3%94%C2%97%C3%86%C3%90%C3%98%C2%9A%C3%84%5C%C3%BF%23%0C%C3%8D222%60%C3%91%C2%82%05%18A%7D%C3%83e%C3%95%C2%97_r%C3%9B%C3%A8%C2%B01L%0F%C2%96%C3%A87%01X%C2%B6%24%C3%99%0A)%0A%C2%90%25--%C2%9D%C2%AF!!%C3%83a%C3%98%C2%B0%10%C2%98%C2%80%C3%9E%C3%BB%C3%BB%C3%AF%C2%93%60%22RD%06R%C2%8AhI%C2%83%C2%B9m%C3%AA%C3%94)%C3%9CF%C3%B1%C2%B2%2C%C2%9E%C3%92J%20%C3%9D%C2%A2%C3%95jT!x%C3%95%C3%B2%C3%9E%C2%A0%C3%B78%C3%86%5E%C2%B1%7C%C2%85%C3%89s%0FI%C2%9Fy%C2%9D%C2%84%C3%BA%C3%92%18%1Ak%C2%A9%C3%BE~%18)u%C3%AC%C3%98%11%C3%8E%C2%9D%3B%07%C3%AB%C3%A3%C3%A3%C2%B9P%16%C3%A7%1F%10%00%C3%A1%C2%93'Y%C2%AC%C3%9F%C2%94%C2%83%C2%AB%C3%A1%C2%B1b%C3%8CfHh%C2%B9%C3%93%2CR%C3%A9%C2%85%C2%B1%C2%A3%C2%BA%C2%8DB8%C2%B9%C2%8D%C3%AA%C3%A6%C2%8E%C3%87%1A%C3%B1%C3%AF%C3%AD%07%C3%A98%C2%B9%5B%C2%B6n%05%17%C3%94I%C2%94S%C2%9D%C2%AC%C3%85%04%C2%87%C3%BAR(Ec%C2%AD%C3%91%1F%C2%8D%C2%85%C3%82%C2%B1%07%0F%1F*V%C3%9E%0D%C3%A3%C3%BF6m%C3%9AX%C2%AC%C2%BF%C2%82%05%C2%AB%C3%B3%C3%BF%C3%8B*%C2%9E%C2%A1XX%C2%B4%C3%A4TN%1D)%0D%0E%0B%1B%0D%C3%9B%C2%B6mS%C3%9Arr%C2%B2%2B%C2%B4%C3%89rO%C3%A5%C2%88%C3%84w%C3%88%C2%A5%06%07%C3%94%C3%90%01%26%7F4%19%C2%9E%3D%7B%C3%8E%C3%91%C3%82%17s%C3%A7*%C3%8B%C2%9928*2-P%C3%9B%C3%A2%C2%B88%C3%AE%3B%C3%A6%C3%831%3C%C3%96%1A%C3%BD%C3%B5%C3%AB%C3%9B%C3%81p%C3%8CX%C3%83%C3%91%C3%A7P%192t(%3A%7C%07%C2%98%3Fo%C2%9E%C3%85%C3%BAM%2CX%0E%C3%B8iW%C2%8Cv%C3%8A%C3%88%C2%81%C3%89%12%11%11%C3%85%C2%99%C2%8E%5E%C2%9F%0F%C2%83%06%0F%C3%A6%C3%94%C3%B4%C3%8C%C2%993%C3%88%C2%BBNJ%5B%5E%C3%9E%C2%91%0Amr%C2%94q%16%C2%97%1C%09%C3%A96O0%C3%A49%C2%95%C3%AE*%C3%BC%C3%80%0E%C2%9E%C3%ADa%C3%86_%C2%A6%C3%83v%C3%8C*%C3%A31%C3%83%C3%9A%C2%8B%1C%C3%A9%C3%A5%C3%95%09'%C2%B6%1D~dC%C3%98%C2%B1%23%01%C3%9Fw%C2%96'%C2%B6%C2%81%7D%03%C2%98%12%C3%B1'%C3%A8%C3%AC%C3%ADU%C3%ABUR%C2%93~%C3%BD%C2%A9%C2%93u%C3%92%C2%AF%00L%1B%C3%A3%3A%C3%BCZZ%1E%C3%BB%C3%B7eAzz%C2%BA%C3%92i%C3%9C%C2%B8%C2%B1%40%C3%81%C2%93%3A%14%23%C2%8E%C2%9D%C2%8Ea%1C%C3%91%01%C3%91%C3%84w%C3%9F%25B%C2%89Y%C2%9B%C3%82%C3%A1%C2%A9%C2%A9%7C%C3%B5%C3%82T%C2%94%C2%80%C2%A5w%C2%89%7B%C3%87%C3%92f%C2%8F%20%02-%C2%88i%C2%9Ci%C2%AA%C2%89%C2%8E%C2%B5%C2%B3%C2%8F%17D%3AGB%C3%BE%C3%89%7C%C3%9EN%C2%A4%09%24%0A%23'L%7C%C3%A8%C3%A2%C3%A2%02%03%07%0F%04%C3%AFn%C3%9E%C3%90%C2%A2%C3%A5%C3%AF%C3%A8%00%C2%A1%C3%96%00%C2%BCn%C3%BD%C3%8AfO%C3%9E%C3%B1%3C%1Ch%07%C3%89%7B~%C2%80%C3%98%C2%B9%C2%B1%C2%AC%7C%C3%97%C2%AE%5DJ%C2%A0M%2F%C2%BAC%C2%A1%C2%98A%C2%8C%C2%A1%1A7n%C2%AC%C2%A4%C2%A9%05%05%05p%C3%A7%C3%8E%1DE%C2%A9%C2%BA-%15%C3%83%C2%A9%11%C3%83%C2%87%C2%B3eG%C3%8F%C2%8C%C2%86%C2%B1%1F%C2%8E%C3%A58%C2%BB%C2%B4%C3%B4%C2%A5%C2%B8%C3%B1S*ng%C3%B2%C3%BE%C2%B1%C2%B1%C3%B2%0D%1F%C3%85%17%14%15sVXb%16%C3%A4%C3%9Bc%0CK%1BK%C2%B5%5D%C2%B6U%C3%89%C3%AB%C3%90%C2%AF%00%C2%9C%7B%C3%B4%10%C3%8FLI%C3%89S%08%1D%16%C3%8A%C2%A0QJ%C2%98%C2%9A%C3%BA%234k%C3%96%C3%9C%C2%AA%1FL%C2%9C%1C%C2%84%C2%9E%C3%B9%C3%B8%C2%B1cl%C3%A9%C2%BB%13wC%C2%A3%C3%86%C2%8DDpKK%C2%B9%18%C3%A4%C2%BDbi%C3%B3%C2%BD%3A%C2%80%C3%BF%1BEqr%C3%A2%06%C2%B8%11%1A7j%04%1FGL%15s%C3%B3%C3%93%C2%A7!%3A%3A%C2%9A%C2%81%C2%B2%06%C3%9CHL%40%C3%B4R%C3%9A%3D!%7C%028%3B%3B%C2%89GIF%C2%A3%C2%B4%C3%91%C2%AE%02%C2%92v%C3%93%24%C2%8A%10%C3%9E%C2%A0%C2%839%C2%85%C2%83%C2%A3%C3%BE%3C%0D%C3%A3%C3%9B%C3%B1%10%C3%98%3B%10%06%0E%1A%08G%C3%B2%C2%8E%C3%82O%C3%A9%3FAR%C3%92%1E%C2%A6%C2%8B%C2%98%C2%98%C3%8F%C2%91%C3%B8%C3%9Dk%C2%A5%C2%94%C2%BC%C3%BA%C3%AC%C3%99%C2%B3%C3%A1%C3%9Bo%13%C3%99%3A%03%C3%9F%C3%AD%0DC%C2%87%0D%C3%A5%C3%BA%C2%B1%23%C3%87%60%C3%A3%C2%86M%26%C3%A7x2%C2%A0%22%07%C2%AB%5C%C3%9D%1Bt%00%C3%8Aq%C2%93%5Bk7!nI%C2%9Cp2%C3%BF%C2%B8%C2%90%C2%9C%C2%9A%22%200%C3%BC%1C%09_%08%0E%0E%16%C2%B6n%C3%9D*%14%17%15%09U%09%C2%B5Q%C2%9F%01%03%06%C3%B0%18%1A%C3%AB%C3%A1%C3%A9!%C3%ACI%C3%99%C3%83%3AW%C2%AFY%25%60%3C%C2%A9%C2%8E%C3%93%C3%9E%C3%B8%C2%A21%C2%B7%C2%95%C2%96%C2%BFo%093g%C3%BE%C2%95%0F%C3%B9n%C3%9E%C2%BA%0D%C3%AB%C3%96%C2%ACeK%26%2B%C2%A6%C3%8DvOOO%C3%9E%5B%C2%A8%C3%AC%C3%88%C3%A8%C3%80%C2%81%03p%1Eswy_%C2%82%2Cw%C3%9A%C3%B4(h%C3%97%C3%8E%C2%9D%C3%8F%C2%BBb%3E%C3%BB%1Cn%5C%C2%BFa%C2%95%05%C3%881%2F%C2%89%C3%BA4C%C2%AEWv%C3%BF%C2%AA%C3%9E%C2%A1%C2%BE%C2%AF%C2%93%05%C3%8B%C2%A55Z%C3%B2WkV%C2%A3%C3%95%C2%9D%40KN%16f%C3%8D%C2%9E)%C2%A0%C2%93%C3%A26%04Z%40p%C2%B1Ok%C3%81%C3%87%C3%87%C2%87%0B%C3%95%C3%A9%19%C2%B5Q%1F%C3%AA%1B5-JHJIb%1D%09%3B%13%C2%84%C3%B6%C3%AD%C3%9B%C3%97%C3%89%12H%C2%82%C2%82%C2%82%C2%B8%C3%A0G%C3%B33u%C2%9D%C2%AEto%C2%AD~y%C2%BC%5C%C3%8C%C2%9F%C3%89%C3%AF%C2%B1%C2%A2T%04X%069ni%C2%9Cp%5C%7F%5C%C3%88%C3%8E%3D(l%C3%9F%C2%B9%C2%9DA%C3%B3%C3%AD%C3%AE%2B%60%C3%82P%C2%A1%3F%3D%C2%A3%C2%B6%C2%A8%C3%A9Q%C3%9Cw%C3%BF%C3%81%2C%1EK%C2%B4PWpe%C2%80%C3%A9%23%C3%8D%C2%81%C2%94%3F%C2%BE.%C3%A0%C2%AA%C3%B5%C2%A8%C2%81T%C2%BFS0MA%C2%AD%C2%A7%08%C2%B5%10%5D%04%C3%B6%0E%C3%80%08%20%1C%C2%9A6u%C2%85%7F%C3%BF%C2%AB%08%1E%17%16r%C2%84%60(3%C2%98%C3%BC%7F%11%14%C2%B0Sp%C3%AE%C3%A2%C3%A2%0C%0D1%12y%C2%84%C2%B9%C3%BC%C3%AE%7F%C3%AE%C2%86%C3%8C%C2%8C%7DV%C3%93%C2%82y%1A%2F%2F%C3%93%C3%98%C3%98X%C2%93%25Km%C3%B2%C3%96g%5D%C2%84%C2%8E%C2%A1%C3%94%C3%BA%C3%95%C3%AF%24%C2%AA%C2%B0%C3%A6%1D%C2%9A%C2%9A%C3%BC5%C3%A5%C3%A1n%C2%984%C3%B4%C3%A8%C3%B9%0E%C3%B4%C3%B2%C3%B3%C3%A3%C2%9D~%07%7B%7Bi%3FW%C3%BE%40%C3%B1%23)%C3%8B%C2%A3%C3%A3%C2%95%C3%83%C2%B9%C2%87%C3%A1(F%0B%C2%B7%C2%91%C3%83)Ay%25%5E%18%C3%B5%C3%8B%07%C2%9DtT%C2%A4%3E%C3%B4%7C%15%00%C2%AB%C3%B9W%C3%96%C2%AF%C3%96k%C3%AD%3Bj%3C%0B*%C3%82%C3%AC%C3%A6%C3%8C%C3%A93%0C%C3%96%C3%BE%C2%AC%03%7C%C3%92Q%C3%95%11%C2%92%C2%B8%C3%AB_%04%C2%85%C2%8F%0B_%19%C2%B0%C3%A6N%C3%87%C3%BCD%C3%B9U8%20%19Ts%C3%BDj%C2%BDuzG%C2%8B%16-%06%C3%BE%2F%C2%85N%C2%BFe%C3%B9%C2%8F%00%03%00%C2%86%C2%8Et%C2%88%15ai%C2%A4%00%00%00%00IEND%C2%AEB%60%C2%82";
var image2 = group14.add("image", undefined, File.decode(image2_imgString), {
	name: "image2"
});

var statictext8 = group14.add("statictext", undefined, undefined, {
	name: "statictext8",
	multiline: true
});
statictext8.text = "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.";

var statictext9 = group14.add("statictext", undefined, undefined, {
	name: "statictext9",
	multiline: true
});
statictext9.text = "Anti-Static name and logo ©2025 James Zelasko. All rights reserved.";

palette.layout.layout(true);
palette.layout.resize();
palette.onResizing = palette.onResize = function() {
	this.layout.resize();
}









// ==================================================================================================================================================================
// Connections
// ==================================================================================================================================================================


CreateWindowButton.onClick = function() {
	app.beginUndoGroup("Dominion : Create Window");
	createWindows();
	app.endUndoGroup();
}

AutoSizeChildrenCheckbox.onClick = function() {
	togglePrioritizeCenter();
}

togglePrioritizeCenter();

function togglePrioritizeCenter() {
	if (AutoSizeChildrenCheckbox.value == 0) {
		PrioritizeCenterCheckbox.enabled = true;
	} else {
		PrioritizeCenterCheckbox.enabled = false;
	}
}


insetSlider.minvalue = -100;
insetSlider.maxvalue = 100;
insetSlider.value = 0;
insetTextbox.text = 0;

insetSlider.onChanging = function() {
	insetTextbox.text = Math.round(insetSlider.value);
}
insetTextbox.onChange = function() {
	updateXOffset();
}

function updateXOffset() {
	insetSlider.value = insetTextbox.text;
}


textureFitToWindowButton.onClick = function() {
	app.beginUndoGroup("Dominion : Fit Texture");
	fitTexture();
	app.endUndoGroup();
}
/*
transformMatrixButton.onClick = function() {
	createTransformMatrix();
}
*/

CreateMatteButton.onClick = function() {
	app.beginUndoGroup("Dominion : Create Matte");
	createWindowMatte();
	app.endUndoGroup();
}


GetParentButton.addEventListener('click', function() {
	selectParent();
}, false);
GetChildrenButton.addEventListener('click', function() {
	selectChildren();
}, false);
GetSiblingsButton.addEventListener('click', function() {
	selectSiblings();
}, false);
GetMatteButton.addEventListener('click', function() {
	selectMatte();
}, false);




TLNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("TL");
	app.endUndoGroup();
}, false);
TCNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("TC");
	app.endUndoGroup();
}, false);
TRNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("TR");
	app.endUndoGroup();
}, false);
CLNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("CL");
	app.endUndoGroup();
}, false);
CNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("C");
	app.endUndoGroup();
}, false);
CRNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("CR");
	app.endUndoGroup();
}, false);
BLNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("BL");
	app.endUndoGroup();
}, false);
BCNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("BC");
	app.endUndoGroup();
}, false);
BRNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Null");
	createNull("BR");
	app.endUndoGroup();
}, false);

CornerNullButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Nulls");
	createNull("TL");
	createNull("TR");
	createNull("BL");
	createNull("BR");
	app.endUndoGroup();
}, false);

CreateGradientVButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create V Gradient");
	createGradient("V");
	app.endUndoGroup();
}, false);
CreateGradientHButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create H Gradient");
	createGradient("H");
	app.endUndoGroup();
}, false);
CreateGradientD1Button.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Diag Gradient");
	createGradient("D1");
	app.endUndoGroup();
}, false);
CreateGradientD2Button.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Diag Gradient");
	createGradient("D2");
	app.endUndoGroup();
}, false);
CreateGradientRButton.addEventListener('click', function() {
	app.beginUndoGroup("Dominion : Create Random Gradient");
	createGradient("R");
	app.endUndoGroup();
}, false);

YouTubeButton.onClick = function() {
	openURL('https://www.youtube.com/@Anti-StaticTV');
}









function selectParent() {
	var sArray = app.project.activeItem.selectedLayers;
	if (sArray.length == 0) {
		alert("Select at least one Dominion Window.");
	} else {
		if (sArray.length == 1) {
			if (sArray[0].parent != null) {
				sArray[0].parent.selected = true;
				sArray[0].selected = false;
			}
		} else {
			var p = sArray[0].parent;
			var onep = true;
			for (var i = 0; i < sArray.length; i++) {
				var l = sArray[i];
				if (l.parent != p) {
					onep = false;
				}
			}
			if (onep) {
				deselectAllLayers();
				p.selected = true;
			} else {
				alert("Windows have more than one parent.");
			}
		}
	}
}

function selectChildren() {
	var sArray = app.project.activeItem.selectedLayers;
	if (sArray.length != 1) {
		alert("Select one Dominion Window.");
	} else {
		var p = sArray[0];
		for (var i = 1; i <= app.project.activeItem.numLayers; i++) {
			var cl = app.project.activeItem.layer(i);
			if (cl.parent == p) {
				if (isDominion(cl)) {
					cl.selected = true;
				}
			}
		}
		p.selected = false;
	}
}

function selectSiblings() {
	var sArray = app.project.activeItem.selectedLayers;
	if (sArray.length != 1) {
		alert("Select one Dominion Window.");
	} else {
		var sl = sArray[0];
		if (isDominion(sl)) {
			if (sl.parent != null) {
				var p = sl.parent;
				for (var i = 1; i <= app.project.activeItem.numLayers; i++) {
					var cl = app.project.activeItem.layer(i);
					if (cl.parent == p) {
						if (isDominion(cl)) {
							cl.selected = true;
						}
					}
				}
			}
		}
	}
}


function selectMatte() {
	var sArray = app.project.activeItem.selectedLayers;
	if (sArray.length == 1) {
		var sl = sArray[0];
		if (isDominion(sl)) {
			var m = findMatte(sl);
			if (m != null) {
				sl.selected = false;
				m.selected = true;
			} else {
				alert("No matte found!");
			}
		} else {
			alert("Select one Dominion Window.");
		}
	} else {
		alert("Select one Dominion Window.");
	}
}

function isDominion(l) {
	var tag = l.name.substr(0, 5);
	if (tag == "[DOM]") {
		return true;
	} else {
		return false;
	}
}

function findMatte(l) {
	var m = null;
	for (var i = 1; i <= app.project.activeItem.numLayers; i++) {
		var cl = app.project.activeItem.layer(i);
		var p = cl.parent;
		if (p instanceof ShapeLayer) {
			if (p == l) {
				if (cl.name.substr(0, 5) == "[-M-]") {
					m = cl;
					break;
				}
			}
		}
	}
	return m;
}

function createWindowMatte() {
	var m = null;
	for (var i = 0; i < app.project.activeItem.selectedLayers.length; i++) {
		var cl = app.project.activeItem.selectedLayers[i];
		if (isDominion(cl)) {
			m = findMatte(cl);
			if (m == null) {
				m = createMatte(cl);
			} else {
				//selectMatte(cl);
				alert("Matte already exists!");
			}
		}
	}
	return m;
}

/*
function createTransformMatrix(){
    var sLayers = app.project.activeItem.selectedLayers;
    for (var i = 0; i < sLayers.length; i++) {
        var cl = sLayers[i];
        var t = null;
        for (var x = 1; x <= cl.Effects.numProperties; x++) {
            if (cl.Effects(x).name == "Transform Matrix") {
                t = cl.Effects(x);
                break;
            }
        }
        if(t == null){
            t = cl.property("ADBE Effect Parade").addProperty("ADBE Geometry2");
            t.name = "Transform Matrix";
            t.property("ADBE Geometry2-0001").expression = 'var p = toWorld(content("Window").content("Window Rect").position);\rvar s = (content("Window").content("Window Rect").size);\rp+(s/2);';
            t.property("ADBE Geometry2-0002").expression = 'effect("Transform Matrix")("Anchor Point")';
        }else{
            alert("Transform Matrix already exists!");
        }
    }
}
*/

function createGradient(x) {
	var sLayers = app.project.activeItem.selectedLayers;
	for (var i = 0; i < sLayers.length; i++) {
		var cl = sLayers[i];
		if (isDominion(cl)) {
			var fillGroup = cl.content("Window").content("Dominion Gradient");
			if (fillGroup == null) {
				fillGroup = cl.content("Window").content("Window Rect").propertyGroup(1).addProperty("ADBE Vector Graphic - G-Fill");
				fillGroup.name = "Dominion Gradient";
			}
			var nx = x;
			if (x == "R") {
				var dir = ["V", "H", "D1", "D2"];
				var r = Math.floor(Math.random() * dir.length);
				nx = (r, dir[r]);
			}
			var s, e;
			switch (nx) {
				case "V":
					var s = '(content("Window").content("Window Rect").size/-2)+content("Window").content("Window Rect").position+[(content("Window").content("Window Rect").size[0]/2),0]';
					var e = '(content("Window").content("Window Rect").size/2)+content("Window").content("Window Rect").position-[(content("Window").content("Window Rect").size[0]/2),0]';
					break;
				case "H":
					var s = '(content("Window").content("Window Rect").size/-2)+content("Window").content("Window Rect").position+[0,(content("Window").content("Window Rect").size[1]/2)]';
					var e = '(content("Window").content("Window Rect").size/2)+content("Window").content("Window Rect").position-[0,(content("Window").content("Window Rect").size[1]/2)]';
					break;
				case "D1":
					var s = '(content("Window").content("Window Rect").size/-2)+content("Window").content("Window Rect").position+[content("Window").content("Window Rect").size[0],0]';
					var e = '(content("Window").content("Window Rect").size/2)+content("Window").content("Window Rect").position-[content("Window").content("Window Rect").size[0],0]';
					break;
				case "D2":
					var s = '(content("Window").content("Window Rect").size/-2)+content("Window").content("Window Rect").position';
					var e = '(content("Window").content("Window Rect").size/2)+content("Window").content("Window Rect").position';
					break;
				default:
			}
			if (fillGroup.property("ADBE Vector Grad Start Pt").expression == s) {
				fillGroup.property("ADBE Vector Grad Start Pt").expression = e;
				fillGroup.property("ADBE Vector Grad End Pt").expression = s;
			} else {
				fillGroup.property("ADBE Vector Grad Start Pt").expression = s;
				fillGroup.property("ADBE Vector Grad End Pt").expression = e;
			}
		}
	}
}


function createNull(pos) {
	if (app.project.activeItem.selectedLayers.length > 0) {
		var sLayers = app.project.activeItem.selectedLayers;
		for (var i = 0; i < sLayers.length; i++) {
			var cl = sLayers[i];
			if (isDominion(cl)) {
				var n = app.project.activeItem.layers.addNull();
				n.name = pos + "_" + cl.name;

				var layerControl = n.property("ADBE Effect Parade").addProperty("ADBE Layer Control");
				layerControl.property("ADBE Layer Control-0001").setValue(cl.index);

				var positionArray = ["TL", "TC", "TR", "CL", "C", "CR", "BL", "BC", "BR"];
				var positionDropDown = n.property("ADBE Effect Parade").addProperty("ADBE Dropdown Control");
				var temp = positionDropDown.property(1).setPropertyParameters(positionArray);
				temp.propertyGroup(1).name = "Position";

				if (pos == "TL") {
					temp.setValue(1);
				} else if (pos == "TC") {
					temp.setValue(2);
				} else if (pos == "TR") {
					temp.setValue(3);
				} else if (pos == "CL") {
					temp.setValue(4);
				} else if (pos == "C") {
					temp.setValue(5);
				} else if (pos == "CR") {
					temp.setValue(6);
				} else if (pos == "BL") {
					temp.setValue(7);
				} else if (pos == "BC") {
					temp.setValue(8);
				} else if (pos == "BR") {
					temp.setValue(9);
				}
				var insetSliderN = n.Effects.addProperty("ADBE Slider Control");
				insetSliderN.name = "Inset";
				insetSliderN.property(1).setValue(Number(insetTextbox.text));

                if(cl.parent!=null){
    				n.parent = cl.parent;
                }else{
                    n.parent = cl;
                }

				n.position.expression = '//Anti-Static Dominion\nvar t = effect("Layer Control")("Layer");\nvar c = effect("Position")("Menu");\nvar s = t.content("Window").content("Window Rect").size;\nvar p = t.content("Window").content("Window Rect").position;\nvar xo = effect("Inset")("Slider");\nvar yo = xo;\nvar tp = value;\nif(c==1){\n\ttp = p;\n}else if(c==2){\n\txo = 0;\n\ttp = p+[s[0],0]-[s[0]/2, 0];\n}else if(c==3){\n\txo *= -1;\n\ttp = p+[s[0],0];\n}else if(c==4){\n\tyo = 0;\n\ttp = p+[0, s[1]/2];\n}else if(c==5){\n\txo = yo = 0;\n\ttp = p+[s[0],s[1]]/2;\n}else if(c==6){\n\txo *= -1;\n\tyo = 0;\n\ttp = p+[s[0],0]+[0, s[1]/2];\n}else if(c==7){\n\tyo *= -1;\n\ttp = p+[0, s[1]];\n}else if(c==8){\n\txo = 0;\n\tyo *= -1;\n\ttp = p+[0, s[1]]+[s[0]/2, 0];\n}else{\n\txo *= -1;\n\tyo *= -1;\n\ttp = p+[s[0], s[1]];\n}\ntp+[xo,yo];';

                n.label = nullLabelDropDown.selection.index;
                n.moveBefore(cl);
                n.selected = false;

				cl.selected = true;
			}
		}
        for (var i = 0; i < sLayers.length; i++) {
            var cl = sLayers[i].selected=true;
        }
	} else {
		alert("Select a Dominion window.");
	}
}

function fitTexture() {
	if (app.project.activeItem.selectedLayers.length == 2) {
		var tempLayers = app.project.activeItem.selectedLayers;
		var l = null;
		var p = null;

		for (var i = 0; i < tempLayers.length; i++) {
			var cl = tempLayers[i];
			if (isDominion(cl)) {
				p = cl;
			} else {
				l = cl;
			}
		}
		if (p != null && l != null && !isDominion(l)) {
			var m = findMatte(p);
			if (m == null) {
				m = createWindowMatte(p);
			}

			var maintainAspectCheck;
			for (var i = 1; i <= l.Effects.numProperties; ++i) {
				if (l.Effects(i).name == "Maintain Aspect Ratio") {
					maintainAspectCheck = l.Effects(i);
					break;
				}
			}

			l.parent = p;
			l.transform.scale.expression = 'var t = thisLayer.parent;\nvar ts = t.content("Window").content("Window Rect").size;\nvar sx = (ts[0]/width)*100;\nvar sy = (ts[1]/height)*100;\nvar fx = 100;\nvar fy = 100;\nvar ch = effect("Maintain Aspect Ratio")("Checkbox");\nif(!ch.value){\n\tfx = sx;\n\tfy = sy;\n}else{\n\tif(sx>sy){\n\t\tfx = fy = sx;\n\t}else{\n\t\tfx = fy = sy;\n\t}\n}\n[fx,fy];';
			l.transform.position.expression = '//Anti-Static Dominion\nvar t = thisLayer.parent;\nvar s = t.content("Window").content("Window Rect").size;\nvar p = t.content("Window").content("Window Rect").position;\nvar tp = p+[s[0],s[1]]/2;\ntp;'
			if (maintainAspectCheck == null) {
				maintainAspectCheck = l.Effects.addProperty("ADBE Checkbox Control");
				maintainAspectCheck.name = "Maintain Aspect Ratio";
			}
			maintainAspectCheck.property(1).setValue(AspectCheckbox.value);
			l.setTrackMatte(m, TrackMatteType.ALPHA);
		} else {
			alert("Select one Dominion Window and one texture.");
		}
	} else {
		alert("Select one Dominion Window and one texture.");
	}
}

function createMatte(l) {
	var m = l.duplicate();
	m.parent = l;
	m.name = l.name.replace("[DOM]", "[-M-]");
	m.content("Window").content("Window Rect").size.expression = 'parent.content("Window").content("Window Rect").size';
	m.content("Window").content("Window Rect").position.expression = 'parent.content("Window").content("Window Rect").position';
	m.content("Window").content("Window Rect").roundness.expression = 'parent.content("Window").content("Window Rect").roundness';
	var fillGroup = m.property("Contents").addProperty("ADBE Vector Graphic - Fill");
	fillGroup.property("Color").setValue([0, 1, 0]);
	m.label = matteLabelDropDown.selection.index;
	return m;
}

function createWindows() {
	if (app.project.activeItem.selectedLayers.length > 0) {
		var tempLayers = app.project.activeItem.selectedLayers;
		for (var i = 0; i < tempLayers.length; i++) {
			var pl = tempLayers[i];
			if (isDominion(pl)) {
				for (var x = 0; x < Number(ChildrenTextbox.text); x++) {
					createWindow(pl);
				}
			}
		}
	} else {
		createWindow(null);
	}
}

function createWindow(p) {
	var shapeLayer = app.project.activeItem.layers.addShape();
	if (p != null) {
		shapeLayer.parent = p;
		shapeLayer.property("Transform").property("position").setValue([0, 0]);
		shapeLayer.property("Transform").property("rotation").setValue(0);
	}
	shapeLayer.name = "[DOM] Window_" + checkName("[DOM] Window_");
	var shapeGroup = shapeLayer.property("Contents").addProperty("ADBE Vector Group");
	shapeGroup.name = "Window";
	var myRect = shapeGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
	myRect.name = "Window Rect";
	myRect.property("ADBE Vector Rect Size").setValue([app.project.activeItem.width - 200, app.project.activeItem.height - 200]);

	var paddingSlider = shapeLayer.Effects.addProperty("ADBE Slider Control");
	paddingSlider.name = "Padding";
	paddingSlider.property(1).setValue(Number(PaddingTextbox.text));

	var orientationDropDown_array = ["Row", "Col"];
	var orientationDropDown = shapeLayer.Effects.addProperty("ADBE Dropdown Control");
	var temp = orientationDropDown.property(1).setPropertyParameters(orientationDropDown_array);
	temp.propertyGroup(1).name = "Orientation";
	temp.setValue(OrientationDropDown.selection.index + 1);


	var percentageSlider = shapeLayer.Effects.addProperty("ADBE Slider Control");
	percentageSlider.name = "Percentage";
	percentageSlider.property(1).setValue(100 / Number(ChildrenTextbox.text));

	var scaleString = '//Anti-Static Dominion\nvar tag = thisLayer.name.substr(0, 5);\nvar parentLayer;\nvar g1 = thisLayer.effect("Padding")("Slider");\nvar finalSize = value;\n\nif (tag == "[DOM]") {\n\tvar childrenArray = [];\n\tvar id = 0;\n\tif (thisLayer.hasParent) {\n\t\tparentLayer = thisLayer.parent;\n\t\tchildrenArray = findAllChildren(thisLayer);\n\n\t\tvar or = parentLayer.effect("Orientation")("Menu");\n\t\tvar p = parentLayer.effect("Padding")("Slider");\n\t\tvar ps = parentLayer.content("Window").content("Window Rect").size;\n\t\tvar valuePercentage = 1.0;\n\n\t\tif (childrenArray.length == 1) { //if there is only one child...\n\t\t\tif (or == 2) {\n\t\t\t\tfinalSize = ps - [p * 2, p * 2];\n\t\t\t} else {\n\t\t\t\tfinalSize = ps - [p * 2, p * 2];\n\t\t\t}\n\t\t} else { //if there is more than one child...\n\t\t\tif(!parentLayer.effect("Auto-Size Children")("Checkbox").value){\n\t\t\t\tif (parentLayer.effect("Prioritize Center")("Checkbox").value) {\n\t\t\t\t\tif (childrenArray.length % 2 == 0) {\n\t\t\t\t\t\t//Number of siblings is even.\n\t\t\t\t\t\tif (id == (childrenArray.length / 2) || id == (childrenArray.length / 2) + 1) {\n\t\t\t\t\t\t\t//these two are the center siblings\n\t\t\t\t\t\t\tvaluePercentage = effect("Percentage")("Slider") / 100;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t//add the two center sibling sizes and divide up what is left over.\n\t\t\t\t\t\t\tvar padd = 0;\n\t\t\t\t\t\t\tfor (var k = 0; k < childrenArray.length; k++) {\n\t\t\t\t\t\t\t\tvar c = childrenArray.length / 2;\n\t\t\t\t\t\t\t\tif (k + 1 == c || k + 1 == c + 1) {\n\t\t\t\t\t\t\t\t\tpadd += childrenArray[k][1];\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvaluePercentage = ((100 - padd) / (childrenArray.length - 2)) / 100;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif(childrenArray.length==2){\n\t\t\t\t\t\t\tvaluePercentage = .5;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\t//Number of siblings is odd.\n\t\t\t\t\t\tif (id == Math.ceil(childrenArray.length / 2)) {\n\t\t\t\t\t\t\t//this is the center sibling\n\t\t\t\t\t\t\tvaluePercentage = effect("Percentage")("Slider") / 100;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t//find center siblings size and divide up what is left over.\n\t\t\t\t\t\t\tvar padd = 0;\n\t\t\t\t\t\t\tfor (var k = 0; k < childrenArray.length; k++) {\n\t\t\t\t\t\t\t\tif (k + 1 == Math.ceil(childrenArray.length / 2)) {\n\t\t\t\t\t\t\t\t\tpadd += childrenArray[k][1];\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvaluePercentage = ((100 - padd) / (childrenArray.length - 1)) / 100;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tif (id != childrenArray.length) { //if this is not the last sibling get its size from the its percentageSlider.\n\t\t\t\t\t\tvaluePercentage = effect("Percentage")("Slider") / 100;\n\t\t\t\t\t} else { //if this is the last sibling, give it whatever percentage is left over.\n\t\t\t\t\t\tvar padd = 0;\n\t\t\t\t\t\tfor (var k = 0; k < childrenArray.length; k++) {\n\t\t\t\t\t\t\tif (k < (id - 1)) {\n\t\t\t\t\t\t\t\tpadd += childrenArray[k][1];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tvaluePercentage = 1 - (padd / 100);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}else{\n\t\t\t\t//if Auto-Size Children is checked...\n\t\t\t\tvaluePercentage = 1/childrenArray.length;\n\t\t\t}\n\t\t\t//\n\t\t\t//\n\t\t\t//set final size...\n\t\t\tif (or == 2) {\n\t\t\t\t//[valuePercentage, valuePercentage];\n\t\t\t\tfinalSize = [ps[0] * valuePercentage, ps[1]] - [(p * (childrenArray.length + 1)) * valuePercentage, p * 2];\n\t\t\t} else {\n\t\t\t\t//[valuePercentage, valuePercentage];\n\t\t\t\t//valuePercentage = .25;\n\t\t\t\tfinalSize = [ps[0], ps[1] * valuePercentage] - [p * 2, (p * (childrenArray.length + 1)) * valuePercentage];\n\t\t\t}\n\t\t}\n\t} else {\n\t\tfinalSize = value;\n\t}\n} else if (tag == "[-M-]") {\n\tfinalSize = parent.content("Window").content("Window Rect").size;\n} else {\n\tfinalSize = value;\n}\n\nfunction findAllChildren(l){\n\tvar tempArray = [];\n\tfor (var i = 1; i <= thisComp.numLayers; i++) {\n\t\tvar cl = thisComp.layer(i);\n\t\tvar cltag = cl.name.substr(0, 5);\n\t\tif (cl.hasParent && cltag == "[DOM]") {\n\t\t\tif (cl.parent == l.parent) {\n\t\t\t\tif (cl.inPoint <= time && cl.outPoint > time) {\n\t\t\t\t\ttempArray.push([cl, cl.effect("Percentage")("Slider")]);\n\t\t\t\t\tif (thisLayer.name == cl.name) {\n\t\t\t\t\t\tid = tempArray.length;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn tempArray;\n}\n\n\nfinalSize;\n';
	myRect.property("ADBE Vector Rect Size").expression = scaleString;

	var positionString = '//Anti-Static Dominion\nvar tag = thisLayer.name.substr(0, 5);\nvar parentLayer;\nvar finalPos = value;\n\nif (tag == "[DOM]") {\n\tvar childrenArray = [];\n\tvar id = 0;\n\tif (thisLayer.hasParent) {\n\t\tparentLayer = thisLayer.parent;\n\t\tchildrenArray = findAllChildren(thisLayer);\n\n\t\tvar ps = parentLayer.content("Window").content("Window Rect").size;\n\t\tvar pp = parentLayer.content("Window").content("Window Rect").position;\n\t\tvar or = parentLayer.effect("Orientation")("Menu");\n\t\tvar p = parentLayer.effect("Padding")("Slider");\n\t\tvar pw = p;\n\t\tvar ph = p;\n\n\t\tif(or == 2){\n\t\t\tif(ps[0] < (p*(childrenArray.length+1))){\n\t\t\t\tpw = p-(((p*(childrenArray.length+1))-ps[0])/(childrenArray.length+1));\n\t\t\t}\n\t\t\tif(ps[1] < p*2){\n\t\t\t\tph = p-(p-(ps[1]/2));\n\t\t\t}\n\t\t\t\n\t\t}else{\n\t\t\tif(ps[0] < p*2){\n\t\t\t\tpw = p-(p-(ps[0]/2));\n\t\t\t}\n\t\t\tif(ps[1] < (p*(childrenArray.length+1))){\n\t\t\t\tph = p-(((p*(childrenArray.length+1))-ps[1])/(childrenArray.length+1));\n\t\t\t}\n\t\t}\n\n\t\tvar TL = pp + [pw, ph];\n\t\tvar v = 0;\n\n\n\t\tif (childrenArray.length == 1) {\n\t\t\tfinalPos = pp + [pw, ph];\n\t\t} else {\n\t\t\t//if there is more than one child...\n\t\t\tif (or == 2) {\n\t\t\t\t//orientation COL\n\t\t\t\tif (id == 1) {\n\t\t\t\t\t//if this IS the first child...\n\t\t\t\t\tv = content("Window").content("Window Rect").size[0];\n\t\t\t\t\t//finalPos = TL + [(v + pw) * (id - 1), 0];\n\t\t\t\t\tfinalPos = TL;\n\t\t\t\t} else {\n\t\t\t\t\t//if this is not the first child...\n\t\t\t\t\tvar padd = 0;\n\t\t\t\t\tfor (var k = 0; k < childrenArray.length; k++) {\n\t\t\t\t\t\tif (k < (id - 1)) {\n\t\t\t\t\t\t\tpadd += childrenArray[k][0].content("Window").content("Window Rect").size[0];\n\t\t\t\t\t\t\tpadd += pw;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfinalPos = TL + [padd, 0];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\t//orientation ROW\n\t\t\t\tif (id == 1) {\n\t\t\t\t\t//if this IS the first child...\n\t\t\t\t\tv = content("Window").content("Window Rect").size[1];\n\t\t\t\t\t//finalPos = TL + [0, (v + ph) * (id - 1)];\n\t\t\t\t\tfinalPos = TL;\n\t\t\t\t} else {\n\t\t\t\t\t//if this is not the first child...\n\t\t\t\t\tvar padd = 0;\n\t\t\t\t\tfor (var k = 0; k < childrenArray.length; k++) {\n\t\t\t\t\t\tif (k < (id - 1)) {\n\t\t\t\t\t\t\tpadd += childrenArray[k][0].content("Window").content("Window Rect").size[1];\n\t\t\t\t\t\t\tpadd += ph;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tfinalPos = TL + [0, padd];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t} else {\n\t\tfinalPos = content("Window").content("Window Rect").size/-2;\n\t}\n} else if (tag == "[-M-]") {\n\tif (thisLayer.hasParent) {\n\t\tfinalPos = parent.content("Window").content("Window Rect").position;\n\t}\n} else {\n\tfinalPos = value;\n}\n\nfunction findAllChildren(l){\n\tvar tempArray = [];\n\tfor (var i = 1; i <= thisComp.numLayers; i++) {\n\t\tvar cl = thisComp.layer(i);\n\t\tvar cltag = cl.name.substr(0, 5);\n\t\tif (cl.hasParent && cltag == "[DOM]") {\n\t\t\tif (cl.parent == l.parent) {\n\t\t\t\tif (cl.inPoint <= time && cl.outPoint > time) {\n\t\t\t\t\ttempArray.push([cl, cl.effect("Percentage")("Slider")]);\n\t\t\t\t\tif (thisLayer.name == cl.name) {\n\t\t\t\t\t\tid = tempArray.length;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn tempArray;\n}\n\n\n\nfinalPos;';
	myRect.property("ADBE Vector Rect Position").expression = positionString;

	var anchorString = 'content("Window").content("Window Rect").size/-2';
	shapeLayer.property("ADBE Root Vectors Group").property("ADBE Vector Group").property("ADBE Vector Transform Group").property("ADBE Vector Anchor").expression = anchorString;

	var fillGroup = shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
	//fillGroup.property("Color").setValue([0.5,0.5,0.5]);
	fillGroup.enabled = false;

	var strokeGroup = shapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
	strokeGroup.property("Stroke Width").setValue(3);
	//strokeGroup.property("Color").setValue([0.5,0.5,0.5]);

	var autoSizeChildrenCheck = shapeLayer.Effects.addProperty("ADBE Checkbox Control");
	autoSizeChildrenCheck.name = "Auto-Size Children";
	autoSizeChildrenCheck.property(1).setValue(AutoSizeChildrenCheckbox.value);

	var prioritizeCenterCheck = shapeLayer.Effects.addProperty("ADBE Checkbox Control");
	prioritizeCenterCheck.name = "Prioritize Center";
	prioritizeCenterCheck.property(1).setValue(PrioritizeCenterCheckbox.value);

	var inheritRoundnessCheck = shapeLayer.Effects.addProperty("ADBE Checkbox Control");
	inheritRoundnessCheck.name = "Inherit Roundness";
	inheritRoundnessCheck.property(1).setValue(InheritRoundnessCheckbox.value);

	var roundnessString = 'if(effect("Inherit Roundness")("Checkbox").value && thisLayer.hasParent){\n\tvar p = parent.effect("Padding")("Slider");\n\tparent.content("Window").content("Window Rect").roundness-p;\n}else{\n\tvalue;\n}';
	shapeLayer.content("Window").content("Window Rect").roundness.expression = roundnessString;

	var opacityString = '';
}

function checkName(myStr) {
	var myComp = app.project.activeItem;
	var maxNum = 0;
	for (var i = 1; i <= myComp.numLayers; i++) {
		if (myComp.layer(i).name.indexOf(myStr) == 0) {
			maxNum = Math.max(maxNum, parseInt(myComp.layer(i).name.split("_")[1], 10));
		}
	}
	return (maxNum + 1);
}

function deselectAllLayers() {
	var sArray = app.project.activeItem.selectedLayers
	for (var i = 0; i < sArray.length; i++) {
		sArray[i].selected = false;
	}
}
