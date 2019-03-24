(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(t,e,n){t.exports=n(277)},142:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){},277:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(24),o=n.n(s),l=(n(142),n(48)),r=n(49),u=n(52),c=n(50),m=n(54),d=(n(143),n(144),n(283)),h=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement(d.a,{onClick:function(){return t.props.playNote(t.props.note)}},this.props.text)}}]),e}(i.Component),p=n(284),y=n(282),S=n(285),E=n(126),C=n.n(E),N=[40,47,52,55,59,64],b=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(c.a)(e).call(this,t))).playNote=function(t){n.midiSounds.playChordNow(3,[t],.5)},n.state={selectedInstrument:260},n}return Object(m.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.setState({initialized:!0})}},{key:"onSelectInstrument",value:function(t){var e=t.target,n=e.options[e.selectedIndex].getAttribute("value");this.setState({selectedInstrument:n}),this.midiSounds.cacheInstrument(n)}},{key:"createSelectItems",value:function(){if(this.midiSounds){if(!this.items){this.items=[];for(var t=0;t<this.midiSounds.player.loader.instrumentKeys().length;t++)this.items.push(a.a.createElement("option",{key:t,value:t},t+0+". "+this.midiSounds.player.loader.instrumentInfo(t).title))}return this.items}}},{key:"playCurSingle",value:function(){this.midiSounds.playChordNow(this.state.selectedInstrument,[57],2.5)}},{key:"playCurChord",value:function(){this.midiSounds.playChordNow(this.state.selectedInstrument,N,2.5)}},{key:"playCurDown",value:function(){this.midiSounds.playStrumDownNow(this.state.selectedInstrument,N,2.5)}},{key:"playCurUp",value:function(){this.midiSounds.playStrumUpNow(this.state.selectedInstrument,N,2.5)}},{key:"playCurSnap",value:function(){this.midiSounds.playSnapNow(this.state.selectedInstrument,N,2.5)}},{key:"playCurStrings",value:function(){this.midiSounds.playChordAt(this.midiSounds.contextTime()+0,this.state.selectedInstrument,[40],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+.5,this.state.selectedInstrument,[45],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+1,this.state.selectedInstrument,[50],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+1.5,this.state.selectedInstrument,[55],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+2,this.state.selectedInstrument,[59],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+2.5,this.state.selectedInstrument,[64],1)}},{key:"playCurBass",value:function(){this.midiSounds.playChordAt(this.midiSounds.contextTime()+0,this.state.selectedInstrument,[28],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+.5,this.state.selectedInstrument,[33],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+1,this.state.selectedInstrument,[38],1),this.midiSounds.playChordAt(this.midiSounds.contextTime()+1.5,this.state.selectedInstrument,[43],1)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement(p.a,{inverted:!0},a.a.createElement(y.a,{text:!0},a.a.createElement(S.a,{as:"h1",content:"React Midi Player demo",inverted:!0,style:{fontWeight:"normal",marginBottom:0,marginTop:"1.5em"}}),a.a.createElement(h,{note:"58",text:"Bb",playNote:this.playNote}),a.a.createElement(h,{note:"59",text:"B",playNote:this.playNote}),a.a.createElement(h,{note:"60",text:"C",playNote:this.playNote}),a.a.createElement(h,{note:"61",text:"C#",playNote:this.playNote}),a.a.createElement(h,{note:"62",text:"D",playNote:this.playNote}),a.a.createElement(h,{note:"63",text:"Eb",playNote:this.playNote}),a.a.createElement(h,{note:"64",text:"E",playNote:this.playNote}),a.a.createElement(h,{note:"65",text:"F",playNote:this.playNote}),a.a.createElement(h,{note:"66",text:"F#",playNote:this.playNote}),a.a.createElement(h,{note:"67",text:"G",playNote:this.playNote}),a.a.createElement(h,{note:"68",text:"G#",playNote:this.playNote}),a.a.createElement(h,{note:"69",text:"A",playNote:this.playNote}),a.a.createElement(h,{note:"70",text:"Bb",playNote:this.playNote}),a.a.createElement(h,{note:"71",text:"B",playNote:this.playNote}),a.a.createElement(h,{note:"72",text:"C'",playNote:this.playNote}),a.a.createElement("p",{className:"App-intro"},"Select instrument and press a button."),a.a.createElement("p",null,a.a.createElement("select",{value:this.state.selectedInstrument,onChange:this.onSelectInstrument.bind(this)},this.createSelectItems())),a.a.createElement("p",null,a.a.createElement("button",{onClick:this.playCurSingle.bind(this)},"Single E"),a.a.createElement("button",{onClick:this.playCurChord.bind(this)},"Chord Em"),a.a.createElement("button",{onClick:this.playCurDown.bind(this)},"Down Em"),a.a.createElement("button",{onClick:this.playCurUp.bind(this)},"Up Em"),a.a.createElement("button",{onClick:this.playCurSnap.bind(this)},"Snap Em"),a.a.createElement("button",{onClick:this.playCurStrings.bind(this)},"Guitar Strings"),a.a.createElement("button",{onClick:this.playCurBass.bind(this)},"Bass Strings")),a.a.createElement("p",null,"Component"),a.a.createElement(C.a,{ref:function(e){return t.midiSounds=e},appElementName:"root",instruments:[this.state.selectedInstrument]}),a.a.createElement("hr",null),a.a.createElement("p",null,"Sources: ",a.a.createElement("a",{href:"https://www.npmjs.com/package/midi-sounds-react"},"https://www.npmjs.com/package/midi-sounds-react")))))}}]),e}(i.Component);n(276),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.9291e136.chunk.js.map