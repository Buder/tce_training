/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Orientation and Gestures",
		"%l_subtitle": "Advanced Titanium Mobile Development",
		"%l_lessontitle": "Orientation and Gestures",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Device orientation",
		"%l_agenda2": "Gestures",
		"%l_slidenote_agenda": "In this module, we'll discuss how to deal with device orientation as well as how to integrate gestures other than taps into your app.",

		"%l_orientation": "Device orientation",
		"%l_orientation_image": "<img src='images/orientation.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_examples": "Many options for formatting tables (seven total shown)",
		"%l_appsupport": "App-level orientation support",
		"%l_fix_orientation": "Fixing orientation per window",
		"%l_handle_orientation": "Handling orientation events",
		"%l_slidenote_orientation": "Multiple levels of orientation support:<br><ul><li>Set app-level options to control splash screen and whole-app orienation support</li><li>Setting a fixed orientation for specific screens within your app (e.g. one screen in portrait and another in landscape, but those are locked)</li><li>Actively updating your app's UI based on the current orientation by handling orientation events</li></ul><br>Per Apple's HIG on iPhone, either:<ul><li>Lock orientation, or</li><li>Support portrait, landscape left & right, but not upside down (to prevent upside down phone during incoming call)</li></ul><br>On iPad, you should support all orientations",

		"%l_lock_orientation": "App-level Orientation Support - iOS",
		"%in_tiapp": "In tiapp.xml:",
		"%l_lockios_codev2": "\n&lt;ios>\n&lt;plist>\n&lt;dict>\n  &lt;key>UISupportedInterfaceOrientations&lt;/key>\n  &lt;array>\n    &lt;string>UIInterfaceOrientationPortrait&lt;/string>\n  &lt;/array>\n  &lt;key>UISupportedInterfaceOrientations~ipad&lt;/key>\n  &lt;array>\n    &lt;string>UIInterfaceOrientationPortrait&lt;/string>\n    &lt;string>UIInterfaceOrientationPortraitUpsideDown&lt;/string>\n    &lt;string>UIInterfaceOrientationLandscapeLeft&lt;/string>\n    &lt;string>UIInterfaceOrientationLandscapeRight&lt;/string>\n  &lt;/array>\n&lt;/dict>\n&lt;/plist>\n&lt;/ios>\n ",

		"%l_slidenote_lock_orientation2": "You specify all the orientations your app <em>could take</em> in tiapp.xml<br><br/>These new values replace the &lt;orientations> tag from pre-Ti2.1.<br/><br/>Use the ~iphone or ~ipad suffix to target specific platforms or leave off to apply to all.<br/><br/>These settings also control the splash screen orientations.",
		
		
		"%l_lock_orientation_android": "App-level Orientation Support - Android",
		"%l_option_1": "Option 1 - modify tiapp.xml:",
		"%l_copy_code": "Copy code from build/android/AndroidManifest.xml",
		"%l_add_nested": "Add nested < manifest > tags within < android >",
		"%l_remove": "remove '|orientation' from every node",
		"%l_lock_orientation_android_image": "<img src='images/lock-orientation-android.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_lock_orientation_android": "Again, this option specifies the orientations your app could support and controls the splash screen orientations. ",
		
		"%l_option_2": "Option 2 - Custom Android manifest file",
		"%l_copy_build": "Copy build/android/AndroidManifest.xml to <b>platform/android/AndroidManifest.xml</b>",
		"%l_remove": "remove '|orientation' from every node",
		"%l_lock_orientation_android_image_2": "<img src='images/lock-orientation-android-2.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_lock_orientation_android_2": "Option 2 is to create a custom manifest file in the Platform/android folder<br>The Platform folder doesn't exist by default<br>Clean the project before rebuilding to clear out old AndroidManifest.xml file",

		"%l_fixed_orientation": "Fixing Orientation per Window",
		"%l_window_modes": "Window Orientation Modes",
		"%l_supported_val": "Supported values include:",
		"%l_fixedorient_code": "\nvar win = Ti.UI.createWindow({\n   /* iOS - define here */\n   orientationModes: [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT]\n});\n\n/* Android, define here */\nwin.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT];\n ",
		"%l_portrait": "PORTRAIT / UPSIDE_PORTRAIT",
		"%l_landscape": "LANDSCAPE_LEFT / LANDSCAPE_RIGHT",
		"%l_face": "FACE_UP / FACE_DOWN",
		"%l_slidenote_fixed_orientation": "You can set orientation on a per window basis within your app<br><br/>The older Ti.UI.orientation property technique is deprecated and should not be used.",
		
		"%l_or_events": "Orientation Events",
		"%l_ti_gestureorientation": "Ti.Gesture.orientationchange",
		"%l_event_props": "Event properties and methods",
		"%l_orientation_code": "\nTi.Gesture.addEventListener('orientationchange', function(e) {\n   // current device orientation\n   // Ti.Gesture.orientation\n   \n   // or, get orientation from event object\n   // e.orientation\n   \n   // also, there are two helpers:\n   // e.source.isPortrait()\n   // e.source.isLandscape()\n});\n ",
		"%l_slidenote_or_events": "You can react to orientation change events<br>Use the Ti.Gesture event listener<br>Test on device<br/><br/>Keep in mind the difference expections of what a handset considers the top of the device (ear-piece up/mic down) versus a tablet (what most of us would call landscape orientation)",
		
		"%l_handling_or": "Handling Orientation Changes",
		"%l_react_to": "React to orientation change via event listener",
		"%l_use_self": "Use self-contained, self-updating UI components",
		"%l_move_rotate": "Move, rotate, and swap UI elements",
		"%l_take_adv": "Take advantage of the orientation",
		"%l_dont_forget": "Don't forget the soft keyboard",
		"%l_slidenote_handling_or": "<ul><li>Unless your UI dictates otherwise, best-practice is to actively react to orientation changes</li><li>Self-contained, self-updating is same as we use in TiBountyHunter with the tableview where it 'knows' how to update itself &mdash; Components listen for a global orientation event and update themselves</li><li>You might move, rotate, swap elements as orientation changes</li><li>Take advantage &mdash; move components to logical location, change size & shape, show different content (as in the Jamie Oliver recipe application that shows longer how-to info in landscape and short text & ingredients in portrait)</li><li>Soft keyboard &mdash; might cover a lot more of your UI</li></ul>",

		"%l_gestures": "Gestures",
		"%l_slidenote_gestures": "",
		"%l_shake": "Shake",
		"%l_swipe": "Swipe",
		"%l_touch": "Touch start, end, move, and cancel",
		"%l_pinch": "Pinch (iOS)",
		"%l_long": "Long press",
		"%l_pitch": "Pitch, roll, and yaw",
		"%l_slidenote_gestures_detail": "Other than taps, you can react to these gestures<br>(don't go too deep here, there are upcoming slides for that)",
		
		"%l_shake_image": "<img src='images/shake.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ti_gesture": "Ti.Gesture.shake",
		"%l_ev_obj": "Event object properties",
		"%l_shake_code_image": "<img src='images/shake-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_shake": "timestamp is useful to track the time since last shake<br>Useful for not over reacting to shakes (delay before counting as a new shake event)",
		
		"%l_swipes": "Swipes",
		"%l_swipe_image": "<img src='images/swipe.png' style='margin-top:5px;height:400px;'/>",
		"%l_built_in": "Built-in event on most Ti.UI elements",
		"%l_direction": "direction",
		"%l_source": "source",
		"%l_xy": "x/y coords",
		"%l_slidenote_swipes": "Swipe supported on pretty much all Ti.UI components<br>Most likely to be used on views, windows, tableviews, imageviews, labels, web views<br>Key object properties are direction (left or right) and source",
		
		"%l_touches": "Touches",
		"%l_subtypes": "Subtypes: touchstart, touchmove, touchend, touchcancel",
		"%l_touchmove": "touchmove fires continuously during event",
		"%l_slidenote_touches": "touchcancel fired when your app is interrupted (phone call)<br>Use x/y coordinates to determine direction",
		
		"%l_pinch": "Pinch",
		"%l_pinch_image": "<img src='images/pinch.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ios_pinchV2": "iOS and Android",
		"%l_zoom": "Zoom only (no rotation)",
		"%l_pinch_code_image": "<img src='images/pinch-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_pinchV2": "iOS pinch support added in 1.8.0.1, Android support in 2.1<br><br>Only pinch to zoom supported now, rotation might be added",
		
		
		"%l_long_press": "Long press",
		"%l_nativelyV2": "Natively supported starting in 1.8+",
		"%l_sim_by": "For older SDKs, simulate by tracking touchstart and touchend",
		"%l_keep_mind": "Keep in mind native UI conventions for long presses",
		"%l_slidenote_long_pressV2": "Native support for long press added in 1.8.0.1<br>Simulate in older SDKs by tracking touchstart and touchend<br><br>Keep in mind native conventions: e.g. on iOS, longpress selects word to look up definition",
	
		"%l_acc": "Gyroscope (via Accelerometer)",
		"%l_ios_android": "iOS and Android natively support gyroscope",
		"%l_ti_apis": "Titanium APIs don't support it currently",
		"%l_not_all": "Not all devices include necessary gyro hardware",
		"%l_approx": "Approximation: Use the accelerometer to track pitch, roll, and yaw changes",
		"%l_ki_demo": "Kitchen Sink demo",
		"%l_slidenote_acc": "Android and iOS support gyroscope APIs to track rotational changes<br>But not currently supported in Titanium APIs<br>Use linear acceleration from accelerometer as workaround<br>Detect 3-axis change values and will probably need some good math to get accurate correspondence to pitch, roll, yaw<br><b>Demo must be run on a device</b><br>Phone tab > Accelerometer<br>Resources/examples/accelerometer.js",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Lab Goals",
		"%l_update_simple": "Update simple app to add orientation support",
		"%l_update_data": "Update data based on swipe and shake events",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/325+-+Handling+Gestures+and+Orientation+Changes'>wiki.appcelerator.org/display/td/325+-+Handling+Gestures+and+Orientation+Changes</a>",
		"%l_slidenote_lab_goals": "In this lab you will create modify a simple UI based on orientation changes and then alter than data based on swipe and shake gesture events. When the phone registers the shake event, it will choose a random photo to display as the album image. When you swipe over the copy, it will choose a random one for display as well. Rotation of device will reorient the content of the window to be more effectively located."
	},
	"ES": {
		"%l_filetitle": "Orientación y gestos",
		"%l_subtitle": "Titanium Mobile avanzado para desarrollo",
		"%l_lessontitle": "Orientación y gestos",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(30 mins teaching, 30 mins for lab)",

		"%l_agenda_title": "Agenda",
		"%l_agenda1": "Orientación del dispositivo",
		"%l_agenda2": "Gestos",
		"%l_slidenote_agenda": "In this module, we'll discuss how to deal with device orientation as well as how to integrate gestures other than taps into your app.",

		"%l_orientation": "Orientación del dispositivo",
		"%l_orientation_image": "<img src='images/orientation.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_examples": "Muchas de las opciones para los formatos de las tablas (se muestran siete en total)",
		"%l_appsupport": "Aplicación de apoyo a nivel de orientación",
		"%l_fix_orientation": "Arreglo de orientación por ventana",
		"%l_handle_orientation": "Forma de controlar eventos de orientación",
		"%l_slidenote_orientation": "Multiple levels of orientation support:<br><ul><li>Set app-level options to control splash screen and whole-app orienation support</li><li>Setting a fixed orientation for specific screens within your app (e.g. one screen in portrait and another in landscape, but those are locked)</li><li>Actively updating your app's UI based on the current orientation by handling orientation events</li></ul><br>Per Apple's HIG on iPhone, either:<ul><li>Lock orientation, or</li><li>Support portrait, landscape left & right, but not upside down (to prevent upside down phone during incoming call)</li></ul><br>On iPad, you should support all orientations",

		"%l_lock_orientation": "Aplicación a nivel de dirección de apoyo - iOS",
		"%in_tiapp": "En tiapp.xml:",
		"%l_lock_orientation_image": "<img src='images/lock-orientation.png' style='margin-top:5px;height:350px;'/>",
		"%l_slidenote_lock_orientation": "For iOS, set supported orientations in tiapp.xml<br><br/>To lock orientation, just remove the non-supported orientations.<br/><br/>Those listed here are also the orientations in which the splash screens could be displayed.",
		
		
		"%l_lock_orientation_android": "Aplicación a nivel de dirección de apoyo - Android",
		"%l_option_1": "Opción 1 - modifique tiapp.xml:",
		"%l_copy_code": "Copie el codigo desde build/android/AndroidManifest.xml",
		"%l_add_nested": "Agregue anidada < manifest > dentro de las etiquetas < android >",
		"%l_remove": "remueva '|orientation' desde cada nodo",
		"%l_lock_orientation_android_image": "<img src='images/lock-orientation-android.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_lock_orientation_android": "Again, this option specifies the orientations your app could support and controls the splash screen orientations. ",
		
		"%l_option_2": "Opción 2 - Personalize el archivo de manifiesto de Android",
		"%l_copy_build": "Copie build/android/AndroidManifest.xml hacia <b>platform/android/AndroidManifest.xml</b>",
		"%l_remove": "remueva '|orientation' desde cada nodo",
		"%l_lock_orientation_android_image_2": "<img src='images/lock-orientation-android-2.png' style='margin-top:5px;height:350px;float:right;'/>",
		"%l_slidenote_lock_orientation_android_2": "Option 2 is to create a custom manifest file in the Platform/android folder<br>The Platform folder doesn't exist by default<br>Clean the project before rebuilding to clear out old AndroidManifest.xml file",

		"%l_fixed_orientation": "La fijación de orientación por la ventana",
		"%l_window_modes": "Modos de orientación de la ventana",
		"%l_supported_val": "Los valores admitidos son:",
		"%l_fixedorient_code": "\nvar win = Ti.UI.createWindow({\n   /* iOS - define here */\n   orientationModes: [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT]\n});\n\n/* Android, define here */\nwin.orientationModes = [Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT];\n ",
		"%l_portrait": "PORTRAIT (retrato) / UPSIDE_PORTRAIT (retrato al revés)",
		"%l_landscape": "LANDSCAPE_LEFT (paisaje izquierda) / LANDSCAPE_RIGHT (paisaje derecha)",
		"%l_face": "FACE_UP (orientación hacia arriba) / FACE_DOWN (orientación hacia abajo)",
		"%l_slidenote_fixed_orientation": "You can set orientation on a per window basis within your app<br><br/>The older Ti.UI.orientation property technique is deprecated and should not be used.",
		
		"%l_or_events": "Eventos de Orientación",
		"%l_ti_gestureorientation": "Ti.Gesture.orientationchange",
		"%l_event_props": "Propiedades y metodos de los eventos",
		"%l_orientation_code": "\nTi.Gesture.addEventListener('orientationchange', function(e) {\n   // current device orientation\n   // Ti.Gesture.orientation\n   \n   // or, get orientation from event object\n   // e.orientation\n   \n   // also, there are two helpers:\n   // e.source.isPortrait()\n   // e.source.isLandscape()\n});\n ",
		"%l_slidenote_or_events": "You can react to orientation change events<br>Use the Ti.Gesture event listener<br>Test on device<br/><br/>Keep in mind the difference expections of what a handset considers the top of the device (ear-piece up/mic down) versus a tablet (what most of us would call landscape orientation)",
		
		"%l_handling_or": "Manejo de los cambios de orientación",
		"%l_react_to": "Reaccionar ante el cambio de orientación a través de detector de eventos",
		"%l_use_self": "Utilice componentes autónomos y auto-actualización de la interfaz de usuario",
		"%l_move_rotate": "Muevale, rotele, y deslize los elementos de la interfaz",
		"%l_take_adv": "Tome ventaja de la orientación",
		"%l_dont_forget": "No olvide el teclado en pantalla",
		"%l_slidenote_handling_or": "<ul><li>Unless your UI dictates otherwise, best-practice is to actively react to orientation changes</li><li>Self-contained, self-updating is same as we use in TiBountyHunter with the tableview where it 'knows' how to update itself &mdash; Components listen for a global orientation event and update themselves</li><li>You might move, rotate, swap elements as orientation changes</li><li>Take advantage &mdash; move components to logical location, change size & shape, show different content (as in the Jamie Oliver recipe application that shows longer how-to info in landscape and short text & ingredients in portrait)</li><li>Soft keyboard &mdash; might cover a lot more of your UI</li></ul>",

		"%l_gestures": "Gestos",
		"%l_slidenote_gestures": "",
		"%l_shake": "Sacudir",
		"%l_swipe": "Deslizar",
		"%l_touch": "touchstart (Toque de inicio), touchend(toque final), touchmove (movimiento), y  touchcancel (cancelar)",
		"%l_pinch": "Apretar (iOS)",
		"%l_long": "Mantener pulsado",
		"%l_pitch": "Tono, enrollar, y viraje",
		"%l_slidenote_gestures_detail": "Other than taps, you can react to these gestures<br>(don't go too deep here, there are upcoming slides for that)",
		
		"%l_shake_image": "<img src='images/shake.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ti_gesture": "Ti.Gesture.shake",
		"%l_ev_obj": "Propiedades de los objetos de eventos",
		"%l_shake_code_image": "<img src='images/shake-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_shake": "timestamp is useful to track the time since last shake<br>Useful for not over reacting to shakes (delay before counting as a new shake event)",
		
		"%l_swipes": "Deslizar",
		"%l_swipe_image": "<img src='images/swipe.png' style='margin-top:5px;height:400px;'/>",
		"%l_built_in": "Construido el evento en la mayoría de los elementos Ti.UI",
		"%l_direction": "Dirección",
		"%l_source": "Fuente",
		"%l_xy": "x/y coordenadas",
		"%l_slidenote_swipes": "Swipe supported on pretty much all Ti.UI components<br>Most likely to be used on views, windows, tableviews, imageviews, labels, web views<br>Key object properties are direction (left or right) and source",
		
		"%l_touches": "Toques",
		"%l_subtypes": "Los subtipos: touchstart(toque de inicio), touchmove(movimiento táctil), touchend(toque final), touchcancel(toque de cancelar)",
		"%l_touchmove": "touchmove dispara de forma continua durante el evento",
		"%l_slidenote_touches": "touchcancel fired when your app is interrupted (phone call)<br>Use x/y coordinates to determine direction",
		
		"%l_pinch": "Apretar",
		"%l_pinch_image": "<img src='images/pinch.png' style='margin-top:5px;height:300px;float:right;'/>",
		"%l_ios_pinch": "Solo para iOS (por ahora)",
		"%l_zoom": "Solo acercamiento Zoom(no rotación)",
		"%l_pinch_code_image": "<img src='images/pinch-code.png' style='margin-top:5px;height:200px;'/>",
		"%l_slidenote_pinch": "Pinch support added in 1.8.0.1, Pull request for Android accepted, probably available in Ti 2.1<br>Only zoom supported now, rotation might be added",
		
		
		"%l_long_press": "Mantener pulsado",
		"%l_natively": "Soportado de forma nativa en el 1.8+",
		"%l_sim_by": "Para mayores SDK, simular mediante el seguimiento y la touchstart touchend",
		"%l_fak_android": "<a href='https://gist.github.com/1019105'>https://gist.github.com/1019105</a>",
		"%l_longpressdeleterow": "<a href='https://gist.github.com/1018107'>https://gist.github.com/1018107</a>",
		"%l_fak_long_delete": "Mantenga pulsado para borrar fila de la tabla",
		"%l_keep_mind": "Tenga en cuenta los convenios de interfaz de usuario nativas para mantener presionado",
		"%l_slidenote_long_press": "ative support for long press added in 1.8.0.1<br>Simulate in older SDKs by tracking touchstart and touchend<br>A couple of gists show how you could use this<br>Keep in mind native conventions: e.g. on iOS, magnifies view in some contexts<br>Long press will be natively supported soon, maybe 1.8",
	
		"%l_acc": "Giroscopio (via acelerometro)",
		"%l_ios_android": "iOS y Android soporta de forma nativa el giroscopio",
		"%l_ti_apis": "Las APIs de Titanium no lo soportan en la actualidad",
		"%l_not_all": "No todos los dispositivos de hardware incluyen giro necesario",
		"%l_approx": "Aproximación: Utilice el acelerómetro para realizar un seguimiento de cabeceo, balanceo y cambios de orientación",
		"%l_ki_demo": "Kitchen Sink demo",
		"%l_slidenote_acc": "Android and iOS support gyroscope APIs to track rotational changes<br>But not currently supported in Titanium APIs<br>Use linear acceleration from accelerometer as workaround<br>Detect 3-axis change values and will probably need some good math to get accurate correspondence to pitch, roll, yaw<br><b>Demo must be run on a device</b><br>Phone tab > Accelerometer<br>Resources/examples/accelerometer.js",
		
		"%l_qa": "Q&amp;A",
		"%l_slidenote_qa": "",
		
		"%l_lab_goals": "Objetivos de laboratorio",
		"%l_update_simple": "Actualización de aplicación sencilla para añadir soporte de orientación",
		"%l_update_data": "Actualización de los datos basándose en deslizar y agitar",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/325+-+Handling+Gestures+and+Orientation+Changes'>wiki.appcelerator.org/display/td/325+-+Handling+Gestures+and+Orientation+Changes</a>",
		"%l_slidenote_lab_goals": "In this lab you will create modify a simple UI based on orientation changes and then alter than data based on swipe and shake gesture events. When the phone registers the shake event, it will choose a random photo to display as the album image. When you swipe over the copy, it will choose a random one for display as well. Rotation of device will reorient the content of the window to be more effectively located."
	}	
});