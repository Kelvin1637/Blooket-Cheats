/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tsetDefense.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");var e=document.createElement("iframe"),e=(document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))),4)),o=Object.values(document.querySelector('[id*="app"] > div > div'))[1].children[0]._owner["stateNode"];o.setState({numDefense:e}),o.isTeam?o.props.liveGameController.setVal({path:`a/${o.props.client.name}/d`,val:e}):o.props.liveGameController.setVal({path:`c/${o.props.client.name}/d`,val:e})})();