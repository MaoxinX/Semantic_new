#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.3),
    on Mon Jul 29 00:56:04 2024
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# create a microphone object for device: default
defaultMicrophone = sound.microphone.Microphone(
    device=None, channels=None, 
    sampleRateHz=48000, maxRecordingSize=24000.0
)


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.3'
expName = 'PRE_PILOT'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/xwx/Desktop/lab/recalling experiment/semantic_fluency_full_new/semantic_fluency_full_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation
# Make folder to store recordings from Mic_catpractice
Mic_catpracticeRecFolder = filename + '_Mic_catpractice_recorded'
if not os.path.isdir(Mic_catpracticeRecFolder):
    os.mkdir(Mic_catpracticeRecFolder)
# Make folder to store recordings from Mic_cattestresgis
Mic_cattestresgisRecFolder = filename + '_Mic_cattestresgis_recorded'
if not os.path.isdir(Mic_cattestresgisRecFolder):
    os.mkdir(Mic_cattestresgisRecFolder)

# --- Setup the Window ---
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "mic" ---
Image_mic = visual.ImageStim(
    win=win,
    name='Image_mic', 
    image='resources/ins0.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_mic = keyboard.Keyboard()

# --- Initialize components for Routine "consent1" ---
Image_consent1 = visual.ImageStim(
    win=win,
    name='Image_consent1', 
    image='resources/consent_1.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.042), size=(0.73, 0.93),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Text_consent1 = visual.TextStim(win=win, name='Text_consent1',
    text='Press the spacebar to continue reading',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
Key_consent1 = keyboard.Keyboard()

# --- Initialize components for Routine "consent2" ---
Image_consent2 = visual.ImageStim(
    win=win,
    name='Image_consent2', 
    image='resources/consent_2.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.042), size=(0.70, 0.90),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Text_consent2 = visual.TextStim(win=win, name='Text_consent2',
    text='Press the space bar to continue reading',
    font='Arial',
    pos=(0, -0.45), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
Key_consent2 = keyboard.Keyboard()

# --- Initialize components for Routine "consent3" ---
Image_consent3 = visual.ImageStim(
    win=win,
    name='Image_consent3', 
    image='resources/consent_3.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.042), size=(0.70, 0.90),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
button_consent = visual.Rect(
    win=win, name='button_consent',
    width=(0.03, 0.03)[0], height=(0.03, 0.03)[1],
    ori=0.0, pos=(-0.27, -0.43), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
Text_consent3 = visual.TextStim(win=win, name='Text_consent3',
    text='I agree and consent to the terms above (Press Y to agree)',
    font='Arial',
    pos=(0.01, -0.43), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
Ky_consent3 = keyboard.Keyboard()

# --- Initialize components for Routine "consent_3FB" ---
Image_consent3FB = visual.ImageStim(
    win=win,
    name='Image_consent3FB', 
    image='resources/consent_3.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.042), size=(0.70, 0.90),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Button_consent3FB = visual.Rect(
    win=win, name='Button_consent3FB',
    width=(0.03, 0.03)[0], height=(0.03, 0.03)[1],
    ori=0.0, pos=(-0.27, -0.43), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
Text_consent3FB = visual.TextStim(win=win, name='Text_consent3FB',
    text='I agree and consent to the terms above (Press Y to agree)',
    font='Arial',
    pos=(0.01, -0.43), height=0.02, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
Image_agree = visual.ImageStim(
    win=win,
    name='Image_agree', 
    image='resources/agree.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.27, -0.43), size=(0.03, 0.03),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)

# --- Initialize components for Routine "Ins1" ---
Image_ins1 = visual.ImageStim(
    win=win,
    name='Image_ins1', 
    image='resources/ins1.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins1 = keyboard.Keyboard()

# --- Initialize components for Routine "Ins2" ---
Image_ins2 = visual.ImageStim(
    win=win,
    name='Image_ins2', 
    image='resources/ins2.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins2 = keyboard.Keyboard()

# --- Initialize components for Routine "Ins3" ---
Image_ins3 = visual.ImageStim(
    win=win,
    name='Image_ins3', 
    image='resources/ins3.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins3 = keyboard.Keyboard()

# --- Initialize components for Routine "Ins4" ---
Image_ins4 = visual.ImageStim(
    win=win,
    name='Image_ins4', 
    image='resources/ins4.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins4 = keyboard.Keyboard()

# --- Initialize components for Routine "ins5" ---
Image_ins5 = visual.ImageStim(
    win=win,
    name='Image_ins5', 
    image='resources/ins5.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins5 = keyboard.Keyboard()

# --- Initialize components for Routine "Fix_Practice" ---
Fixcross_Practice = visual.ShapeStim(
    win=win, name='Fixcross_Practice', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0.15), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# --- Initialize components for Routine "Cat_practiceRegis" ---
Text_Catpracticeregis = visual.TextStim(win=win, name='Text_Catpracticeregis',
    text='CITIES',
    font='Arial',
    pos=(0, 0.1), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
# link Mic_catpractice to device object
Mic_catpractice = defaultMicrophone
key_resp = keyboard.Keyboard()
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Open Sans',
    pos=(0, -0.8), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "ins6" ---
Image_ins6 = visual.ImageStim(
    win=win,
    name='Image_ins6', 
    image='resources/ins6.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins6 = keyboard.Keyboard()

# --- Initialize components for Routine "Ins7" ---
Image_ins7 = visual.ImageStim(
    win=win,
    name='Image_ins7', 
    image='resources/ins7.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins7 = keyboard.Keyboard()

# --- Initialize components for Routine "Fix_test" ---
Fixcross_test = visual.ShapeStim(
    win=win, name='Fixcross_test', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0.15), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='black',
    opacity=None, depth=0.0, interpolate=True)

# --- Initialize components for Routine "Cat_testregis" ---
Text_cattextregis = visual.TextStim(win=win, name='Text_cattextregis',
    text='',
    font='Arial',
    pos=(0, 0.1), height=0.07, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
# link Mic_cattestresgis to device object
Mic_cattestresgis = defaultMicrophone
key_resp_2 = keyboard.Keyboard()
text_3 = visual.TextStim(win=win, name='text_3',
    text='"Enter": Move to the next category',
    font='Open Sans',
    pos=(0, -0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
text_6 = visual.TextStim(win=win, name='text_6',
    text='',
    font='Open Sans',
    pos=(0.5, -0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# --- Initialize components for Routine "Ins8" ---
Image_ins8 = visual.ImageStim(
    win=win,
    name='Image_ins8', 
    image='resources/ins8.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)

# --- Initialize components for Routine "Ins10" ---
Image_ins10 = visual.ImageStim(
    win=win,
    name='Image_ins10', 
    image='resources/ins10.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, 0.8),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
Key_ins10 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "mic" ---
continueRoutine = True
# update component parameters for each repeat
Key_mic.keys = []
Key_mic.rt = []
_Key_mic_allKeys = []
# keep track of which components have finished
micComponents = [Image_mic, Key_mic]
for thisComponent in micComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "mic" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_mic* updates
    
    # if Image_mic is starting this frame...
    if Image_mic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_mic.frameNStart = frameN  # exact frame index
        Image_mic.tStart = t  # local t and not account for scr refresh
        Image_mic.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_mic, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_mic.started')
        # update status
        Image_mic.status = STARTED
        Image_mic.setAutoDraw(True)
    
    # if Image_mic is active this frame...
    if Image_mic.status == STARTED:
        # update params
        pass
    
    # *Key_mic* updates
    waitOnFlip = False
    
    # if Key_mic is starting this frame...
    if Key_mic.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_mic.frameNStart = frameN  # exact frame index
        Key_mic.tStart = t  # local t and not account for scr refresh
        Key_mic.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_mic, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_mic.started')
        # update status
        Key_mic.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_mic.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_mic.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_mic.status == STARTED and not waitOnFlip:
        theseKeys = Key_mic.getKeys(keyList=['space'], waitRelease=False)
        _Key_mic_allKeys.extend(theseKeys)
        if len(_Key_mic_allKeys):
            Key_mic.keys = _Key_mic_allKeys[-1].name  # just the last key pressed
            Key_mic.rt = _Key_mic_allKeys[-1].rt
            Key_mic.duration = _Key_mic_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in micComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "mic" ---
for thisComponent in micComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_mic.keys in ['', [], None]:  # No response was made
    Key_mic.keys = None
thisExp.addData('Key_mic.keys',Key_mic.keys)
if Key_mic.keys != None:  # we had a response
    thisExp.addData('Key_mic.rt', Key_mic.rt)
    thisExp.addData('Key_mic.duration', Key_mic.duration)
thisExp.nextEntry()
# the Routine "mic" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent1" ---
continueRoutine = True
# update component parameters for each repeat
Key_consent1.keys = []
Key_consent1.rt = []
_Key_consent1_allKeys = []
# keep track of which components have finished
consent1Components = [Image_consent1, Text_consent1, Key_consent1]
for thisComponent in consent1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent1" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_consent1* updates
    
    # if Image_consent1 is starting this frame...
    if Image_consent1.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Image_consent1.frameNStart = frameN  # exact frame index
        Image_consent1.tStart = t  # local t and not account for scr refresh
        Image_consent1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_consent1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_consent1.started')
        # update status
        Image_consent1.status = STARTED
        Image_consent1.setAutoDraw(True)
    
    # if Image_consent1 is active this frame...
    if Image_consent1.status == STARTED:
        # update params
        pass
    
    # *Text_consent1* updates
    
    # if Text_consent1 is starting this frame...
    if Text_consent1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Text_consent1.frameNStart = frameN  # exact frame index
        Text_consent1.tStart = t  # local t and not account for scr refresh
        Text_consent1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Text_consent1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Text_consent1.started')
        # update status
        Text_consent1.status = STARTED
        Text_consent1.setAutoDraw(True)
    
    # if Text_consent1 is active this frame...
    if Text_consent1.status == STARTED:
        # update params
        pass
    
    # *Key_consent1* updates
    waitOnFlip = False
    
    # if Key_consent1 is starting this frame...
    if Key_consent1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_consent1.frameNStart = frameN  # exact frame index
        Key_consent1.tStart = t  # local t and not account for scr refresh
        Key_consent1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_consent1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_consent1.started')
        # update status
        Key_consent1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_consent1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_consent1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_consent1.status == STARTED and not waitOnFlip:
        theseKeys = Key_consent1.getKeys(keyList=['space'], waitRelease=False)
        _Key_consent1_allKeys.extend(theseKeys)
        if len(_Key_consent1_allKeys):
            Key_consent1.keys = _Key_consent1_allKeys[-1].name  # just the last key pressed
            Key_consent1.rt = _Key_consent1_allKeys[-1].rt
            Key_consent1.duration = _Key_consent1_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent1" ---
for thisComponent in consent1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_consent1.keys in ['', [], None]:  # No response was made
    Key_consent1.keys = None
thisExp.addData('Key_consent1.keys',Key_consent1.keys)
if Key_consent1.keys != None:  # we had a response
    thisExp.addData('Key_consent1.rt', Key_consent1.rt)
    thisExp.addData('Key_consent1.duration', Key_consent1.duration)
thisExp.nextEntry()
# the Routine "consent1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent2" ---
continueRoutine = True
# update component parameters for each repeat
Key_consent2.keys = []
Key_consent2.rt = []
_Key_consent2_allKeys = []
# keep track of which components have finished
consent2Components = [Image_consent2, Text_consent2, Key_consent2]
for thisComponent in consent2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_consent2* updates
    
    # if Image_consent2 is starting this frame...
    if Image_consent2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_consent2.frameNStart = frameN  # exact frame index
        Image_consent2.tStart = t  # local t and not account for scr refresh
        Image_consent2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_consent2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_consent2.started')
        # update status
        Image_consent2.status = STARTED
        Image_consent2.setAutoDraw(True)
    
    # if Image_consent2 is active this frame...
    if Image_consent2.status == STARTED:
        # update params
        pass
    
    # *Text_consent2* updates
    
    # if Text_consent2 is starting this frame...
    if Text_consent2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Text_consent2.frameNStart = frameN  # exact frame index
        Text_consent2.tStart = t  # local t and not account for scr refresh
        Text_consent2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Text_consent2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Text_consent2.started')
        # update status
        Text_consent2.status = STARTED
        Text_consent2.setAutoDraw(True)
    
    # if Text_consent2 is active this frame...
    if Text_consent2.status == STARTED:
        # update params
        pass
    
    # *Key_consent2* updates
    waitOnFlip = False
    
    # if Key_consent2 is starting this frame...
    if Key_consent2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_consent2.frameNStart = frameN  # exact frame index
        Key_consent2.tStart = t  # local t and not account for scr refresh
        Key_consent2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_consent2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_consent2.started')
        # update status
        Key_consent2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_consent2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_consent2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_consent2.status == STARTED and not waitOnFlip:
        theseKeys = Key_consent2.getKeys(keyList=['space'], waitRelease=False)
        _Key_consent2_allKeys.extend(theseKeys)
        if len(_Key_consent2_allKeys):
            Key_consent2.keys = _Key_consent2_allKeys[-1].name  # just the last key pressed
            Key_consent2.rt = _Key_consent2_allKeys[-1].rt
            Key_consent2.duration = _Key_consent2_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent2" ---
for thisComponent in consent2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_consent2.keys in ['', [], None]:  # No response was made
    Key_consent2.keys = None
thisExp.addData('Key_consent2.keys',Key_consent2.keys)
if Key_consent2.keys != None:  # we had a response
    thisExp.addData('Key_consent2.rt', Key_consent2.rt)
    thisExp.addData('Key_consent2.duration', Key_consent2.duration)
thisExp.nextEntry()
# the Routine "consent2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent3" ---
continueRoutine = True
# update component parameters for each repeat
Ky_consent3.keys = []
Ky_consent3.rt = []
_Ky_consent3_allKeys = []
# keep track of which components have finished
consent3Components = [Image_consent3, button_consent, Text_consent3, Ky_consent3]
for thisComponent in consent3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_consent3* updates
    
    # if Image_consent3 is starting this frame...
    if Image_consent3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_consent3.frameNStart = frameN  # exact frame index
        Image_consent3.tStart = t  # local t and not account for scr refresh
        Image_consent3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_consent3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_consent3.started')
        # update status
        Image_consent3.status = STARTED
        Image_consent3.setAutoDraw(True)
    
    # if Image_consent3 is active this frame...
    if Image_consent3.status == STARTED:
        # update params
        pass
    
    # *button_consent* updates
    
    # if button_consent is starting this frame...
    if button_consent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        button_consent.frameNStart = frameN  # exact frame index
        button_consent.tStart = t  # local t and not account for scr refresh
        button_consent.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_consent, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'button_consent.started')
        # update status
        button_consent.status = STARTED
        button_consent.setAutoDraw(True)
    
    # if button_consent is active this frame...
    if button_consent.status == STARTED:
        # update params
        pass
    
    # *Text_consent3* updates
    
    # if Text_consent3 is starting this frame...
    if Text_consent3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Text_consent3.frameNStart = frameN  # exact frame index
        Text_consent3.tStart = t  # local t and not account for scr refresh
        Text_consent3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Text_consent3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Text_consent3.started')
        # update status
        Text_consent3.status = STARTED
        Text_consent3.setAutoDraw(True)
    
    # if Text_consent3 is active this frame...
    if Text_consent3.status == STARTED:
        # update params
        pass
    
    # *Ky_consent3* updates
    waitOnFlip = False
    
    # if Ky_consent3 is starting this frame...
    if Ky_consent3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Ky_consent3.frameNStart = frameN  # exact frame index
        Ky_consent3.tStart = t  # local t and not account for scr refresh
        Ky_consent3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Ky_consent3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Ky_consent3.started')
        # update status
        Ky_consent3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Ky_consent3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Ky_consent3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Ky_consent3.status == STARTED and not waitOnFlip:
        theseKeys = Ky_consent3.getKeys(keyList=['y'], waitRelease=False)
        _Ky_consent3_allKeys.extend(theseKeys)
        if len(_Ky_consent3_allKeys):
            Ky_consent3.keys = _Ky_consent3_allKeys[-1].name  # just the last key pressed
            Ky_consent3.rt = _Ky_consent3_allKeys[-1].rt
            Ky_consent3.duration = _Ky_consent3_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent3" ---
for thisComponent in consent3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Ky_consent3.keys in ['', [], None]:  # No response was made
    Ky_consent3.keys = None
thisExp.addData('Ky_consent3.keys',Ky_consent3.keys)
if Ky_consent3.keys != None:  # we had a response
    thisExp.addData('Ky_consent3.rt', Ky_consent3.rt)
    thisExp.addData('Ky_consent3.duration', Ky_consent3.duration)
thisExp.nextEntry()
# the Routine "consent3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "consent_3FB" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
consent_3FBComponents = [Image_consent3FB, Button_consent3FB, Text_consent3FB, Image_agree]
for thisComponent in consent_3FBComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "consent_3FB" ---
routineForceEnded = not continueRoutine
while continueRoutine and routineTimer.getTime() < 0.3:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_consent3FB* updates
    
    # if Image_consent3FB is starting this frame...
    if Image_consent3FB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_consent3FB.frameNStart = frameN  # exact frame index
        Image_consent3FB.tStart = t  # local t and not account for scr refresh
        Image_consent3FB.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_consent3FB, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_consent3FB.started')
        # update status
        Image_consent3FB.status = STARTED
        Image_consent3FB.setAutoDraw(True)
    
    # if Image_consent3FB is active this frame...
    if Image_consent3FB.status == STARTED:
        # update params
        pass
    
    # if Image_consent3FB is stopping this frame...
    if Image_consent3FB.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Image_consent3FB.tStartRefresh + 0.3-frameTolerance:
            # keep track of stop time/frame for later
            Image_consent3FB.tStop = t  # not accounting for scr refresh
            Image_consent3FB.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Image_consent3FB.stopped')
            # update status
            Image_consent3FB.status = FINISHED
            Image_consent3FB.setAutoDraw(False)
    
    # *Button_consent3FB* updates
    
    # if Button_consent3FB is starting this frame...
    if Button_consent3FB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Button_consent3FB.frameNStart = frameN  # exact frame index
        Button_consent3FB.tStart = t  # local t and not account for scr refresh
        Button_consent3FB.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Button_consent3FB, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Button_consent3FB.started')
        # update status
        Button_consent3FB.status = STARTED
        Button_consent3FB.setAutoDraw(True)
    
    # if Button_consent3FB is active this frame...
    if Button_consent3FB.status == STARTED:
        # update params
        pass
    
    # if Button_consent3FB is stopping this frame...
    if Button_consent3FB.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Button_consent3FB.tStartRefresh + 0.3-frameTolerance:
            # keep track of stop time/frame for later
            Button_consent3FB.tStop = t  # not accounting for scr refresh
            Button_consent3FB.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Button_consent3FB.stopped')
            # update status
            Button_consent3FB.status = FINISHED
            Button_consent3FB.setAutoDraw(False)
    
    # *Text_consent3FB* updates
    
    # if Text_consent3FB is starting this frame...
    if Text_consent3FB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Text_consent3FB.frameNStart = frameN  # exact frame index
        Text_consent3FB.tStart = t  # local t and not account for scr refresh
        Text_consent3FB.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Text_consent3FB, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Text_consent3FB.started')
        # update status
        Text_consent3FB.status = STARTED
        Text_consent3FB.setAutoDraw(True)
    
    # if Text_consent3FB is active this frame...
    if Text_consent3FB.status == STARTED:
        # update params
        pass
    
    # if Text_consent3FB is stopping this frame...
    if Text_consent3FB.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Text_consent3FB.tStartRefresh + 0.3-frameTolerance:
            # keep track of stop time/frame for later
            Text_consent3FB.tStop = t  # not accounting for scr refresh
            Text_consent3FB.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Text_consent3FB.stopped')
            # update status
            Text_consent3FB.status = FINISHED
            Text_consent3FB.setAutoDraw(False)
    
    # *Image_agree* updates
    
    # if Image_agree is starting this frame...
    if Image_agree.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_agree.frameNStart = frameN  # exact frame index
        Image_agree.tStart = t  # local t and not account for scr refresh
        Image_agree.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_agree, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_agree.started')
        # update status
        Image_agree.status = STARTED
        Image_agree.setAutoDraw(True)
    
    # if Image_agree is active this frame...
    if Image_agree.status == STARTED:
        # update params
        pass
    
    # if Image_agree is stopping this frame...
    if Image_agree.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Image_agree.tStartRefresh + 0.3-frameTolerance:
            # keep track of stop time/frame for later
            Image_agree.tStop = t  # not accounting for scr refresh
            Image_agree.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Image_agree.stopped')
            # update status
            Image_agree.status = FINISHED
            Image_agree.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent_3FBComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "consent_3FB" ---
for thisComponent in consent_3FBComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-0.300000)

# --- Prepare to start Routine "Ins1" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins1.keys = []
Key_ins1.rt = []
_Key_ins1_allKeys = []
# keep track of which components have finished
Ins1Components = [Image_ins1, Key_ins1]
for thisComponent in Ins1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Ins1" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins1* updates
    
    # if Image_ins1 is starting this frame...
    if Image_ins1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins1.frameNStart = frameN  # exact frame index
        Image_ins1.tStart = t  # local t and not account for scr refresh
        Image_ins1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins1.started')
        # update status
        Image_ins1.status = STARTED
        Image_ins1.setAutoDraw(True)
    
    # if Image_ins1 is active this frame...
    if Image_ins1.status == STARTED:
        # update params
        pass
    
    # *Key_ins1* updates
    waitOnFlip = False
    
    # if Key_ins1 is starting this frame...
    if Key_ins1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins1.frameNStart = frameN  # exact frame index
        Key_ins1.tStart = t  # local t and not account for scr refresh
        Key_ins1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins1, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins1.started')
        # update status
        Key_ins1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins1.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins1.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins1_allKeys.extend(theseKeys)
        if len(_Key_ins1_allKeys):
            Key_ins1.keys = _Key_ins1_allKeys[-1].name  # just the last key pressed
            Key_ins1.rt = _Key_ins1_allKeys[-1].rt
            Key_ins1.duration = _Key_ins1_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ins1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Ins1" ---
for thisComponent in Ins1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins1.keys in ['', [], None]:  # No response was made
    Key_ins1.keys = None
thisExp.addData('Key_ins1.keys',Key_ins1.keys)
if Key_ins1.keys != None:  # we had a response
    thisExp.addData('Key_ins1.rt', Key_ins1.rt)
    thisExp.addData('Key_ins1.duration', Key_ins1.duration)
thisExp.nextEntry()
# the Routine "Ins1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Ins2" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins2.keys = []
Key_ins2.rt = []
_Key_ins2_allKeys = []
# keep track of which components have finished
Ins2Components = [Image_ins2, Key_ins2]
for thisComponent in Ins2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Ins2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins2* updates
    
    # if Image_ins2 is starting this frame...
    if Image_ins2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins2.frameNStart = frameN  # exact frame index
        Image_ins2.tStart = t  # local t and not account for scr refresh
        Image_ins2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins2.started')
        # update status
        Image_ins2.status = STARTED
        Image_ins2.setAutoDraw(True)
    
    # if Image_ins2 is active this frame...
    if Image_ins2.status == STARTED:
        # update params
        pass
    
    # *Key_ins2* updates
    waitOnFlip = False
    
    # if Key_ins2 is starting this frame...
    if Key_ins2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins2.frameNStart = frameN  # exact frame index
        Key_ins2.tStart = t  # local t and not account for scr refresh
        Key_ins2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins2.started')
        # update status
        Key_ins2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins2.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins2.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins2_allKeys.extend(theseKeys)
        if len(_Key_ins2_allKeys):
            Key_ins2.keys = _Key_ins2_allKeys[-1].name  # just the last key pressed
            Key_ins2.rt = _Key_ins2_allKeys[-1].rt
            Key_ins2.duration = _Key_ins2_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ins2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Ins2" ---
for thisComponent in Ins2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins2.keys in ['', [], None]:  # No response was made
    Key_ins2.keys = None
thisExp.addData('Key_ins2.keys',Key_ins2.keys)
if Key_ins2.keys != None:  # we had a response
    thisExp.addData('Key_ins2.rt', Key_ins2.rt)
    thisExp.addData('Key_ins2.duration', Key_ins2.duration)
thisExp.nextEntry()
# the Routine "Ins2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Ins3" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins3.keys = []
Key_ins3.rt = []
_Key_ins3_allKeys = []
# keep track of which components have finished
Ins3Components = [Image_ins3, Key_ins3]
for thisComponent in Ins3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Ins3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins3* updates
    
    # if Image_ins3 is starting this frame...
    if Image_ins3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins3.frameNStart = frameN  # exact frame index
        Image_ins3.tStart = t  # local t and not account for scr refresh
        Image_ins3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins3.started')
        # update status
        Image_ins3.status = STARTED
        Image_ins3.setAutoDraw(True)
    
    # if Image_ins3 is active this frame...
    if Image_ins3.status == STARTED:
        # update params
        pass
    
    # *Key_ins3* updates
    waitOnFlip = False
    
    # if Key_ins3 is starting this frame...
    if Key_ins3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins3.frameNStart = frameN  # exact frame index
        Key_ins3.tStart = t  # local t and not account for scr refresh
        Key_ins3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins3.started')
        # update status
        Key_ins3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins3.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins3.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins3_allKeys.extend(theseKeys)
        if len(_Key_ins3_allKeys):
            Key_ins3.keys = _Key_ins3_allKeys[-1].name  # just the last key pressed
            Key_ins3.rt = _Key_ins3_allKeys[-1].rt
            Key_ins3.duration = _Key_ins3_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ins3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Ins3" ---
for thisComponent in Ins3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins3.keys in ['', [], None]:  # No response was made
    Key_ins3.keys = None
thisExp.addData('Key_ins3.keys',Key_ins3.keys)
if Key_ins3.keys != None:  # we had a response
    thisExp.addData('Key_ins3.rt', Key_ins3.rt)
    thisExp.addData('Key_ins3.duration', Key_ins3.duration)
thisExp.nextEntry()
# the Routine "Ins3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Ins4" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins4.keys = []
Key_ins4.rt = []
_Key_ins4_allKeys = []
# keep track of which components have finished
Ins4Components = [Image_ins4, Key_ins4]
for thisComponent in Ins4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Ins4" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins4* updates
    
    # if Image_ins4 is starting this frame...
    if Image_ins4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins4.frameNStart = frameN  # exact frame index
        Image_ins4.tStart = t  # local t and not account for scr refresh
        Image_ins4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins4.started')
        # update status
        Image_ins4.status = STARTED
        Image_ins4.setAutoDraw(True)
    
    # if Image_ins4 is active this frame...
    if Image_ins4.status == STARTED:
        # update params
        pass
    
    # *Key_ins4* updates
    waitOnFlip = False
    
    # if Key_ins4 is starting this frame...
    if Key_ins4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins4.frameNStart = frameN  # exact frame index
        Key_ins4.tStart = t  # local t and not account for scr refresh
        Key_ins4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins4.started')
        # update status
        Key_ins4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins4.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins4.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins4_allKeys.extend(theseKeys)
        if len(_Key_ins4_allKeys):
            Key_ins4.keys = _Key_ins4_allKeys[-1].name  # just the last key pressed
            Key_ins4.rt = _Key_ins4_allKeys[-1].rt
            Key_ins4.duration = _Key_ins4_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ins4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Ins4" ---
for thisComponent in Ins4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins4.keys in ['', [], None]:  # No response was made
    Key_ins4.keys = None
thisExp.addData('Key_ins4.keys',Key_ins4.keys)
if Key_ins4.keys != None:  # we had a response
    thisExp.addData('Key_ins4.rt', Key_ins4.rt)
    thisExp.addData('Key_ins4.duration', Key_ins4.duration)
thisExp.nextEntry()
# the Routine "Ins4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins5" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins5.keys = []
Key_ins5.rt = []
_Key_ins5_allKeys = []
# keep track of which components have finished
ins5Components = [Image_ins5, Key_ins5]
for thisComponent in ins5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins5" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins5* updates
    
    # if Image_ins5 is starting this frame...
    if Image_ins5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins5.frameNStart = frameN  # exact frame index
        Image_ins5.tStart = t  # local t and not account for scr refresh
        Image_ins5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins5.started')
        # update status
        Image_ins5.status = STARTED
        Image_ins5.setAutoDraw(True)
    
    # if Image_ins5 is active this frame...
    if Image_ins5.status == STARTED:
        # update params
        pass
    
    # *Key_ins5* updates
    waitOnFlip = False
    
    # if Key_ins5 is starting this frame...
    if Key_ins5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins5.frameNStart = frameN  # exact frame index
        Key_ins5.tStart = t  # local t and not account for scr refresh
        Key_ins5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins5, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins5.started')
        # update status
        Key_ins5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins5.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins5.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins5_allKeys.extend(theseKeys)
        if len(_Key_ins5_allKeys):
            Key_ins5.keys = _Key_ins5_allKeys[-1].name  # just the last key pressed
            Key_ins5.rt = _Key_ins5_allKeys[-1].rt
            Key_ins5.duration = _Key_ins5_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins5" ---
for thisComponent in ins5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins5.keys in ['', [], None]:  # No response was made
    Key_ins5.keys = None
thisExp.addData('Key_ins5.keys',Key_ins5.keys)
if Key_ins5.keys != None:  # we had a response
    thisExp.addData('Key_ins5.rt', Key_ins5.rt)
    thisExp.addData('Key_ins5.duration', Key_ins5.duration)
thisExp.nextEntry()
# the Routine "ins5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "Fix_Practice" ---
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
Fix_PracticeComponents = [Fixcross_Practice]
for thisComponent in Fix_PracticeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Fix_Practice" ---
routineForceEnded = not continueRoutine
while continueRoutine and routineTimer.getTime() < 0.5:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Fixcross_Practice* updates
    
    # if Fixcross_Practice is starting this frame...
    if Fixcross_Practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Fixcross_Practice.frameNStart = frameN  # exact frame index
        Fixcross_Practice.tStart = t  # local t and not account for scr refresh
        Fixcross_Practice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Fixcross_Practice, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Fixcross_Practice.started')
        # update status
        Fixcross_Practice.status = STARTED
        Fixcross_Practice.setAutoDraw(True)
    
    # if Fixcross_Practice is active this frame...
    if Fixcross_Practice.status == STARTED:
        # update params
        pass
    
    # if Fixcross_Practice is stopping this frame...
    if Fixcross_Practice.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Fixcross_Practice.tStartRefresh + 0.5-frameTolerance:
            # keep track of stop time/frame for later
            Fixcross_Practice.tStop = t  # not accounting for scr refresh
            Fixcross_Practice.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Fixcross_Practice.stopped')
            # update status
            Fixcross_Practice.status = FINISHED
            Fixcross_Practice.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Fix_PracticeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Fix_Practice" ---
for thisComponent in Fix_PracticeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-0.500000)

# --- Prepare to start Routine "Cat_practiceRegis" ---
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
text_4.setText('"Enter": move to the next category')
# keep track of which components have finished
Cat_practiceRegisComponents = [Text_Catpracticeregis, Mic_catpractice, key_resp, text_4]
for thisComponent in Cat_practiceRegisComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Cat_practiceRegis" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Text_Catpracticeregis* updates
    
    # if Text_Catpracticeregis is starting this frame...
    if Text_Catpracticeregis.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Text_Catpracticeregis.frameNStart = frameN  # exact frame index
        Text_Catpracticeregis.tStart = t  # local t and not account for scr refresh
        Text_Catpracticeregis.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Text_Catpracticeregis, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Text_Catpracticeregis.started')
        # update status
        Text_Catpracticeregis.status = STARTED
        Text_Catpracticeregis.setAutoDraw(True)
    
    # if Text_Catpracticeregis is active this frame...
    if Text_Catpracticeregis.status == STARTED:
        # update params
        pass
    
    # if Mic_catpractice is starting this frame...
    if Mic_catpractice.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Mic_catpractice.frameNStart = frameN  # exact frame index
        Mic_catpractice.tStart = t  # local t and not account for scr refresh
        Mic_catpractice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Mic_catpractice, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.addData('Mic_catpractice.started', t)
        # update status
        Mic_catpractice.status = STARTED
        # start recording with Mic_catpractice
        Mic_catpractice.start()
    
    # if Mic_catpractice is active this frame...
    if Mic_catpractice.status == STARTED:
        # update params
        pass
        # update recorded clip for Mic_catpractice
        Mic_catpractice.poll()
    
    # if Mic_catpractice is stopping this frame...
    if Mic_catpractice.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Mic_catpractice.tStartRefresh + 15.625-frameTolerance:
            # keep track of stop time/frame for later
            Mic_catpractice.tStop = t  # not accounting for scr refresh
            Mic_catpractice.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.addData('Mic_catpractice.stopped', t)
            # update status
            Mic_catpractice.status = FINISHED
            # stop recording with Mic_catpractice
            Mic_catpractice.stop()
    
    # *key_resp* updates
    waitOnFlip = False
    
    # if key_resp is starting this frame...
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'key_resp.started')
        # update status
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            key_resp.duration = _key_resp_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *text_4* updates
    
    # if text_4 is starting this frame...
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_4.started')
        # update status
        text_4.status = STARTED
        text_4.setAutoDraw(True)
    
    # if text_4 is active this frame...
    if text_4.status == STARTED:
        # update params
        pass
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Cat_practiceRegisComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Cat_practiceRegis" ---
for thisComponent in Cat_practiceRegisComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# tell mic to keep hold of current recording in Mic_catpractice.clips and transcript (if applicable) in Mic_catpractice.scripts
# this will also update Mic_catpractice.lastClip and Mic_catpractice.lastScript
Mic_catpractice.stop()
tag = data.utils.getDateStr()
Mic_catpracticeClip = Mic_catpractice.bank(
    tag=tag, transcribe='None',
    config=None
)
thisExp.addData('Mic_catpractice.clip', os.path.join(Mic_catpracticeRecFolder, 'recording_Mic_catpractice_%s.wav' % tag))
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
    thisExp.addData('key_resp.duration', key_resp.duration)
thisExp.nextEntry()
# the Routine "Cat_practiceRegis" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "ins6" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins6.keys = []
Key_ins6.rt = []
_Key_ins6_allKeys = []
# keep track of which components have finished
ins6Components = [Image_ins6, Key_ins6]
for thisComponent in ins6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "ins6" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins6* updates
    
    # if Image_ins6 is starting this frame...
    if Image_ins6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins6.frameNStart = frameN  # exact frame index
        Image_ins6.tStart = t  # local t and not account for scr refresh
        Image_ins6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins6.started')
        # update status
        Image_ins6.status = STARTED
        Image_ins6.setAutoDraw(True)
    
    # if Image_ins6 is active this frame...
    if Image_ins6.status == STARTED:
        # update params
        pass
    
    # *Key_ins6* updates
    waitOnFlip = False
    
    # if Key_ins6 is starting this frame...
    if Key_ins6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins6.frameNStart = frameN  # exact frame index
        Key_ins6.tStart = t  # local t and not account for scr refresh
        Key_ins6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins6, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins6.started')
        # update status
        Key_ins6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins6.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins6.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins6_allKeys.extend(theseKeys)
        if len(_Key_ins6_allKeys):
            Key_ins6.keys = _Key_ins6_allKeys[-1].name  # just the last key pressed
            Key_ins6.rt = _Key_ins6_allKeys[-1].rt
            Key_ins6.duration = _Key_ins6_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ins6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "ins6" ---
for thisComponent in ins6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins6.keys in ['', [], None]:  # No response was made
    Key_ins6.keys = None
thisExp.addData('Key_ins6.keys',Key_ins6.keys)
if Key_ins6.keys != None:  # we had a response
    thisExp.addData('Key_ins6.rt', Key_ins6.rt)
    thisExp.addData('Key_ins6.duration', Key_ins6.duration)
thisExp.nextEntry()
# the Routine "ins6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('CATEGORIES.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "Ins7" ---
    continueRoutine = True
    # update component parameters for each repeat
    Key_ins7.keys = []
    Key_ins7.rt = []
    _Key_ins7_allKeys = []
    # keep track of which components have finished
    Ins7Components = [Image_ins7, Key_ins7]
    for thisComponent in Ins7Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Ins7" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Image_ins7* updates
        
        # if Image_ins7 is starting this frame...
        if Image_ins7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Image_ins7.frameNStart = frameN  # exact frame index
            Image_ins7.tStart = t  # local t and not account for scr refresh
            Image_ins7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Image_ins7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Image_ins7.started')
            # update status
            Image_ins7.status = STARTED
            Image_ins7.setAutoDraw(True)
        
        # if Image_ins7 is active this frame...
        if Image_ins7.status == STARTED:
            # update params
            pass
        
        # *Key_ins7* updates
        waitOnFlip = False
        
        # if Key_ins7 is starting this frame...
        if Key_ins7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Key_ins7.frameNStart = frameN  # exact frame index
            Key_ins7.tStart = t  # local t and not account for scr refresh
            Key_ins7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Key_ins7, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Key_ins7.started')
            # update status
            Key_ins7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(Key_ins7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(Key_ins7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if Key_ins7.status == STARTED and not waitOnFlip:
            theseKeys = Key_ins7.getKeys(keyList=['space'], waitRelease=False)
            _Key_ins7_allKeys.extend(theseKeys)
            if len(_Key_ins7_allKeys):
                Key_ins7.keys = _Key_ins7_allKeys[-1].name  # just the last key pressed
                Key_ins7.rt = _Key_ins7_allKeys[-1].rt
                Key_ins7.duration = _Key_ins7_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Ins7Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Ins7" ---
    for thisComponent in Ins7Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if Key_ins7.keys in ['', [], None]:  # No response was made
        Key_ins7.keys = None
    trials.addData('Key_ins7.keys',Key_ins7.keys)
    if Key_ins7.keys != None:  # we had a response
        trials.addData('Key_ins7.rt', Key_ins7.rt)
        trials.addData('Key_ins7.duration', Key_ins7.duration)
    # the Routine "Ins7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Fix_test" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    Fix_testComponents = [Fixcross_test]
    for thisComponent in Fix_testComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Fix_test" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 0.5:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Fixcross_test* updates
        
        # if Fixcross_test is starting this frame...
        if Fixcross_test.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Fixcross_test.frameNStart = frameN  # exact frame index
            Fixcross_test.tStart = t  # local t and not account for scr refresh
            Fixcross_test.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Fixcross_test, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Fixcross_test.started')
            # update status
            Fixcross_test.status = STARTED
            Fixcross_test.setAutoDraw(True)
        
        # if Fixcross_test is active this frame...
        if Fixcross_test.status == STARTED:
            # update params
            pass
        
        # if Fixcross_test is stopping this frame...
        if Fixcross_test.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Fixcross_test.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                Fixcross_test.tStop = t  # not accounting for scr refresh
                Fixcross_test.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Fixcross_test.stopped')
                # update status
                Fixcross_test.status = FINISHED
                Fixcross_test.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Fix_testComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Fix_test" ---
    for thisComponent in Fix_testComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-0.500000)
    
    # --- Prepare to start Routine "Cat_testregis" ---
    continueRoutine = True
    # update component parameters for each repeat
    Text_cattextregis.setText(items)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # Run 'Begin Routine' code from code_2
    if trials.thisN == 0:
        task_timer = core.CountdownTimer(start = 1200)
    # keep track of which components have finished
    Cat_testregisComponents = [Text_cattextregis, Mic_cattestresgis, key_resp_2, text_3, text_6]
    for thisComponent in Cat_testregisComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Cat_testregis" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Text_cattextregis* updates
        
        # if Text_cattextregis is starting this frame...
        if Text_cattextregis.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Text_cattextregis.frameNStart = frameN  # exact frame index
            Text_cattextregis.tStart = t  # local t and not account for scr refresh
            Text_cattextregis.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Text_cattextregis, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Text_cattextregis.started')
            # update status
            Text_cattextregis.status = STARTED
            Text_cattextregis.setAutoDraw(True)
        
        # if Text_cattextregis is active this frame...
        if Text_cattextregis.status == STARTED:
            # update params
            pass
        
        # if Mic_cattestresgis is starting this frame...
        if Mic_cattestresgis.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Mic_cattestresgis.frameNStart = frameN  # exact frame index
            Mic_cattestresgis.tStart = t  # local t and not account for scr refresh
            Mic_cattestresgis.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Mic_cattestresgis, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('Mic_cattestresgis.started', t)
            # update status
            Mic_cattestresgis.status = STARTED
            # start recording with Mic_cattestresgis
            Mic_cattestresgis.start()
        
        # if Mic_cattestresgis is active this frame...
        if Mic_cattestresgis.status == STARTED:
            # update params
            pass
            # update recorded clip for Mic_cattestresgis
            Mic_cattestresgis.poll()
        
        # if Mic_cattestresgis is stopping this frame...
        if Mic_cattestresgis.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Mic_cattestresgis.tStartRefresh + 15.625-frameTolerance:
                # keep track of stop time/frame for later
                Mic_cattestresgis.tStop = t  # not accounting for scr refresh
                Mic_cattestresgis.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.addData('Mic_cattestresgis.stopped', t)
                # update status
                Mic_cattestresgis.status = FINISHED
                # stop recording with Mic_cattestresgis
                Mic_cattestresgis.stop()
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['return'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *text_3* updates
        
        # if text_3 is starting this frame...
        if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_3.frameNStart = frameN  # exact frame index
            text_3.tStart = t  # local t and not account for scr refresh
            text_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_3.started')
            # update status
            text_3.status = STARTED
            text_3.setAutoDraw(True)
        
        # if text_3 is active this frame...
        if text_3.status == STARTED:
            # update params
            pass
        # Run 'Each Frame' code from code_2
        time_left = task_timer.getTime()
        
        minutes = int(time_left / 60)
        seconds = int(time_left % 60)
        
        
        if time_left <= 0.0:
            trials.finished = True
            continueRoutine = False
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_6.started')
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            text_6.setText(f'Time left {minutes}:{seconds}', log=False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Cat_testregisComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Cat_testregis" ---
    for thisComponent in Cat_testregisComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # tell mic to keep hold of current recording in Mic_cattestresgis.clips and transcript (if applicable) in Mic_cattestresgis.scripts
    # this will also update Mic_cattestresgis.lastClip and Mic_cattestresgis.lastScript
    Mic_cattestresgis.stop()
    tag = data.utils.getDateStr()
    Mic_cattestresgisClip = Mic_cattestresgis.bank(
        tag=tag, transcribe='None',
        config=None
    )
    trials.addData('Mic_cattestresgis.clip', os.path.join(Mic_cattestresgisRecFolder, 'recording_Mic_cattestresgis_%s.wav' % tag))
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials.addData('key_resp_2.rt', key_resp_2.rt)
        trials.addData('key_resp_2.duration', key_resp_2.duration)
    # the Routine "Cat_testregis" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "Ins8" ---
    continueRoutine = True
    # update component parameters for each repeat
    # keep track of which components have finished
    Ins8Components = [Image_ins8]
    for thisComponent in Ins8Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Ins8" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 10.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Image_ins8* updates
        
        # if Image_ins8 is starting this frame...
        if Image_ins8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Image_ins8.frameNStart = frameN  # exact frame index
            Image_ins8.tStart = t  # local t and not account for scr refresh
            Image_ins8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Image_ins8, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Image_ins8.started')
            # update status
            Image_ins8.status = STARTED
            Image_ins8.setAutoDraw(True)
        
        # if Image_ins8 is active this frame...
        if Image_ins8.status == STARTED:
            # update params
            pass
        
        # if Image_ins8 is stopping this frame...
        if Image_ins8.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Image_ins8.tStartRefresh + 10-frameTolerance:
                # keep track of stop time/frame for later
                Image_ins8.tStop = t  # not accounting for scr refresh
                Image_ins8.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Image_ins8.stopped')
                # update status
                Image_ins8.status = FINISHED
                Image_ins8.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
            if eyetracker:
                eyetracker.setConnectionState(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Ins8Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Ins8" ---
    for thisComponent in Ins8Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-10.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "Ins10" ---
continueRoutine = True
# update component parameters for each repeat
Key_ins10.keys = []
Key_ins10.rt = []
_Key_ins10_allKeys = []
# keep track of which components have finished
Ins10Components = [Image_ins10, Key_ins10]
for thisComponent in Ins10Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Ins10" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Image_ins10* updates
    
    # if Image_ins10 is starting this frame...
    if Image_ins10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Image_ins10.frameNStart = frameN  # exact frame index
        Image_ins10.tStart = t  # local t and not account for scr refresh
        Image_ins10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Image_ins10, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Image_ins10.started')
        # update status
        Image_ins10.status = STARTED
        Image_ins10.setAutoDraw(True)
    
    # if Image_ins10 is active this frame...
    if Image_ins10.status == STARTED:
        # update params
        pass
    
    # *Key_ins10* updates
    waitOnFlip = False
    
    # if Key_ins10 is starting this frame...
    if Key_ins10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_ins10.frameNStart = frameN  # exact frame index
        Key_ins10.tStart = t  # local t and not account for scr refresh
        Key_ins10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_ins10, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Key_ins10.started')
        # update status
        Key_ins10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_ins10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_ins10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_ins10.status == STARTED and not waitOnFlip:
        theseKeys = Key_ins10.getKeys(keyList=['space'], waitRelease=False)
        _Key_ins10_allKeys.extend(theseKeys)
        if len(_Key_ins10_allKeys):
            Key_ins10.keys = _Key_ins10_allKeys[-1].name  # just the last key pressed
            Key_ins10.rt = _Key_ins10_allKeys[-1].rt
            Key_ins10.duration = _Key_ins10_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
        if eyetracker:
            eyetracker.setConnectionState(False)
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Ins10Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Ins10" ---
for thisComponent in Ins10Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Key_ins10.keys in ['', [], None]:  # No response was made
    Key_ins10.keys = None
thisExp.addData('Key_ins10.keys',Key_ins10.keys)
if Key_ins10.keys != None:  # we had a response
    thisExp.addData('Key_ins10.rt', Key_ins10.rt)
    thisExp.addData('Key_ins10.duration', Key_ins10.duration)
thisExp.nextEntry()
# the Routine "Ins10" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()
# save Mic_catpractice recordings
for tag in Mic_catpractice.clips:
    for i, clip in enumerate(Mic_catpractice.clips[tag]):
        clipFilename = 'recording_Mic_catpractice_%s.wav' % tag
        # if there's more than 1 clip with this tag, append a counter for all beyond the first
        if i > 0:
            clipFilename += '_%s' % i
        clip.save(os.path.join(Mic_catpracticeRecFolder, clipFilename))
# save Mic_cattestresgis recordings
for tag in Mic_cattestresgis.clips:
    for i, clip in enumerate(Mic_cattestresgis.clips[tag]):
        clipFilename = 'recording_Mic_cattestresgis_%s.wav' % tag
        # if there's more than 1 clip with this tag, append a counter for all beyond the first
        if i > 0:
            clipFilename += '_%s' % i
        clip.save(os.path.join(Mic_cattestresgisRecFolder, clipFilename))

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
