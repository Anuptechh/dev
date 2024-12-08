import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext

import config

# Start Command
async def start(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text(
        "Welcome to SWEATLITEBOT! 🚀\n\nUse this bot to track your wallet transactions and manage your balance.\n\nCommands:\n"
        "/balance - Check your wallet balance\n"
        "/transfer - Transfer funds to another wallet\n"
        "/help - Show help information"
    )

# Help Command
async def help_command(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text("Need help? Use /start to see available commands or contact support.")

# Balance Command
async def balance(update: Update, context: CallbackContext) -> None:
    # Mock wallet balance
    wallet_balance = 120.50  # Replace with real API call for wallet balance
    await update.message.reply_text(f"💰 Your wallet balance is: ${wallet_balance}")

# Transfer Command
async def transfer(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text("To transfer funds, provide the recipient's ID and amount.\n\nExample: /transfer 12345678 50")

# Message Handler
async def handle_message(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text("I didn’t understand that. Use /help for a list of commands.")

# Main Function
async def main():
    # Create the Application and pass the bot's API token
    application = Application.builder().token(config.API_TOKEN).build()

    # Command Handlers
    application.add_handler(CommandHandler("start", start))
    application.add_handler(CommandHandler("help", help_command))
    application.add_handler(CommandHandler("balance", balance))
    application.add_handler(CommandHandler("transfer", transfer))

    # Message Handler
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    # Run the Bot
    await application.run_polling()

# Entry Point
if __name__ == "__main__":
    import asyncio
    # Ensure the event loop is running and run the main function
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())  # This will run the event loop until the bot starts
