Stresser.tests.put("world", function() {
	out('World.getAllEntities()');
	out('World.getAllEntitiesOfType(Java.type("net.minecraft.entity.Entity").class)');
	out('World.getAllPlayers()');
	out('World.getBlockAt(0, 0, 0)');
	out('World.getChunk(0, 0, 0)');
	out('World.getDifficulty()');
	out('World.getMoonPhase()');
	out('World.getPlayerByName(Player.getName())');
	out('World.getRainingStrength()');
	out('World.getSeed()');
	out('World.getTime()');
	out('World.getType()');
	out('World.getWorld()');
	out('World.isLoaded()');
	out('World.isRaining()');
	if (Client.getVersion() == "1.8.9") {
		out('World.playRecord("records.11", 0, 0, 0)');
		out('World.playSound("gui.button.press", 1, 1)');
	} else {
		out('World.playRecord("record.11", 0, 0, 0)');
		out('World.playSound("ui.button.click", 1, 1)');
	}
	out('World.showTitle("test", "test", 5, 5, 5)');
	out('World.border.getCenterX()');
	out('World.border.getCenterZ()');
	out('World.border.getSize()');
	out('World.border.getTargetSize()');
	out('World.border.getTimeUntilTarget()');
	out('World.particle.getParticleNames()');
	out('World.particle.spawnParticle("EXPLOSION_NORMAL", 0, 0, 0, 0, 0, 0)');
	out('World.spawn.getX()');
	out('World.spawn.getY()');
	out('World.spawn.getZ()');
});