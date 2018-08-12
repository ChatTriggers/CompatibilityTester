register("command", function(type) {
	if (type) {
		new Thread(function() {
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
			
			if (Stresser.tests.containsKey(type.toLowerCase())) {
				Stresser.tests.get(type.toLowerCase())();
			} else {
				ChatLib.chat('&cNo test by name "' + type.toLowerCase() + '"');
			}
			
			ChatLib.chat(Stresser.completed + "/" + Stresser.tested + " passed.");
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
			
			Stresser.tested = 0;
			Stresser.completed = 0;
			Stresser.message = new Message().setChatLineId(5473);
		}).start();
	} else {
		new Thread(function() {
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
			Stresser.tests.forEach(function(key, value) {
				value();
			});
			
			ChatLib.chat(Stresser.completed + "/" + Stresser.tested + " passed.");
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
	
			Stresser.tested = 0;
			Stresser.completed = 0;
			Stresser.message = new Message().setChatLineId(5473);
		}).start();
	}
	
	
}).setName("test");

function out(arg) {
	Stresser.tested++;
	var evaluated;
	try {
		eval(arg);
		Stresser.message.addTextComponent("&a. ").chat();
		Stresser.completed++;
	} catch(err) {
		ChatLib.chat(arg + ": &c" + err);
		Stresser.message.addTextComponent("&cX ").chat();
	}
}

var Stresser = {
	tests: new HashMap(),
	message: new Message().setChatLineId(5473),
	tested: 0,
	completed: 0
};