Stresser.tests.put("block", function() {
	if (Player.lookingAt() instanceof Block) {
		out('Player.lookingAt().canBeHarvested()');
		out('Player.lookingAt().canBeHarvestedWith(Player.getHeldItem())');
		out('Player.lookingAt().canProvidePower()');
		out('Player.lookingAt().getBlock()');
		out('Player.lookingAt().getDefaultMetadata()');
		out('Player.lookingAt().getDefaultState()');
		out('Player.lookingAt().getID()');
		out('Player.lookingAt().getLightValue()');
		out('Player.lookingAt().getMetadata()');
		out('Player.lookingAt().getName()');
		out('Player.lookingAt().getRedstoneStength()');
		out('Player.lookingAt().getRegistryName()');
		out('Player.lookingAt().getState()');
		out('Player.lookingAt().getUnlocalizedName()');
		out('Player.lookingAt().getX()');
		out('Player.lookingAt().getY()');
		out('Player.lookingAt().getZ()');
		out('Player.lookingAt().isPowered()');
		out('Player.lookingAt().isTranslucent()');
		out('Player.lookingAt().toString()');
	}
});