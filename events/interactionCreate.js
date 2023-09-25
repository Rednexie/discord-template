module.exports = {
    config: {
        name: 'interactionCreate',
        once: false,
    },
    execute: async (interaction, bot) => {
      if (!interaction.isCommand()) return;
      const cmd = interaction.commandName;
      const slash = client.slashes.get(cmd)
      if (!slash) return
        
      try {
        await slash.execute(interaction, bot);
      } catch (error) {
        // Handle any errors
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
  
    }
  }
  