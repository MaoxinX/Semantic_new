/****************************** 
 * Semantic_Fluency_Full Test *
 ******************************/


// store info about the experiment session:
let expName = 'semantic_fluency_full';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(micRoutineBegin());
flowScheduler.add(micRoutineEachFrame());
flowScheduler.add(micRoutineEnd());
flowScheduler.add(consent1RoutineBegin());
flowScheduler.add(consent1RoutineEachFrame());
flowScheduler.add(consent1RoutineEnd());
flowScheduler.add(consent2RoutineBegin());
flowScheduler.add(consent2RoutineEachFrame());
flowScheduler.add(consent2RoutineEnd());
flowScheduler.add(consent3RoutineBegin());
flowScheduler.add(consent3RoutineEachFrame());
flowScheduler.add(consent3RoutineEnd());
flowScheduler.add(consent_3FBRoutineBegin());
flowScheduler.add(consent_3FBRoutineEachFrame());
flowScheduler.add(consent_3FBRoutineEnd());
flowScheduler.add(Ins1RoutineBegin());
flowScheduler.add(Ins1RoutineEachFrame());
flowScheduler.add(Ins1RoutineEnd());
flowScheduler.add(Ins2RoutineBegin());
flowScheduler.add(Ins2RoutineEachFrame());
flowScheduler.add(Ins2RoutineEnd());
flowScheduler.add(Ins3RoutineBegin());
flowScheduler.add(Ins3RoutineEachFrame());
flowScheduler.add(Ins3RoutineEnd());
flowScheduler.add(Ins4RoutineBegin());
flowScheduler.add(Ins4RoutineEachFrame());
flowScheduler.add(Ins4RoutineEnd());
flowScheduler.add(ins5RoutineBegin());
flowScheduler.add(ins5RoutineEachFrame());
flowScheduler.add(ins5RoutineEnd());
flowScheduler.add(Fix_PracticeRoutineBegin());
flowScheduler.add(Fix_PracticeRoutineEachFrame());
flowScheduler.add(Fix_PracticeRoutineEnd());
flowScheduler.add(Cat_practiceRegisRoutineBegin());
flowScheduler.add(Cat_practiceRegisRoutineEachFrame());
flowScheduler.add(Cat_practiceRegisRoutineEnd());
flowScheduler.add(ins6RoutineBegin());
flowScheduler.add(ins6RoutineEachFrame());
flowScheduler.add(ins6RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(Ins10RoutineBegin());
flowScheduler.add(Ins10RoutineEachFrame());
flowScheduler.add(Ins10RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'CATEGORIES.xlsx', 'path': 'CATEGORIES.xlsx'},
    {'name': 'resources/ins0.png', 'path': 'resources/ins0.png'},
    {'name': 'resources/consent_1.png', 'path': 'resources/consent_1.png'},
    {'name': 'resources/consent_2.png', 'path': 'resources/consent_2.png'},
    {'name': 'resources/consent_3.png', 'path': 'resources/consent_3.png'},
    {'name': 'resources/agree.png', 'path': 'resources/agree.png'},
    {'name': 'resources/ins1.png', 'path': 'resources/ins1.png'},
    {'name': 'resources/ins2.png', 'path': 'resources/ins2.png'},
    {'name': 'resources/ins3.png', 'path': 'resources/ins3.png'},
    {'name': 'resources/ins4.png', 'path': 'resources/ins4.png'},
    {'name': 'resources/ins5.png', 'path': 'resources/ins5.png'},
    {'name': 'resources/ins6.png', 'path': 'resources/ins6.png'},
    {'name': 'resources/ins7.png', 'path': 'resources/ins7.png'},
    {'name': 'resources/ins8.png', 'path': 'resources/ins8.png'},
    {'name': 'resources/ins10.png', 'path': 'resources/ins10.png'},
    {'name': 'resources/consent_3.png', 'path': 'resources/consent_3.png'},
    {'name': 'resources/consent_2.png', 'path': 'resources/consent_2.png'},
    {'name': 'resources/consent_1.png', 'path': 'resources/consent_1.png'},
    {'name': 'resources/ins7.png', 'path': 'resources/ins7.png'},
    {'name': 'resources/ins5.png', 'path': 'resources/ins5.png'},
    {'name': 'resources/ins3.png', 'path': 'resources/ins3.png'},
    {'name': 'resources/ins4.png', 'path': 'resources/ins4.png'},
    {'name': 'resources/ins2.png', 'path': 'resources/ins2.png'},
    {'name': 'resources/ins10.png', 'path': 'resources/ins10.png'},
    {'name': 'resources/ins8.png', 'path': 'resources/ins8.png'},
    {'name': 'resources/ins6.png', 'path': 'resources/ins6.png'},
    {'name': 'resources/ins1.png', 'path': 'resources/ins1.png'},
    {'name': 'resources/ins0.png', 'path': 'resources/ins0.png'},
    {'name': 'resources/agree.png', 'path': 'resources/agree.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=CZ6DTRHZ', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var micClock;
var Image_mic;
var Key_mic;
var consent1Clock;
var Image_consent1;
var Text_consent1;
var Key_consent1;
var consent2Clock;
var Image_consent2;
var Text_consent2;
var Key_consent2;
var consent3Clock;
var Image_consent3;
var button_consent;
var Text_consent3;
var Ky_consent3;
var consent_3FBClock;
var Image_consent3FB;
var Button_consent3FB;
var Text_consent3FB;
var Image_agree;
var Ins1Clock;
var Image_ins1;
var Key_ins1;
var Ins2Clock;
var Image_ins2;
var Key_ins2;
var Ins3Clock;
var Image_ins3;
var Key_ins3;
var Ins4Clock;
var Image_ins4;
var Key_ins4;
var ins5Clock;
var Image_ins5;
var Key_ins5;
var Fix_PracticeClock;
var Fixcross_Practice;
var Cat_practiceRegisClock;
var Text_Catpracticeregis;
var Mic_catpractice;
var key_resp;
var text_4;
var ins6Clock;
var Image_ins6;
var Key_ins6;
var Ins7Clock;
var Image_ins7;
var Key_ins7;
var Fix_testClock;
var Fixcross_test;
var Cat_testregisClock;
var Text_cattextregis;
var Mic_cattestresgis;
var key_resp_2;
var text_3;
var Ins8Clock;
var Image_ins8;
var Ins10Clock;
var Image_ins10;
var Key_ins10;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "mic"
  micClock = new util.Clock();
  Image_mic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_mic', units : undefined, 
    image : 'resources/ins0.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_mic = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  Image_consent1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_consent1', units : undefined, 
    image : 'resources/consent_1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.042], size : [0.73, 0.93],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Text_consent1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_consent1',
    text: 'Press the spacebar to continue reading',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  Key_consent1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent2"
  consent2Clock = new util.Clock();
  Image_consent2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_consent2', units : undefined, 
    image : 'resources/consent_2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.042], size : [0.7, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Text_consent2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_consent2',
    text: 'Press the space bar to continue reading',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  Key_consent2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent3"
  consent3Clock = new util.Clock();
  Image_consent3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_consent3', units : undefined, 
    image : 'resources/consent_3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.042], size : [0.7, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  button_consent = new visual.Rect ({
    win: psychoJS.window, name: 'button_consent', 
    width: [0.03, 0.03][0], height: [0.03, 0.03][1],
    ori: 0.0, pos: [(- 0.27), (- 0.43)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  Text_consent3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_consent3',
    text: 'I agree and consent to the terms above (Press Y to agree)',
    font: 'Arial',
    units: undefined, 
    pos: [0.01, (- 0.43)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Ky_consent3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent_3FB"
  consent_3FBClock = new util.Clock();
  Image_consent3FB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_consent3FB', units : undefined, 
    image : 'resources/consent_3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.042], size : [0.7, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Button_consent3FB = new visual.Rect ({
    win: psychoJS.window, name: 'Button_consent3FB', 
    width: [0.03, 0.03][0], height: [0.03, 0.03][1],
    ori: 0.0, pos: [(- 0.27), (- 0.43)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  Text_consent3FB = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_consent3FB',
    text: 'I agree and consent to the terms above (Press Y to agree)',
    font: 'Arial',
    units: undefined, 
    pos: [0.01, (- 0.43)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Image_agree = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_agree', units : undefined, 
    image : 'resources/agree.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.27), (- 0.43)], size : [0.03, 0.03],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "Ins1"
  Ins1Clock = new util.Clock();
  Image_ins1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins1', units : undefined, 
    image : 'resources/ins1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ins2"
  Ins2Clock = new util.Clock();
  Image_ins2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins2', units : undefined, 
    image : 'resources/ins2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ins3"
  Ins3Clock = new util.Clock();
  Image_ins3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins3', units : undefined, 
    image : 'resources/ins3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ins4"
  Ins4Clock = new util.Clock();
  Image_ins4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins4', units : undefined, 
    image : 'resources/ins4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ins5"
  ins5Clock = new util.Clock();
  Image_ins5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins5', units : undefined, 
    image : 'resources/ins5.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fix_Practice"
  Fix_PracticeClock = new util.Clock();
  Fixcross_Practice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fixcross_Practice', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0.15],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "Cat_practiceRegis"
  Cat_practiceRegisClock = new util.Clock();
  Text_Catpracticeregis = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_Catpracticeregis',
    text: 'CITIES',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Mic_catpractice = new sound.Microphone({
    win : psychoJS.window, 
    name:'Mic_catpractice',
    sampleRateHz : 48000,
    channels : 'auto',
    maxRecordingSize : 24000.0,
    loopback : true,
    policyWhenFull : 'ignore',
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.8)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "ins6"
  ins6Clock = new util.Clock();
  Image_ins6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins6', units : undefined, 
    image : 'resources/ins6.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ins7"
  Ins7Clock = new util.Clock();
  Image_ins7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins7', units : undefined, 
    image : 'resources/ins7.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Fix_test"
  Fix_testClock = new util.Clock();
  Fixcross_test = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Fixcross_test', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0.15],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "Cat_testregis"
  Cat_testregisClock = new util.Clock();
  Text_cattextregis = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text_cattextregis',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Mic_cattestresgis = new sound.Microphone({
    win : psychoJS.window, 
    name:'Mic_cattestresgis',
    sampleRateHz : 48000,
    channels : 'auto',
    maxRecordingSize : 24000.0,
    loopback : true,
    policyWhenFull : 'ignore',
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.8)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Ins8"
  Ins8Clock = new util.Clock();
  Image_ins8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins8', units : undefined, 
    image : 'resources/ins8.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Ins10"
  Ins10Clock = new util.Clock();
  Image_ins10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Image_ins10', units : undefined, 
    image : 'resources/ins10.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  Key_ins10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Key_mic_allKeys;
var micComponents;
function micRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mic' ---
    t = 0;
    micClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_mic.keys = undefined;
    Key_mic.rt = undefined;
    _Key_mic_allKeys = [];
    // keep track of which components have finished
    micComponents = [];
    micComponents.push(Image_mic);
    micComponents.push(Key_mic);
    
    micComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function micRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mic' ---
    // get current time
    t = micClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_mic* updates
    if (t >= 0.0 && Image_mic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_mic.tStart = t;  // (not accounting for frame time here)
      Image_mic.frameNStart = frameN;  // exact frame index
      
      Image_mic.setAutoDraw(true);
    }

    
    // *Key_mic* updates
    if (t >= 0.0 && Key_mic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_mic.tStart = t;  // (not accounting for frame time here)
      Key_mic.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_mic.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_mic.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_mic.clearEvents(); });
    }

    if (Key_mic.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_mic.getKeys({keyList: ['space'], waitRelease: false});
      _Key_mic_allKeys = _Key_mic_allKeys.concat(theseKeys);
      if (_Key_mic_allKeys.length > 0) {
        Key_mic.keys = _Key_mic_allKeys[_Key_mic_allKeys.length - 1].name;  // just the last key pressed
        Key_mic.rt = _Key_mic_allKeys[_Key_mic_allKeys.length - 1].rt;
        Key_mic.duration = _Key_mic_allKeys[_Key_mic_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    micComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function micRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mic' ---
    micComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_mic.corr, level);
    }
    psychoJS.experiment.addData('Key_mic.keys', Key_mic.keys);
    if (typeof Key_mic.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_mic.rt', Key_mic.rt);
        psychoJS.experiment.addData('Key_mic.duration', Key_mic.duration);
        routineTimer.reset();
        }
    
    Key_mic.stop();
    // the Routine "mic" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_consent1_allKeys;
var consent1Components;
function consent1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent1' ---
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_consent1.keys = undefined;
    Key_consent1.rt = undefined;
    _Key_consent1_allKeys = [];
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(Image_consent1);
    consent1Components.push(Text_consent1);
    consent1Components.push(Key_consent1);
    
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent1' ---
    // get current time
    t = consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_consent1* updates
    if (t >= 0 && Image_consent1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_consent1.tStart = t;  // (not accounting for frame time here)
      Image_consent1.frameNStart = frameN;  // exact frame index
      
      Image_consent1.setAutoDraw(true);
    }

    
    // *Text_consent1* updates
    if (t >= 0.0 && Text_consent1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_consent1.tStart = t;  // (not accounting for frame time here)
      Text_consent1.frameNStart = frameN;  // exact frame index
      
      Text_consent1.setAutoDraw(true);
    }

    
    // *Key_consent1* updates
    if (t >= 0.0 && Key_consent1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_consent1.tStart = t;  // (not accounting for frame time here)
      Key_consent1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_consent1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_consent1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_consent1.clearEvents(); });
    }

    if (Key_consent1.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_consent1.getKeys({keyList: ['space'], waitRelease: false});
      _Key_consent1_allKeys = _Key_consent1_allKeys.concat(theseKeys);
      if (_Key_consent1_allKeys.length > 0) {
        Key_consent1.keys = _Key_consent1_allKeys[_Key_consent1_allKeys.length - 1].name;  // just the last key pressed
        Key_consent1.rt = _Key_consent1_allKeys[_Key_consent1_allKeys.length - 1].rt;
        Key_consent1.duration = _Key_consent1_allKeys[_Key_consent1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent1' ---
    consent1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_consent1.corr, level);
    }
    psychoJS.experiment.addData('Key_consent1.keys', Key_consent1.keys);
    if (typeof Key_consent1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_consent1.rt', Key_consent1.rt);
        psychoJS.experiment.addData('Key_consent1.duration', Key_consent1.duration);
        routineTimer.reset();
        }
    
    Key_consent1.stop();
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_consent2_allKeys;
var consent2Components;
function consent2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent2' ---
    t = 0;
    consent2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_consent2.keys = undefined;
    Key_consent2.rt = undefined;
    _Key_consent2_allKeys = [];
    // keep track of which components have finished
    consent2Components = [];
    consent2Components.push(Image_consent2);
    consent2Components.push(Text_consent2);
    consent2Components.push(Key_consent2);
    
    consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent2' ---
    // get current time
    t = consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_consent2* updates
    if (t >= 0.0 && Image_consent2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_consent2.tStart = t;  // (not accounting for frame time here)
      Image_consent2.frameNStart = frameN;  // exact frame index
      
      Image_consent2.setAutoDraw(true);
    }

    
    // *Text_consent2* updates
    if (t >= 0.0 && Text_consent2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_consent2.tStart = t;  // (not accounting for frame time here)
      Text_consent2.frameNStart = frameN;  // exact frame index
      
      Text_consent2.setAutoDraw(true);
    }

    
    // *Key_consent2* updates
    if (t >= 0.0 && Key_consent2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_consent2.tStart = t;  // (not accounting for frame time here)
      Key_consent2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_consent2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_consent2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_consent2.clearEvents(); });
    }

    if (Key_consent2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_consent2.getKeys({keyList: ['space'], waitRelease: false});
      _Key_consent2_allKeys = _Key_consent2_allKeys.concat(theseKeys);
      if (_Key_consent2_allKeys.length > 0) {
        Key_consent2.keys = _Key_consent2_allKeys[_Key_consent2_allKeys.length - 1].name;  // just the last key pressed
        Key_consent2.rt = _Key_consent2_allKeys[_Key_consent2_allKeys.length - 1].rt;
        Key_consent2.duration = _Key_consent2_allKeys[_Key_consent2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent2' ---
    consent2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_consent2.corr, level);
    }
    psychoJS.experiment.addData('Key_consent2.keys', Key_consent2.keys);
    if (typeof Key_consent2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_consent2.rt', Key_consent2.rt);
        psychoJS.experiment.addData('Key_consent2.duration', Key_consent2.duration);
        routineTimer.reset();
        }
    
    Key_consent2.stop();
    // the Routine "consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Ky_consent3_allKeys;
var consent3Components;
function consent3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent3' ---
    t = 0;
    consent3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Ky_consent3.keys = undefined;
    Ky_consent3.rt = undefined;
    _Ky_consent3_allKeys = [];
    // keep track of which components have finished
    consent3Components = [];
    consent3Components.push(Image_consent3);
    consent3Components.push(button_consent);
    consent3Components.push(Text_consent3);
    consent3Components.push(Ky_consent3);
    
    consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent3' ---
    // get current time
    t = consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_consent3* updates
    if (t >= 0.0 && Image_consent3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_consent3.tStart = t;  // (not accounting for frame time here)
      Image_consent3.frameNStart = frameN;  // exact frame index
      
      Image_consent3.setAutoDraw(true);
    }

    
    // *button_consent* updates
    if (t >= 0.0 && button_consent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_consent.tStart = t;  // (not accounting for frame time here)
      button_consent.frameNStart = frameN;  // exact frame index
      
      button_consent.setAutoDraw(true);
    }

    
    // *Text_consent3* updates
    if (t >= 0.0 && Text_consent3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_consent3.tStart = t;  // (not accounting for frame time here)
      Text_consent3.frameNStart = frameN;  // exact frame index
      
      Text_consent3.setAutoDraw(true);
    }

    
    // *Ky_consent3* updates
    if (t >= 0.0 && Ky_consent3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ky_consent3.tStart = t;  // (not accounting for frame time here)
      Ky_consent3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Ky_consent3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Ky_consent3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Ky_consent3.clearEvents(); });
    }

    if (Ky_consent3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Ky_consent3.getKeys({keyList: ['y'], waitRelease: false});
      _Ky_consent3_allKeys = _Ky_consent3_allKeys.concat(theseKeys);
      if (_Ky_consent3_allKeys.length > 0) {
        Ky_consent3.keys = _Ky_consent3_allKeys[_Ky_consent3_allKeys.length - 1].name;  // just the last key pressed
        Ky_consent3.rt = _Ky_consent3_allKeys[_Ky_consent3_allKeys.length - 1].rt;
        Ky_consent3.duration = _Ky_consent3_allKeys[_Ky_consent3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent3' ---
    consent3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Ky_consent3.corr, level);
    }
    psychoJS.experiment.addData('Ky_consent3.keys', Ky_consent3.keys);
    if (typeof Ky_consent3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Ky_consent3.rt', Ky_consent3.rt);
        psychoJS.experiment.addData('Ky_consent3.duration', Ky_consent3.duration);
        routineTimer.reset();
        }
    
    Ky_consent3.stop();
    // the Routine "consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consent_3FBComponents;
function consent_3FBRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent_3FB' ---
    t = 0;
    consent_3FBClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.300000);
    // update component parameters for each repeat
    // keep track of which components have finished
    consent_3FBComponents = [];
    consent_3FBComponents.push(Image_consent3FB);
    consent_3FBComponents.push(Button_consent3FB);
    consent_3FBComponents.push(Text_consent3FB);
    consent_3FBComponents.push(Image_agree);
    
    consent_3FBComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function consent_3FBRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent_3FB' ---
    // get current time
    t = consent_3FBClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_consent3FB* updates
    if (t >= 0.0 && Image_consent3FB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_consent3FB.tStart = t;  // (not accounting for frame time here)
      Image_consent3FB.frameNStart = frameN;  // exact frame index
      
      Image_consent3FB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Image_consent3FB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Image_consent3FB.setAutoDraw(false);
    }
    
    // *Button_consent3FB* updates
    if (t >= 0.0 && Button_consent3FB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Button_consent3FB.tStart = t;  // (not accounting for frame time here)
      Button_consent3FB.frameNStart = frameN;  // exact frame index
      
      Button_consent3FB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Button_consent3FB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Button_consent3FB.setAutoDraw(false);
    }
    
    // *Text_consent3FB* updates
    if (t >= 0.0 && Text_consent3FB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_consent3FB.tStart = t;  // (not accounting for frame time here)
      Text_consent3FB.frameNStart = frameN;  // exact frame index
      
      Text_consent3FB.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Text_consent3FB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Text_consent3FB.setAutoDraw(false);
    }
    
    // *Image_agree* updates
    if (t >= 0.0 && Image_agree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_agree.tStart = t;  // (not accounting for frame time here)
      Image_agree.frameNStart = frameN;  // exact frame index
      
      Image_agree.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Image_agree.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Image_agree.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent_3FBComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent_3FBRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent_3FB' ---
    consent_3FBComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins1_allKeys;
var Ins1Components;
function Ins1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins1' ---
    t = 0;
    Ins1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins1.keys = undefined;
    Key_ins1.rt = undefined;
    _Key_ins1_allKeys = [];
    // keep track of which components have finished
    Ins1Components = [];
    Ins1Components.push(Image_ins1);
    Ins1Components.push(Key_ins1);
    
    Ins1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins1' ---
    // get current time
    t = Ins1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins1* updates
    if (t >= 0.0 && Image_ins1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins1.tStart = t;  // (not accounting for frame time here)
      Image_ins1.frameNStart = frameN;  // exact frame index
      
      Image_ins1.setAutoDraw(true);
    }

    
    // *Key_ins1* updates
    if (t >= 0.0 && Key_ins1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins1.tStart = t;  // (not accounting for frame time here)
      Key_ins1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins1.clearEvents(); });
    }

    if (Key_ins1.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins1.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins1_allKeys = _Key_ins1_allKeys.concat(theseKeys);
      if (_Key_ins1_allKeys.length > 0) {
        Key_ins1.keys = _Key_ins1_allKeys[_Key_ins1_allKeys.length - 1].name;  // just the last key pressed
        Key_ins1.rt = _Key_ins1_allKeys[_Key_ins1_allKeys.length - 1].rt;
        Key_ins1.duration = _Key_ins1_allKeys[_Key_ins1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins1' ---
    Ins1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins1.corr, level);
    }
    psychoJS.experiment.addData('Key_ins1.keys', Key_ins1.keys);
    if (typeof Key_ins1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins1.rt', Key_ins1.rt);
        psychoJS.experiment.addData('Key_ins1.duration', Key_ins1.duration);
        routineTimer.reset();
        }
    
    Key_ins1.stop();
    // the Routine "Ins1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins2_allKeys;
var Ins2Components;
function Ins2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins2' ---
    t = 0;
    Ins2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins2.keys = undefined;
    Key_ins2.rt = undefined;
    _Key_ins2_allKeys = [];
    // keep track of which components have finished
    Ins2Components = [];
    Ins2Components.push(Image_ins2);
    Ins2Components.push(Key_ins2);
    
    Ins2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins2' ---
    // get current time
    t = Ins2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins2* updates
    if (t >= 0.0 && Image_ins2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins2.tStart = t;  // (not accounting for frame time here)
      Image_ins2.frameNStart = frameN;  // exact frame index
      
      Image_ins2.setAutoDraw(true);
    }

    
    // *Key_ins2* updates
    if (t >= 0.0 && Key_ins2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins2.tStart = t;  // (not accounting for frame time here)
      Key_ins2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins2.clearEvents(); });
    }

    if (Key_ins2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins2.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins2_allKeys = _Key_ins2_allKeys.concat(theseKeys);
      if (_Key_ins2_allKeys.length > 0) {
        Key_ins2.keys = _Key_ins2_allKeys[_Key_ins2_allKeys.length - 1].name;  // just the last key pressed
        Key_ins2.rt = _Key_ins2_allKeys[_Key_ins2_allKeys.length - 1].rt;
        Key_ins2.duration = _Key_ins2_allKeys[_Key_ins2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins2' ---
    Ins2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins2.corr, level);
    }
    psychoJS.experiment.addData('Key_ins2.keys', Key_ins2.keys);
    if (typeof Key_ins2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins2.rt', Key_ins2.rt);
        psychoJS.experiment.addData('Key_ins2.duration', Key_ins2.duration);
        routineTimer.reset();
        }
    
    Key_ins2.stop();
    // the Routine "Ins2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins3_allKeys;
var Ins3Components;
function Ins3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins3' ---
    t = 0;
    Ins3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins3.keys = undefined;
    Key_ins3.rt = undefined;
    _Key_ins3_allKeys = [];
    // keep track of which components have finished
    Ins3Components = [];
    Ins3Components.push(Image_ins3);
    Ins3Components.push(Key_ins3);
    
    Ins3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins3' ---
    // get current time
    t = Ins3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins3* updates
    if (t >= 0.0 && Image_ins3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins3.tStart = t;  // (not accounting for frame time here)
      Image_ins3.frameNStart = frameN;  // exact frame index
      
      Image_ins3.setAutoDraw(true);
    }

    
    // *Key_ins3* updates
    if (t >= 0.0 && Key_ins3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins3.tStart = t;  // (not accounting for frame time here)
      Key_ins3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins3.clearEvents(); });
    }

    if (Key_ins3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins3.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins3_allKeys = _Key_ins3_allKeys.concat(theseKeys);
      if (_Key_ins3_allKeys.length > 0) {
        Key_ins3.keys = _Key_ins3_allKeys[_Key_ins3_allKeys.length - 1].name;  // just the last key pressed
        Key_ins3.rt = _Key_ins3_allKeys[_Key_ins3_allKeys.length - 1].rt;
        Key_ins3.duration = _Key_ins3_allKeys[_Key_ins3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins3' ---
    Ins3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins3.corr, level);
    }
    psychoJS.experiment.addData('Key_ins3.keys', Key_ins3.keys);
    if (typeof Key_ins3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins3.rt', Key_ins3.rt);
        psychoJS.experiment.addData('Key_ins3.duration', Key_ins3.duration);
        routineTimer.reset();
        }
    
    Key_ins3.stop();
    // the Routine "Ins3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins4_allKeys;
var Ins4Components;
function Ins4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins4' ---
    t = 0;
    Ins4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins4.keys = undefined;
    Key_ins4.rt = undefined;
    _Key_ins4_allKeys = [];
    // keep track of which components have finished
    Ins4Components = [];
    Ins4Components.push(Image_ins4);
    Ins4Components.push(Key_ins4);
    
    Ins4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins4' ---
    // get current time
    t = Ins4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins4* updates
    if (t >= 0.0 && Image_ins4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins4.tStart = t;  // (not accounting for frame time here)
      Image_ins4.frameNStart = frameN;  // exact frame index
      
      Image_ins4.setAutoDraw(true);
    }

    
    // *Key_ins4* updates
    if (t >= 0.0 && Key_ins4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins4.tStart = t;  // (not accounting for frame time here)
      Key_ins4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins4.clearEvents(); });
    }

    if (Key_ins4.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins4.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins4_allKeys = _Key_ins4_allKeys.concat(theseKeys);
      if (_Key_ins4_allKeys.length > 0) {
        Key_ins4.keys = _Key_ins4_allKeys[_Key_ins4_allKeys.length - 1].name;  // just the last key pressed
        Key_ins4.rt = _Key_ins4_allKeys[_Key_ins4_allKeys.length - 1].rt;
        Key_ins4.duration = _Key_ins4_allKeys[_Key_ins4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins4' ---
    Ins4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins4.corr, level);
    }
    psychoJS.experiment.addData('Key_ins4.keys', Key_ins4.keys);
    if (typeof Key_ins4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins4.rt', Key_ins4.rt);
        psychoJS.experiment.addData('Key_ins4.duration', Key_ins4.duration);
        routineTimer.reset();
        }
    
    Key_ins4.stop();
    // the Routine "Ins4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins5_allKeys;
var ins5Components;
function ins5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins5' ---
    t = 0;
    ins5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins5.keys = undefined;
    Key_ins5.rt = undefined;
    _Key_ins5_allKeys = [];
    // keep track of which components have finished
    ins5Components = [];
    ins5Components.push(Image_ins5);
    ins5Components.push(Key_ins5);
    
    ins5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ins5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins5' ---
    // get current time
    t = ins5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins5* updates
    if (t >= 0.0 && Image_ins5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins5.tStart = t;  // (not accounting for frame time here)
      Image_ins5.frameNStart = frameN;  // exact frame index
      
      Image_ins5.setAutoDraw(true);
    }

    
    // *Key_ins5* updates
    if (t >= 0.0 && Key_ins5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins5.tStart = t;  // (not accounting for frame time here)
      Key_ins5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins5.clearEvents(); });
    }

    if (Key_ins5.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins5.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins5_allKeys = _Key_ins5_allKeys.concat(theseKeys);
      if (_Key_ins5_allKeys.length > 0) {
        Key_ins5.keys = _Key_ins5_allKeys[_Key_ins5_allKeys.length - 1].name;  // just the last key pressed
        Key_ins5.rt = _Key_ins5_allKeys[_Key_ins5_allKeys.length - 1].rt;
        Key_ins5.duration = _Key_ins5_allKeys[_Key_ins5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ins5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins5' ---
    ins5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins5.corr, level);
    }
    psychoJS.experiment.addData('Key_ins5.keys', Key_ins5.keys);
    if (typeof Key_ins5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins5.rt', Key_ins5.rt);
        psychoJS.experiment.addData('Key_ins5.duration', Key_ins5.duration);
        routineTimer.reset();
        }
    
    Key_ins5.stop();
    // the Routine "ins5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Fix_PracticeComponents;
function Fix_PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fix_Practice' ---
    t = 0;
    Fix_PracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Fix_PracticeComponents = [];
    Fix_PracticeComponents.push(Fixcross_Practice);
    
    Fix_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Fix_PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fix_Practice' ---
    // get current time
    t = Fix_PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fixcross_Practice* updates
    if (t >= 0.0 && Fixcross_Practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixcross_Practice.tStart = t;  // (not accounting for frame time here)
      Fixcross_Practice.frameNStart = frameN;  // exact frame index
      
      Fixcross_Practice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Fixcross_Practice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Fixcross_Practice.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Fix_PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Fix_PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fix_Practice' ---
    Fix_PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var Cat_practiceRegisComponents;
function Cat_practiceRegisRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cat_practiceRegis' ---
    t = 0;
    Cat_practiceRegisClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    text_4.setText('"Enter": move to the next category');
    // keep track of which components have finished
    Cat_practiceRegisComponents = [];
    Cat_practiceRegisComponents.push(Text_Catpracticeregis);
    Cat_practiceRegisComponents.push(Mic_catpractice);
    Cat_practiceRegisComponents.push(key_resp);
    Cat_practiceRegisComponents.push(text_4);
    
    Cat_practiceRegisComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Cat_practiceRegisRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cat_practiceRegis' ---
    // get current time
    t = Cat_practiceRegisClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_Catpracticeregis* updates
    if (t >= 0.0 && Text_Catpracticeregis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_Catpracticeregis.tStart = t;  // (not accounting for frame time here)
      Text_Catpracticeregis.frameNStart = frameN;  // exact frame index
      
      Text_Catpracticeregis.setAutoDraw(true);
    }

    if (t >= 0.0 && Mic_catpractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mic_catpractice.tStart = t;  // (not accounting for frame time here)
      Mic_catpractice.frameNStart = frameN;  // exact frame index
      
      await Mic_catpractice.start();
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Cat_practiceRegisComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var thisFilename;
function Cat_practiceRegisRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cat_practiceRegis' ---
    Cat_practiceRegisComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // stop the microphone (make the audio data ready for upload)
    await Mic_catpractice.stop();
    // construct a filename for this recording
    thisFilename = 'recording_Mic_catpractice_' + currentLoop.name + '_' + currentLoop.thisN
    // get the recording
    Mic_catpractice.lastClip = await Mic_catpractice.getRecording({
      tag: thisFilename + '_' + util.MonotonicClock.getDateStr(),
      flush: false
    });
    psychoJS.experiment.addData('Mic_catpractice.clip', thisFilename);
    // start the asynchronous upload to the server
    Mic_catpractice.lastClip.upload();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Cat_practiceRegis" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins6_allKeys;
var ins6Components;
function ins6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ins6' ---
    t = 0;
    ins6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins6.keys = undefined;
    Key_ins6.rt = undefined;
    _Key_ins6_allKeys = [];
    // keep track of which components have finished
    ins6Components = [];
    ins6Components.push(Image_ins6);
    ins6Components.push(Key_ins6);
    
    ins6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ins6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ins6' ---
    // get current time
    t = ins6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins6* updates
    if (t >= 0.0 && Image_ins6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins6.tStart = t;  // (not accounting for frame time here)
      Image_ins6.frameNStart = frameN;  // exact frame index
      
      Image_ins6.setAutoDraw(true);
    }

    
    // *Key_ins6* updates
    if (t >= 0.0 && Key_ins6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins6.tStart = t;  // (not accounting for frame time here)
      Key_ins6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins6.clearEvents(); });
    }

    if (Key_ins6.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins6.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins6_allKeys = _Key_ins6_allKeys.concat(theseKeys);
      if (_Key_ins6_allKeys.length > 0) {
        Key_ins6.keys = _Key_ins6_allKeys[_Key_ins6_allKeys.length - 1].name;  // just the last key pressed
        Key_ins6.rt = _Key_ins6_allKeys[_Key_ins6_allKeys.length - 1].rt;
        Key_ins6.duration = _Key_ins6_allKeys[_Key_ins6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ins6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ins6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ins6' ---
    ins6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins6.corr, level);
    }
    psychoJS.experiment.addData('Key_ins6.keys', Key_ins6.keys);
    if (typeof Key_ins6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins6.rt', Key_ins6.rt);
        psychoJS.experiment.addData('Key_ins6.duration', Key_ins6.duration);
        routineTimer.reset();
        }
    
    Key_ins6.stop();
    // the Routine "ins6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'CATEGORIES.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Ins7RoutineBegin(snapshot));
      trialsLoopScheduler.add(Ins7RoutineEachFrame());
      trialsLoopScheduler.add(Ins7RoutineEnd(snapshot));
      trialsLoopScheduler.add(Fix_testRoutineBegin(snapshot));
      trialsLoopScheduler.add(Fix_testRoutineEachFrame());
      trialsLoopScheduler.add(Fix_testRoutineEnd(snapshot));
      trialsLoopScheduler.add(Cat_testregisRoutineBegin(snapshot));
      trialsLoopScheduler.add(Cat_testregisRoutineEachFrame());
      trialsLoopScheduler.add(Cat_testregisRoutineEnd(snapshot));
      trialsLoopScheduler.add(Ins8RoutineBegin(snapshot));
      trialsLoopScheduler.add(Ins8RoutineEachFrame());
      trialsLoopScheduler.add(Ins8RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _Key_ins7_allKeys;
var task_timer;
var countdown_text;
var Ins7Components;
function Ins7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins7' ---
    t = 0;
    Ins7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins7.keys = undefined;
    Key_ins7.rt = undefined;
    _Key_ins7_allKeys = [];
    // Run 'Begin Routine' code from code
    if ((trials.thisN === 0)) {
        task_timer = new core.Clock();
        task_timer.add(1200);
        countdown_text = new visual.TextStim({"win": psychoJS.window, "text": "", "pos": [(- 0.8), 0.8], "height": 0.1, "color": "black"});
    }
    
    // keep track of which components have finished
    Ins7Components = [];
    Ins7Components.push(Image_ins7);
    Ins7Components.push(Key_ins7);
    
    Ins7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins7' ---
    // get current time
    t = Ins7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins7* updates
    if (t >= 0.0 && Image_ins7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins7.tStart = t;  // (not accounting for frame time here)
      Image_ins7.frameNStart = frameN;  // exact frame index
      
      Image_ins7.setAutoDraw(true);
    }

    
    // *Key_ins7* updates
    if (t >= 0.0 && Key_ins7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins7.tStart = t;  // (not accounting for frame time here)
      Key_ins7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins7.clearEvents(); });
    }

    if (Key_ins7.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins7.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins7_allKeys = _Key_ins7_allKeys.concat(theseKeys);
      if (_Key_ins7_allKeys.length > 0) {
        Key_ins7.keys = _Key_ins7_allKeys[_Key_ins7_allKeys.length - 1].name;  // just the last key pressed
        Key_ins7.rt = _Key_ins7_allKeys[_Key_ins7_allKeys.length - 1].rt;
        Key_ins7.duration = _Key_ins7_allKeys[_Key_ins7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code
    /* Syntax Error: Fix Python code */
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins7' ---
    Ins7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins7.corr, level);
    }
    psychoJS.experiment.addData('Key_ins7.keys', Key_ins7.keys);
    if (typeof Key_ins7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins7.rt', Key_ins7.rt);
        psychoJS.experiment.addData('Key_ins7.duration', Key_ins7.duration);
        routineTimer.reset();
        }
    
    Key_ins7.stop();
    // the Routine "Ins7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Fix_testComponents;
function Fix_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fix_test' ---
    t = 0;
    Fix_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Fix_testComponents = [];
    Fix_testComponents.push(Fixcross_test);
    
    Fix_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Fix_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fix_test' ---
    // get current time
    t = Fix_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Fixcross_test* updates
    if (t >= 0.0 && Fixcross_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Fixcross_test.tStart = t;  // (not accounting for frame time here)
      Fixcross_test.frameNStart = frameN;  // exact frame index
      
      Fixcross_test.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Fixcross_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Fixcross_test.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Fix_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Fix_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fix_test' ---
    Fix_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var Cat_testregisComponents;
function Cat_testregisRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Cat_testregis' ---
    t = 0;
    Cat_testregisClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Text_cattextregis.setText(items);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    text_3.setText('"Enter": move to the next category');
    // keep track of which components have finished
    Cat_testregisComponents = [];
    Cat_testregisComponents.push(Text_cattextregis);
    Cat_testregisComponents.push(Mic_cattestresgis);
    Cat_testregisComponents.push(key_resp_2);
    Cat_testregisComponents.push(text_3);
    
    Cat_testregisComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Cat_testregisRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Cat_testregis' ---
    // get current time
    t = Cat_testregisClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text_cattextregis* updates
    if (t >= 0.0 && Text_cattextregis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text_cattextregis.tStart = t;  // (not accounting for frame time here)
      Text_cattextregis.frameNStart = frameN;  // exact frame index
      
      Text_cattextregis.setAutoDraw(true);
    }

    if (t >= 0.0 && Mic_cattestresgis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Mic_cattestresgis.tStart = t;  // (not accounting for frame time here)
      Mic_cattestresgis.frameNStart = frameN;  // exact frame index
      
      await Mic_cattestresgis.start();
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Cat_testregisComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Cat_testregisRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Cat_testregis' ---
    Cat_testregisComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // stop the microphone (make the audio data ready for upload)
    await Mic_cattestresgis.stop();
    // construct a filename for this recording
    thisFilename = 'recording_Mic_cattestresgis_' + currentLoop.name + '_' + currentLoop.thisN
    // get the recording
    Mic_cattestresgis.lastClip = await Mic_cattestresgis.getRecording({
      tag: thisFilename + '_' + util.MonotonicClock.getDateStr(),
      flush: false
    });
    psychoJS.experiment.addData('Mic_cattestresgis.clip', thisFilename);
    // start the asynchronous upload to the server
    Mic_cattestresgis.lastClip.upload();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Cat_testregis" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Ins8Components;
function Ins8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins8' ---
    t = 0;
    Ins8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Ins8Components = [];
    Ins8Components.push(Image_ins8);
    
    Ins8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins8' ---
    // get current time
    t = Ins8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins8* updates
    if (t >= 0.0 && Image_ins8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins8.tStart = t;  // (not accounting for frame time here)
      Image_ins8.frameNStart = frameN;  // exact frame index
      
      Image_ins8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Image_ins8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Image_ins8.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins8' ---
    Ins8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Key_ins10_allKeys;
var Ins10Components;
function Ins10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ins10' ---
    t = 0;
    Ins10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_ins10.keys = undefined;
    Key_ins10.rt = undefined;
    _Key_ins10_allKeys = [];
    // keep track of which components have finished
    Ins10Components = [];
    Ins10Components.push(Image_ins10);
    Ins10Components.push(Key_ins10);
    
    Ins10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Ins10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ins10' ---
    // get current time
    t = Ins10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Image_ins10* updates
    if (t >= 0.0 && Image_ins10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Image_ins10.tStart = t;  // (not accounting for frame time here)
      Image_ins10.frameNStart = frameN;  // exact frame index
      
      Image_ins10.setAutoDraw(true);
    }

    
    // *Key_ins10* updates
    if (t >= 0.0 && Key_ins10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_ins10.tStart = t;  // (not accounting for frame time here)
      Key_ins10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_ins10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_ins10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_ins10.clearEvents(); });
    }

    if (Key_ins10.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_ins10.getKeys({keyList: ['space'], waitRelease: false});
      _Key_ins10_allKeys = _Key_ins10_allKeys.concat(theseKeys);
      if (_Key_ins10_allKeys.length > 0) {
        Key_ins10.keys = _Key_ins10_allKeys[_Key_ins10_allKeys.length - 1].name;  // just the last key pressed
        Key_ins10.rt = _Key_ins10_allKeys[_Key_ins10_allKeys.length - 1].rt;
        Key_ins10.duration = _Key_ins10_allKeys[_Key_ins10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Ins10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ins10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ins10' ---
    Ins10Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Key_ins10.corr, level);
    }
    psychoJS.experiment.addData('Key_ins10.keys', Key_ins10.keys);
    if (typeof Key_ins10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_ins10.rt', Key_ins10.rt);
        psychoJS.experiment.addData('Key_ins10.duration', Key_ins10.duration);
        routineTimer.reset();
        }
    
    Key_ins10.stop();
    // the Routine "Ins10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
