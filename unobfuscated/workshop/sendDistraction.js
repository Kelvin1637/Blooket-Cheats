/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    let { stateNode } = Object.values(document.querySelector('[id*="app"] > div > div'))[1].children[0]._owner;
    let distractions = { c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" };
    let val = Object.keys(distractions)[Math.floor(Math.random() * Object.keys(distractions).length)];
    stateNode.safe = true;
    stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
    alert(`Sent a ${distractions[val]} distraction`);
})();