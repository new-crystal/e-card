(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"moon_atlas_1", frames: [[0,0,685,650]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.e_card_moon = function() {
	this.initialize(ss["moon_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.e_card_red_background = function() {
	this.initialize(img.e_card_red_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2250,2250);


(lib.e_card_text = function() {
	this.initialize(img.e_card_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2250,2250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.심볼1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.e_card_moon();
	this.instance.setTransform(0,0,0.5839,0.6154);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼1, new cjs.Rectangle(0,0,400,400), null);


// stage content:
(lib.무제2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.심볼1();
	this.instance.setTransform(12.75,327.75,0.625,0.625,0,0,0,187,199.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:200,regY:200,x:26,y:321.65},0).wait(1).to({x:31.15,y:315.4},0).wait(1).to({x:36.3,y:309.3},0).wait(1).to({x:41.5,y:303.3},0).wait(1).to({x:46.75,y:297.4},0).wait(1).to({x:52.1,y:291.6},0).wait(1).to({x:57.45,y:285.85},0).wait(1).to({x:62.85,y:280.25},0).wait(1).to({x:68.3,y:274.7},0).wait(1).to({x:73.8,y:269.3},0).wait(1).to({x:79.3,y:263.95},0).wait(1).to({x:84.9,y:258.7},0).wait(1).to({x:90.55,y:253.55},0).wait(1).to({x:96.2,y:248.5},0).wait(1).to({x:101.95,y:243.6},0).wait(1).to({x:107.7,y:238.75},0).wait(1).to({x:113.55,y:233.95},0).wait(1).to({x:119.4,y:229.3},0).wait(1).to({x:125.25,y:224.75},0).wait(1).to({x:131.2,y:220.3},0).wait(1).to({x:137.2,y:215.9},0).wait(1).to({x:143.25,y:211.65},0).wait(1).to({x:149.35,y:207.45},0).wait(1).to({x:155.5,y:203.4},0).wait(1).to({x:161.7,y:199.4},0).wait(1).to({x:167.9,y:195.5},0).wait(1).to({x:174.2,y:191.75},0).wait(1).to({x:180.5,y:188.05},0).wait(1).to({x:186.9,y:184.45},0).wait(1).to({x:193.3,y:180.95},0).wait(1).to({x:199.75,y:177.55},0).wait(1).to({x:206.3,y:174.2},0).wait(1).to({x:212.85,y:171},0).wait(1).to({x:219.45,y:167.9},0).wait(1).to({x:226.1,y:164.85},0).wait(1).to({x:232.8,y:161.95},0).wait(1).to({x:239.55,y:159.1},0).wait(1).to({x:246.3,y:156.4},0).wait(1).to({x:253.15,y:153.75},0).wait(1).to({x:260.05,y:151.2},0).wait(1).to({x:266.95,y:148.75},0).wait(1).to({x:273.95,y:146.4},0).wait(1).to({x:280.95,y:144.15},0).wait(1).to({x:288,y:142},0).wait(1).to({x:295.15,y:139.95},0).wait(1).to({x:302.3,y:138},0).wait(1).to({x:309.5,y:136.1},0).wait(1).to({x:316.75,y:134.35},0).wait(1).to({x:324.05,y:132.65},0).wait(1).to({x:331.4,y:131.1},0).wait(1).to({x:338.8,y:129.6},0).wait(1).to({x:346.25,y:128.2},0).wait(1).to({x:353.7,y:126.95},0).wait(1).to({x:361.25,y:125.75},0).wait(1).to({x:368.8,y:124.7},0).wait(1).to({x:376.45,y:123.7},0).wait(1).to({x:384.1,y:122.8},0).wait(1).to({x:391.85,y:121.95},0).wait(1).to({x:399.6,y:121.25},0).wait(1).to({x:407.4,y:120.65},0).wait(1).to({x:415.25,y:120.1},0).wait(1).to({x:423.15,y:119.7},0).wait(1).to({x:431.1,y:119.35},0).wait(1).to({x:439.1,y:119.15},0).wait(1).to({x:447.15,y:119},0).wait(1).to({x:455.25,y:118.95},0).wait(1).to({x:463.4,y:119},0).wait(1).to({x:471.55,y:119.15},0).wait(1).to({x:479.8,y:119.4},0).wait(1).to({x:488.1,y:119.75},0).wait(1).to({x:496.4,y:120.2},0).wait(1).to({x:504.8,y:120.75},0).wait(1).to({x:513.2,y:121.35},0).wait(1).to({x:521.65,y:122.1},0).wait(1).to({x:530.15,y:122.95},0).wait(1).to({x:538.75,y:123.85},0).wait(1).to({x:547.35,y:124.85},0).wait(1).to({x:556,y:125.95},0).wait(1).to({x:564.7,y:127.15},0).wait(1).to({x:573.45,y:128.45},0).wait(1).to({x:582.25,y:129.85},0).wait(1).to({x:591.05,y:131.35},0).wait(1).to({x:599.95,y:132.95},0).wait(1).to({x:608.9,y:134.65},0).wait(1).to({x:617.85,y:136.45},0).wait(1).to({x:626.9,y:138.35},0).wait(1).to({x:636,y:140.3},0).wait(1).to({x:645.1,y:142.4},0).wait(1).to({x:654.25,y:144.55},0).wait(1));

	// 레이어_1
	this.instance_1 = new lib.e_card_text();
	this.instance_1.setTransform(0,0,0.3555,0.3555);

	this.instance_2 = new lib.e_card_red_background();
	this.instance_2.setTransform(0,0,0.3555,0.3555);

	this.instance_3 = new lib.e_card_text();
	this.instance_3.setTransform(0,0,0.3555,0.3555);

	this.instance_4 = new lib.e_card_red_background();
	this.instance_4.setTransform(0,0,0.3555,0.3555);

	this.instance_5 = new lib.e_card_text();
	this.instance_5.setTransform(0,0,0.3555,0.3555);

	this.instance_6 = new lib.e_card_red_background();
	this.instance_6.setTransform(0,0,0.3555,0.3555);

	this.instance_7 = new lib.e_card_text();
	this.instance_7.setTransform(0,0,0.3555,0.3555);

	this.instance_8 = new lib.e_card_red_background();
	this.instance_8.setTransform(0,0,0.3555,0.3555);

	this.instance_9 = new lib.e_card_text();
	this.instance_9.setTransform(0,0,0.3555,0.3555);

	this.instance_10 = new lib.e_card_red_background();
	this.instance_10.setTransform(0,0,0.3555,0.3555);

	this.instance_11 = new lib.e_card_text();
	this.instance_11.setTransform(0,0,0.3555,0.3555);

	this.instance_12 = new lib.e_card_red_background();
	this.instance_12.setTransform(0,0,0.3555,0.3555);

	this.instance_13 = new lib.e_card_text();
	this.instance_13.setTransform(0,0,0.3555,0.3555);

	this.instance_14 = new lib.e_card_red_background();
	this.instance_14.setTransform(0,0,0.3555,0.3555);

	this.instance_15 = new lib.e_card_text();
	this.instance_15.setTransform(0,0,0.3555,0.3555);

	this.instance_16 = new lib.e_card_red_background();
	this.instance_16.setTransform(0,0,0.3555,0.3555);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(295.9,394,504.1,406);
// library properties:
lib.properties = {
	id: 'D84C630F22BDBD4798F3F2818B4D3581',
	width: 800,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/e_card_red_background.png", id:"e_card_red_background"},
		{src:"images/e_card_text.png", id:"e_card_text"},
		{src:"images/moon_atlas_1.png", id:"moon_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D84C630F22BDBD4798F3F2818B4D3581'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;