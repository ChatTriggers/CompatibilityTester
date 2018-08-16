var ToolKit = Java.type("java.awt.Toolkit");
var StringSelection = Java.type("java.awt.datatransfer.StringSelection");

register("command", function(type) {
	if (type) {
		new Thread(function() {
			Stresser.failed = [];
			
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
			
			if (Stresser.tests.containsKey(type.toLowerCase())) {
				Stresser.tests.get(type.toLowerCase())();
			} else {
				ChatLib.chat('&cNo test by name "' + type.toLowerCase() + '"');
			}
			
			ChatLib.chat(Stresser.completed + "/" + Stresser.tested + " passed.");
			if (Stresser.failed.length > 0) {
				new Message(
					new TextComponent("&c[copy errors]")
						.setClick("run_command", "/test.copyErrors")
						.setHoverValue("&7Click to copy errors to clipboard")
				).setChatLineId(5474).chat();
			}
			
			new Message("&9&m" + ChatLib.getChatBreak("-")).setChatLineId(5475).chat();
			
			Stresser.tested = 0;
			Stresser.completed = 0;
			Stresser.message = new Message().setChatLineId(5473);
		}).start();
	} else {
		new Thread(function() {
			Stresser.failed = [];
			
			ChatLib.chat("&9&m" + ChatLib.getChatBreak("-"));
			Stresser.tests.forEach(function(key, value) {
				Stresser.message.addTextComponent(
					new TextComponent("&f> ").setHoverValue(key)
				).chat();
				value();
			});
			
			ChatLib.chat(Stresser.completed + "/" + Stresser.tested + " passed.");
			if (Stresser.failed.length > 0) {
				new Message(
					new TextComponent("&c[copy errors]")
						.setClick("run_command", "/test.copyErrors")
						.setHoverValue("&7Click to copy errors to clipboard")
				).setChatLineId(5474).chat();
			}
			
			new Message("&9&m" + ChatLib.getChatBreak("-")).setChatLineId(5475).chat();
	
			Stresser.tested = 0;
			Stresser.completed = 0;
			Stresser.message = new Message().setChatLineId(5473);
		}).start();
	}
}).setName("test");

register("command", function() {
	var copied = "```asciidoc\n"
	
	for (var i = 0; i < Stresser.failed.length; i++) {
		copied += Stresser.failed[i] + "\n";
	}
	
	copied += "```";
	
	Toolkit.getDefaultToolkit().getSystemClipboard().setContents(new StringSelection(copied), null);
	
	new Message(
		new TextComponent("&aCopied!")
			.setClick("run_command", "/test.copyErrors")
			.setHoverValue("&7Click to copy again")
	).setChatLineId(5474).chat();
	
	new Message("&9&m" + ChatLib.getChatBreak("-")).setChatLineId(5475).chat();
}).setName("test.copyErrors");

function out(arg) {
	Stresser.tested++;
	try {
		var evaluated = eval(arg);
		Stresser.message.addTextComponent(
			new TextComponent("&a. ").setHoverValue(arg + "\n&a" + evaluated)
		).chat();
		Stresser.completed++;
	} catch(err) {
		ChatLib.chat(arg + ": \n &c" + err);
		Stresser.failed.push(arg + " :: " + err);
		Stresser.message.addTextComponent(
			new TextComponent("&cX ").setHoverValue(arg + "\n&c" + err)
		).chat();
	}
}

var Stresser = {
	tests: new HashMap(),
	message: new Message().setChatLineId(5473),
	tested: 0,
	completed: 0,
	failed: []
};