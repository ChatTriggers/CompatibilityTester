Stresser.tests.put("sign", function() {
	if (Player.lookingAt() instanceof Sign) {
		out('Player.lookingAt().getFormattedLines()');
		out('Player.lookingAt().getLines()');
		out('Player.lookingAt().getSign()');
		out('Player.lookingAt().getUnformattedLines()');
		out('Player.lookingAt().toString()');
	}
});