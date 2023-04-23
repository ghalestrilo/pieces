// msg.on('/test', () => {})

// https://editor.p5js.org/Jaesar/sketches/TGyEC6OYB
s0.currentTime = 0

msg.setPort(3333)

msg.on('/ely', (params) => {
  const index = parseInt(params[0]) + 12
  // setTimeout(() => s0.clear(), 160)
  // s0.clear()
  // const name = idx => `/Users/admin/Documents/PROJECTS/Include/MISC-Alvenaria-Ely-Takes/Include-Alvernaria-Videos-Ely/Ely-Live-${idx}.mov`
  const name = idx => `/Users/admin/Movies/Ely-Pife-${idx}.mp4`
  s0.initVideo(name(index))
})

src(s0).repeat(2,1).out()

src(s0).scale(3,2).out()

src(time => s0).scale(3,2).out()


(
  n = NetAddr("127.0.0.1", 3333);
  ~elychan=15.0;
  ~dirt.receiveAction = { |e|
    // e.at(\midichan).postln();
    if ((e.at(\s)==\loopback && e.at(\midichan)==~elychan), {
      e.postln();
      n.sendMsg("/ely", e.at(\n));
    }, {} );
  };
)



// \ely -> \loopback, check midichan
// n = NetAddr("127.0.0.1", 3333);
// ~dirt.receiveAction = { |e| if ( (e.at(\s)==\ely), { n.sendMsg("/bd", e.at(\cycle)); }, {} ); }; )




(
  () => {
  const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
  allElements.push(document);
  allElements.push(window);
  const types = [];
  for (let ev in window) {
    if (/^on/.test(ev)) types[types.length] = ev;
  }
  let elements = [];
  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    for (let j = 0; j < types.length; j++) {
      if (typeof currentElement[types[j]] === 'function') {
        elements.push({
          "node": currentElement,
          "type": types[j],
          "func": currentElement[types[j]].toString(),
        });
      }
    }
  }
  return elements.sort(function(a,b) {
    return a.type.localeCompare(b.type);
  });
}
)()
